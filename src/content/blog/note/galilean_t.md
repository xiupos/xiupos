---
title : Galilei 変換
author : xiupos
date : \today
pubDate : 2024-05-28T18:25:00+09:00
lang : ja
math : true
draft: true
---

Newton 力学とは, 運動方程式
$$
\bm{F} = m \"{\bm{x}}
$$
で特徴付けられる力学である. この力学は, Galilei 変換と呼ばれる次の時間・空間変換で不変であるという特徴がある[^inertial].

1. Galilei ブースト:
  $$
  t \longmapsto t'=t, \quad \bm{x} \longmapsto \bm{x}'=\bm{x}+\bm{v}t.
  $$

2. 時間・空間並進:
  $$
  t \longmapsto t'=t+s, \quad \bm{x} \longmapsto \bm{x}'=\bm{x}+\bm{a}.
  $$

3. 時間反転: $λ = ±1$ に対し,
  $$
  t \longmapsto t'=λt, \quad \bm{x} \longmapsto \bm{x}'=\bm{x}.
  $$

4. 空間回転・反転: 直交行列 $R$ に対し,
  $$
  t \longmapsto t'=t, \quad \bm{x} \longmapsto \bm{x}'=R\bm{x}.
  $$

[^inertial]: むしろ「正規直交座標系から Galilei 変換で結ばれる座標系で Newton 力学が成立する」と言うべきである. このような座標系を「慣性系」という.

あるいは, 一つにまとめて, Galilei 変換は
$$
t \longmapsto t'=t+s, \quad \bm{x} \longmapsto \bm{x}'=R\bm{x}+\bm{v}t+\bm{a}
$$
と書ける. または, 行列を用いて
$$
\pmqty{1 \\ t \\ \bm{x}} \longmapsto \pmqty{1 \\ t' \\ \bm{x}'} = \pmqty{1 & 0 & 0 \\ s & λ & 0 \\ \bm{a} & \bm{v} & R} \pmqty{1 \\ t \\ \bm{x}}
$$
と簡単に書ける. $\det R ≠ 0$ であることから, この係数の行列は
$$
\det \pmqty{1 & 0 & 0 \\ s & λ & 0 \\ \bm{a} & \bm{v} & R} ≠ 0
$$
となり, 逆行列は
$$
\pmqty{1 & 0 & 0 \\ s & λ & 0 \\ \bm{a} & \bm{v} & R}^{-1} = \pmqty{1 & 0 & 0 \\ -λs & λ & 0 \\ -R^{\top}\pqty{\bm{a}-\bm{v}λs} & -λR^{\top}\bm{v} & R^{\top}}
$$
で与えられる. これらの行列から明らかなように, Galilei 変換は群の公理を満たし, 変換の全体を Galilei 群という. 特に $λ=1$, $\det R=1$ である変換は恒等変換と連結であり, この変換を固有順時 Galilei 変換という. 以下ではこの場合のみを考える.

ところで, Galilei 変換に対して作用が不変なとき, 保存量は何になるだろうか. 微小 Galilei 変換を調べよう.

TODO: 生成子の話

$$
\begin{aligned}
  \pmqty{1 \\ t \\ \bm{x}} \longmapsto \pmqty{1 \\ t' \\ \bm{x}'} &= \pmqty{1 \\ t \\ \bm{x}} + \pmqty{0 & 0 & 0 \\ s & 0 & 0 \\ \bm{a} & \bm{v} & R-1} \pmqty{1 \\ t \\ \bm{x}} \\
    &= \pmqty{1 \\ t \\ \bm{x}} + \pmqty{0 \\ s \\ \bm{a} + \bm{v}t + \pqty{R-1}\bm{x}}
\end{aligned}
$$

- Kelly, J. (2023). All About the Galilean Group SGal (3). *arXiv preprint [arXiv:2312.07555](https://arxiv.org/abs/2312.07555)*.

- Florian, S. (2005). Mechanics: From Newton's Laws to Deterministic Chaos. Springer.
