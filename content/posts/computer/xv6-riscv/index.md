---
title: "xv6-riscvをDockerでビルド"
date: 2020-05-09T14:39:56+09:00
toc : true
tags : [
  "computer",
  "docker",
]
---

最近,
気分転換に[xv6](https://ja.wikipedia.org/wiki/Xv6)を読むことを画策している.
せっかくなので手元で動かして様子を見てみたいが,
環境を汚したくないのでDockerを使う.
私は潔癖症である.
<!--more-->

## xv6とは

> **xv6 is a re-implementation of Dennis Ritchie's and Ken Thompson's Unix
Version 6 (v6).**
>
> [README - mit-pdos/xv6-public](https://github.com/mit-pdos/xv6-public/blob/master/README)

簡単に言えば,
MITの教育用超軽量Unix.
ANSI Cで書かれているので,
個人的な勉強にも使える.
私は[CPU実験で実装する記事](http://nullpo-head.hateblo.jp/entry/2015/03/24/205419)を読んでこれを知った.

今回は[RISC-V](https://ja.wikipedia.org/wiki/RISC-V)に移植されたxv6を使う.

[mit-pdos/xv6-riscv: Xv6 for RISC-V](https://github.com/mit-pdos/xv6-riscv/blob/riscv/README)

最近のMITの授業ではこちらが使われているらしい.
楽しそう.

## Dockerでビルド

本家をForkしてDocker関係のファイルを追加した.

[xiupos/xv6-riscv](https://github.com/xiupos/xv6-riscv)

```bash
git clone https://github.com/xiupos/xv6-riscv
cd xv6-riscv
docker-compose build
docker-compose run xv6
# lots of output
init: starting sh
$
```

`docker-compose run xv6`でxv6が起動する.
終わるときは, 端末のタブを閉じれば自動的にコンテナも削除される.

正直, Dockerを使わなくてもビルドは簡単であるが,
RISC-Vのツールチェインをわざわざ用意するのは...
得にMacの人は手数が多いのでなおさら面倒だろう.

以下, 変更点.

### Dockerfile

ビルドについては[授業のページ](https://pdos.csail.mit.edu/6.828/2019/tools.html)が詳しい.

```dockerfile
FROM debian:10.3

RUN apt-get update && apt-get install -y \
  git \
  build-essential \
  gdb-multiarch \
  qemu-system-misc \
  gcc-riscv64-linux-gnu \
  binutils-riscv64-linux-gnu

WORKDIR /xv6
CMD [ "make", "qemu" ]
```

### docker-compose.yml

私は`docker run`コマンドが嫌いなので
`docker-compose.yml`も書く.

```docker-compose.yml
version: "3.8"
services:
  xv6:
    build: .
    container_name: xv6
    volumes:
      - .:/xv6
    working_dir: /xv6
```

これらを`Makefile`と同じフォルダに突っ込んだ.

## デバッグ...?

`make qemu-gdb`でデバッグ環境ができるらしいが,

```bash
make qemu-gdb
*** Now run 'gdb' in another window.
```

と表示されるだけで何も起きない.
端末にHyperを使っているからかもしれないが,
デバッグはまだ必要ないので, そっとしておく.
