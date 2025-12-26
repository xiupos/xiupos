---
title: Misskey を k3s で建てるメモ
author : xiupos
date : \today
pubDate: 2025-12-26T18:30:00+09:00
lang: ja
---

:::adcal

この記事は「[Misskey Advent Calendar 2025](https://adventar.org/calendars/11291)」5日目および「[北大IT研究会 HUIT Advent Calendar 2025](https://adventar.org/calendars/11772)」20日目の記事です.

:::

[Misskey](https://misskey-hub.net/) を [k3s](https://docs.k3s.io/) で建てる際の備忘録. 簡易的な Docker Compose 運用から本格的な k8s クラスタによる運用への橋渡しとして, 軽量な k8s distribution である k3s で構築してみる[^attention].

[^attention]: 作業は全て自己責任でお願いします. 一般的なサーバー管理の注意点に加え, Misskey の管理では以下の点に気をつけて作業しましょう.
    1. 作業前は必ずバックアップを作成する. 特に PostgreSQL データは死守!!
    1. 既に Misskey で使っているドメインで, 別の Misskey, 新しい Misskey を動かさない.
    1. まだ Misskey で使う予定のドメインで 410 を返さない.

### 目次

1. [Docker Compose による構築](#docker-compose-による構築)
1. [k3s による構築](#k3s-による構築)
    1. [k3s のインストール](#k3s-のインストール)
    1. [Ingress (≃リバースプロキシ) について](#ingress-リバースプロキシ-について)
    1. [名前空間](#名前空間)
    1. [PostgreSQL + Redis](#postgresql--redis)
    1. [Misskey 用の default.yml](#misskey-用の-defaultyml)
    1. [Misskey 本体](#misskey-本体)
    1. [Service として登録](#service-として登録)
    1. [Ingress の追加](#ingress-の追加)
1. [運用について](#運用について)

## Docker Compose による構築

2021 年末頃からお一人様 Misskey サーバー (執筆時点では [mk.xiupos.net](https://mk.xiupos.net/)) を運用していて, ずっと [Docker Compose](https://docs.docker.com/compose/) を使っていた. まずは Docker Compose での Misskey の構築手順を簡単にまとめる.

Misskey 本体を動かすのに必要なのは [`compose.yml`](https://github.com/misskey-dev/misskey/blob/master/compose_example.yml), [`.config/docker.env`](https://github.com/misskey-dev/misskey/blob/master/.config/docker_example.env), [`.config/docker.yml`](https://github.com/misskey-dev/misskey/blob/master/.config/docker_example.yml) の 3 ファイルのみ.

```
.config
├── default.yml
└── docker.env
compose.yml
```

`.config/` 以下の設定ファイルは適当に書き直す. また, ソースコード内の `compose_example.yml` はイメージをローカルでビルドするようになっているが, Docker Hub にビルド済みの[公式イメージ](https://hub.docker.com/r/misskey/misskey)があるから, それを使うようにする.

```yaml
# compose.yml
services:
  web:
    # build: .
    image: misskey/misskey:latest # 公式イメージを使うように変更
    restart: always # 以下は変更なし
```

あとは `docker compose up` するだけで[ポート 3000](http://localhost:3000) に Misskey が立ち上がる. 使いたいドメイン宛てのアクセスをリバースプロキシ ([Nginx](https://nginx.org/en/docs/), [Caddy](https://caddyserver.com/docs/), [Traefik](https://doc.traefik.io/traefik/) 等) や [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/) でポート 3000 に向ければ, 実運用できる Misskey の出来上がり. 簡単!

Docker Compose による構築については, Misskey の公式ドキュメントに記載がある. 運用にも目を向けたものとしては, [ちゃんまい氏](https://mq1.dev/)の記事が決定版だと思う.

- [Docker Composeを使ったMisskey構築 | Misskey](https://misskey-hub.net/ja/docs/for-admin/install/guides/docker/) (公式ドキュメント)
- [Misskeyサーバー構築から爆破までのすべて - まいの雑記帳](https://mq1.dev/entry/krpvl5itbr9h) (ちゃんまい氏による解説記事)

## k3s による構築

Docker Compose による構築は簡単で, 4年間の Misskey 運用でも大きなトラブルはなかった. ただ, 複数の Misskey を動かしたり, 他の [self-hosted な Web アプリ](https://github.com/awesome-selfhosted/awesome-selfhosted)を追加で動かそうとすると, 途端に管理が億劫になる. 可用性についてもかなり自由度が少ない. Docker Compose 運用からコンテナオーケストレーションツールの [Kubernetes (k8s)](https://kubernetes.io/) へ移行したくなるのは必然(?).

ただ, お一人様で使うような VPS で k8s を動かすのはスペック的に厳しい. ここでは [k3s](https://k3s.io/) という軽量な k8s distribution を使う.

### k3s のインストール

[公式ドキュメント](https://docs.k3s.io/installation)を参照. Misskey の構築手順自体はシングルノードでもマルチノード[^multi]でもほとんど変わらないと思う. シングルノードでの運用ならば, 以下のコマンドを実行するだけで k3s による k8s クラスタが起動する.

```sh
curl -sfL https://get.k3s.io | sh -s -
```

[^multi]: レトロニム？

以降は [`kubectl`](https://kubernetes.io/ja/docs/reference/kubectl/) を使ってクラスタを操作する. サーバー上で操作してもいいが, `/etc/rancher/k3s/k3s.yaml` を作業マシンに転送して `~/.kube/config` として保存し, 中身の `127.0.0.1` をサーバーの IP アドレスに置換すれば, 手元の作業マシンから `kubectl` で操作できる. これも Docker Compose 運用との大きな違いの一つ.

また k8s クラスタへの設定反映も, 基本的にはマニフェストと呼ばれる yaml を書いて適用する形式になる. たとえば `apps/manifest-01.yml` というファイルに書いてあるマニフェストの作成/変更を反映するには, 次のコマンドを実行する.

```sh
kubectl apply -f apps/manifest-01.yml
```

書いたマニフェストは Git などで管理などすれば再現性を高めることができる. また, 1つの yaml ファイルに複数のマニフェストを連記できるから,「Misskey に関するマニフェストは `misskey.yml`」といった単純な運用ができる.

### Ingress (≃リバースプロキシ) について

リバースプロキシに相当するものは, k8s 語では [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) と言うらしい. k3s では標準で Traefik が Ingress として同梱されている ([参考](https://docs.k3s.io/networking/networking-services#traefik-ingress-controller)). 素の Traefik で `config/dynamic.yml` にまとめて記載するようなルーティングは, k8s ではアプリごとに Ingress に登録できる(後述).

ただ, 複数のアプリで共通するような Ingress の設定は先に設定する必要がある. たとえば DNS に Cloudflare を使っていて, ACME の DNS チャレンジをする場合には, 以下のように certificates resolver を追加する. ちなみに k3s では `HelmChart` や `HelmChartConfig` として Helm の操作もマニフェストとして管理できる ([参考](https://docs.k3s.io/add-ons/helm#using-the-helm-controller)). 便利!

```yaml
# Traefik の設定を更新するマニフェスト
apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: traefik
  namespace: kube-system
spec:
  valuesContent: |-
    # https://github.com/traefik/traefik-helm-chart/blob/master/traefik/VALUES.md

    # 証明書情報を保持するためのストレージ
    persistence:
      enabled: true
      storageClass: local-path
      size: 128Mi
      path: /data

    env:
      - name: CF_DNS_API_TOKEN
        value: aAaAaA-aAaAaAaAa-0123456789qwertyuiopasd
        # https://dash.cloudflare.com/profile/api-tokens から
        # "Zone / Zone / Read" および "Zone / DNS / Edit" の API TOKEN を作成する
        # 参考: https://go-acme.github.io/lego/dns/cloudflare/#api-tokens

    # certificates resolver の定義 (cloudflare)
    certificatesResolvers:
      cloudflare:
        acme:
          email: mail@example.tld
          # ACME で使うメアドに変更
          storage: /data/acme.json
          dnsChallenge:
            provider: cloudflare
            resolvers:
              - "1.1.1.1:53"
```

### 名前空間

Docker Compose において `compose.yml` を分けることによってサービス名などの衝突を避けていたように, k8s では[名前空間 (Namespace)](https://kubernetes.io/ja/docs/concepts/overview/working-with-objects/namespaces/) を作ることでそれを実現できる.

Misskey 用の Namespace を `misskey-(ドメイン名)` とする. コマンド `kubectl create ns` でも作成できるが, 再現性のためにマニフェストで適用する.

```yaml
# Namespace の作成
apiVersion: v1
kind: Namespace
metadata:
  name: misskey-example-tld
```

### PostgreSQL + Redis

Misskey で使う DB の PostgreSQL と Redis を作成する. 前述の通り k3s では `HelmChart` を使うことができるから, [Bitnami の Helm Chart](https://github.com/bitnami/charts) を使ったマニフェストを書く.

Docker Compose による構築の際に `.config/docker.env` で書かれていたパスワード等は, [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) として別に登録することもできるが, ここではマニフェストに直接書くことにする.

```yaml
# PostgreSQL の作成
apiVersion: helm.cattle.io/v1
kind: HelmChart
metadata:
  name: db
  namespace: misskey-example-tld
spec:
  chart: postgresql
  repo: https://charts.bitnami.com/bitnami
  targetNamespace: misskey-example-tld
  valuesContent: |-
    # https://github.com/bitnami/charts/blob/main/bitnami/postgresql/README.md

    primary:
      # Postgres データを保持するためのストレージ
      persistence:
        enabled: true
        storageClass: local-path

    # DBのパスワード等
    auth:
      database: misskey
      username: example-misskey-user
      postgresPassword: example-misskey-pass
      password: example-misskey-pass

---
# Redis の作成
apiVersion: helm.cattle.io/v1
kind: HelmChart
metadata:
  name: redis
  namespace: misskey-example-tld
spec:
  chart: redis
  repo: https://charts.bitnami.com/bitnami
  targetNamespace: misskey-example-tld
  valuesContent: |-
    # https://github.com/bitnami/charts/blob/main/bitnami/redis/README.md

    master:
      # Redis データを保持するためのストレージ
      persistence:
        enabled: true
        storageClass: local-path

    # Redis のパスワード等は設定しない
    auth:
      enabled: false
```

### Misskey 用の default.yml

Misskey の設定ファイル (Docker Compose による構築における `.config/docker.yml`) を [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) として登録する. ちなみに設定変更時は適宜 `kubectl apply` して後述の Misskey 本体を再起動 (`kubectl -n misskey-example-tld rollout restart deployment misskey`) する必要がある.

```yaml
# Misskey の設定ファイルを登録 (default.yml)
apiVersion: v1
kind: ConfigMap
metadata:
  name: misskey-config
  namespace: misskey-example-tld
data:
  default.yml: |
    # https://github.com/misskey-dev/misskey/blob/develop/.config/example.yml

    url: https://example.tld/
    port: 3000

    db:
      host: db.misskey-example-tld.svc.cluster.local
      port: 5432
      db: misskey
      user: example-misskey-user
      pass: example-misskey-pass

    dbReplications: false

    redis:
      host: redis-master.misskey-example-tld.svc.cluster.local
      port: 6379

    fulltextSearch:
      provider: sqlLike

    id: 'aidx'

    proxyBypassHosts:
      - api.deepl.com
      - api-free.deepl.com
      - www.recaptcha.net
      - hcaptcha.com
      - challenges.cloudflare.com
```

### Misskey 本体

Misskey 本体を[デプロイ (Deployment)](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) する. Misskey 本体のコンテナで, 先に登録しておいた設定ファイルを configMap からマウントしてから起動する. ここら辺は `compose.yml` と似ている.

また, Misskey 起動時に DB が起動していないとエラーになってしまうので, Misskey に先立つコンテナ (`initContainers`) で DB が起動するまで待つ処理を書く.

```yaml
# Misskey 本体をデプロイ
apiVersion: apps/v1
kind: Deployment
metadata:
  name: misskey
  namespace: misskey-example-tld
spec:
  replicas: 1
  selector:
    matchLabels:
      app: misskey
  template:
    metadata:
      labels:
        app: misskey
    spec:
      initContainers:
        # DB が起動するまで待つ
        - name: wait-for-dependencies
          image: busybox:1
          command: ["sh", "-c"]
          args:
            - | #sh
              until nc -z -v -w 2 db.misskey-example-tld.svc.cluster.local 5432; do sleep 2; done
              until nc -z -v -w 2 redis-master.misskey-example-tld.svc.cluster.local 6379; do sleep 2; done

      # Misskey 本体
      containers:
        - name: misskey
          image: misskey/misskey:latest
          ports:
            - containerPort: 3000
          volumeMounts:
            # default.yml をマウント
            - name: config
              mountPath: /misskey/.config/default.yml
              subPath: default.yml

      volumes:
        - name: config
          configMap:
            name: misskey-config
```

### Service として登録

作成した Misskey の Deployment を [Service](https://kubernetes.io/docs/concepts/services-networking/service/) として登録する. これによってクラスタ内からポート 3000 で Misskey にアクセスできるようになる.

```yaml
# Misskey を Service として登録
apiVersion: v1
kind: Service
metadata:
  name: misskey
  namespace: misskey-example-tld
spec:
  selector:
    app: misskey
  ports:
    # Misskey をポート 3000 に接続
    - port: 3000
      targetPort: 3000
```

### Ingress の追加

あとは Ingress でドメインをポート 3000 に向けるだけ. k8s では Ingress の設定も Misskey 用の名前空間で登録できる. たとえば, Ingress として k3s 標準の Traefik を使い, また certificates resolver に Cloudflare を使う場合は, 以下のように登録できる.

```yaml
# Ingress の設定
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: misskey-ingress
  namespace: misskey-example-tld
  annotations:
    traefik.ingress.kubernetes.io/router.entrypoints: websecure
    traefik.ingress.kubernetes.io/router.tls: "true"
    # ACME の DNS チャレンジを Cloudflare でする場合 (先に登録した certresolver を指定)
    traefik.ingress.kubernetes.io/router.tls.certresolver: cloudflare
spec:
  rules:
    # example.tld 宛てのアクセスをローカルのポート 3000 に向ける
    - host: example.tld
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: misskey
                port:
                  number: 3000
```

## 運用について

この記事は k3s で Misskey を構築する最低限の手順の備忘録であって, 実運用におけるノウハウについては省く[^iiwake]. たとえば DB バックアップの有無は Misskey サーバーの寿命を大きく左右するから, [CronJob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/) を使って定期的に S3 にアップロードする処理などを書く必要がありそう. また, k8s の良さを引き出すにはマルチノード構成にしたり [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/) を適切に設定したりしなければならない.

[^iiwake]: というか自分もまだわかってない. 鯖缶の先輩方, k8s 運用に関するノウハウ記事をお待ちしております!

k8s とは直接関係ない Misskey 自体の運用方法については, 前述の[ちゃんまい氏による解説記事](https://mq1.dev/entry/krpvl5itbr9h)がとても参考になる. また, 困ったことがあれば Misskey (Fediverse) 上で質問すれば野良の鯖缶が答えてくれるかもしれない.

Docker Compose 運用から k8s 運用に移行するハードルがとにかく高いから, この記事がその取っ掛かりになればうれしい.
