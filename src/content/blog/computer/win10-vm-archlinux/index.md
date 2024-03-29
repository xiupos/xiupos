---
title: "Windows 10のVMをArch Linuxでサクっと動かすメモ"
tags : [
  "computer",
  "archlinux",
]
pubDate: 2020-08-03T10:48:26+09:00
toc : true
lang : ja
---

最近またPCをクリーンインストールした.
今度の OS は [Arch Linux](https://www.archlinux.org/).
今まで Debian系を使い続けていたが,
「Docker があれば OS なんて関係ないのでは」と気付いてしまったのだ.

クリーンインストールは(苦労したが)上手くいった.
だが, 1つ問題がわかった.
Windows か Mac でしかアクセスできないサービスにアクセスできない
(Debian でもできないが).
ぶっちゃけ,
私はそんなサービスは存在価値ないと思っているが,
コロナのせいで在宅○○が増えて使わなくてはいけない場面に出会ってしまった.
あゝ悍ましい.

ということで,
Arch Linux でレガシテスト用の Windows 10 を VM するメモ.

## VirtualBox と Vagrant のインストール

VMware はエラーが出てインストールできなかった.
Wiki が充実していた VirtualBox を使う.

```bash
sudo pacman -Syu virtualbox vagrant
sudo modprobe -a vboxdrv
sudo sh -c "echo 'vboxdrv' > /etc/modules-load.d/virtualbox.conf"
sudo gpasswd -a $USER vboxusers
```

インストールとカーネルモジュールの起動, 登録などする.


## イメージファイルのダウンロードと起動

[Virtual Machines - Microsoft Edge Developer](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

ちょっと前までmodern.IEと呼ばれていたもの.
Windows 10 なら90日間動作する仮想マシン.
ここから **Vagrant**用 (`MSEdge.Win10.Vagrant.zip`) をダウンロードしてくる.

```bash
mkdir -p ~/Vagrant/win10edge
cd ~/Vagrant/win10edge
unzip ~/Download/MSEdge.Win10.Vagrant.zip
# 'MSEdge - Win10.box' が解凍される.
mv 'MSEdge - Win10.box' win10.box
vagrant box add win10edge win10.box
# スペースが入っているとエラーを吐く
vagrant init win10edge
vim Vagrantfile
# # 以下のコメントを戻す
# config.vm.provider "virtualbox" do |vb|
#   vb.gui = true
#   vb.memory = "2048"
# end
vagrant up
```

これで GUI で Windows 10 が起動する.
ちなみに, メモリは 4096MB くらいにしてあげると快適に動く.

あと, Edge 最新版で動くと称すサービスがこの Edge で使えなかった.
大人しく Chrome をインストールすべき.
どこの模試とは言わない.

## 参考

 - https://wiki.archlinux.jp/index.php/VirtualBox
 - https://wiki.archlinux.jp/index.php/Vagrant
 - https://www.youtube.com/watch?v=QzOrQGlehpQ
