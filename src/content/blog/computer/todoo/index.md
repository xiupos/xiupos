---
title : "量で見るTODOリスト"
tags : [
  "computer",
  "nodejs",
  "vuejs",
]
pubDate : "2020-01-02T17:20:40+09:00"
toc : true
lang : ja
---

最近, やる事が多くなってきたので, 管理のためにTODOリストを作った.

## 作ったもの

[TODOO - todoo.xiupos.net](https://todoo.xiupos.net/)

![スクリーンショット](./_1.png)

リポジトリ : [xiupos/todoo](https://github.com/xiupos/todoo)

### 使い方

#### タスクの作成

1. 左のテキストボックスにタスクの名前をいれる.   
(ここで長すぎると, レイアウトが崩れる. 短かく, 端的に)

1. 中央のテキストボックスにページ数や工程数などの「量」をいれる.   
(完了するまでタスクは削除できないので, 現実的な量にしましょ)

1. 右のボタンをおして作成!

#### タスクの完了

1. タスクの右側のボタンで完了数の増減ができる.

#### タスクの削除

1. 完了したものだけを一番下のボタンで消せる.

### 保存の仕方

[LocalStorage](https://www.w3schools.com/html/html5_webstorage.asp)を使って自動的にローカルに保存される.   
なので, 他人にTODOOを覗き見られることはない.


## 特徴

タイトルにあるように, TODOOでは量で達成度を管理する.

これによって, 「何を**どれだけ**やるべきか」「何を**どこまで**やったのか」が明確になる. そして, 達成度がメーターでわかるので, 達成感が直感的に得られる.

## どうやって作ったか

[Vue.js](https://vuejs.org/)で作った. 作ったというか, システムはほとんど下のQiita記事のもの. デザインはちょっと工夫して使いやすくしてみた.

コードは[リポジトリ](https://github.com/xiupos/todoo)にある.

## 参考

[Vue.jsミニハンズオン（TODOリスト作成） - Qiita](https://qiita.com/moonglows76/items/358ef3cd1566c38ece3a)
