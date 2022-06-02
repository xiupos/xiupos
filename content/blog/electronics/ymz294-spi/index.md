---
title : "YMZ294をSPIで制御する"
tags : [
  "electronics",
  "ymz294",
]
date : "2018-12-31T09:08:01+09:00"
toc : true
---

{{< img "ymz294-spi-1.jpg" "" >}}

前に使った[YMZ294](/posts/electronics/ymz294-spi/)が, 
また使おうとするとあの配線をやり直す必要があった.
そこで, 思い切って[SPI](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%AA%E3%82%A2%E3%83%AB%E3%83%BB%E3%83%9A%E3%83%AA%E3%83%95%E3%82%A7%E3%83%A9%E3%83%AB%E3%83%BB%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9)化することで配線の手間を減らし使いやすくしようと思い, やってみた.   
<!--more-->

## 変換アダプタもどき

{{< img "ymz294-spi-2.png" "変換アダプタ" >}}

SPI化には, [シフトレジスタ(74HC595)](http://akizukidenshi.com/catalog/g/gI-08605/)を用いた.
理由は, [前に使ったことがあるから](/posts/pic16f84a/matrix/).
そのまま8ビットバスとSPIマスタの間につなげば使える, と思ったのが, 
どうも書き込みの際の/WR/CSや/A0の扱いが74HC595だけでは上手くいきそうになかったので, 
[PIC12F683](http://akizukidenshi.com/catalog/g/gI-00801/)で制御した.
74HC595がラッチされるのを検知して, /WR/CSをHIGH, LOWする.
PIC12F683の[ソースコード](https://gist.github.com/xiupos/943d75f813021092b6f4207b43e41da1).
A0はマスタ側で直接制御する. ホントはPIC12F683で一緒に制御できれば楽だったんだけど...  

{{< img "ymz294-spi-3.png" "回路図" >}}

[裏面の写真](ymz294-spi-5.jpg)

## 演奏してみた

割とMIDIでYMZ294を制御している方は多い.
中には私と同じようにピン数圧縮してる方もいらっしゃいた
（[YMZ294のMIDI音源化と, YMZのピン数圧縮 | curious4dev](http://curious4dev.mydns.jp/post-1184/)）.
似たようなこと考える人ってやっぱいる.   

ま, ピアノできないからネットで拾ってきたMIDI譜面を流し込むだけ.   

{{< img "ymz294-spi-4.jpg" "Arduinoと接続" >}}


マスタはArduinoを使う. 理由はゴニョゴニョ...
（いつかはPIC18F14K50でMIDIを制御したい今日この頃. ）  
[ソースコード](https://gist.github.com/xiupos/003ec66c355f43848eb86c17d77cc453).
ネットのサンプルコードを組み合わせて適当に作ったので参考にもならないと思う.
（てか書いたの数か月前だから全然覚えていない...）  

MIDIの再生は[Domino](http://takabosoft.com/domino)で, MIDIデータの送信は, 
本当は[Moco](http://morecatlab.akiba.coocan.jp/lab/index.php/aruino/midi-firmware-for-arduino-uno-moco/)を使いたかったけれど, 
どうも前に色々あってArduino UNOのパターンをはがしてしまったようでDFUで認識できず.
かわりに[The Hairless MIDI<->Serial Bridge](http://projectgus.github.io/hairless-midiserial/)を使う.
先人に感謝 ! こちらはシリアル通信でMIDIが使えるため, 互換機でも使える.

で, 以下が演奏してみたもの. 譜面は[かきむき様のもの](http://kakimuki.blog91.fc2.com/blog-entry-6.html)を使わせていただいた.

- **千本桜**
{{< audio "ymz294-spi-1.mp3" >}}

- **Bad Apple!!**
{{< audio "ymz294-spi-2.mp3" >}}

- **Tell Your world**
{{< audio "ymz294-spi-3.mp3" >}}

- **前前前世**
{{< audio "ymz294-spi-4.mp3" >}}

3音でこれだけ鳴ればいい方では？（ポジティブ
