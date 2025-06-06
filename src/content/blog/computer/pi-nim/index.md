---
title: "Raspberry Pi Zero Wで最新のNim"
pubDate: 2020-05-16T10:04:45+09:00
toc : true
tags : [
  "computer",
  "docker",
]
lang : ja
---

Raspberry Pi Zero W上に[Nim](https://nim-lang.org/)をインストールしようとしたら,
まず[choosenim](https://github.com/dom96/choosenim)は使えない,
[GitHubのNimリポジトリ](https://github.com/nim-lang/Nim)のビルドも失敗する,
`apt install nim`で入るNimはなんと **v0.19.4** !
[nim-lang/csources](https://github.com/nim-lang/csources)
(前リポジトリをコンパイルするための,
C言語で書かれたNim) の **v0.20.0** にすら及ばない.

ここ数年で急成長しているから仕方がないのもあるが,
最新付近のNimを使えないと困ることもあるので,
どうにかインストールする.

## 方法

なんのことはない.
`testing`リリースにnim **v1.2.0** (2020年5月時点) があるので
それを使う.

```bash
sudo echo 'APT::Default-Release "buster";' >> /etc/apt/apt.conf.d/99target
sudo echo "deb http://archive.raspbian.org/raspbian testing main contrib non-free rpi firmware" >> /etc/apt/sources.list
sudo apt-get update
sudo apt-get install -y build-essential/testing nim/testing
```

`build-essential`も`testing`リリースにしないと
依存しているパッケージが上手く噛み合わない.
だから,
実際には下のDockerでどうにかした方がいい.

### Docker

本題はこっち.
こちらの方が自分的には需要がある.
Dockerのインストールは[前回の記事](https://blog.xiupos.net/blog/computer/pi-docker#docker%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)を見てほしい.

使い方としては,
`docker-compose.yml`でビルド用のコンテナを分ける感じだろうか.

```docker
FROM balenalib/rpi-raspbian:buster

RUN echo "deb http://archive.raspbian.org/raspbian testing main" \
    > /etc/apt/sources.list \
  && apt-get update && apt-get install -y \
  build-essential/testing \
  nim/testing \
  && apt-get -y clean \
  && rm -rf /var/lib/apt/lists/*
```
