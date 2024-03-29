---
title: "SKK for Androidに諸外国語キーボードを足す"
pubDate: 2020-04-22T15:18:43+09:00
tags: [
  "computer",
  "android",
]
toc : true
lang : ja
---

[海月玲二氏のSKK for Android](http://ray-mizuki.la.coocan.jp/software/skk_jp.html) を,
多言語で入力できるように改変した.

GitHub - [xiupos/android-skk](https://github.com/xiupos/android-skk)

## SKK for Android について

[ニコニコ大百科](https://dic.nicovideo.jp/a/skk)にもあるが, SKKをAndroidに移植した猛者がいる.

[Android向けにSKKを作ってみた - minghaiの日記](https://minghai.hatenadiary.org/entry/20090502/p1)

そして, これを基に日本語フリックキーボードを作った猛者がいる.

[SKK for Android (海月玲二氏)](http://ray-mizuki.la.coocan.jp/software/skk_jp.html)

SKKの機能をのままにフリックキーボードが使え,
またBluetoothキーボードを接続した際に普段通りのSKK入力ができる.
これが大変便利である.

### なぜ改変するか

しかし, Android標準のキーボードである **Gboard** は,
標準が故に多言語での入力を容易に実現できる.
趣味柄, 特殊文字を入力したい場面も多く,
その度にキーボードを切り替えるのが面倒でいつしかSKKから離れていた.

しかし, GboardにもSKKができない以外の欠点がある.
Bluetoothキーボードだと日本語⇔英字の切り替えが上手くできない.
これは極めて重大な問題である.

そこで, SKK for Androidを改変することによって
自分好みのキーボードに仕上げてしまおうと考えた.

## 改変内容

[リポジトリのREADME](https://github.com/xiupos/android-skk/blob/master/README.md)に書いたのでそちらを参照されたい.

## インストール

[Release](https://github.com/xiupos/android-skk/releases)

F-DroidやGoogle Playストアで配信する予定はない.

### 対応端末

動作確認は Huawei P20 (Android 9) で行なっている.
最近のAndroidならば動くんじゃないかな.

### GitHub Actionsによるビルド

[GitHub Actions で Android アプリをビルドして apk ファイルをアップロードする - Qiita](https://qiita.com/hkusu/items/30843c34f569d9a14fef)

このワークフローより,
Lint, Testを省略して導入した.
GitHub Actionsは`git push`するだけでビルドできるので便利.
スマホからでも編集できるので,
このキーボードの使い処ではないだろうか.

## 課題

Android用キーボードの作り方がまだいまいちわからない.
デザインをもっとモダンにしたいができなかった.

あとまだバグがある.
コードを理解しきれてないからでもあるが,
時間があれば0から作り直すべきかもしれない.
