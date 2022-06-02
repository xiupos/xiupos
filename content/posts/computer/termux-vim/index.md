---
title: "TermuxにLua付きVimをインストールする"
date: 2021-03-17T08:01:47+09:00
toc : true
tags : [
  "computer",
  "android",
  "termux"
]
---

Lua付きのVimが, どうしようもなく欲しくなることがある.
[ここ](https://qiita.com/Fendo181/items/8a5545cd7550bd9a3c91)あたりを参考にすれば普通は入るが,
Termuxはインストール場所が特殊だったりして少し面倒だった.
そのメモ.

```bash
pkg install -y git build-essential ncurses lua54 luajit python python2 ruby
# これをしておかないとconfigureで引っ掛かる.
ln -s $PREFIX/bin/lua5.4 $PREFIX/bin/lua
mkdir -p ~/src && cd ~/src
git clone https://github.com/vim/vim.git
cd vim
# prefixは$PREFIXに統一. Python, Rubyは任意.
./configure --with-features=huge --enable-multibyte --enable-luainterp=dynamic --with-lua-prefix=$PREFIX --enable-gpm --enable-cscope --enable-fontset --enable-fail-if-missing --prefix=$PREFIX --enable-pythoninterp=dynamic --enable-python3interp=dynamic --enable-rubyinterp=dynamic
make && make install
```

`ncurses-dev` とかの `*-dev` パッケージが,
[Termuxではメインパッケージに含まれている](https://wiki.termux.com/wiki/No_more_-dev_packages).
地味に躓く.