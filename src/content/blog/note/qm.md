---
title : 量子力学
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 状態ベクトルと観測量

ある物理状態は**状態ベクトル**と呼ばれる Hilbert 空間 $\mathcal{H}$ のベクトル $|ψ⟩$ で表される. 状態ベクトル $|ψ⟩$ に定数 $c ∈ ℂ$ をかけた $c |ψ⟩$ は同じ状態を表し, 状態ベクトル $|ψ⟩$ は常に正規化されているとする: $⟨ψ ∣ ψ⟩ = 1$. または, 正規化されていない状態ベクトル $|ψ'⟩$ に対し, $|ψ⟩ = |ψ'⟩ / \sqrt{⟨ψ' ∣ ψ'⟩}$ は正規化された状態ベクトルである. $\{e^{i θ} |ψ⟩\}_{θ ∈ ℝ}$ を**射線** ray といい, 同じ状態を表す状態ベクトルである.

観測により物理状態が $|ψ⟩$ から $|φ⟩$ に遷移する確率は $|⟨φ ∣ ψ⟩|^2$ で与えられ, $⟨φ ∣ ψ⟩$ を**遷移振幅**という. また, 演算子 $\^V : \mathcal{H} → \mathcal{H}$ の作用によって状態 $|ψ⟩$ が $|ψ'⟩ = \^V |ψ⟩$ になるとき, $\^{V}$ の作用によって状態が $|ψ⟩$ から $|φ⟩$ に遷移する遷移振幅は $⟨φ ∣ ψ'⟩ = ⟨φ|\^V|ψ⟩$ である.

ある物理量 $A$ を観測するとき, $A$ に対応する Hermite 演算子 $\^A : \mathcal{H} → \mathcal{H}$ の固有値 $a$ が観測される物理量で, この性質を**観測量** observable という. このとき, 物理状態は物理量 $A = a$ を観測後に固有値 $a$ に属する固有状態 $|a⟩$ に遷移する. その確率は
$$
|⟨a ∣ ψ⟩|^2 = ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ = ⟨ψ ∣ a⟩ ⟨a ∣ a⟩ ⟨a ∣ ψ⟩ = ||a⟩ ⟨a ∣ ψ⟩ |^2.
$$
また, 物理量 $A$ の期待値は
$$
\begin{aligned}
  ⟨A⟩ &:= ∫ \dd{a} a |⟨a ∣ ψ⟩|^2 = ∫ \dd{a} a ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ \\
    &= ∫ \dd{a} ⟨ψ| \^A  |a⟩ ⟨a ∣ ψ⟩ = ⟨ψ| \^A \pqty{∫ \dd{a} |a⟩ ⟨a|} |ψ⟩ \\
    &= ⟨ψ| \^A |ψ⟩.
\end{aligned}
$$

### 波動関数

ある観測量 $A$ について, 固有値 $a$ が観測される確率振幅を $ψ(a) := ⟨a ∣ ψ⟩$ と書き, **$A$ 表示した波動関数**という. このとき, 物理量 $a$ が観測される確率は$|⟨a ∣ ψ⟩|^2 = |ψ(a)|^2$ であり, 正規化条件は
$$
\begin{aligned}
  1 &= ⟨ψ ∣ ψ⟩ = ⟨ψ| \pqty{∫ \dd{a} |a⟩ ⟨a|} |ψ⟩ \\
  &= ∫ \dd{a} ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ \\
  &= ∫ \dd{a} ψ^{*}(a) ψ(a) = ∫ \dd{a} |ψ(a)|^2.
\end{aligned}
$$
また, 波動関数は状態ベクトルを固有状態によって展開したときの係数である:
$$
|ψ⟩ = \pqty{∫ \dd{a} |a⟩ ⟨a|} |ψ⟩ = ∫ \dd{a} |a⟩ ⟨a ∣ ψ⟩ = ∫ \dd{a} ψ(a) |a⟩.
$$

観測量 $B$ について, 任意の状態ベクトル $|ψ⟩$ に対し $⟨a| \^B |ψ⟩ = \^B_A ⟨a ∣ ψ⟩ = \^B_A ψ(a)$ を満たす $\^B_A : ℂ → ℂ$ が存在するとき, 観測量 $A$ に対して $\^B |ψ⟩ ↔ \^B_A ψ(a)$ の対応がある. 誤解が無いとき, 区別せず $\^B_A$ を同じ $\^B$ と書く. $B = b$ に属する固有状態 $|b⟩$ に対して $ψ_b(a) := ⟨a ∣ b⟩$ とすれば, $b$ は $\^B_A$ の固有値, $ψ_b(a)$ はそれに属する固有波動関数である:
$$
\^B_A ψ_b(a) = ⟨a| \^B |b⟩ = b ⟨a ∣ b⟩ = b ψ_b(a).
$$
また, 物理量 $B$ の期待値は,
$$
\begin{aligned}
  ⟨B⟩ &= ⟨ψ| \^B |ψ⟩ = ⟨ψ| \pqty{∫ \dd{a} |a⟩ ⟨a|} \^B |ψ⟩ \\
    &= ∫ \dd{a} ⟨ψ ∣ a⟩ ⟨a| \^B |ψ⟩ \\
    &= ∫ \dd{a} ψ^{*}(a) \^B_A ψ(a).
\end{aligned}
$$
また, 途中式より $\^B$ を $\^B_A$ を用いて表示することができる. これを **$\^B$ の $A$-表示**という:
$$
\^B = ∫ \dd{a} |a⟩ \^B_A ⟨a|
$$
実際, 期待値が等しいことから,
$$
⟨ψ| \^B |ψ⟩ = ∫ \dd{a} ψ^{*}(a) \^B_A ψ(a) = ⟨ψ| \pqty{∫ \dd{a} |a⟩ \^B_A ⟨a|} |ψ⟩
$$

### 時間発展と描像

系が時間 $t$ によって発展していく場合を考える. 状態ベクトルが時間に依存するとき, その時間発展は**時間発展演算子**と呼ばれる unitary 演算子を用いて変換される:
$$
|ψ(t)⟩ = \^U(t, t_0) |ψ(t_0)⟩.
$$
ただし, 時間発展演算子は $\^U(t_2, t_1) = \^U^†(t_1, t_2) = \^U^{-1}(t_1, t_2)$ を満たす. 時間発展演算子が時間に依存しないとき, 時刻の基準を $t = 0$ として $\^U(t) := \^U(t, 0)$ と略記する. 例えば $\^U(t_2 - t_1) = \^U(t_2, t_1) = \^U(t_2, 0) \^U^{-1}(t_1, 0)$. また, 時間発展演算子が時間に依存しない場合でも誤解が無いとき $\^U(t) := \^U(t, 0)$ と略記する.

状態ベクトルのみが時間発展し, 演算子は時間に依存しないとする方法を **Schrödinger 描像**という. 誤解が無いとき Schrödinger 描像の状態ベクトルを $|ψ(t)⟩$, $|ψ(t)⟩_\mathrm{S}$, 演算子を $\^A$, $\^A_\mathrm{S}$, 固有状態を $|a⟩$, $|a⟩_\mathrm{S}$ などと書く.

反対に, 演算子のみが時間発展し, 状態ベクトルは時間に依存しないとする方法を**Heisenberg 描像**という. 誤解が無いとき Heisenberg 描像の状態ベクトルを $|q⟩$, $|ψ⟩$, $|ψ⟩_\mathrm{H}$, 演算子を $\^A(t)$, $\^A_\mathrm{H}(t)$, $\^A_\mathrm{H}$, 固有状態を $|a,t⟩$, $|a,t⟩_\mathrm{H}$ などと書く.

どちらの描像でも初期状態 $t = 0$ で一致 $|ψ(0)⟩ = |ψ⟩$, $\^A(0) = \^A$ するとき, 確率振幅および任意の観測量 $A$ の期待値が常に等しいとすると,
$$
\begin{aligned}
  |ψ(t)⟩ &= \^U(t) |ψ⟩, \\
  \^A(t) &= \^U^{-1}(t) \^A \^U(t), \\
  |a,t⟩ &= \^U^{-1}(t) |a⟩.
\end{aligned}
$$
実際,
$$
⟨ψ ∣ ψ⟩ = ⟨ψ| \^U^{-1}(t) \^U(t) |ψ⟩ = ⟨ψ(t) ∣ ψ(t)⟩,
$$
$$
⟨ψ(t)| \^A |ψ(t)⟩ = ⟨ψ| \^U^{-1}(t) \^A \^U(t) |ψ⟩ = ⟨ψ| \^A(t) |ψ⟩.
$$
$$
ψ(a,t) = ⟨a,t ∣ ψ⟩ = ⟨a| \^U(t) |ψ⟩ = ⟨a ∣ ψ(t)⟩.
$$

観測量の固有値は描像に依らない. 実際, 観測量 $A$ に対し,
$$
\begin{aligned}
    \^A(t) |a,t⟩ &= a |a,t⟩ \\
  ⇔ \^U^{-1}(t) \^A \^U(t) \^U^{-1}(t) |a⟩ &= a \^U^{-1}(t) |a⟩ \\
  ⇔ \^U^{-1}(t) \^A |a⟩ &= \^U^{-1}(t) a |a⟩ \\
  ⇔ \^A |a⟩ &= a |a⟩ \\
\end{aligned}
$$

また交換子 $[\^A, \^B] := \^A \^B - \^B \^A$ の時間変化は
$$
\begin{aligned}
  {[}\^A(t), \^B(t){]}
    &= [\^U^{-1}(t) \^A \^U(t), \^U^{-1}(t) \^B \^U(t)] \\
    &= \^U^{-1}(t) \^A \^U(t) \^U^{-1}(t) \^B \^U(t) - \^U^{-1}(t) \^B \^U(t) \^U^{-1}(t) \^A \^U(t) \\
    &= \^U^{-1}(t) \^A \^B \^U(t) - \^U^{-1}(t) \^B \^A \^U(t) \\
    &= \^U^{-1}(t) (\^A \^B - \^B \^A) \^U(t) \\
    &= \^U^{-1}(t) [\^A, \^B] \^U(t) = [\^A, \^B]_\mathrm{H}.
\end{aligned}
$$
ただし, 演算子 $\^A_1,…$ の関数 $f(\^A_1,…)$ について, $f(\^A_1,…)_\mathrm{H} := \^U^{-1}(t) f(\^A_1,…) \^U(t)$ とした.

### 量子化

#### 正準量子化

古典力学における Poisson 括弧 $\{⋅,⋅\}_\mathrm{P}$ に対し, 量子力学における交換関係 $\displaystyle -\frac{i}{ℏ}[\^⋅,\^⋅]_\mathrm{H}$ が対応するという要請を**正準量子化**という:
$$
\{A,B\}_\mathrm{P} \overset{\text{要請}}{\mapsto} -\frac{i}{ℏ}[\^A_\mathrm{H},\^B_\mathrm{H}].
$$

正準変数 $(q^i, p_i)$ に対して正準量子化すると, 演算子 $(\^q^i, \^p_i)$ が**正準交換関係**と呼ばれる以下の対応が得られる:
$$
\begin{aligned}
  \{ q^i, p_j \}_\mathrm{P} &= δ_i^j, \\
  \overset{\text{正準量子化}}{⟶} - \frac{i}{ℏ} [{\^q^i}{}_\mathrm{H}, {\^p_j}_\mathrm{H}] &= δ_i^j, \\
  ⇔ \quad [{\^q^i}, {\^p_j}] &= iℏ δ_i^j.
\end{aligned}
$$
$$
\begin{aligned}
  \{ q^i, q^j \}_\mathrm{P} = \{ p_i, p_j \}_\mathrm{P} &= 0, \\
  \overset{\text{正準量子化}}{⟶} - \frac{i}{ℏ} [{\^q^i}{}_\mathrm{H}, {\^q^j}{}_\mathrm{H}] = - \frac{i}{ℏ} [{\^p_i}_\mathrm{H}, {\^p_j}_\mathrm{H}] &= 0. \\
  ⇔ \quad [\^q^i, \^q^j] = [\^p_i, \^p_j] &= 0. \\
\end{aligned}
$$

正準変数を変数として持つ物理量 $A = A(q^i, p_i)$ の演算子は, 正準変数の演算子を形式的に代入したもの $\^A |ψ(t)⟩ = A(\^q^i, \^p_i) |ψ(t)⟩$ である. TODO: ただし, $\^A$ が Hermite になるよう適当に正準変数の順序を調整する. また, $B$ 表示した波動関数に対する演算子 $\^A_B$ について, 同様に正準変数の演算子を代入したもの $\^A_B ψ(b,t) = A({\^q^i}{}_B, {\^p_i}{}_B) ψ(b,t)$ となるが, 正準変数の演算子が $b$ とそれの微分の関数 $({\^q^i}{}_B, {\^p_i}{}_B) = ({q^i}{}_B(b, \pdv{}{b}), {p_i}{}_B(b, \pdv{}{b}))$ であるとき, これを Schrödinger 表現という.

#### 経路積分量子化

時刻 $t_i → t_f$ の運動で粒子が $q^i := q(t_i) → q_f := q (t_f)$ へ移動するときの作用は
$$
S[q(t)] = ∫_{t_A}^{t_B} \dd{t} L(q, \.q, t)
$$
で与えられる. このとき, 状態 $|q^i,t_i⟩$ から状態 $|q_f,t_f⟩$ への確率振幅は以下であるという要請を**経路積分量子化**という:
$$
K(q_f,t_f;q^i,t_i) := ⟨q_f,t_f ∣ q^i,t_i⟩ \overset{\text{要請}}{=} \int_{q^i}^{q_f} \mathcal{D}[q(t)] e^{\frac{i}{ℏ} S[q(t)]}.
$$

位置表示の波動関数に対して以下が成立する:
$$
ψ(q_f,t_f) = ∫ \dd{{}^D q^i} K(q_f,t_f;q^i,t_i) ψ(q^i,t_i).
$$
実際,
$$
\begin{aligned}
  ψ(q_f,t_f) &= ⟨q_f,t_f ∣ ψ⟩ \\
    &= ⟨q_f,t_f| \pqty{∫ \dd{{}^D q^i} |q^i,t_i⟩ ⟨q^i,t_i|} |ψ⟩ \\
    &= ∫ \dd{{}^D q^i} ⟨q_f,t_f ∣ q^i,t_i⟩ ⟨q^i,t_i ∣ ψ⟩ \\
    &= ∫ \dd{{}^D q^i} K(q_f,t_f;q^i,t_i) ψ(q^i,t_i).
\end{aligned}
$$

### 時間発展演算子と運動方程式

#### 正準量子化

時間に依存しない物理量 $A(q^i,p_i)$ の時間発展を正準量子化して,
$$
\dv{A}{t} = \{A, H\}_\mathrm{P}
\quad \overset{\text{正準量子化}}{⟶} \quad
\dv{\^A_\mathrm{H}}{t} = -\frac{i}{ℏ}[\^A_\mathrm{H},\^H_\mathrm{H}].
$$
$$
∴ iℏ \dv{\^A_\mathrm{H}}{t} = [\^A_\mathrm{H},\^H_\mathrm{H}].
$$
ここで, 両辺それぞれ計算して,
$$
\begin{aligned}
  iℏ \dv{\^A_\mathrm{H}}{t}
    &= iℏ \dv{}{t} \bqty{\^U^{-1}(t) \^A \^U(t)} \\
    &= iℏ \dv{\^U^{-1}(t)}{t} \^A \^U(t) + iℏ \^U^{-1}(t) \^A \dv{\^U(t)}{t}, \\
  [\^A_\mathrm{H},\^H_\mathrm{H}]
    &= \^U^{-1}(t) \^A \^H \^U(t) + \^U^{-1}(t) \^H \^A \^U(t).
\end{aligned}
$$
辺々比較して,
$$
iℏ \dv{\^U(t)}{t} = \^H \^U(t).
$$
これは時間発展演算子 $\^U(t)$ に関する微分方程式であり, これを解くことで $\^U(t)$ の表示が得られる: Hamiltonian が時間に陽に依存しないとき, 時間発展演算子は時間に依存せず,
$$
\^U(t) = e^{- \frac{i}{ℏ} {t \^H}},
$$
または Hamiltonian が時間に陽に依存するとき, 時間発展演算子は時間に依存し,
$$
\^U(t, t_0) = \^T \exp \bqty{- \frac{i}{ℏ} ∫_{t_0}^t \dd{t'} \^H(t')}.
$$
ただし, $T$ は**時間順序積** time ordered product で, Heaviside の階段関数 $θ(t)$ を用いて, 以下で定義される:
$$
\begin{aligned}
  \^T \^A(t_1) \^B(t_2)
    &= θ(t_1 - t_2) \^A(t_1) \^B(t_2) + θ(t_2 - t_1) \^B(t_2) \^A(t_1) \\
    &= \begin{cases}
      \^A(t_1) \^B(t_2), & (t_1 > t_2) \\
      \^B(t_2) \^A(t_1). & (t_2 > t_1) \\
    \end{cases}
\end{aligned}
$$
実際, $\^U(t)$ に関する微分方程式を両辺積分して,
$$
\begin{aligned}
  \^U(t,t_0)
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \^H(t_1) \^U(t_1, t_0) \\
    & \quad (\text{$\^U(t_1,t_0)$ を代入}) \\
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \^H(t_1) + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \dd{t_2} \^H(t_1) \^H(t_2) \^U(t_2, t_0) \\
    & \quad (\text{繰り返し $\^U(t_j,t_0)$ を代入}) \\
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \^H(t_1) + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \dd{t_2} \^H(t_1) \^H(t_2) \\
    & \qquad \qquad + \frac1{iℏ} ∫_{t_0}^t \dd{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \dd{t_2} \frac1{iℏ} ∫_{t_0}^{t_2} \dd{t_3} \^H(t_1) \^H(t_2) \^H(t_3) + ⋯ \\
    &= ∑_{n=0}^∞ \frac1{(iℏ)^n} ∫_{t_0}^t \dd{t_1} ∫_{t_0}^{t_1} \dd{t_2} ⋯ ∫_{t_0}^{t_{n-1}} \dd{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
    &= T ∑_{n=0}^∞ \frac1{n!} \frac1{(iℏ)^n} ∫_{t_0}^t \dd{t_1} ∫_{t_0}^t \dd{t_2} ⋯ ∫_{t_0}^t \dd{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
    &= T ∑_{n=0}^∞ \frac1{n!} \bqty{\frac1{iℏ} ∫_{t_0}^t \dd{t} \^H(t)}^n \\
    &= T \exp \bqty{\frac1{iℏ} ∫_{t_0}^t \dd{t} \^H(t)}.
\end{aligned}
$$

一般に, 時間変化する $A(q^i,p_i,t)$ に関する時間発展の正準量子化は
$$
\begin{aligned}
  \dv{A}{t} &= \{A, H\}_\mathrm{P} + \pdv{A}{t} \\
  \overset{\text{正準量子化}}{⟶} \quad
  \dv{\^A_\mathrm{H}}{t} &= -\frac{i}{ℏ}[\^A_\mathrm{H},\^H_\mathrm{H}] + \pqty{\dv{\^A}{t}}_\mathrm{H}.
\end{aligned}
$$
これは観測量 $A$ の時間発展を表した方程式であり, **Heisenberg の運動方程式**という. また, $\^U(t)$ に関する微分方程式を $|ψ⟩$ に作用させると,
$$
\begin{aligned}
  iℏ \dv{\^U(t)}{t} |ψ⟩ &= \^H \^U(t) |ψ⟩. \\
  ∴ \quad iℏ \dv{}{t} |ψ(t)⟩ &= \^H |ψ(t)⟩.
\end{aligned}
$$
これは状態 $|ψ(t)⟩$ の時間発展を表した方程式であり, **Schrödinger 方程式**という. または左から $⟨q|$ を内積させて, Hamiltonian の Schrödinger 表現が得られる:
$$
\^H ψ(q, t) = ⟨q| \^H |ψ(t)⟩ = iℏ \dv{}{t} ψ(q, t).
$$

### 位置演算子と運動量演算子

#### 正準量子化

正準変数の演算子 $(\^q^i, \^p_i)$ について, 位置表示の波動関数に対して位置演算子の Schrödinger 表現は $\^q^i = q^i$ である:
$$
\^q^i ψ(q,t) = ⟨q| \^q^i |ψ(t)⟩ = q^i ⟨q ∣ ψ(t)⟩ = q^i ψ(q,t).
$$
これに対応する $\^p_i$ の表現を求める. ある定数 $a^i$ に対し, $e^{\frac{i}{ℏ} a^j \^p_j} \^q^i e^{- \frac{i}{ℏ} a^j \^p_j} = \^q^i + a^i$ である. 実際,
$$
\begin{aligned}
  \dv{(e^{\frac{i}{ℏ} a^k \^p_k} \^q^i e^{- \frac{i}{ℏ} a^k \^p_k})}{a^j}
    &=  \dv{e^{\frac{i}{ℏ} a^k \^p_k}}{a^j} \^q^i e^{- \frac{i}{ℏ} a^k \^p_k} + e^{\frac{i}{ℏ} a^k \^p_k} \^q^i \dv{e^{- \frac{i}{ℏ} a^k \^p_k}}{a^j} \\
    &=  \frac{i}{ℏ} \^p_j e^{\frac{i}{ℏ} a^k \^p_k} \^q^i e^{- \frac{i}{ℏ} a^k \^p_k} - \frac{i}{ℏ} e^{\frac{i}{ℏ} a^k \^p_k} \^q^i \^p_j e^{- \frac{i}{ℏ} a^k \^p_k} \\
    &=  \frac{i}{ℏ} \^p_j e^{\frac{i}{ℏ} a^k \^p_k} \^q^i e^{- \frac{i}{ℏ} a^k \^p_k} - \frac{i}{ℏ} e^{\frac{i}{ℏ} a^k \^p_k} (i ℏ δ_i^j + \^p_j \^q^i) e^{- \frac{i}{ℏ} a^k \^p_k} \\
    &\quad (∵ [\^q^i, \^p_j] = \^q^i \^p_j - \^p_j \^q^i = i ℏ δ_i^j) \\
    &=  \frac{i}{ℏ} \^p_j e^{\frac{i}{ℏ} a^k \^p_k} \^q^i e^{- \frac{i}{ℏ} a^k \^p_k} + δ_i^j - \frac{i}{ℏ} e^{\frac{i}{ℏ} a^k \^p_k} \^p_j \^q^i e^{- \frac{i}{ℏ} a^k \^p_k} \\
    &\quad (∵ [e^{\frac{i}{ℏ} a^k \^p_k}, \^p_j] = e^{\frac{i}{ℏ} a^k \^p_k} \^p_j - \^p_j e^{\frac{i}{ℏ} a^k \^p_k} = 0) \\
    &=  δ_i^j.
\end{aligned}
$$
したがって,
$$
\^q^i e^{- \frac{i}{ℏ} a^j \^p_j} |q⟩ = e^{- \frac{i}{ℏ} a^j \^p_j} (\^q^i + a^i) |q⟩ = (q^i + a^i) e^{- \frac{i}{ℏ} a^j \^p_j} |q⟩.
$$
$$
∴ e^{- \frac{i}{ℏ} a^i \^p_i} |q⟩ = |q+a⟩.
$$
一般の状態ベクトル $|ψ(t)⟩$ に $e^{- \frac{i}{ℏ} a^i \^p_i}$ を作用させることを考える:
$$
\begin{aligned}
  e^{- \frac{i}{ℏ} a^i \^p_i} |ψ(t)⟩
    &= e^{- \frac{i}{ℏ} a^i \^p_i} \pqty{∫ \dd{{}^D q'} |q'⟩ ⟨q'|} |ψ(t)⟩
    = ∫ \dd{{}^D q'} e^{- \frac{i}{ℏ} a^i \^p_i} |q'⟩ ⟨q' ∣ ψ(t)⟩ \\
    &= ∫ \dd{{}^D q'} ψ(q',t) |q'+a⟩ \\
    &= ∫ \dd{{}^D q'} ψ(q'-a,t) |q'⟩.
\end{aligned}
$$
左から $⟨q|$ をかけると,
$$
\begin{aligned}
  ⟨q| e^{- \frac{i}{ℏ} a^i \^p_i} |ψ(t)⟩
    &= ⟨q| ∫ \dd{{}^D q'} ψ(q'-a,t) |q'⟩ = ∫ \dd{{}^D q'} ψ(q'-a,t) ⟨q ∣ q'⟩ \\
    &= ∫ \dd{{}^D q'} ψ(q'-a,t) δ^D(q'^i - q^i) \\
    &= ψ(q-a,t).
\end{aligned}
$$
ただし固有状態の直交性 $⟨q ∣ q'⟩ = δ^D(q'^i - q^i)$ を用いた. $a$ について1次まで羃展開して,
$$
⟨q| \pqty{1_{\mathcal{H}} - \frac{i}{ℏ} a^i \^p_i} |ψ(t)⟩ = \pqty{1_{\mathcal{H}} - a^i \pdv{}{q^i}} ψ(q,t). \quad ∴  - \frac{i}{ℏ} ⟨q| \^p_i |ψ(t)⟩ = - \pdv{}{q^i} ψ(q,t).
$$
$$
∴ \^p_i ψ(q,t) = ⟨q| \^p_i |ψ(t)⟩ = - iℏ \pdv{}{q^i} ψ(q,t).
$$
したがって, 位置表示の波動関数に対する運動量演算子の Schrödinger 表現は $\displaystyle \^p_i = - iℏ \pdv{}{q^i}$ である.

固有波動関数 $ψ_p(q,t)$ に対し,
$$
- i ℏ \pdv{}{q^i} ψ_p(q,t) = \^p_i ψ_p(q,t) = p_i ψ_p(q,t).
$$
$$
∴ ψ_p(q,t) = ⟨q ∣ p⟩ = \frac1{(\sqrt{2π ℏ})^D} e^{\frac{i}{ℏ} q^i p_i}.
$$
ただし, $D$ は一般化座標の次元とし, 固有状態の直交性を満たすよう定数を取った:
$$
\begin{aligned}
  ⟨p',t ∣ p,t⟩ &= ⟨p',t| \pqty{∫ \dd{{}^Dq} |q,t⟩ ⟨q,t|} |p,t⟩ = ∫ \dd{{}^D q} ⟨p',t ∣ q,t⟩ ⟨q,t ∣ p,t⟩ \\
    &= ∫ \dd{{}^D q} ψ_{p'}^{*}(q,t) ψ_p(q,t) = ∫ \frac{\dd{{}^D q}}{(2π ℏ)^D} e^{\frac{i}{ℏ} q^i (p_i - {p'}_i)} \\
    &= δ^D(p_i - {p'}_i).
\end{aligned}
$$

### Schrödinger 方程式

#### 正準量子化

Schrödinger 方程式に $\^H = H(\^q^i, \^p_i)$ やその表現を代入したものもまた **Schrödinger 方程式**という:
$$
\begin{aligned}
  iℏ \dv{}{t} |ψ(t)⟩ &= H(\^q^i, \^p_i) |ψ(t)⟩, \\
  iℏ \dv{}{t} ψ(q, t) &= H\pqty{q^i, - iℏ \pdv{}{q^i}} ψ(q, t).
\end{aligned}
$$

##### 例: 一次元一粒子系

一次元一粒子系の Hamiltonian は
$$
H(q,p) = \frac{p^2}{2m} + V(q).
$$
正準量子化して, Hamiltonian の演算子は
$$
H(\^q^i, \^p_i) = \frac{\^p^2}{2m} + V(\^q) = - \frac{ℏ^2}{2m} \pdv{{}^2}{q^2} + V(q).
$$
したがって Schrödinger 方程式は,
$$
iℏ \dv{}{t} ψ(q, t) = \bqty{- \frac{ℏ^2}{2m} \pdv{{}^2}{q^2} + V(q)} ψ(q, t).
$$

### 参考文献

- 砂川 重信 『量子力学』(岩波書店, 1991)
- 清水 明 『新版 量子論の基礎 その本質のやさしい理解のために』 (サイエンス社, 2004)
