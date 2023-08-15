---
title: "Pi Zero W + Git + Docker で簡単なデプロイ環境を作る"
pubDate: 2020-05-14T13:01:47+09:00
toc : true
tags : [
  "computer",
  "docker",
]
lang : ja
---

約1年前に[Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/)を買ったが,
ラズパイの環境構築は小さい分, 汚れ易い.
そこで, ローカルで開発し`git push`だけでデプロイできる
[heroku](https://blog.xiupos.net/heroku.com)のような環境を構築した.
私は潔癖症である.

## 目次

1. [作ったもの](#%E4%BD%9C%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE)
    1. [構成イメージ](#%E6%A7%8B%E6%88%90%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8)
    1. [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
1. [インストール](#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [Raspberry Pi OSのインストール](#raspberry-pi-os%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [Dockerのインストール](#docker%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [Docker Composeのインストール](#docker-compose%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [Gitのインストール](#git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
    1. [gitユーザーの作成](#git%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90)
    1. [pihubのインストール](#pihub%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
1. [Hello, World!](#hello-world)
1. [Lチカ](#l%E3%83%81%E3%82%AB)
1. [参考](#%E5%8F%82%E8%80%83)

## 作ったもの

**pihub** という管理ツールをNimで作った.

GitHub - [xiupos/pihub](https://github.com/xiupos/pihub)

イメージは, `heroku`コマンドのようなもの.
ただし, 実行は全て`docker-compose up`で行うため,
機能は[GitLab CI/CD](https://docs.gitlab.com/ee/ci/)の方が近い.
(Zero以外のラズパイだったら
[GitLab](https://about.gitlab.com/)を載せるのもアリだと思う.)
もっとも,
`pihub`はインフラ系の運用だけでなく
GPIOを弄るようなハードウェア制御も想定している.

### 構成イメージ

```
+----------Raspberry Pi Zero W-----------+
| +--Remote--+    +-----Production-----+ |
| |          |pull|     +-Container-+  | |
| |   (2)    |===>| (3) |    (4)    |  | |
| |          |    |     +===========+  | |
| +====/\====+    +====================+ |
+======||================================+
       || push
  +--Local---+    $ pihub create repo
  |   (1)    |    で, この構成が作られる.
  +==========+

(1) ローカルリポジトリ, ここで開発
(2) リモートリポジトリ, ここにpush
(3) 本番環境, (2)へのpush後に自動的にpull
(4) デプロイ環境(コンテナ), (3)のpull後に走る
```

### 使い方

`pihub`はラズパイ上のツールであり,
ローカルからはSSH経由で操作する.
ただし, `alias`で登録をするとローカルでも
同様に操作ができる.

以下, ホスト名は`raspberrypi.local`とする.

#### リポジトリの作成

`repo_name`はリポジトリの名前.
**末尾に`.git`を含めてはいけない.**

```bash
pihub create repo_name
```

これで`git@raspberrypi.local:repo_name.git`にリポジトリが,
`/home/git/prod/repo_name`に本番環境ができる.

#### リポジトリ一覧の表示

```bash
pihub list
# repo_name.git
# repo_another.git
# ...
```

#### デプロイ

```bash
git remote add pi git@raspberrypi.local:repo_name.git
git push pi master
```

リモートに登録し, `git push`をすれば
`docker-compose up -d`が走る.

#### リポジトリの削除

`create`と同様に,
**末尾に`.git`を含めてはいけない.**

```bash
pihub delete repo_name
```

これで`git@raspberrypi.local:repo_name.git`と
`/home/git/prod/repo_name`が削除される
(同時に`docker-compose down --rmi all`も実行される).

#### 無い機能

- `git push`以外で`docker-compose up`をする
- `docker-compose stop`など停止系, 削除系
- デプロイなしで, テストできたら楽しそう

## インストール

必要なもの

- Raspbian on Raspberry Pi Zero W
  Zero W以外では試していない (というか持っていない).
- git
- docker
- docker-compose

また, `git`ユーザーを作成する.

### Raspberry Pi OSのインストール

日本語情報は既に大量にあるので,
ここでは簡単に.

[公式サイト](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit)より
Raspberry Pi OSのイメージをダウンロードして解凍.
Zeroなのでlite版で十分.

```bash
# SDカードへの書き込み
sudo dd bs=4M if=path/to/image.img of=/dev/sdb conv=fsync
```

(`/dev/sdb`の部分は環境に合うよう書き直す.)

SDカードに書き込んだらSDカードの`boot`パーティションをマウントし,
`boot`内で以下を実行,
USB経由でSSH接続できるように設定する.

```bash
touch ssh # SSH有効化
echo "dtoverlay=dwc2" >> config.txt
vim cmdline.txt
# modules-load=dwc2,g_ether を rootwait の直後に追加
# See also http://blog.gbaman.info/?p=791
```

SDカードをアンマウントしてZero Wに挿入すれば
Raspbianが起動する.

```bash
ssh pi@raspberrypi.local
# Pass: raspberry
```

でSSH接続できるはずだが,
自分の環境では
ネット設定の有線接続1の IPv4 の Method を
**Link-Local Only** に変更する必要があった.

SSH接続したら,
初期設定やら更新やらをする.

```bash
# Password, Host, Wi-Fi などの設定
sudo raspi-config

# Packages と OS のアップグレード
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y

# Farmware のアップグレード
sudo rpi-update
sudo reboot # 再起動
```

適宜, SSH接続の設定などもする.

### Dockerのインストール

```bash
# Docker のインストール
curl -sSL https://get.docker.com/ | sh
```

### Docker Composeのインストール

Armでは公式サイトの方法は使えないので,
`pip`でインストールをする.

```bash
# pip のインストール
sudo apt-get install -y build-essential python3-distutils
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && sudo python3 get-pip.py

# Docker Compose のインストール
sudo pip install docker-compose
```

`python3-distutils`は`pip`のインストールに必要らしいのでいれておく.

### Gitのインストール

```bash
sudo apt install -y git
```

### gitユーザーの作成

`pihub`を扱うユーザーを作る.
要するにいわゆるGitサーバー用のユーザー.

```bash
sudo adduser git

# "docker" グループにユーザーを追加
sudo usermod -aG docker git
```

`docker`コマンドを扱うために,
`docker`グループにユーザーを登録する.

### pihubのインストール

GitHub - [xiupos/pihub](https://github.com/xiupos/pihub)

```bash
git clone https://github.com/xiupos/pihub.git ~/.pihub
cd ~/.pihub
docker-compose up # Dockerでビルド

# PATHを通す
echo "export PATH=$PATH:$HOME/.pihub/bin" >> ~/.bashrc
source ~/.bashrc
```

インストールは`nimble install`でできるが,
Nim環境の需要はそんなにないと思うので
Dockerでビルドさせている.
([balenalib/rpi-raspbian](https://hub.docker.com/r/balenalib/rpi-raspbian)
イメージを使っている.)

ちなみにこれも`pihub`で開発した.

#### SSH経由で操作するためのalias

```bash
# Local PC (Debian など)
echo "alias pihub='ssh git@raspberrypi.local /home/git/.pihub/bin/pihub'" >> ~/.bashrc
source ~/.bashrc
```

Windowsで登録する方法は知らない.

## Hello, World!

お約束. コンソールではつまらないので`nginx`を使う.

GitHub - [xiupos/pidocker-server](https://github.com/xiupos/pidocker-server)

```bash
# Local PC
git clone https://github.com/xiupos/pidocker-server.git
cd pidocker-server
pihub create hello # リポジトリの作成
git remote add pi git@raspberrypi.local:hello.git
git push pi master # デプロイ 初回は時間がかかる
```

[http://rasberrypi.local:8080/](http://rasberrypi.local:8080/)にアクセスすると
**Hello, world!** が表示される.

## Lチカ

GPIOを弄らなきゃラズパイじゃない !

GitHub - [xiupos/pidocker-blink](https://github.com/xiupos/pidocker-blink)

```bash
git clone https://github.com/xiupos/pidocker-blink.git
cd pidocker-blink
pihub create blink # リポジトリの作成
git remote add pi git@raspberrypi.local:blink.git
git push pi master # デプロイ
```

接続はこんな感じ.

img "https://blog.alexellis.io/content/images/2016/08/Screen-Shot-2016-08-20-at-09-40-46-1.png" ""

画像の引用元: [Get Started with Docker 1.12 on Raspberry Pi](https://blog.alexellis.io/getting-started-with-docker-on-raspberry-pi/)

ずっとチカチカしてるとコンテナが開きっぱになるので,
10回で停止するようにしている.

## 参考

#### Raspbian初期設定とか

- [Raspberry Pi ZeroをUSBケーブル1本で遊ぶ | Japanese Raspberry Pi Users Group](https://www.raspi.jp/2016/07/pizero-usb-otg/)

- [Raspberry Pi Zero – Programming over USB! (Part 2) | Andrew's blog](http://blog.gbaman.info/?p=791)

#### Docker on Raspberry Pi

- [Raspberry PiにDockerを入れる - Qiita](https://qiita.com/hisurga/items/7aca7484ac5bfd084294)

- [Docker on Raspberry PiのインストールとLチカ - Qiita](https://qiita.com/ykshr/items/c78eb72e3ee75664a5fe)

- [Docker comes to Raspberry Pi - Raspberry Pi](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)

#### Docker Compose on Raspberry Pi

- [Install Docker and Docker-Compose on your Raspberry Pi - Jonathan Meier](https://jonathanmeier.io/install-docker-and-docker-compose-raspberry-pi/)

#### Gitサーバー

- [gitでシンプルなデプロイ環境を作る - Qiita](https://qiita.com/zaburo/items/8886be1a733aaf581045)

- [gitを使ったデプロイ方法 - Qiita](https://qiita.com/__mick/items/1f73fcb0d5dc7f5982f4)

- [Gitで基本的なデプロイ（push、pullで本番公開）環境を作る手順解説 | エス技研](https://blog.s-giken.net/343.html)

- [git pushで本番環境に"自動デプロイ"できる環境を作ってみよう！ | vdeep](http://vdeep.net/git-push-deploy)

#### Nginx構築

- [Debian 9 (Stretch) - Web サーバ Nginx 構築（Nginx 公式リポジトリ使用）！ - mk-mode BLOG](https://www.mk-mode.com/blog/2017/09/16/debian-9-nginx-installation-by-official-apt/)

#### Lチカ

- [Docker on Raspberry PiのインストールとLチカ - Qiita](https://qiita.com/ykshr/items/c78eb72e3ee75664a5fe)

- [Get Started with Docker 1.12 on Raspberry Pi](https://blog.alexellis.io/getting-started-with-docker-on-raspberry-pi/)
