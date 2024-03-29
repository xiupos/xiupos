---
title : "PIC16F84A : キャラクタLCD"
tags : [
  "electronics",
  "pic16f84a",
]
pubDate : "2018-03-13T16:50:59+09:00"
toc : true
lang : ja
---

勉強中のPIC16F84Aを使って, キャラクタLCDを使ってみた.
使ったキャラクタLCDはSD1602H.

[超小型ＬＣＤキャラクタディスプレイモジュール（１６×２行バックライト緑）: ディスプレイ･表示器 秋月電子通商-電子部品・ネット通販](http://akizukidenshi.com/catalog/g/gP-01675/)

手元にあった[Arduino用のシールド](https://www.amazon.co.jp/exec/obidos/ASIN/B009AQ2FAI/nandemotukuty-22/ref=nosim/)から剥ぎ取ってきた.
バックライトは故障した（させた）ため色は不明...
制御は典型的なキャラクタLCDの制御方式とたぶん同じため,
YMZ294の時よりは簡単に使えた.

![配線の様子](./_1.jpg)

### 配線

| PIC16F84A | Pin |  | Pin | SD1602H |
| :-: | :-: | :-: | :-: | :-: |
| RB0 | 6 |  | 7 | DB0 |
| ... | ... |  | ... | ... |
| RB7 | 13 |  | 14 | DB7 |
| RA0 | 17 |  | 4 | RS |
| RA1 | 18 |  | 5 | R/W |
| RA2 | 1 |  | 6 | E |

※可変抵抗はコントラスト調整用.

### ソースコード
[16F84A+SD1602H](https://gist.github.com/xiupos/8ed5ebd4295027b7969c8a1ca49f7cfc)

![Hello, world!](./_2.jpg)
