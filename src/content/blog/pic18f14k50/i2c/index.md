---
title : "PIC18F14K50 : I2C"
tags : [
  "electronics",
  "pic18f14k50",
]
pubDate : "2019-02-09T20:00:58+09:00"
lang : ja
---

![i2c](./_1.jpg)

PIC18F14K50でI2Cを使ってみた.
その解説を書こうかな...とか思っているうちに10か月経ったので, 言及だけする.
積みマイコンがあったっていいよね.

EEPROM書き出し機を作ってみる.
EEPROMを0番地から順に読み出して,
キャラクタLCD([AQM0802A](http://akizukidenshi.com/catalog/g/gP-06669/))にデータを表示する.
AQM0802Aには, 1行目に読み出すデータのアドレス,
2行目の左側にデータ(16進数), 右側にデータ(文字)される.

[ソースコード](https://gist.github.com/xiupos/7b865db68e9d15b1d27a3270c4b1c031)

配線は, PIC18F14K50ボードの回路図
([この記事の下の方](/blog/pic18f14k50/board/))の,
CN2とU2にそのまま当てはめた感じ.
こう配線が楽になるからマイコンボードを作る.
