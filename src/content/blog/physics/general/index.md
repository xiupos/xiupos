---
title : 物理ノート
pubDate : 2023-10-05T01:00:00+09:00
lang : ja
draft : true
---

## 線形代数

### ベクトル空間

集合 $V$ が, **加法**と呼ばれるその上の二項演算子 $+$ と, **スカラー乗法**と呼ばれる体 $K$ の $V$ への作用 $\circ$ を持ち, $u, v, w \in V$, $a, b \in K$ に関して以下の公理系を満たすとき, $(V, +, \circ)$ を $K$ 上の**ベクトル空間**という. $V$ をベクトル空間と呼ぶこともある. ベクトル空間 $V$ の元を**ベクトル**と呼ぶ.

1. 加法の可換律: $u + v = v + u$,
2. 加法の結合律: $u + (v + w) = (u + v) + w$,
3. 加法単位元の存在: $\exists 0 \in V, u + 0 = 0 + u = u$,
4. 体の乗法とスカラーの乗法の両立条件: $a(bu) = (ab)u$,
5. 体の加法に対するスカラー乗法の分配律: $(a + b)u = au + bu$,
6. 加法に対するスカラー乗法の分配律: $a(u + v) = au + av$,
7. スカラーの乗法の単位元の存在: $1u = u$,
8. 加法逆元の存在: $\exists (-u) \in V, u + (-u) \in 0$.

ベクトル空間 $V$ のベクトル列 $\{ u_i \}$ の**線形結合**と呼ばれる $c^i u_i$ ($c^i \in K$) について,  $c^i u_i = 0$ を満たす $c^i$ が $c^i = 0$ に限るとき, この $\{ u_i \}$ は**線形独立**であるという. また, $V$ の全てのベクトルが $\{ u_i \}$ の線形結合で表されるとき, この $\{ u_i \}$ が $V$ を**生成する**という. $V$ のベクトル列 $\{ e_i \}$ が線形独立かつ $V$ を生成するとき, この $\{ e_i \}$ を $V$ の**基底**という. $V$ の基底を構成するベクトルの個数を $V$ の**次元**といい $\mathrm{dim}(V)$ と書く.

### 線形写像

$K$ 上のベクトル空間 $U$, $V$ に対し, 写像 $T : U \rightarrow V$ が**線形性** $T(au + bv) = a T(u) + b T(v)$ ($a, b \in K$, $u, v \in U$) を満たすとき, $T$ を $K$ 上の**線形写像**といい, その全体を $\mathrm{Hom}_K (U, V)$ と書く. $U$ から $U$ 自身への線形写像の全体 $\mathrm{End}_K (U) := \mathrm{Hom}_K (U, U)$ の元を**線形変換**といい, 恒等写像 $1_U \in \mathrm{End}_K (U)$ を**単位変換**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $T^{-1} T = 1_U$, $T T^{-1} = 1_V$ を満たす $T^{-1} \in \mathrm{Hom}_K (V, U)$ が存在するとき, $T$ を $K$ 上の**線形同型写像**といい, $U$ と $V$ は $K$ 上の**線形同型**という. 線形同型写像 $T \in \mathrm{End}_K (U)$ を**同型変換**, $T^{-1}$ を**逆変換**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $\mathrm{Im} (T) = \{ T(u) \in V \mid u \in U \}$ を $T$ の**像**, $\mathrm{Ker} (T) = \{ u \in U \mid T(u) = 0 \in V \}$ を $T$ の**核**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $U$ の基底 $\{ u_1, \dots u_n \}$, $V$ の基底 $\{ v_1, \dots, v_m \}$ について $(T( u_1), \cdots, T(u_n)) = (v_1, \cdots, v_m) A$ と表されるとき, 行列 $A$ を**表現行列**という.

線形変換 $T \in \mathrm{End}_K (U)$ に対して, あるベクトル $u \in U$ が $T(u) = \lambda u$ を満たすとき, $\lambda \in K$ を $T$ の**固有値**, $u$ を $\lambda$ に属する $T$ の**固有ベクトル**という.

### 双対空間

$K$ 上のベクトル空間 $V$ に対し, 線形写像 $V^{*} := \mathrm{Hom}_K (V, K)$ を**双対空間**といい, $V^{*}$ の元を**線形汎関数**, あるいは代数的1-形式という. 双対空間はベクトル空間であり, その次元は元のベクトル空間と等しい: $\mathrm{dim} (V^{*}) = \mathrm{dim} (V)$.

$V$ の基底 $\{ e_i \}$ に対して, $e^i(e_j) = \delta_{ij}$ を満たす $V^{*}$ の基底 $\{ e^i \}$ を $\{ e_i \}$ の**双対基底**という. 線形写像 $T \in \mathrm{Hom}_K (U, V)$ に対して, $(T^\dagger (\omega))(u) = \omega(T(u))$ を満たす $T^\dagger \in \mathrm{Hom}_K (V^{*}, U^{*})$ を $T$ の**双対写像**という. 表現行列 $A$ を持つ線形写像 $T$ の双対写像 $T^\dagger$ の表現行列は $A^\dagger$ である. $A = A^\dagger$ であるとき $A$ を **Hermite 行列**あるいは**自己共役行列**といい, このとき $T = T^\dagger$ であるから $T$ を **Hermite 変換**あるいは**自己共役変換**という.

### テンソル代数

体 $K$ 上のベクトル空間 $V$, $W$ の基底 $\{ v_i \}$, $\{ w_j \}$ について, $v, v' \in V$, $w, w' \in W$, $c \in K$ に関して以下の**双線形性**を満たす**テンソル積** tensor product で作られる組 $\{ v_i \otimes w_j \}$ を基底とするベクトル空間を $V \otimes W$ と書き, $V$ と $W$ との**テンソル積空間** tensor product space という. このとき, $\mathrm{dim} (V \otimes W) = \mathrm{dim} (V) \cdot \mathrm{dim} (W)$.

1. 第一引数に対する**線形性**: $(v + v') \otimes w = v \otimes w + v' \otimes w$,
2. 第二引数に対する**線形性**: $v \otimes (w + w') = v \otimes w + v \otimes w'$,
3. **スカラー倍に対する結合性**: $(c v) \otimes w = v \otimes (c w) = c (v \otimes w)$.

ベクトル空間列 $\{ V_i \}$ に対し, 多重線形なテンソル積空間 $V_1 \otimes \cdots \otimes V_p$ が自然に構成される. 一つのベクトル空間 $V$ によるテンソル積空間 $V^{\otimes p} := \underbrace{V \otimes \cdots \otimes V}_p$ と ${V^{*}}^{\otimes q}$ について, $V^{\otimes p}$ あるいは $V^{\otimes p} \otimes {V^{*}}^{\otimes q}$ を**テンソル空間** tensor product という.

体 $K$ 上のベクトル空間 $V$ に対し, $T^0(V) := K$, $T^p(V) := V^{\otimes p}$ の直和 $T(V) := \bigoplus^\infty_{p=0} T^p(V)$ を**テンソル代数** tensor algebra という.

### 外積代数

テンソル積空間 $V^{\otimes p}$ に対し, ベクトル $v_1, \dots v_p \in V$ と置換群 $S_p$ を用いて,
$$
\begin{aligned}
v_1 \odot \cdots \odot v_p &:= \frac1{p!} \sum_{\sigma \in S_p} v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma}, \\
v_1 \wedge \cdots \wedge v_p &:= \frac1{p!} \sum_{\sigma \in S_p} \mathrm{sgn} (\sigma) \ v_{\sigma(1)} \otimes \cdots \otimes v_{\sigma},
\end{aligned}
$$
と定義される積 $\otimes$ をそれぞれ**対称積**, $\wedge$ を**交代積**あるいは**外積**という. 対称積は $v_1 \cdots v_p := v_1 \odot \cdots \odot v_p$ とも書く. $u, v \in V$ について, $u \odot v = v \odot u$, $u \wedge v = - v \wedge u$ を満たす. また, 交代 $V$ の基底 $\{ e_i \}$ に対し, $\{ e_1 \odot \cdots \odot e_p \}$ を基底とするベクトル空間 $S^p (V)$ を $V$ の **$p$ 次対称テンソル空間** space of symmetric tensors, $\{ e_1 \wedge \cdots \wedge e_p \}$ を基底とするベクトル空間 $\Lambda^p (V)$ を $V$ の **$p$ 次交代テンソル空間** space of alternating tensors という.

交代テンソル空間 $\Lambda^p(V)$, $\Lambda^q(V)$ について, 2つの交代テンソル空間を交代テンソル空間に移す双線形写像 $\Lambda^p(V) \times \Lambda^q(V) \rightarrow \Lambda^{p+q}(V)$ を以下で定義する: $\Lambda^p(V)$ の基底 $\{ e_1 \wedge \cdots \wedge e_p \}$ と $\Lambda^q(V)$ の基底 $\{ e_1 \wedge \cdots \wedge e_q \}$ に対し, $\displaystyle t = \frac1{p!} t^{\mu_1\cdots\mu_p} e_{\mu_1} \wedge \cdots \wedge e_{\mu_p} \in {\textstyle \Lambda}^p(V)$, $\displaystyle s = \frac1{q!} s^{\mu_1\cdots\mu_q} e_{\mu_1} \wedge \cdots \wedge e_{\mu_q} \in {\textstyle \Lambda}^q(V)$ の外積は,
$$
\begin{aligned}
  t \wedge s
  &=
    \left( \frac1{p!} t^{\mu_1\cdots\mu_p} e_{\mu_1} \wedge \cdots \wedge e_{\mu_p} \right)
    \wedge
    \left( \frac1{q!} s^{\mu_1\cdots\mu_q} e_{\mu_1} \wedge \cdots \wedge e_{\mu_q} \right) \\
  &:=
    \frac1{p!q!} t^{\mu_1\cdots\mu_p} s^{\mu_{p+1}\cdots\mu_{p+q}}
    (e_{\mu_1} \wedge \cdots \wedge e_{\mu_p}) \wedge (e_{\mu_{p+1}} \wedge \cdots \wedge e_{\mu_{p+q}}).
\end{aligned}
$$
また, $t \wedge s = (-1)^{pq} s \wedge t$ を満たす.

体 $K$ 上のベクトル空間 $V$ に対して, $\Lambda^0(V) := K$ と $\Lambda^p(V)$ の直和 $\Lambda(V) := \bigoplus^\infty_{p=0} \Lambda^p(V)$ を **Grassmann 代数** Grassmann algebra あるいは**外積代数** exterior algebra という.

### 内積空間

複素数体 $\mathbb{C}$ 上のベクトル空間 $V$ について, 写像 $\braket{\ ,\ } : V \times V \rightarrow \mathbb{C}$ が $u, v, w \in V$, $a, b \in \mathbb{C}$ に関して以下の条件を満たすとき, この写像を**内積**と呼び, このとき $V$ を**内積空間**と呼ぶ. 第一引数を制限した内積は $V$ に双対である: $u \in V$ に対して $\braket{u, \ } \in \mathrm{Hom}_\mathbb{C} (V, \mathbb{C}) = V^{*}$.

1. 第二引数に対する**線形性**: $\braket{u, a v + b w} = a \braket{u, v} + b \braket{u, w}$,
2. **共役対称性**: $\braket{u, v} = (\braket{v, u})^{*}$,
3. **正定値性**: $\braket{u, u} \geq 0$,
4. **非退化性**: $\braket{u, u} = 0 \Rightarrow u = 0$.

$V$ の基底 $\{ u_i \}$ が $\braket{u_i, u_j} = \delta_{i, j}$ を満たすとき, この $\{ u_i \}$ を $V$ の**正規直交基底**という. このとき, $\{ \braket{u_i, \ } \}$ は $\{ u_i \}$ の双対基底である.

線形変換 $T \in \mathrm{End}_\mathbb{C} (V)$ が Hermite 変換であるとき, $u, v \in V$ に対して $\braket{u, T(v)} = \braket{T(u), v}$ を満たす.

線形変換 $U \in \mathrm{End}_\mathbb{C} (V)$ が内積を不変に保つ, つまり $u, v \in V$ に対して $\braket{U(u), U(v)} = \braket{u, v}$ を満たすとき, $U$ を **unitary 変換**という. 言い換えると, unitary 変換は $U^\dagger U = UU^\dagger = 1_V$ あるいは $U^\dagger = U^{-1}$ を満たす線形変換 $U$ である.

### ブラ-ケット記法

複素数体 $\mathbb{C}$ 上のベクトル空間 $H$ のベクトルを $\ket{\varphi}$ と書き, **ケットベクトル**と呼ぶ. また, 双対空間 $H^{*}$ のベクトルを $\bra{\varphi} := \braket{(\ket{\varphi}), \ }$ と書き, **ブラベクトル**と呼ぶ. これらの記法を用いて, ベクトル $\ket{\varphi}, \ket{\psi} \in H$ の内積は $\braket{\varphi | \psi}$ と書く. 例えば, $H$ の基底 $\{ \ket{m} \}$ とその双対基底 $\{ \bra{n} \}$ は $\braket{n | m} = \delta_{nm}$ を満たす. また, 双対写像はブラベクトルに右から作用する: $A^\dagger \in \mathrm{End}_K (H^{*})$ で $\braket{(A \ket{\varphi}), \ } = \bra{\varphi} A^\dagger$. 線形変換 $A \in \mathrm{End}_\mathbb{C} (H)$ が Hermite 変換, つまり $\bra{\varphi} (A \ket{\psi}) = (\bra{\varphi} A) \ket{\psi}$ であるとき, これを単に $\braket{\varphi | A | \psi}$ と書く. また, $\ket{\varphi}^\dagger := \bra{\varphi}$, $\bra{\varphi}^\dagger := \ket{\varphi}$ と定義すれば $(A \ket{\varphi})^\dagger = \bra{\varphi} A^\dagger$ が得られる.

複素数体 $\mathbb{C}$ 上のベクトル空間 $H$ の基底 $\{ \ket{n} \}$ に対し, 線形写像 $\ket{n} \bra{n}$ は射影写像という: ケットベクトル $\ket{\varphi} = \sum_m \varphi_m \ket{m}$ に対し, $\ket{n} \braket{n | \varphi} = \varphi_n \ket{n}$.

## 場の解析力学

### 最小作用の原理

4 元座標に依存するパラメータ $\phi (x)$ について, **作用** action と呼ばれる汎関数 $S[\phi]$ が存在し, $\phi$ は物理現象において $S[\phi]$ が最小となるよう変化する. つまり, 停留条件 $\delta S[\phi] = 0$ を満たす.

### Lagrangian 密度

作用は, スカラー場 $\phi$ に関する **Lagrangian 密度** Lagrangian density $\mathcal{L}(\phi, \partial \phi)$ を用いて以下のように表される:
$$
\boxed{
  S[\phi] = \int d^4 x \mathcal{L}(\phi, \partial {\phi})
}
$$
$\phi + \delta\phi$ の変分をとって,
$$
\begin{aligned}
\delta S[\phi]
  =&
    \int d^4 x
    \left[
      \mathcal{L}(\phi + \delta\phi, \partial\phi + \partial\delta\phi)
      -
      \mathcal{L}(\phi, \partial\phi)
    \right]
    \\
  =&
    \int d^4 x
    \left[
      \delta \phi
      \frac{\partial \mathcal{L}}{\partial \phi}
      +
      \delta \partial_\mu \phi
      \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
      +
      o\left(\sqrt{\delta \phi^{*} \delta \phi + (\delta \partial_\mu\phi)^{*} \delta \partial^\mu\phi}\right)
    \right]
    \\
  =&
    \int d^4 x
    \left[
      \delta \phi
      \frac{\partial \mathcal{L}}{\partial \phi}
      +
      \partial_\mu \delta \phi
      \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
    \right]
    \quad (\because \delta \partial_\mu \phi = \partial_\mu \delta \phi)
    \\
  =&
    \int d^4 x
    \left[
      \delta \phi
      \frac{\partial \mathcal{L}}{\partial \phi}
      -
      \delta \phi
      \partial_\mu
      \left(
        \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
      \right)
      +
      \partial_\mu
      \left(
        \delta \phi
        \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
      \right)
    \right].
\end{aligned}
$$
ここで, 発散項は境界条件より消える:
$$
\delta S[\phi]
  =
    \int d^4 x
    \delta \phi
    \left[
      \frac{\partial \mathcal{L}}{\partial \phi}
      -
      \partial_\mu
      \left(
        \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)}
      \right)
    \right].
$$
したがって, 停留条件 $\delta S[\phi] = 0$ より,
**Euler–Lagrange 方程式**が得られる:
$$
\boxed{
  \frac{\partial \mathcal{L}}{\partial \phi} -
  \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right)
  = 0
}
$$

#### 例: 自由スカラー場

自由スカラー場 $\phi$ の Lagrangian 密度は,
$$
\mathcal{L}(\phi, \partial \phi) = \frac12 \partial_\mu \phi \partial^\mu \phi - \frac12 \mu^2 \phi^2.
$$
ここで,
$$
\begin{aligned}
  \frac{\partial \mathcal{L}}{\partial \phi} = - \mu^2 \phi, &&
  \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right)
    =
      \partial_\mu \partial^\mu \phi.
\end{aligned}
$$
したがって, Euler–Lagrange 方程式より,
$$
(\partial_\mu \partial^\mu + \mu^2) \phi = 0.
$$

#### 例: 電磁場

電磁場 $A_\mu$ の Lagrangian 密度は,
$$
\begin{aligned}
  \mathcal{L}(A, \partial A) = - \frac14 F_{\mu\nu} F^{\mu\nu} + A_\mu j^\mu, &&
  F^{\mu\nu} := \partial^\mu A^\nu - \partial^\nu A^\mu.
\end{aligned}
$$
ここで,
$$
\begin{aligned}
  \frac{\partial \mathcal{L}}{\partial A_\nu} &= j^\mu, \\
  \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu A_\nu)} \right)
  &=  \partial_\mu \frac{\partial}{\partial (\partial_\mu A_\nu)} \left(- \frac14 F_{\rho\sigma} F^{\rho\sigma} \right) \\
  &=  \partial_\mu \frac{\partial}{\partial (\partial_\mu A_\nu)}
      \left[- \frac12 (
        \partial_{\rho} A_{\sigma} \partial^{\rho} A^{\sigma} -
        \partial_{\rho} A_{\sigma} \partial^{\sigma} A^{\rho}
      ) \right] \\
  &=  \partial_\mu
      \left[- \frac12 (
        2 \partial^{\mu} A^{\nu} -
        2 \partial^{\nu} A^{\mu}
      ) \right] \\
  &=  - \partial_\mu F^{\mu\nu}.
\end{aligned}
$$
したがって, Euler–Lagrange 方程式より,
$$
\partial_\mu F^{\mu\nu} = - j^\nu.
$$

#### 例: 自由粒子との関係

スカラー場 $\phi$ について, 空間座標と時間座標に分けて考える: $\phi(x, t)$. 作用は
$$
\begin{aligned}
  S[\phi(x)]
    &= \int d^4 x \mathcal{L} (\phi(x, t), \partial \phi(x, t)) \\
    &= \int dt \int d^3 x \mathcal{L} (\phi(x, t), D \phi(x, t), \dot{\phi}(x, t)) \\
    &= \int dt \int d^3 x \mathcal{L} (\phi(x, t), D \phi(x, t), \dot{x}^\top D \phi(x, t)).
\end{aligned}
$$
ここで, **Lagrangian** $L(x, \dot{x}, t)$ を以下のように定義する:
$$
L(x, \dot{x}, t) = \int d^3 x \mathcal{L} (\phi(x, t), D \phi(x, t), \dot{x}^\top D \phi(x, t)).
$$
このとき, 作用は
$$
S[x] = \int dt L(x, \dot{x}, t).
$$

## 束と接続

### 束と切断

**底空間** base space と呼ばれる空間 $B$ と**全空間** total space と呼ばれる空間 $E$ に対して, **射影** projection と呼ばれる写像 $\pi : E \rightarrow B$ があるとき, 三対 $(E, \pi, B)$ を**束** bundle という. $E \xrightarrow{\pi} B$, または単に $E$ を束と呼ぶこともある.
$$
\begin{CD}
E \\ @VV{\pi}V \\ B
\end{CD}
$$

任意の $b \in B$ について, 射影による逆像 $\pi^{-1}(b) \in E$ を束の $b$ 上の**ファイバー** fibre という. 位相空間 $B$, $E$ を底空間, 全空間に持つ束 $E \xrightarrow{\pi} B$ に対し, 位相空間 $F$ が任意の $b \in B$ 上のファイバーと同相であるとき, $F$ を束のファイバーという. 特に $E = B \times F$ であるとき, この束 $E$ は**自明な束** trivial bundle という.

また, 写像 $\sigma : B \rightarrow E$ が $\pi \circ \sigma = 1_B$ を満たすとき, $\sigma$ を**切断** cross section という. 言い換えると, 切断とは, 任意の底空間上の点 $b \in B$ に対して各ファイバー上の 1 点 $\sigma(b) \in \pi^{-1}(b)$ を決める写像 $\sigma$ である. 束 $E$ の切断の全体を $\Gamma(E)$ と表す.

### ファイバー束と構造群

全空間 $E$, 底空間 $M$, ファイバー $F$ が可微分多様体で, 射影 $\pi$ が全射である束 $E \xrightarrow{\pi} M$ について考える. $M$ の開被覆 $\{U_i\}$ に対して, **局所自明化** local trivialization と呼ばれる微分同相写像 $\varphi_i : U_i \times F \rightarrow \pi^{-1}(U_i)$ が存在するとき, この束 $E \xrightarrow{\pi} M$ を**ファイバー束** fibre bundle という.
$$
\begin{CD}
U_i \times F @>{\varphi_i}>> \pi^{-1}(U_i) @. \subset @. E \\
@. @VV{\pi}V @. @VV{\pi}V \\
@. U_i @. \subset @. M
\end{CD}
$$

点 $p_i \in U_i \subset M$ における局所自明化 $\varphi_i$ を $\varphi_{i,p} := \varphi_i(p,\ ) : F \rightarrow \pi^{-1}$ とする. 底空間上の点 $p \in U_i \cap U_j \neq \varnothing$ について, $g_{ij} (p) := \varphi_{i,p}^{-1} \circ \varphi_{j,p} : F \rightarrow F$ あるいは $g_{ij} (p)$ を**変換関数** transition function といい, $p \in U_i \cup U_j \cup U_k$ に対してコサイクル条件 $g_{ij} (p) g_{jk} = g_{ik}$ を満たす. $F$ に左作用する位相群 $G$ を用いて $g_{ij} (p) : U_i \cap U_j \rightarrow G$ であるとき, $G$ を**構造群** structure group といい, このときのファイバー束 $E \xrightarrow{\pi} M$ を $G$**-束** $G$-bundle ともいう.

底空間 $M$とその開被覆 $\{U_i\}$, ファイバー $F$, 構造群 $G$, 変換関数 $g_{ij} (p)$ が与えられたとき, ファイバー束を構成可能である.

### 主 $G$-束と同伴ファイバー束

射影 $\pi$ が微分可能な $G$-束 $P \xrightarrow{\pi} M$ を考える. $G$ が $P$ に右から作用し, $p \in M$ 上のファイバー上の点が $G$ の作用で同一ファイバー上に移る (**単純推移的** simply transitive) とき, このファイバー束 $P \xrightarrow{\pi} M$ を**主 $G$-束** principal $G$-bundle, あるいは単に**主束** principal bundle という. 言い換えると, 主 $G$-束とは, 射影が微分可能, ファイバーが位相群 $G$ である $G$-束である.

主 $G$-束 $P \xrightarrow{\pi} M$, $G$ が左作用する可微分多様体 $F$ が与えられたとき, 商空間
$$
P \times_G F := (P \times F) / G
$$
と写像 $\pi_1 : P \times_G F \rightarrow M, (u, f) \mapsto \pi(u)$ はファイバー $F$ のファイバー束 $P \times_G F \xrightarrow{\pi_1} M$ を与える. これを**同伴ファイバー束** associated fibre bundle という. 反対に, 上の定義のように $G$-束から同伴する主 $G$-束を構成可能である.

### ベクトル束

ベクトル空間 $V$ をファイバーとするファイバー束 $E \xrightarrow{\pi} M$ について考える. $M$ の開被覆 $\{U_i\}$ に対して, $p \in U_i \subset M$ における局所自明化 $\phi_i(p,\ ): V \rightarrow \pi^{-1}$ が線形同型を与えるとき, このファイバー束 $E \xrightarrow{\pi} M$ を**ベクトル束** vector bundle という. 言い換えると, ベクトル束とは, 次元 $n$ のベクトル空間をファイバーとして持つ $GL(n)$-束である. また, 主 $GL(n)$-束の同伴ファイバー束は**同伴ベクトル束**と呼ばれる.

### 接束と余接束

可微分多様体 $M$ 上の点 $p \in M$ に対し, $p$ の開近傍における局所座標 $\{ x_\mu \}$ 上で定義された微分作用素 $\displaystyle \partial_\mu := \frac{\partial}{\partial x^\mu}$ を用いた $\{ \partial_\mu \}$ を基底とするベクトル空間 $T_pM$ を**接空間** tangent space といい, 接空間のベクトルを**接ベクトル** tangent vector という. 全空間 $TM := \bigcup_{p \in M} T_pM$ に対して射影 $\pi : M \rightarrow TM$ が $\pi^{-1} = T_pM$ を満たすようなベクトル束 $TM \xrightarrow{\pi} M$ を**接束** tangent bundle という. 接束の切断を**ベクトル場** vector field という.

接空間 $T_pM$ の双対空間 $T^{*}_pM$ を**余接空間** cotangent space といい, $T_pM$ の基底 $\{ \partial_\mu \}$ の双対基底は $\{ dx^\mu \}$ である: $dx^\mu (\partial_\nu) = \delta^\mu_\nu$. また余接空間のベクトルを**余接ベクトル** cotangent vector という. 全空間 $T^{*}M := \bigcup_{p \in M} T^{*}_pM$ に対して射影 $\pi : M \rightarrow T^{*}M$ が $\pi^{-1} = T^{*}_pM$ を満たすようなベクトル束 $T^{*}M \xrightarrow{\pi} M$ を**余接束** cotangent bundle という.

### 微分形式とベクトル束上の接続

ベクトル束 $E \xrightarrow{x} M$ に対し, $M$ の余接空間の $k$ 次交代テンソル空間 $\Lambda^k (T^{*}M) := \bigcup_{p \in M} \Lambda^k (T^{*}_pM)$ を付け加えた $E \otimes \Lambda^k (T^{*}M) \xrightarrow{\pi_1} M$ の切断 $\Omega^{k} (M, E) := \Gamma(\Lambda^k (T^{*}M) \otimes E)$ を $E$ に値を取る **$k$-形式** $k$-form の空間という. ベクトル束 $E$ が自明な束であるとき単に $\Omega^k (M) := \Omega^k (M, E) = \Gamma(\Lambda^k (T^{*}M))$ と書き, 単に $k$-形式の空間という.

#### 全微分 : $\Omega^0 (M) \rightarrow \Omega^1 (M)$

自明な束に値を取る $0$-形式を $1$-形式に移す微分 $d : \Omega^0 (M) \rightarrow \Gamma(T^{*}M) = \Omega^1 (M)$ は全微分である: $f, g \in \Omega^0 (M)$, $fg \in \Omega^0 (M)$ に対して, Leibniz 則を満たす:
$$
d(fg) = (df) g + f (dg).
$$
また, $T^{*}_pM$ の基底 $\{dx^\mu\}$ に対し, $f \in \Omega^0 (M)$ は局所的に
$$
df := (\partial_\mu f )\ dx^\mu.
$$

#### 外微分 : $\Omega^k (M) \rightarrow \Omega^{k+1} (M)$

自明な束に値を取る $k$-形式を $(k+1)$-形式に移す微分 $d : \Omega^k (M) \rightarrow \Omega^{k+1} (M)$ を**外微分** exterior derivative という: $\omega \in \Omega^k (M)$, $\xi \in \Omega^l (M)$, $\omega \wedge \xi \in \Omega^{k+l} (M)$ に対して, Leibniz 則を満たす:
$$
d (\omega \wedge \xi) = d \omega \wedge \xi + (-1)^k \omega \wedge d \xi.
$$
また, $T^{*}_pM$ の基底 $\{dx^\mu\}$ に対し, $\omega = \frac1{k!} \omega_{\mu_1\cdots\mu_k} dx^{\mu_1} \wedge \cdots \wedge dx^{\mu_k} \in \Omega^k (M)$ は局所的に
$$
d \omega := \frac1{k!} (\partial_\nu \omega_{\mu_1\cdots\mu_k}) dx^\nu \wedge dx^{\mu_1} \wedge \cdots \wedge dx^{\mu_k}.
$$
このとき, 外積代数の交代性より外微分を2回作用させると0になる: $d^2 = 0$. また, $X, Y \in T_pM$ に対し, $\omega \in \Omega^1 (M)$ の外微分は次の等式を満たす:
$$
d \omega (X, Y) = X (\omega (Y)) - Y (\omega (X)) - \omega ([ X, Y ]).
$$

#### 共変微分 : $\Omega^0 (M, E) \rightarrow \Omega^1(M, E)$

ベクトル束 $E$ に値を取る $0$-形式を $1$-形式に移す微分 $D : \Omega^0 (M, E) = \Gamma (E) \rightarrow \Gamma (T^{*}M \otimes E) = \Omega^1 (M, E)$ を**接続** connection という: $f \in \Omega^0 (M)$, $\xi' \in \Omega^0 (M, E) = \Gamma(E)$, $f \xi' \in \Omega^0 (M, E)$ に対して, Leibniz 則を満たす:
$$
D (f \xi') = df \otimes \xi' + f D \xi'.
$$
また, $p \in M$ の近傍 $U_i \subset M$ とその局所自明化 $\varphi_{i,p} := \varphi_i (p,\ )$ に対し, 切断 $\phi \in \Gamma(E)$ の接続は
$$
D \phi := \varphi_{i,p} (d + A_i) \varphi_{i,p}^{-1} \circ \phi.
$$
ここで, Lie 代数に値を取る $1$-形式 $A_i \in \Omega^1 (U_i, \mathrm{End} (E)) = \Gamma(T^{*}U_i \otimes \frak{g})$ は**接続 $1$-形式**または**ゲージ場** gauge field といい, **局所標構場** local frame field と呼ばれる $\Omega (U_i, E) = \Gamma(\pi^{-1} (U_i))$ の局所的な基底 $\{ e_a \}$ を用いて, $\nabla  e_a = \varphi_{i,p} {(A_i)^b}_a \otimes \varphi_{i,p}^{-1} \circ e_b$ と展開できる. また, ゲージ場は別の近傍と「接続」する役割を持つ: $p \in M$ の近傍 $U_i, U_j \subset M$ とその局所自明化 $\varphi_{i,p} := \varphi_i (p,\ )$, $\varphi_{j,p} := \varphi_j (p,\ )$ に対し, 切断 $\phi \in \Gamma(E)$ は
$$
D \phi = \varphi_{i,p} (d + A_i) \varphi_{i,p}^{-1} \circ \phi = \varphi_{j,p} (d + A_j) \varphi_{j,p}^{-1} \circ \phi,
$$
あるいは 局所切断 $\phi_i := \varphi_{i,p}^{-1} \circ \phi $, $\phi_j  := \varphi_{j,p}^{-1} \circ \phi $, それらに対する局所的な接続 $D_i := d + A_i$, $D_j := d + A_j$ を用いて, 変換関数による局所的な接続の変換式が得られる:
$$
D_i \phi_i = g_{ij} (p) D_j \phi_j.
$$
また, ベクトル束の構造群が $GL(n)$ であることを用いて,
$$
\begin{aligned}
  \varphi_{j,p} (d + A_j) \varphi_{j,p}^{-1} \circ \phi
    &= \varphi_{j,p} d (\varphi_{j,p}^{-1} \circ \phi ) + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
    &= \varphi_{j,p} d (\varphi_{j,p}^{-1} \circ \phi_{i,p} \circ \phi_{i,p}^{-1} \circ \phi ) + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
    &= \varphi_{j,p} d (g_{ji} (p) \phi_{i,p}^{-1} \circ \phi ) + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
    &= \varphi_{j,p} d (g_{ji} (p)) \phi_{i,p}^{-1} \circ \phi + \varphi_{j,p} g_{ji} (p) d (\phi_{i,p}^{-1} \circ \phi ) + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
    &= \varphi_{i,p} d (\phi_{i,p}^{-1} \circ \phi ) + \varphi_{i,p} g_{ij} (p) d (g_{ji} (p)) \phi_{i,p}^{-1} \circ \phi + \varphi_{i,p} g_{ij} (p) A_j g_{ji} (p) \varphi_{i,p}^{-1} \circ \phi \\
    &= \varphi_{i,p} (d + g_{ij} (p) d g_{ji} (p) + g_{ij} (p) A_j g_{ji} (p)) \phi_{i,p}^{-1} \circ \phi .
\end{aligned}
$$
これが $\varphi_{i,p} (d + A_i) \varphi_{i,p}^{-1} \circ \phi $ と等しい条件は,
$$
A_i = g_{ij} (p) d g_{ji} (p) + g_{ij} (p) A_j g_{ji} (p),
$$
あるいは $A := A_j$, $A' := A_i$, $g := g_{ij} (p)$ として,
$$
A' = g d g^{-1} + g A g^{-1}.
$$
変換関数による変換に相当する $A \mapsto A' = g d g^{-1} + g A g^{-1}$ を**ゲージ変換** gauge transformation という. また, ゲージ場をスカラー倍 $A \mapsto \lambda A$ しても接続の性質は変わらない.

実用上, 接続はしばしば局所的な接続と同一視される:
$$
D \phi := (d + A) \phi.
$$
例えば, $D e_a = {A^b}_a \otimes e_b$, $D' \phi' = g D \phi$ など. $T^{*}_pM$ の基底 $\{ dx^\mu \}$ に対して, 接続 $1$-形式 $A = A_\mu dx^\mu$ を用いて, 局所的に $D \phi = D_\mu \phi \ dx^\mu = (\partial_\mu + A_\mu) \phi \ dx^\mu$ と展開される. このとき, 接続の成分表示を**共変微分** convariant derivative という:
$$
D_\mu \phi = (\partial_\mu + A_\mu) \phi.
$$
また, $\{ dx^\mu \}$ を双対基底に持つ $T_pM$ の基底 $\{ \partial_\mu \}$ に対して, $X = X^\mu \partial_\mu \in T_pM$ を用いた $D_X \phi := D \phi (X) = X^\mu D_\mu \phi : \Gamma (E) \rightarrow \Gamma (E)$ を共変微分と呼ぶこともある. また, 単に接続 $D \phi = (d + A) \phi$ を共変微分と呼ぶこともある.

#### 共変外微分 : $\Omega^k (M, E) \rightarrow \Omega^{k+1} (M, E)$

ベクトル束 $E$ に値を取る $k$-形式を $(k+1)$-形式に移す微分 $D : \Omega^k (M, E) = \Gamma (\Lambda^k (T^{*}M) \otimes E) \rightarrow \Gamma (\Lambda^{k + 1} (T^{*}M) \otimes E) = \Omega^{k+1} (M, E)$ を**共変外微分** covariant exterior derivative という: $\omega \in \Omega^k (M) = \Gamma (\Lambda^k(T^{*}M))$, $\xi \in \Omega^l (M, E) = \Gamma (\Lambda^l(T^{*}M) \otimes E)$, $\omega \wedge \xi \in \Omega^{k+l} (M, E) = \Gamma (\Lambda^{k+l} (T^{*}M) \otimes E)$ に対して, Leibniz 則を満たす:
$$
D (\omega \wedge \xi) = d \omega \wedge \xi + (-1)^k \omega \wedge D \xi,
$$
あるいは, $l = 0$ のとき,
$$
D (\omega \otimes \xi) = d \omega \otimes \xi + (-1)^k \omega \wedge D \xi.
$$
また, 接ベクトル $X, Y \in T_pM$ に対し, $\phi \in \Omega^1 (M, E)$ の共変外微分は次の等式を満たす:
$$
D \phi (X, Y) = D_X (\phi (Y)) - D_Y (\phi (X)) - \phi ([ X, Y ]).
$$

#### 曲率

$p \in M$ において $E$ の切断を2回共変外微分する操作 $R := D^2 : \pi^{-1} (p) \rightarrow \Lambda^2(T^{*}_pM) \otimes \pi^{-1} (p)$ を $p$ における接続 $D$ の**曲率** curvature という. このとき, **Bianchi 恒等式** Bianchi identity を満たす:
$$
DR = 0.
$$

$\xi \in \Gamma(E) = \Omega^0 (M, E)$ に対し, $p \in M$ の接ベクトル $X, Y \in T_pM$ を用いた等式
$$
\begin{aligned}
D (D \xi) (X, Y)
  &= D_X (D \xi (Y)) - D_Y (D \xi (X)) - D \xi ([ X, Y ]) \\
  &= D_X D_Y \xi - D_Y D_X \xi - D_[ X, Y ] \xi
\end{aligned}
$$
より, **Ricchi 恒等式** Ricci identity が得られる:
$$
R (X, Y) \xi = (D_X D_Y - D_Y D_X - D_{[X, Y]}) \xi.
$$

局所標構場 $\{ e_a \}$ の曲率は, 接続 $1$-形式 $A = ({A^b}_a)$ を用いて,
$$
\begin{aligned}
D^2 e_a
  &= D ({A^b}_a \otimes e_b) \\
  &= d {A^b}_a \otimes e_b - {A^b}_a \wedge D e_b \\
  &= d {A^b}_a \otimes e_b - {A^b}_a \wedge {A^c}_b \otimes e_c \\
  &= (d {A^c}_a + {A^c}_b \wedge {A^b}_a) \otimes e_c
\end{aligned}
$$
であるから, **構造方程式** structure equation が得られる:
$$
R e_a = (d {A^b}_a + {A^b}_c \wedge {A^c}_a) \otimes e_b.
$$
このとき, $R e_a = {F^b}_a \otimes e_b$ となる Lie 代数に値を取る $2$-形式 $F = ({F^b}_a) = (d {A^b}_a + {A^b}_c \wedge {A^c}_a) = dA + A \wedge A \in \Omega^2 (M, \mathrm{End}(E)) = \Gamma (\Lambda^2 (T^{*}M) \otimes \frak{g})$ を**曲率 $2$-形式** curvature $2$-form あるいは**場の強さ** field strength という. ゲージ変換 $A \mapsto A' = gdg^{-1} + gAg^{-1}$ に対して, 場の強さ $F$ の変換規則は $F \mapsto F' = gFg^{-1}$ である. また, 場の強さの外微分より, Bianchi 恒等式の別の表示が得られる:
$$
\begin{aligned}
dF
  &= d(dA + A \wedge A) \\
  &= d^2 A + d(A \wedge A) \\
  &= dA \wedge A - A \wedge dA \\
  &= (F - A \wedge A) \wedge A - A \wedge (F - A \wedge A) \\
  &= F \wedge A - A \wedge F \\
  &=: - [A, F]. \\
\end{aligned}
$$
$$
\therefore d_A F := dF + [A, F] = 0.
$$
また, ゲージ場 $A = A_\mu dx^\mu$, 場の強さ $\displaystyle F = \frac12 F_{\mu\nu} dx^\mu \wedge dx^\nu$ について,
$$
\begin{aligned}
F &= dA + A \wedge A \\
  &= d(A_\mu dx^\mu) + (A_\mu dx^\mu) \wedge (A_\nu dx^\nu) \\
  &= \partial_\nu A_\mu dx^\nu \wedge dx^\mu + A_\mu A_\nu dx^\mu \wedge dx^\nu \\
  &= \frac12 (\partial_\mu A_\nu - \partial_\nu A_\mu) dx^\mu \wedge dx^\nu + \frac12 (A_\mu A_\nu - A_\nu A_\mu) dx^\mu \wedge dx^\nu \\
  &= \frac12 (\partial_\mu A_\nu - \partial_\nu A_\mu + [A_\mu, A_\nu]) dx^\mu \wedge dx^\nu.
\end{aligned}
$$
したがって, 場の強さの成分表示は,
$$
F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu + [A_\mu, A_\nu].
$$

### 主 $G$-束の接続

## 参考文献

- 三宅 敏恒 『線形代数学―初歩からジョルダン標準形へ』 (培風館, 2008)
- 日置 善郎 『場の量子論 -摂動計算の基礎- (第3版)』 (吉岡書店, 2022)
- 日置 善郎, [場の量子論への第一歩](https://www.phys.chuo-u.ac.jp/labs/inami/seminarfile/2011/Hioki.pdf), 2011.
- 桂 太郎 『新版 演習 場の量子論』 (サイエンス社, 2006)
- 中嶋 慧, [共変解析力学のレビュー](http://physnakajima.html.xdomain.jp/CAM_rev.pdf), 2023.
- 佐古彰史 『ゲージ理論・一般相対性理論のための 微分幾何入門』 (森北出版, 2021)
- D.Husemoller, *Fibre Bundles, Third Edition* (Graduate Texts in Mathematics 20, Spinger-Verlag, New York, 1994)
- 小林昭七 『接続の微分幾何とゲージ理論』 (裳華房, 2004)
- Adam Marsh, [Gauge Theories and Fiber Bundles: Definitions, Pictures, and Results](https://arxiv.org/abs/1607.03089), 2022, arXiv:1607.03089v3.
- 坪井 俊 『幾何学III 微分形式』 (東京大学出版会, 2008)
- 池田 岳 『テンソル代数と表現論』 (東京大学出版会, 2022)