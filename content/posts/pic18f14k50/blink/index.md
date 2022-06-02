---
title : "PIC18F14K50 : Lチカ"
tags : [
  "electronics",
  "pic18f14k50",
  "blink-helloworld",
]
date : "2018-04-30T08:35:33+09:00"
toc : true
---

始めたばかりのPIC18F14K50で定番のLチカしてみる.   

<!--more-->

Arduino経験者としては, Lチカといったら`delay`関数の一択.
しかし, PICのC言語についてくる`__delay_ms()`, `__delay_us()`の元となってる
`_delay()`は[インライン関数](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E9%96%A2%E6%95%B0)で
あるため引数に変数を使えないとか, 
指定する数値に上限があるとか, 
色々使いにくいため, 使いやすいように工夫する.
といっても, ただ`while`文を使うだけだが...   

```c
// delay関数
void delay(int num)
{
    while(--num > 0) __delay_us(1000);
}
```

あと, `__delay_ms()`, `__delay_us()`を使うときは, 

```c
#define _XTAL_FREQ  48000000
```

のように, クロック周波数を定義してあげる必要がある. この例では[12MHzのセラミック発振子](http://akizukidenshi.com/catalog/g/gP-02740/)を4xPLLして48MHz(最大クロック)としている.

ソースコード全体は[こちら](https://gist.github.com/xiupos/76f57229bf9200c05c2cab816442247f).

### ついでに

予定ではTimer0,1,2を使ったLチカも書くつもりだったのが, [ソースコード](https://gist.github.com/xiupos/d74930f41ea1c25548fe041289cab217)だけGistに置いておく. 参考にどうぞ.   
