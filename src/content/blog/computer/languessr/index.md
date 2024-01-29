---
title: "Wikipedia 記事の要約の表記言語を当てるゲーム「Languessr」"
pubDate: 2023-09-24T01:00:00+09:00
lang: ja
---

[GeoGuessr](https://www.geoguessr.com/) の Country Steak を言語当てゲームとして遊んでいたが,
それ単体であればいいなと思ったので, 作った.

### 作ったもの

[📖 Languessr - languessr.xiupos.net](https://languessr.xiupos.net/)

![Languessr](./_1.png)

GitHub: [xiupos/languessr](https://github.com/xiupos/languessr)

### 遊び方

ランダムで表示されるカードを読み, その表示言語を選択して **GUESS** !

### 技術的な話

実装には [Svelte](https://svelte.dev/) を使っている.
最近 Svelte を書いた経験があり,
そのため思い立ってすぐ実装することができた.
すこし成長を感じる.
デザイン面は [Pico.css](https://picocss.com/) にすべて頼っている.
とてもよい.

### これから

UI やバグなどは適宜修正している.
GeoGuessr のような「距離」の概念をいれてはどうかと意見をいただいた.
正直難しいと思う.
しばらくは今のままでいくが,
何か良いアイデアがあれば考えたい.
他にもご意見 issues 大募集中.

スコアやタイムなど結果表示されるので RTA していただけると嬉しい.
攻略情報などください.
