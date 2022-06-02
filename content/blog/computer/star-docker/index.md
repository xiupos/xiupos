---
title: "すたーしゅーたー&すたーらいなーRevivalをDockerで動かす"
tags : [
  "computer",
  "docker",
]
date: 2021-02-28T06:16:15Z
toc : true
math: false
tikz: false
---

先日, くろば・U先生の
[すたーしゅーたー&すたーらいなーのローカル版](http://www.dokidokivisual.com/magic_of_stella/ss_sn_revival.php)
が公開された.
この機会に久しぶりにプレイを, と思ったら,
Windows版とMac版しかない.
だが, よくあることなので怒ったりはしない.
[VMを起動する手](https://blog.xiupos.net/posts/computer/win10-vm-archlinux/)もあるが,
この程度ならDocker上のWineで動く.

## プレイ方法

GitHub: [xiupos/star-docker](https://github.com/xiupos/star-docker)

Linuxでの起動しか想定していない.
WindowsやMacをもっているなら, 普通に起動するべし.

### すたーしゅーたーのプレイ
```bash
git clone https://github.com/xiupos/star-docker.git
cd star-docker
docker-compose -f docker-compose.shooter.yml up
```
始めに**Mono**と**Gecko**のインストールを促すダイアログが出るが,
しなくてよい. 次の**Adobe AIR**のライセンスに同意すれば,
すたーしゅーたーが起動する.
音はサウンドカードとかから出てくる.

### すたーらいなーのプレイ
```bash
git clone https://github.com/xiupos/star-docker.git
cd star-docker
docker-compose -f docker-compose.liner.yml up
```
ダイアログはすたーしゅーたーに同じ.

## やってること

特別なことはなく, ただ[Wine](https://www.winehq.org/)で起動しているだけ.
本ソフトもビルドのたびに取得しているので,
ライセンス問題も回避している.

### Dockerfile

```Dockerfile
FROM ubuntu:20.04

# Install wine
RUN apt-get update && apt-get install -y wget \
  gnupg2 software-properties-common && \
  dpkg --add-architecture i386 && \
  wget -nc https://dl.winehq.org/wine-builds/winehq.key && \
  apt-key add winehq.key && rm winehq.key && \
  add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main' && \
  apt-get update && apt-get install -y --install-recommends winehq-stable

# Download Adobe AIR
RUN wget https://airsdk.harman.com/assets/downloads/AdobeAIR.exe -O /root/air.exe

# Download StarShooter and StarLiner
RUN apt-get install -y unzip && \
  wget http://www.dokidokivisual.com/magic_of_stella/archive/starshooter_starliner_win.zip && \
  unzip starshooter_starliner_win.zip -d /root/star && rm starshooter_starliner_win.zip

# Install Noto Fonts
RUN apt-get install -y fonts-noto
```

前まで[winetricks](https://wiki.winehq.org/Winetricks)でAdobe AIRをインストールできたはずだが,
HARMANがどうのでできなくなった.
また, `wine`初回起動時のMonoとGeckoのダイアログを回避できない関係もあり,
Dockerfileではダウンロードだけをしている.
またフォントを適当にインストールしている.

### docker-compose.yml

```yml
version: '3.3'
services:
  wine:
    build: .
    network_mode: "host"
    environment:
      - DISPLAY=${DISPLAY}
    volumes:
      - ${HOME}/.Xauthority:/root/.Xauthority
      - ${HOME}/.vdrift:/root/.vdrift
      # - ./star:/root/star
    devices:
      - /dev/input:/dev/input
      - /dev/snd:/dev/snd
      - /dev/dri:/dev/dri
    command: >
      bash -c "
        wine /root/air.exe -silent &&
        wine /root/star/star_shooter_app/star_shooter_app.exe
      "
```

GUIが必要なAdobe AIRのインストールをcommandで無理矢理行っている.
初回起動時のライセンスダイアログは, 仕方ない(寧ろ必要)なので妥協.

WineのDocker組みはGUI操作できないことがネックである.
