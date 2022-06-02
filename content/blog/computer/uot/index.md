---
title : "Androidにまともなターミナル環境(Ubuntu on Termux)を作った話"
tags : [
  "computer",
  "termux",
  "android",
]
date : "2019-07-18T08:51:36+09:00"
toc : true
---

前々から試行錯誤してたAndroidのターミナル環境作りが一段落したので, 
そのメモ. ようやく, まともに使える&使いやすい環境を作ることができた.
<!--more-->



## 何をしたか, なぜしたのか

アプリ「[Termux](https://termux.com/)」上に, [Ubuntu](https://ubuntu.com/)の仮想環境を作る. root化はしてません.   

Android上でUbuntuが動くので, 出かけ先にPCを持っていく必要があまりなくなる. 電車の中で, ``git commit``できる.   

## Termuxのインストール

Termux - https://termux.com/

まず, 大元となる端末は[Termux](https://termux.com/)を用いる. [端末エミュレータ](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=ja)でない理由は, Termuxは``pkg``が使えるから.
Termuxは[Google Play](https://play.google.com/store/apps/details?id=com.termux)や[F-Droid](https://f-droid.org/packages/com.termux/)よりインストールできる. (ここでF-Doridも挙げるのはHUAWEIユーザーだから...?)

特に特別なことをすることなく, インストールできる. ちなみに私の環境ではErrorでGoogle Playからインストールできなかったので, F-Droidよりインストールした.

## Ubuntu仮想環境の構築

Termux上にUbuntuの仮想環境を導入する. 導入には[AnLinux](https://github.com/EXALAB/AnLinux-App)を利用するが, 導入に使うのは下のコマンドのみ. アプリに付属する他の機能が必要なければ, インストールせずに下のコマンドを実行するだけでも十分.

```bash
pkg install wget openssl-tool proot -y
hash -r
wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh
bash ubuntu.sh
```
しばらくすると, 上のコマンドを実行したディレクトリに, ``start-ubuntu.sh``ができる. このシェルスクリプトを実行すると...

```bash
./start-ubuntu.sh
root@localhost:~# 
```

Ubuntuが起動した! root化していないAndroid上でUbuntuが動いている.   
ちなみに, バージョンは, 

```bash
root@localhost:~# cat /etc/os-release
NAME="Ubuntu"
VERSION="18.04 LTS (Bionic Beaver)"
...
```

[Ubuntu 18.04 LTS (Bionic Beaver)](http://releases.ubuntu.com/18.04/). しっかりUbuntu(何度目

これでUbuntuが導入できた. ひと段落. が, まだ色々と気になるところがあったので, 整えていく.

## 諸々の設定

### Termux側の.bashrcに追加

Ubuntuの起動は``start-ubuntu.sh``を実行する必要がある. が, 起動のたびにソフトキーボードでポチポチこれを入力するのは鬱陶しいので, ``.bashrc``で自動的に実行するように設定する.

```bash
echo "./start-ubuntu.sh" >> ~/.bashrc
```

これで, Termux起動のたびにすぐにUbuntuが実行する. ちなみに, Termux bashに戻ったいときは, ``exit``で戻れる.

### 一般ユーザーの追加

Ubuntuを起動すると, rootとしてログインされる. しかし, 無条件でrootになるのは少し怖いので, 一般ユーザーを追加する.

```bash
~# apt update
~# apt dist-upgrade
~# apt install sudo    # sudoのインストール
~# adduser <user_name>    # ユーザー追加(Passwordを設定)
~# gpasswd -a <user_name> sudo    # 作成したユーザーをsudoグループに追加
~# echo "su <user_name>" >> ~/.bashrc    # 自動的にログインするように設定
~# su <user_name>    # 一般ユーザーにログイン
<user_name>@localhost:/root$ 
```

参考 : [ubuntu ユーザを追加して sudo 権限をつける - Qiita](https://qiita.com/white_aspara25/items/c1b9d02310b4731bfbaa)

これで, 従来のUbuntuと同じように``sudo``が使えるようになる.
なお, これで``sudo``が使えない場合は, ``visudo``で直接ユーザーを追加する. まあ, 本末転倒が...()

```bash
~# apt install vim    # visudoにはvimなどが必要
~# visudo
...
root ALL=(ALL:ALL) ALL
<user_name> ALL=(ALL:ALL) ALL #追加
...
```

参考 : [How to Fix "Username is not in the sudoers file. This incident will be reported" in Ubuntu](https://www.tecmint.com/fix-user-is-not-in-the-sudoers-file-the-incident-will-be-reported-ubuntu/)

以降, 全て``sudo``を用いて設定をする.

### fishのインストール

``fish``をインストールする. 標準の``bash``でも十分に使えるのが, ``fish``だと強力な補完機能があり, Androidでポチポチ使うにはこちらのほうが便利.

```bash
sudo apt-get install apt-file    # apt-add-repositoryを使うための準備
sudo apt-file update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:fish-shell/release-2
sudo apt-get update
sudo apt-get install fish    # fishのインストール
echo "fish" >> ~/.bashrc    #自動的にfishを起動
fish
~>
```

参考 : [自宅のubuntu-16.04マシンのシェルをfishに変更した - takapiのブログ](http://takapi86.hatenablog.com/entry/2017/05/28/124642)

``fish``のインストールには数分かかる. Shellの変更は通常``chsh -s /usr/bin/fish``なのが, なぜかエラーが出た. なので, ``~/.bashrc``に追加して間接的に起動をする.

### gitのインストール・設定

本命, ``git``のインストールが, 普通のUbuntuでの``git``のインストールと何ら変わりません. ラクチン.

```bash
> sudo apt install git
> ssh-keygen #Password設定あり
> cat ~/.ssh/id_rsa.pub
```
表示された公開キーをコピペし, Github等のサイトのSSH keys設定に貼り付ける.

参考 : [GitHubの初期設定（SSH接続からリポジトリへのpushまで） - Qiita](https://qiita.com/drapon/items/441e18452b25060d61f1)

Androidからサイト開いて貼り付けるのがやりにくいので, 私はLINEで一人グループを作り, それで送信してPCで貼り付け作業を行いた. スマホならではの使い方?

設定次第ではGUIも動かせるっぽい. ~~けど, ここまでで既にストレージを圧迫し始めているのでやめておく. ~~スマホ買い換えたい

(追記 : 2019/8/25)

環境構築のやり直しをやりやすくするために1行にまとめてみた

#### Ubuntuのインストール (終了後, 自動的に起動)

```bash
pkg install wget openssl-tool proot -y && hash -r && wget https://raw.githubusercontent.com/EXALAB/AnLinux-Resources/master/Scripts/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh && echo "./start-ubuntu.sh" >> ~/.bashrc && ./start-ubuntu.sh
```
