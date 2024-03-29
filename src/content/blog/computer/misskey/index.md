---
title: "Misskey + Herokuで個人用SNSを建てる"
pubDate: 2020-04-25T20:37:06+09:00
tags: [
  "computer"
]
toc : true
lang : ja
---

久々に分散型SNSを調べていたら,
[Misskey](https://github.com/syuilo/misskey)なるプラットフォームを見付けた.
Twitterとは別に個人用に使う目的でHerokuに建ててみた.

## 手順

[既にHerokuで動かした人](https://syui.cf/blog/post/2019/04/04/misskey/)がいるが,
1年前頃の記事で現在はデータベースに
`mongodb`ではなく`postgresql`が使われている.
どちらかというと同じ人の[Dolphinを動かしている記事](https://syui.cf/blog/post/2019/11/16/dolphin/)が参考になる.

直接Herokuにデプロイしてもいいが,
ここではGitHubでリポジトリからデプロイするようにする.

### 準備

まずGitHubで
[syuilo/misskey](https://github.com/syuilo/misskey)
をForkする.

そして`git clone`.
`develop`ブランチでは動かなかったので `master`のみを引っ張ってくる.

```bash
git clone -b master git@github.com:(yourname)/misskey.git
cd misskey
```

次にHerokuにアプリケーションを作成.

```bash
heroku create (appname)
# アドオンの追加
heroku addons:create heroku-postgresql:hobby-dev --version=10 -a (appname)
heroku addons:create heroku-redis:hobby-dev -a (appname)
```

Herokuのダッシュボードに行き,
**Deploy** タブから **Deployment method** で
**GitHub** を選択,
下の **App connected to GitHub** でリポジトリを検索して,
**Automatic deploys** で `master` ブランチを選択する.
下の **Enable Automatic Deploys** を押せば,
GitHubに `git push` するだけでHerokuに反映される.

### 環境設定

MisskeyではデータベースなどのURLを
`.config/default.yml`に書く必要があるが,
セキュリティのために`default.yml`の内容を全て環境変数として登録してしまう.

まず,

```bash
heroku config -a (appname)

# postgres://(db_user):(db_pass)@(db_name):(db_port)/(db_pass)
# redis://h:(radis_pass)@(radis_host):(radis_port)
```

こうすることでURL等が取得できる.
これを基に,

```yaml
url: https://(appname).herokuapp.com/
db:
  host: (db_host)
  port: (db_port)
  db: (db_name)
  user: (db_user)
  pass: (db_pass)
  disableCache: true
redis:
  host: (redis_host)
  port: (redis_port)
  pass: (redis_pass)
id: 'aid'
disableHsts: true
clusterLimit: 1
```

`default.yml`の平文を作成する.
他の設定は`.config/example.yml`を参考にする.

これを [Unicode エスケープシーケンス変換ツール](http://www.koikikukan.com/archives/2013/07/01-012345.php)等でエスケープに変換,
Herokuのダッシュボードの**Settings**に行き,
**Config Vars** に`DEFAULT_YML`という名前で登録する.

あとは, `package.json`で以下のように
`node`, `npm`, `yarn`のバージョンを設定する.

```json
{
  "engines": {
    "node": "13.9.0",
    "npm": "6.14.4",
    "yarn": "1.22.4"
  },
}
```

`Procfile`に以下のような`web`dynoを登録する.

```
web: echo -e $DEFAULT_YML > .config/default.yml && NODE_ENV=production npm run init && npm start
```

環境変数から`.config/default.yml`を作成し,
Misskeyを起動させている.

あとはこれを`master`ブランチに`git push`すれば
`https://(appname).herokuapp.com/`にMisskeyが起動する.

```bash
git add .
git commit -m "first commit"
git push
```

## 24時間稼動させ続ける工夫

[Herokuの無料dynoをスリープさせないで24時間稼働させる4つの方法 - Casual Developers Note](https://casualdevelopers.com/tech-tips/how-to-prevent-idling-of-free-dyno-on-heroku/)

この記事にある通り,
課金が怖い場合は[UptimeRobot](https://uptimerobot.com/)で
`GET`を叩きまくればよい.

## 作ったもの

はじめ, Misskeyで一人用インスタンスを建てて動かしていたが,
1日も経たずにHeroku PostgreSQLの無料枠を使い切った.
日曜昼に建てて, 月曜7時の時点で8000/10000行.
長期的な運用は非現実的である.

そこで, 軽量版の[Dolphin](https://github.com/syuilo/dolphin)を使っている.
~~[@ha2@social.blog.xiupos.net](https://social.blog.xiupos.net/@ha2)~~(停止済)

Misskeyの派生であるため, 上と同じ方法で建てられる.
ただし, `.config/default.yml`に以下を追加する必要がある.
Misskeyでインスタンス設定画面から行っていたものと同じである.

```yaml
name: '(your dolphin name)'
maintainerName: '(yourname)'
drive:
  storage: 'fs'
```

~~いつまでもつか試験も兼ねて,
しばらくは運用したいと思う.~~

自分でインスタンスを建てると,
負荷も容量も自分次第,
使い方も自分次第.
技術趣味の名刺として
個人用インスタンスが流行らないだろうか.
