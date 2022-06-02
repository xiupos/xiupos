---
title : "ESP8266 : ArduinoOTAで無線書き込み"
tags : [
  "electronics",
  "esp8266",
]
date : "2020-03-17T16:08:03+09:00"
toc : true
---

Wi-Fiが使えるマイコンで, 
一度はやってみたかった**無線書き込み**.  
気になって調べてみたら, 
想像以上に簡単だった.

<!--more-->


## ArduinoOTAとは

ArduinoOTAは
[Arduino IDE](https://www.arduino.cc/en/main/software)に
標準で附属するライブラリで, 
このライブラリのスケッチが書き込まれているESP8266などのボードに
ネットワーク経由でスケッチを書き込むことができる.
OTAは**O**ver **t**he **A**irの略だそう.
そのまんま.

一応, ArduinoOTAの恩恵を受けるには
[Python 2.7](https://www.python.org/)が必要だそう.
`python2`が使えないときは
`pyenv install 2.7.17`とかする.
ここでは説明を省く.


## BasicOTAの書き込み

標準ライブラリなのでサンプルスケッチがある.

**File** > **Examples** > **ArduinoOTA** > **BasicOTA**

これを書き込めば次回のスケッチは
ネット経由で書き込むことができるようになるの. が, 
ESP8266を1つしか使わないのであれば
シリアルモニタを使わずともIPアドレスがわかるので, 
シリアル通信を除いた最低限のスケッチが以下.

```c
#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
#include <WiFiUdp.h>
#include <ArduinoOTA.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.waitForConnectResult() != WL_CONNECTED) {
    delay(5000);
    ESP.restart();
  }
  ArduinoOTA.onStart([]() {
    String type;
    if (ArduinoOTA.getCommand() == U_FLASH) {
      type = "sketch";
    } else { // U_FS
      type = "filesystem";
    }
  });
  ArduinoOTA.begin();

  // setup()に書きたいことはここ
}

void loop() {
  ArduinoOTA.handle();

  // loop()に書きたいことはここ
}
```

これを書き込むと, 
**Tools** > **Port: ~**に
`ESP8266-xxxxxx at 192.168.x.xx`
のようにIPアドレス付きのPortが出現する.
これを選択することで, 
次回はネット経由で書き込みすることができるようになる.

なお, 書き込みが終了してから
実行されるまでに, 10秒くらい時間がかかる.
ドキドキしながら待つ.

これを毎回スケッチに潜ませれば, 
スケッチをOver the Airし続けられる.
潜ませるのを忘れると, 
またPCとケーブルで接続しなきゃいけないので, 
注意が必要.

## PlatformIOで使う

[公式のドキュメント](https://docs.platformio.org/en/latest/platforms/espressif8266.html#over-the-air-ota-update)
にあるように, 
PlatformIOでの書き込みでも
AruduinoOTA経由で書き込める.
ただし, **こちらはIPアドレスの確認が必須**.
ArduinoIDEのPortに表示されるIPアドレスを
メモしておく.

あとは簡単, 
PratformIOのプロジェクトフォルダにある
`platfirmio.ini`に
次の2行を追加するだけ.

```
upload_protocol = espota
upload_port = 192.168.x.xx
```

これで書き込めば, 自動的に
ArduinoOTA経由で書き込んでくれる.
便利な世の中.

### PlatformIOとは

そういえば, 脈略もなく[PlatformIO](https://platformio.org/)を登場させていた.
PlatformIOは組み込み系のための強力な拡張機能.
てか, もはや統合開発環境.
Arduino IDEとかいう軟弱なエディタではなく, 
[VSCode](https://code.visualstudio.com/)とかで開発ができる.
しかも, Arduino言語でも使える.
Arduinoを使いたくない理由の半分をこいつが解決してくれた.

インストールは普通の拡張機能と同じなので説明は省く.
以下のQiita記事を参考にされたい.
[マイコン開発するならPlatformIOがめちゃくちゃいいぞ - Qiita](https://qiita.com/JotaroS/items/1930f156aab953194c9a)  
