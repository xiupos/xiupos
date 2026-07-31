---
title: Proxmox VE 上の LXC コンテナで Tailscale
pubDate: 2026-03-18T13:30:00+09:00
lang: ja
draft: true
---

Proxmox VE 上の LXC で Tailscale に接続する備忘録. 参考にする場合は, この記事より先に Tailscale の公式ドキュメントをあたってください。

### LXC コンテナの作成

[通常の手順](https://pve.proxmox.com/wiki/Linux_Container)で作成する. 一般的な注意として, **Network** の **IPv4** と **IPv6** は適切に設定する (固定 IP か, DHCP). また, **DNS** について, もしホストも Tailscale につなげている場合は, ホストと同じ [`100.100.100.100`](https://tailscale.com/docs/reference/quad100) が引き継がれてしまう. それでは名前が解決しないので, 最初は **DNS servers** に `1.1.1.1` (Cloudflare) や `8.8.8.8` (Google) を設定する.

### LXC コンテナの起動

LXC コンテナを起動する前に, [公式ドキュメント](https://tailscale.com/docs/features/containers/lxc/lxc-unprivileged)にしたがって **Resources** → **Add** → **Device Passthrough** で `/dev/net/tun` を追加する.

あとは LXC コンテナを起動して, ログインした後に
```bash
curl -fsSL https://tailscale.com/install.sh | sh
```
なり, [Tailscale のインストールスクリプト](https://login.tailscale.com/admin/machines/new-linux)を実行すればよい.

- [Tailscale in LXC containers · Tailscale Docs](https://tailscale.com/docs/features/containers/lxc/lxc-unprivileged)

### Docker を動かす

タイトルとは関係ないが, 引っ掛かったのでこれもメモ. 執筆時点では素直に [Docker](https://docs.docker.com/engine/install/) が動かなかった. 対処法は, Proxmox VE のターミナルで `/etc/pve/lxc/[CT ID].conf` に以下を追記すればよい.

```
lxc.apparmor.profile: unconfined
lxc.mount.entry: /dev/null sys/module/apparmor/parameters/enabled none bind 0 0
```

- [7006 – fd reopening causes issues with AppArmor profiles with nested docker](https://bugzilla.proxmox.com/show_bug.cgi?id=7006)
- [ProxmoxのLXCコンテナでDockerコンテナが起動しなくなる問題の対処法｜haru_iida](https://zenn.dev/haru_iida/articles/proxmox-lxc-docker-apparmor-fix)
