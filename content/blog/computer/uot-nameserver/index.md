---
title : "Ubuntu on Termux : 国内ミラーサーバに変える"
tags : [
  "computer",
  "termux",
  "android",
]
date : "2019-07-21T15:08:23+09:00"
toc : true
---

先日構築した[Ubuntu on Termux](/blog/computer/uot/)で, 
``apt``コマンドの利用リポジトリのサーバを国内のものに変更しようとした際に手こずったのでメモ.
<!--more-->

通常, Ubuntu用のミラーサーバを設定するとき, [ここにあるようなミラーサーバ](https://launchpad.net/ubuntu/+archivemirrors)の中から選択し, ``/etc/apt/sources.list``を編集することで設定をする.   
参考 : [apt-getの利用リポジトリを日本サーバーに変更する - Qiita](https://qiita.com/fkshom/items/53de3a9b9278cd524099)

しかし, Android(正確には使用しているHUAWEI P9 Lite)はARMコアで, Ubuntu on TermuxもARM版Ubuntuであるため, この方法では失敗した(よく考えれば当たり前だったが...)

いろいろと試した結果, 以下の方法を用いることで国内サーバに切り替えることができた.

## 国内サーバへの切り替え

切り替えるサーバはUNIVERSITY OF TOYAMA with Ubuntu Japanese LoCoの[jp.archive.ubuntu.com/](http://jp.archive.ubuntu.com/). [Ubuntu Japanese Local Community Team](https://lists.ubuntu.com/mailman/listinfo/ubuntu-jp)の[このメーリングリストのアーカイブ](https://lists.ubuntu.com/archives/ubuntu-jp/2009-August/002059.html)を参考に, ``/etc/apt/sources.list``を書き直した.

```bash
sudo vim /etc/apt/sources.list

## http://ports.ubuntu.com/ubuntu-ports/を指定してあった部分を以下に書き換え
deb http://jp.archive.ubuntu.com/ports/ bionic main restricted universe multiverse
deb-src http://jp.archive.ubuntu.com/ubuntu/ bionic main restricted universe multiverse
```

これで, 国内ミラーサーバを使った``apt update``や``apt install ~``ができるようになった.
