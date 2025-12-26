---
title: Quaternionとスピノール
pubDate: 2025-12-22T10:00:00+09:00
ipynb_link_type: colab
lang: ja
draft: true
---

四元数 (Quaternion) が 3DCG をはじめとした工学系でかなり一般的に使われているらしい. 例えば Unity には [Quaternion 型](https://docs.unity3d.com/ja/2022.3/ScriptReference/Quaternion.html)が存在する. 四元数は古くから3次元空間内での回転を表現するのに用いられていたが, 物理学においては20世紀初頭にベクトル解析にその役割を譲った. 物理学科の学生が現代のカリキュラムで四元数を陽に意識することは少ない. この記事では現代における「Quaternion」を概観した上で、物理における「四元数みたいなもの」であるところのスピノールとの関係を考えてみる.

## ベクトルと回転

まずはベクトルの立場から回転を考えてみる. 3次元空間中の位置 $(x,y,z)$ は3成分の縦ベクトル
$$
x⃗ = \begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$
と表すことができる. この量をこの記事では「ベクトル」と呼ぶことにする. このベクトルに対する $x$, $y$, $z$ 軸まわりの回転はそれぞれ行列
$$
\begin{aligned}
R_x(α) &= \begin{pmatrix} 1 & & \\ & \cos α & -\sin α \\ & \sin α & \cos α \end{pmatrix}, \\
R_y(β) &= \begin{pmatrix} \cos β & & \sin β \\ & 1 & \\ -\sin β & & \cos β \end{pmatrix}, \\
R_z(γ) &= \begin{pmatrix} \cos γ & -\sin γ & \\ \sin γ & \cos γ & \\ & & 1 \end{pmatrix}
\end{aligned}
$$
によって表現されて, 一般の回転はこれらを順に作用することで実現できる. この順番については流儀があるが, Unity では [$z$, $x$, $y$ の順番で定義される](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Transform-eulerAngles.html)らしい[unity]. つまり,
$$
x⃗' = R(α, β, γ) x⃗ = R_y(β) R_x(α) R_z(γ) x⃗
$$
である. この角度の組 $(α, β, γ)$ はオイラー角と呼ばれ, いわゆる「ロール」「ピッチ」「ヨー」に対応する直感的な量である.

[^unity]: オイラー角の定義に限らず, 本記事では Unity における定義を意識した記法を用いているが, Unity とは違って右手系を採用する.

### ある方向に沿った回転 (任意軸回転)

オイラー角とは別の回転の表現も考える. ベクトル $x⃗$ を, ある単位ベクトル $n⃗$ を軸として角度 $θ$ だけ回転させると
$$
x⃗' = (\cos θ) x⃗ + (1 - \cos θ) (n⃗ ⋅ x⃗) x⃗ + (\sin θ) n⃗ × x⃗
$$
となる.

## Quaternion と回転

Quaternion は複素数 $ω = x + iy$ を拡張したもので, $q = w + x i + y j + z k$ と書かれる. ただし $i$, $j$, $k$ はそれぞれが虚数単位であって,
$$
i^2 = j^2 = k^2 = ijk = -1, \\
ij = -ji = k, \quad jk = -kj = i, \quad ki = -ik = j
$$
を満たす. 2つの Quaternion の積はこの性質から
$$
\begin{aligned}
q_1 q_2 &= (w_1 + x_1 i + y_1 j + z_1 k) (w_2 + x_2 i + y_2 j + z_2 k) \\
        &= w_1 w_2 - x_1 x_2 - y_1 y_2 - z_1 z_2 \\
        &\quad + w_1 (x_2 i + y_2 j + z_2 k) + w_2 (x_1 i + y_1 j + z_1 k) \\
        &\quad + (y_1 z_2 - z_1 y_2) i + (z_1 x_2 - x_1 z_2) j + (x_1 y_2 - y_1 x_2) k
\end{aligned}
$$
と計算される. 表記を簡単にするため, $\vec{i} = (i,j,k)^⊤$ と定義して, Quaternion を $q = w + \vec{x}⋅\vec{i}$ と書くことにすれば, 積は
$$
q_1 q_2 = (w_1 + \vec{x}_1⋅)(w_2, \vec{x}_2) = (w_1 w_2 - \vec{x}_1 ⋅ \vec{x}_2,\ w_1 \vec{x}_1 + w_2 \vec{x}_2 + \vec{x}_1×\vec{x}_2)
$$
と (比較的) 簡潔に書ける. また, 複素共役は $\=q = w - x i - y j - z k = (w, -\vec{x})$ で定義され, ノルムは
$$
|q| = \sqrt{q\=q} = \sqrt{w^2 + x^2 + y^2 + z^2} = \sqrt{w^2 + \vec{x}^2}
$$
となる. この性質を使うと, 逆 Quaternion は
$$
q^{-1} = \frac{\=q}{|q|^2} = \frac{(w, -\vec{x})}{w^2 + \vec{x}^2}
$$
となることがすぐにわかる.

### ベクトルへの作用

Quaternion $q$ のベクトル $x⃗$ への作用を
$$
qx⃗ = q (0, x⃗) q^{-1} = q (xi + yj + zk) q^{-1}
$$
で定義する. このとき, ベクトル $x⃗$ を軸 $n⃗$ まわりに角度 $θ$ で回転は $q = (\cos (θ/2), n⃗ \sin (θ/2))$ の $x⃗$ への作用 $x⃗' = qx⃗$

## スピノールと回転
