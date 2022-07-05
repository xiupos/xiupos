---
title : "ESP8266 : 二進数時計"
tags : [
  "electronics",
  "esp8266",
  "matrix-led",
]
date : "2020-02-24T09:40:15+09:00"
toc : true
---

{{< img "bin-clock-1.jpg" "" >}}

ESP-WROOM-02でのハードの制御の練習に, 
二進数時計を作ってみた.

<!--more-->


前に作成した
[マトリクスLEDのボード](/blog/pic16f84a/matrix/)は
シフトレジスタに74HC595を使っているため, 
Arduino IDEの`SPI.h`で簡単に制御することができる.
それと, Wi-Fiによって時間を[NTP](https://ja.wikipedia.org/wiki/Network_Time_Protocol)より取得し, 
時間をそのままマトリクスLEDに直接表示させてば二進数時計の完成.

### ソースコード

```c
#include <ESP8266WiFi.h>
#include <time.h>
#include <SPI.h>

#define JST   3600*9
#define SS  5
#define MSEC2CLOCK(ms)  (ms * 80000L)

const char* wifi_ssid = "your_ssid";
const char* wifi_pwd = "your_password";

time_t t;
struct tm *tm;

uint8_t matrix[8];
uint8_t mat_addr = 0;

// Timer0の割り込み
void timer0_ISR (void) {
  // Timer0を再設定
  timer0_write(ESP.getCycleCount() + MSEC2CLOCK(3));

  // 配列matrixを1行だけ出力
  digitalWrite(SS, LOW);
  SPI.transfer(matrix[mat_addr]);
  SPI.transfer(1 << (7 - mat_addr));
  digitalWrite(SS, HIGH);

  // 次の行へ
  if (mat_addr < 7) mat_addr++;
  else mat_addr = 0;
}

// 時間情報の更新
void time_update() {
  t = time(NULL);
  tm = localtime(&t);

  matrix[0] = ((tm->tm_year+1900) & 0xff00) >> 8;
  matrix[1] = (tm->tm_year+1900) & 0xff;
  matrix[2] = tm->tm_mon+1;
  matrix[3] = tm->tm_mday;
  matrix[5] = tm->tm_hour;
  matrix[6] = tm->tm_min;
  matrix[7] = tm->tm_sec;
}

void setup() {
  // Wi-Fi接続
  WiFi.begin(wifi_ssid, wifi_pwd);
  while(WiFi.status() != WL_CONNECTED)delay(500);

  // NTP接続先の設定
  configTime( JST, 0, "ntp.jst.mfeed.ad.jp", "ntp.nict.jp");

  // マトリクスLED設定
  SPI.begin();
  pinMode(SS, OUTPUT);
  digitalWrite(SS, HIGH);
  noInterrupts();
  timer0_isr_init();
  timer0_attachInterrupt(timer0_ISR);
  timer0_write(ESP.getCycleCount() + MSEC2CLOCK(3));
  interrupts();
}

void loop() {
  //1秒に1回, 時間情報の更新
  time_update();
  delay(1000);
}
```

ESP8266によるNTPの設定は想像以上に簡単.
[こちら](https://qiita.com/h_nari/items/d0374d1e1e36b9d988c0)のサイトを参考にした.
マトリクスLEDは`timer0`を使って3msごとに1行ずつ表示する.
前に[PIC16F84Aで扱ったとき](/blog/pic16f84a/matrix/)の方法と同じ.
`timer0`については[こちら](https://lipoyang.hatenablog.com/entry/20161205/p1)を参考にした.

年は2020で8bitでは表示しきれないので, 
2行に分けて16bitで表示した.

### 動いているところ

で, 動いている様子はこんな感じ.

{{< video "bin-clock-1.mp4" loop >}}

どうも, たまに静止する.
割り込み処理が上手くいってないかもしれない.
`timer0`に関して, アセンブリ方面から攻める必要がありそう.
