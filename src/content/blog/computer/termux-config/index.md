---
title : "Termuxの諸設定 (SSH, ストレージ, フォント, etc...)"
tags : [
  "computer",
  "termux",
  "android",
]
pubDate : "2019-08-25T18:34:19+09:00"
toc : true
lang : ja
---

[UoT](/blog/computer/uot)を使ってて,
少々Termux側の設定で気になったことがあったのでそのメモ.
最近はUoTがストレージを食いすぎているので, 少しの間だけUoTから離れてTermux単体で使っている.
私の用途なら十分これで足りるかもしれない... けど, UoTはこのあいだの研究発表の準備の際に活躍してくれたので, 愛着はあった.

## SSHサーバーの起動

Termux上で実行する場合. なので, UoTを構築している場合はいったん``exit``で終了.

```bash
# クライアント (WSLなど)
ssh-keygen -f ~/.ssh/id_termux # 鍵の作成. (Enterを連打)
cat ~/.ssh/id_termux.pub
# 公開鍵をコピー→LINEなどでスマホに送信
echo "alias ssh-termux='ssh -p 8022 -i ~/.ssh/id_termux'" >> ~/.bashrc # コマンド短縮ｙ
```

```bash
# サーバー (Termux)
pkg install -y openssh # SSHのインストール
vi ~/.ssh/authorized_keys
# 公開鍵をペースト
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
ip -4 a
# IPアドレスをメモ
sshd # SSHサーバー起動
```

```bash
# クライアント (WSLなど)
ssh-termux xxx.xxx.xx.xxx #メモしたIPアドレス
```

UoT上でSSHサーバーを起動する場合は, ``ubuntu ssh サーバー``で調べたらたぶんすぐでてくる.

## ストレージの同期

```bash
termux-setup-storage # 権限の認証をするので, 本体でやった方がよさげ
```

実行すると, ``~/storage``ができる. 色々入ってるが, ``~/storage/shared`` (SDカード) で十分足りる.

詳しくは公式Wiki [Termux-setup-storage - Termux Wiki](https://wiki.termux.com/wiki/Termux-setup-storage)

UoT構築時は``ubuntu.sh``とかを書き換えて色々できるようだが, 面倒なのでそもそもストレージを同期していない. どうせやることなんて屋外で``git pull``して試しに動かしたり程度なので..

## フォントの変更

``/data/data/com.termux/files/home/.termux/font.ttf``を書き換えて, Termuxを再起動する. 書き換え方法は, 上のストレージを用いてコピーするか, ``wget``や``git clone``でダウンロードするなど.

だが, もしそれが面倒なら, 「[Termux: Styling](https://f-droid.org/packages/com.termux.styling/)」を導入すると簡単にフォントの選択肢が増える. Google Playにもあるが, F-Droidは無課金である. どちらもしっかり公式.
