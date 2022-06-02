---
title : "PIC16F84A : 音源IC(YMZ294)を鳴らす"
tags : [
  "electronics",
  "ymz294",
  "pic16f84a",
]
date : "2018-02-06T10:59:43+09:00"
toc : true
---

新しいマイコンを始めるとき, まずは[Lチカ](http://dic.nicovideo.jp/a/l%E3%83%81%E3%82%AB)をするのが世の常であるが, 思い切ってYMZ294を鳴らしてみた.   
<!--more-->

といっても, 基本的には秋月のデータシートに載ってたコードを参考にしているので, Lチカより簡単な気がするが...

## YMZ294ボードを作る

いちいちブレッドボードで回路を組むのは嫌いなので, 
例の如くまたユニ基板に回路を載せた.

### YMZ294本体

{{< img "ymz294-1.jpg" "YMZ294" >}}

YMZ294はヤマハ製の, 「PSG」という種類の音源IC. 秋月で300円.   
ファミコンに搭載されていた音源ICもPSGらしく, 似た音が出る.   
詳しくは↓  
[Programmable Sound Generator - Wikipedia](https://ja.wikipedia.org/wiki/Programmable_Sound_Generator)

秋月電子通商の商品ページ（データシート有り）↓
[ヤマハ音源ＩＣ（ＹＭＺ２９４）: 半導体 秋月電子通商-電子部品・ネット通販](http://akizukidenshi.com/catalog/g/gI-12141/)

### 発振器

{{< img "ymz294-2.jpg" "4MHzクリスタルオシレータ" >}}

YMZ294を動作させるには発信回路が必要.   
私がICを買った時は4MHzのクリスタルオシレータが付属していた.   
現在は付属していないようね... [水晶発振子](http://akizukidenshi.com/catalog/g/gP-08665/)で発信回路を組む必要があるよう.   
もっと買っておけば良かった...   

今回は付属していた4MHzのクリスタルオシレータを使用する.   

{{< img "ymz294-3.png" "クリスタルオシレータ ピン配置図" >}}

### 配線

{{< img "ymz294-4.jpg" "" >}}

制御用のピンはL型にして, 隣の基板とつなげられるようにしてみた.   
そのせいでマイコンとの接続は面倒になったが...   
出力のミニジャックは手元にあったものを使った.   
LEDは電源確認用.   

{{< img "ymz294-5.jpg" "裏面" >}}

{{< img "ymz294-6.png" "回路図" >}}
上はPIC16F84Aとの接続の回路図.

## 鳴らす

YMZ294を買ったときについてきたデータシートに16F84A用のサンプルが載っていたので, それを基にいくつか鳴らしてみた.


### 喜びの歌

和音のテスト.   
2チャンネルしか使ってないのに他の音が聞こえる. 倍音かな...？  
コード : [16F84A+YMZ294（喜びの歌）](https://gist.github.com/xiupos/a4c3d3396ceaa2aeb02f63ac9f5ae67f)

{{< video "ymz294-1.mp4" >}}


### きらきら星（エンベロープ使用）
エンベロープで減衰をしてみた. エンベロープ周波数は適当.   
コード : [16F84A+YMZ294（きらきら星, エンベロープ）](https://gist.github.com/xiupos/ef6cd501f81ce69d553674f23d50f842)

{{< video "ymz294-2.mp4" >}}


### ドラム風（エンベロープ使用）
ドラムっぽくなったかな...？  
コード : [16F84A+YMZ294（ドラム風, エンベロープ）](https://gist.github.com/xiupos/70c8780308edc1861a601429b6e207fe)

{{< video "ymz294-3.mp4" >}}


<追記>  
YMZ294のMIDI音源化みたいなことした↓


[YMZ294をSPIで制御する - NOMBIRIdoryoku](/posts/electronics/ymz294-spi/)
