---
title : "簡易正弦波ジェネレータ"
tags : [
  "electronics",
]
pubDate : "2018-07-15T12:58:06+09:00"
toc : true
lang : ja
---

![簡易正弦波ジェネレータ](./_1.jpg)

アナログ回路の勉強をするために,
簡易的な正弦波ジェネレータを作った.
市販のファンクションジェネレータは高い.

## とても大雑把な仕様

電源は±9V（006P型など）, 出力は正弦波(1kHz前後)のみとする. 出力インピーダンスはよくわからないので出たとこ勝負とする.

## 回路図

![回路図 (パスコンなどは省略)](./_2.png)

ネットでサーフィンしてたら見つけた[ウィーン・ブリッジ回路](https://www.weblio.jp/content/%E3%82%A6%E3%82%A3%E3%83%BC%E3%83%B3%E3%83%BB%E3%83%96%E3%83%AA%E3%83%83%E3%82%B8%E7%99%BA%E6%8C%AF%E5%9B%9E%E8%B7%AF)を使用する.
周波数を決めるフィルタのR1・R2, 増幅率を決めるR4には半固定抵抗器を直列して,
回路定数をごまかした. いつか周波数カウンタ作った時に調整できるようにするためのつもり.
ジャンパピンはフィルタの固定抵抗器の両端を短絡させることでより高い周波数
（理論上は無限）まで設定できるようにするためのもの.
オペアンプは家にあったものを使った. NJM1458Dである理由は特にない.
（昔, 某公立高専の体験授業でいただいた代物. **タダほど高いものはない**. ）

## 完成したもの

![オシロスコープでみてみる](./_3.jpg)

下の[45基板](http://akizukidenshi.com/catalog/g/gP-11735/)が製作した簡易正弦波ジェネレータ. 結構きれいな正弦波出てるでしょ?（下部のクリップは半固定抵抗器をぐりぐり回すともっとマシになった. ）完全な正弦波ではないが, 趣味のレベルならこの程度で良いと思っている. そもそも測定するための[オシロ](http://akizukidenshi.com/catalog/g/gK-09710/)が(ry