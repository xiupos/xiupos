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

:::screen

ある物理状態は**状態ベクトル**と呼ばれる Hilbert 空間 $\mathcal{H}$ のベクトル $|ψ⟩$ で表される.

:::

状態ベクトル $|ψ⟩$ に定数 $c ∈ ℂ$ をかけた $c |ψ⟩$ は同じ状態を表し, 断わり無いとき状態ベクトル $|ψ⟩$ は正規化されているとする: $⟨ψ ∣ ψ⟩ = 1$. または, 正規化されていない状態ベクトル $|ψ'⟩$ に対し, $|ψ⟩ = |ψ'⟩ / \sqrt{⟨ψ' ∣ ψ'⟩}$ は正規化された状態ベクトルである. $\{e^{i θ} |ψ⟩\}_{θ ∈ ℝ}$ を**射線** ray といい, 同じ状態を表す状態ベクトルである.

:::screen

観測により物理状態が $|ψ⟩$ から $|φ⟩$ に遷移する確率は $|⟨φ ∣ ψ⟩|^2$ で与えられ, $⟨φ ∣ ψ⟩$ を**遷移振幅**という.

:::

演算子 $\^V : \mathcal{H} → \mathcal{H}$ の作用によって状態 $|ψ⟩$ が $|ψ'⟩ = \^V |ψ⟩$ になるとき, $\^{V}$ の作用によって状態が $|ψ⟩$ から $|φ⟩$ に遷移する遷移振幅は $⟨φ ∣ ψ'⟩ = ⟨φ|\^V|ψ⟩$ である.

:::screen

ある物理量 $A$ を観測するとき, $A$ に対応する Hermite 演算子 $\^A : \mathcal{H} → \mathcal{H}$ の固有値 $a$ が観測される物理量で, この性質を**観測量** observable という. このとき, 物理状態は物理量 $A = a$ を観測後に固有値 $a$ に属する固有状態 $|a⟩$ に遷移する.

:::

状態 $|ψ⟩$ で観測量 $\^A$ の固有値 $a$ が観測される確率は
$$
|⟨a ∣ ψ⟩|^2 = ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ = ⟨ψ ∣ a⟩ ⟨a ∣ a⟩ ⟨a ∣ ψ⟩ = ||a⟩ ⟨a ∣ ψ⟩ |^2.
$$
また, 状態 $|ψ⟩$ に対する物理量 $A$ の期待値は
$$
\begin{aligned}
  ⟨A⟩ &:= ∫ \d{a} a |⟨a ∣ ψ⟩|^2 = ∫ \d{a} a ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ \\
    &= ∫ \d{a} ⟨ψ| \^A  |a⟩ ⟨a ∣ ψ⟩ = ⟨ψ| \^A \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ \\
    &= ⟨ψ| \^A |ψ⟩.
\end{aligned}
$$
物理量 $A$ と対応する演算子 $\^A$ を単に $A$ と書くこともある.

### 波動関数

:::screen

ある観測量 $A$ について, 固有値 $a$ が観測される確率振幅を $ψ(a) := ⟨a ∣ ψ⟩$ と書き, **$A$ 表示した波動関数**という.

:::

物理量 $a$ が観測される確率は$|⟨a ∣ ψ⟩|^2 = |ψ(a)|^2$ であり, 正規化条件は
$$
\begin{aligned}
  1 &= ⟨ψ ∣ ψ⟩ = ⟨ψ| \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ \\
  &= ∫ \d{a} ⟨ψ ∣ a⟩ ⟨a ∣ ψ⟩ \\
  &= ∫ \d{a} ψ^{*}(a) ψ(a) = ∫ \d{a} |ψ(a)|^2.
\end{aligned}
$$
また, 波動関数は状態ベクトルを固有状態によって展開したときの係数である:
$$
|ψ⟩ = \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ = ∫ \d{a} |a⟩ ⟨a ∣ ψ⟩ = ∫ \d{a} ψ(a) |a⟩.
$$

:::screen

観測量 $B$ について, 任意の状態ベクトル $|ψ⟩$ に対し $⟨a| \^B |ψ⟩ = \^B_A ⟨a ∣ ψ⟩ = \^B_A ψ(a)$ を満たす $\^B_A : ℂ → ℂ$ が存在するとき, 観測量 $A$ に対して $\^B |ψ⟩ ↔ \^B_A ψ(a)$ の対応がある.

:::

誤解が無いとき, 区別せず $\^B_A$ を同じ $\^B$ と書く. $B = b$ に属する固有状態 $|b⟩$ に対して $ψ_b(a) := ⟨a ∣ b⟩$ とすれば, $b$ は $\^B_A$ の固有値, $ψ_b(a)$ はそれに属する固有波動関数である:
$$
\^B_A ψ_b(a) = ⟨a| \^B |b⟩ = b ⟨a ∣ b⟩ = b ψ_b(a).
$$
また, 物理量 $B$ の期待値は,
$$
\begin{aligned}
  ⟨B⟩ &= ⟨ψ| \^B |ψ⟩ = ⟨ψ| \pqty{∫ \d{a} |a⟩ ⟨a|} \^B |ψ⟩ \\
    &= ∫ \d{a} ⟨ψ ∣ a⟩ ⟨a| \^B |ψ⟩ \\
    &= ∫ \d{a} ψ^{*}(a) \^B_A ψ(a).
\end{aligned}
$$
また, 途中式より $\^B$ を $\^B_A$ を用いて表示することができる. これを **$\^B$ の $A$-表示**という:
$$
\^B = ∫ \d{a} |a⟩ \^B_A ⟨a|
$$
実際, 期待値が等しいことから,
$$
⟨ψ| \^B |ψ⟩ = ∫ \d{a} ψ^{*}(a) \^B_A ψ(a) = ⟨ψ| \pqty{∫ \d{a} |a⟩ \^B_A ⟨a|} |ψ⟩
$$

### 時間発展と描像

系が時間 $t$ によって発展していく場合を考える.

:::screen

状態ベクトルが時間に依存するとき, その時間発展は**時間発展演算子**と呼ばれる unitary 演算子を用いて変換される:
$$
|ψ(t)⟩ = \^U(t, t_0) |ψ(t_0)⟩.
$$
ただし, $\^U(t_2, t_1) = \^U^†(t_1, t_2) = \^U^{-1}(t_1, t_2)$ を満たす.

:::

時間発展演算子が時間に依存しないとき, 時刻の基準を $t = 0$ として $\^U(t) := \^U(t, 0)$ と略記する. 例えば $\^U(t_2 - t_1) = \^U(t_2, t_1) = \^U(t_2, 0) \^U^{-1}(t_1, 0)$. また, 時間発展演算子が時間に依存する場合でも, 誤解が無いとき $\^U(t) := \^U(t, 0)$ と略記する.

:::screen

状態ベクトルのみが時間発展し, 演算子は時間に依存しないとする方法を **Schrödinger 描像** *Schrödinger picture* という. Schrödinger 描像の演算子, 状態ベクトル, 固有状態を以下のように書く:
$$
\begin{aligned}
  \textsf{演算子} \quad &: \quad \^A, && \^A_\mathrm{S}, \\
  \textsf{状態ベクトル} \quad &: \quad |ψ(t)⟩, && |ψ(t)⟩_\mathrm{S}, \\
  \textsf{固有状態} \quad &: \quad |a⟩, && |a⟩_\mathrm{S}, \\
\end{aligned}
$$

:::

:::screen

演算子のみが時間発展し, 状態ベクトルは時間に依存しないとする方法を **Heisenberg 描像** *Heisenberg picture* という. Heisenberg 描像の演算子, 状態ベクトル, 固有状態を以下のように書く:
$$
\begin{aligned}
  \textsf{演算子} \quad &: \quad \^A(t), && \^A_\mathrm{H}(t), \\
  \textsf{状態ベクトル} \quad &: \quad |ψ⟩, && |ψ⟩_\mathrm{H}, \\
  \textsf{固有状態} \quad &: \quad |a,t⟩, && |a,t⟩_\mathrm{H}, \\
\end{aligned}
$$

:::

どちらの描像でも初期状態 $t = 0$ で一致 $|ψ(0)⟩ = |ψ⟩$, $\^A(0) = \^A$ するとき, 正規化条件, 確率振幅および任意の観測量 $A$ の期待値が常に等しいとすると,
$$
\begin{aligned}
  \^A(t) &= \^U^{-1}(t) \^A \^U(t), \\
  |ψ⟩ &= \^U^{-1}(t) |ψ(t)⟩, \\
  |a,t⟩ &= \^U^{-1}(t) |a⟩. \\
\end{aligned}
$$
実際,
$$
\begin{gathered}
  ⟨ψ ∣ ψ⟩ = ⟨ψ| \^U^{-1}(t) \^U(t) |ψ⟩ = ⟨ψ(t) ∣ ψ(t)⟩, \\
  ψ(a,t) = ⟨a,t ∣ ψ⟩ = ⟨a| \^U(t) |ψ⟩ = ⟨a ∣ ψ(t)⟩, \\
  ⟨A⟩ = ⟨ψ(t)| \^A |ψ(t)⟩ = ⟨ψ| \^U^{-1}(t) \^A \^U(t) |ψ⟩ = ⟨ψ| \^A(t) |ψ⟩. \\
\end{gathered}
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
    &= \^U^{-1}(t) [\^A, \^B] \^U(t) \\
    &=: [\^A, \^B]_\mathrm{H}.
\end{aligned}
$$

### 正準量子化

:::screen

古典力学における Poisson 括弧 $\{⋅,⋅\}_\mathrm{P}$ に対し, 量子力学における交換関係 $\displaystyle -\frac{i}{ℏ}[\^⋅,\^⋅]_\mathrm{H}$ が対応するという要請を**正準量子化**という:
$$
\{A,B\}_\mathrm{P} \overset{\text{要請}}{\mapsto} -\frac{i}{ℏ}[\^A_\mathrm{H},\^B_\mathrm{H}].
$$

:::

正準変数 $(q^i, p_i)$ に対して正準量子化すると,
$$
\begin{aligned}
  \{ q^i, p_j \}_\mathrm{P} &= δ_i^j, \\
  \overset{\text{正準量子化}}{⟶} - \frac{i}{ℏ} [{\^q^i}{}_\mathrm{H}, {\^p_j}{}_\mathrm{H}] &= δ_i^j, \\
\end{aligned}
$$
$$
\begin{aligned}
  \{ q^i, q^j \}_\mathrm{P} = \{ p_i, p_j \}_\mathrm{P} &= 0, \\
  \overset{\text{正準量子化}}{⟶} \frac1{iℏ} [{\^q^i}{}_\mathrm{H}, {\^q^j}{}_\mathrm{H}] = \frac1{iℏ} [{\^p_i}{}_\mathrm{H}, {\^p_j}{}_\mathrm{H}] &= 0. \\
\end{aligned}
$$
したがって, 演算子 $(\^q^i, \^p_i)$ の交換関係が得られる:

:::screen

正準変数の演算子 $(\^q^i, \^p_i)$ は**正準交換関係**をと呼ばれる以下の交換関係を満たす:
$$
\begin{gathered}
  {[}{\^q^i}, {\^p_j}{]} = iℏ δ_i^j, \\
  [\^q^i, \^q^j] = [\^p_i, \^p_j] = 0.
\end{gathered}
$$

:::

正準変数を変数として持つ物理量 $A = A(q^i, p_i)$ に対応する演算子は, 正準変数の演算子を形式的に代入したものである:
$$
A = A(q^i, p_i)
\quad \overset{\text{正準量子化}}{⟶} \quad
\^A |ψ(t)⟩ = A(\^q^i, \^p_i) |ψ(t)⟩.
$$
TODO: ただし, $\^A$ が Hermite になるよう量子化前に正準変数の順序を調整する.

また, $B$ 表示した波動関数に対する演算子 $\^A_B$ について, 同様に正準変数の演算子を代入したものとなる:
$$
A = A(q^i, p_i)
\quad \overset{\text{正準量子化}}{⟶} \quad
\^A_B ψ(b,t) = A({\^q^i}{}_B, {\^p_i}{}_B) ψ(b,t).
$$
特に, 正準変数の演算子が $b$ とそれの微分の関数 $({\^q^i}{}_B, {\^p_i}{}_B) = ({q^i}{}_B(b, \pdv{}{b}), {p_i}{}_B(b, \pdv{}{b}))$ であるとき, これを Schrödinger 表現という.

### 時間発展演算子と運動方程式

時間発展演算子の具体的な表式と, 系の時間発展を記述する運動方程式を求める.

時間に依存する物理量 $A(q^i,p_i,t)$ の時間発展を正準量子化して,
$$
\begin{aligned}
  \dv{A}{t} &= \{A, H\}_\mathrm{P} + \pdv{A}{t} \\
  \overset{\text{正準量子化}}{⟶} \quad
  \dv{\^A_\mathrm{H}}{t} &= \frac1{iℏ}[\^A_\mathrm{H},\^H] + \pqty{\dv{\^A}{t}}_\mathrm{H} \\
  ⇔ iℏ \dv{\^A_\mathrm{H}}{t} &= [\^A_\mathrm{H},\^H] + iℏ \pqty{\dv{\^A}{t}}_\mathrm{H} \\
\end{aligned}
$$
これは観測量 $A$ の時間発展を表した方程式である:

:::screen

時間に依存する物理量 $A(q^i,p_i,t)$ に対応する演算子 $\^A(q^i,p_i,t)$ の時間発展は以下であり, これを **Heisenberg の運動方程式** *Heisenberg equation* という:
$$
iℏ \dv{\^A_\mathrm{H}}{t} = [\^A_\mathrm{H},\^H] + iℏ \pqty{\dv{\^A}{t}}_\mathrm{H}.
$$

:::

特に, 時間に依存しない物理量 $A(q^i,p_i)$ の Heisenberg の運動方程式は,
$$
iℏ \dv{\^A_\mathrm{H}}{t} = [\^A_\mathrm{H},\^H].
$$
この運動方程式を用いて, 時間発展演算子 $\^U(t)$ の具体的な表式を求める. 両辺それぞれ計算して,
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
これは時間発展演算子 $\^U(t)$ に関する微分方程式であり, これを解くことで $\^U(t)$ の表式が得られる:

:::screen

Hamiltonian が時間に陽に依存しないとき, 時間発展演算子は時間に依存せず,
$$
\^U(t) = e^{- \frac{i}{ℏ} {t \^H}},
$$
または Hamiltonian が時間に陽に依存するとき, 時間発展演算子は時間に依存し,
$$
\^U(t, t_0) = T \exp \bqty{- \frac{i}{ℏ} ∫_{t_0}^t \d{t'} \^H(t')}.
$$

:::

ただし, $T$ は**時間順序積** time ordered product で, 演算子の積を時間の順序関係に応じて並び替える: Heaviside の階段関数 $θ(t)$ を用いて,
$$
\begin{aligned}
  T \^A(t_1) \^B(t_2)
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
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \^H(t_1) \^U(t_1, t_0) \\
    & \quad (\text{$\^U(t_1,t_0)$ を代入}) \\
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \^H(t_1) + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \d{t_2} \^H(t_1) \^H(t_2) \^U(t_2, t_0) \\
    & \quad (\text{繰り返し $\^U(t_j,t_0)$ を代入}) \\
    &= 1 + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \^H(t_1) + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \d{t_2} \^H(t_1) \^H(t_2) \\
    & \qquad \qquad + \frac1{iℏ} ∫_{t_0}^t \d{t_1} \frac1{iℏ} ∫_{t_0}^{t_1} \d{t_2} \frac1{iℏ} ∫_{t_0}^{t_2} \d{t_3} \^H(t_1) \^H(t_2) \^H(t_3) + ⋯ \\
    &= ∑_{n=0}^∞ \frac1{(iℏ)^n} ∫_{t_0}^t \d{t_1} ∫_{t_0}^{t_1} \d{t_2} ⋯ ∫_{t_0}^{t_{n-1}} \d{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
    & \quad (\text{$t>t_1>…>t_{n-1}$ であることに注意して, 時間順序積を作用させる}) \\
    &= T ∑_{n=0}^∞ \frac1{n!} \frac1{(iℏ)^n} ∫_{t_0}^t \d{t_1} ∫_{t_0}^t \d{t_2} ⋯ ∫_{t_0}^t \d{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
    &= T ∑_{n=0}^∞ \frac1{n!} \bqty{\frac1{iℏ} ∫_{t_0}^t \d{t} \^H(t)}^n \\
    &= T \exp \bqty{\frac1{iℏ} ∫_{t_0}^t \d{t} \^H(t)}.
\end{aligned}
$$

$\^U(t)$ に関する微分方程式 $iℏ \d{\^U(t)} / \d{t} = \^H \^U(t)$ を $|ψ⟩$ に作用させると,
$$
\begin{aligned}
  iℏ \dv{\^U(t)}{t} |ψ⟩ &= \^H \^U(t) |ψ⟩. \\
  ∴ \quad iℏ \dv{}{t} |ψ(t)⟩ &= \^H |ψ(t)⟩.
\end{aligned}
$$
これは状態 $|ψ(t)⟩$ の時間発展を表した方程式である:

:::screen

状態 $|ψ(t)⟩$ 時間発展は以下であり, これを **Schrödinger の運動方程式** *Schrödinger equation* という:
$$
iℏ \dv{}{t} |ψ(t)⟩ = \^H |ψ(t)⟩.
$$

:::

Schrödinger の運動方程式に左から $⟨q|$ を内積させると,
$$
⟨q| \^H |ψ(t)⟩ = iℏ \pdv{}{t} ψ(q, t).
$$
これは Hamiltonian の Schrödinger 表現 $\^H ψ(q, t) = ⟨q| \^H |ψ(t)⟩$ である:

:::screen

位置 $q$ 表示の波動関数 $ψ(q, t)$ に対して, Hamiltonian $\^H$ の Schrödinger 表現は,
$$
\^H ψ(q, t) = iℏ \pdv{}{t} ψ(q, t).
$$

:::

### 位置演算子と運動量演算子

正準変数の演算子 $(\^q^i, \^p_i)$ について Schrödinger 表現を求める.

:::screen

位置 $q$ 表示の波動関数 $ψ(q, t)$ に対して, 位置演算子 $\^q$ の Schrödinger 表現は,
$$
\^q^i ψ(q, t) = q^i ψ(q, t).
$$

:::

実際,
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
    &= e^{- \frac{i}{ℏ} a^i \^p_i} \pqty{∫ \d{{}^D q'} |q'⟩ ⟨q'|} |ψ(t)⟩
    = ∫ \d{{}^D q'} e^{- \frac{i}{ℏ} a^i \^p_i} |q'⟩ ⟨q' ∣ ψ(t)⟩ \\
    &= ∫ \d{{}^D q'} ψ(q',t) |q'+a⟩ \\
    &= ∫ \d{{}^D q'} ψ(q'-a,t) |q'⟩.
\end{aligned}
$$
左から $⟨q|$ をかけると,
$$
\begin{aligned}
  ⟨q| e^{- \frac{i}{ℏ} a^i \^p_i} |ψ(t)⟩
    &= ⟨q| ∫ \d{{}^D q'} ψ(q'-a,t) |q'⟩ = ∫ \d{{}^D q'} ψ(q'-a,t) ⟨q ∣ q'⟩ \\
    &= ∫ \d{{}^D q'} ψ(q'-a,t) δ^D(q'^i - q^i) \\
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

:::screen

位置 $q$ 表示の波動関数 $ψ(q, t)$ に対して, 運動量演算子 $\^p$ の Schrödinger 表現は,
$$
\^p_i ψ(q, t) = - iℏ \pdv{}{q^i} ψ(q, t).
$$

:::

固有波動関数 $ψ_p(q,t)$ に対し,
$$
- i ℏ \pdv{}{q^i} ψ_p(q,t) = \^p_i ψ_p(q,t) = p_i ψ_p(q,t).
$$
$$
∴ ψ_p(q,t) = ⟨q ∣ p⟩ = \frac1{(\sqrt{2π ℏ})^D} e^{\frac{i}{ℏ} q^i p_i}.
$$
ただし, $D$ は座標 $q$ の次元とし, 固有状態の直交性を満たすよう定数を決めた:
$$
\begin{aligned}
  ⟨p',t ∣ p,t⟩ &= ⟨p',t| \pqty{∫ \d{{}^Dq} |q,t⟩ ⟨q,t|} |p,t⟩ = ∫ \d{{}^D q} ⟨p',t ∣ q,t⟩ ⟨q,t ∣ p,t⟩ \\
    &= ∫ \d{{}^D q} ψ_{p'}^{*}(q,t) ψ_p(q,t) = ∫ \frac{\d{{}^D q}}{(2π ℏ)^D} e^{\frac{i}{ℏ} q^i (p_i - {p'}_i)} \\
    &= δ^D(p_i - {p'}_i).
\end{aligned}
$$

### Schrödinger 方程式

:::screen

Schrödinger の運動方程式に $\^H = H(\^q^i, \^p_i)$ やその表現を代入したものもまた **Schrödinger 方程式**という: 位置 $q$ 表示では,
$$
\begin{aligned}
  iℏ \pdv{}{t} ψ(q, t) &= H\pqty{q^i, - iℏ \pdv{}{q^i}} ψ(q, t).
\end{aligned}
$$
:::

TODO: 定常状態の Schrödinger 方程式

#### 例: 一次元一粒子系

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
iℏ \pdv{}{t} ψ(q, t) = \bqty{- \frac{ℏ^2}{2m} \pdv{{}^2}{q^2} + V(q)} ψ(q, t).
$$

### 生成・消滅演算子

:::screen

演算子 $\^a$ とその Hermite 共役 $\^a^†$ が次の交換関係を満たすとき, $\^a$ を**消滅演算子** annihilation operator, $\^a^†$ を**生成演算子** creation operator という:
$$
\begin{gathered}
{}[\^a, \^a^†] = 1, \\
  [\^a, \^a] = [\^a^†, \^a^†] = 0.
\end{gathered}
$$
また, Hermite 演算子 $\^N ≡ \^a^† \^a$ を**数演算子** the number operation といい, $\^N$ の固有値 $n$ に属する固有状態を $|n⟩$ とする:
$$
\^N|n⟩ = n|n⟩.
$$

:::

$\^a^†|n⟩$ は固有値 $n+1$ に属する固有状態である:
$$
\begin{aligned}
  \^N\^a^†|n⟩
    &= \^a^†\^a\^a^†|n⟩ \\
    &= \^a^†(\^a^†\^a + 1)|n⟩ \\
    &= \^a^†(\^N + 1)|n⟩ \\
    &= (n + 1)\^a^†|n⟩.
\end{aligned}
$$
したがって $|n+1⟩$ は $\^a^†|n⟩$ を正規化して,
$$
\begin{gathered}
  |n+1⟩ = \frac{\^a^†|n⟩}{\sqrt{⟨n|\^a\^a^†|n⟩}} = \frac{\^a^†|n⟩}{\sqrt{⟨n|(\^N + 1)|n⟩}} = \frac{\^a^†|n⟩}{\sqrt{n+1}}. \\
  ∴ \^a^†|n⟩ = \sqrt{n+1}|n+1⟩.
\end{gathered}
$$
また, 同様に $\^a|n⟩$ は固有値 $n-1$ に属する固有状態である:
$$
\begin{aligned}
  \^N\^a|n⟩
    &= \^a^†\^a\^a|n⟩ \\
    &= (\^a\^a^† - 1)\^a|n⟩ \\
    &= \^a(\^a^†\^a - 1)|n⟩ \\
    &= \^a(\^N - 1)|n⟩ \\
    &= (n - 1)\^a|n⟩.
\end{aligned}
$$
したがって $|n-1⟩$ は $\^a|n⟩$ を正規化して,
$$
\begin{gathered}
  |n-1⟩ = \frac{\^a|n⟩}{\sqrt{⟨n|\^a^†\^a|n⟩}} = \frac{\^a|n⟩}{\sqrt{⟨n|\^N|n⟩}} = \frac{\^a|n⟩}{\sqrt{n}}. \\
  ∴ \^a|n⟩ = \sqrt{n}|n-1⟩.
\end{gathered}
$$
特に $n=0$ のときの状態 $|0⟩$ を真空状態といい, $\^a|0⟩ = 0$ を満たす. $n<0$ は許されない: ある固有値 $n<0$ に属する固有状態 $|n⟩$ に対し,
$$
n = ⟨n|\^N|n⟩ = ⟨n|\^a^†\^a|n⟩ = ⟨\^an∣\^an⟩ ≥ 0.
$$
ただし $|\^an⟩ ≡ \^a|n⟩$. これは $n<0$ に矛盾する. したがって, $n≥0$ である. また, $n$ が正の非整数とすると, 繰り返し $\^a$ を左右することで $n$ を負にすることができてしまうから, $n$ は非整数ではない. したがって, $n = 0,1,2,…$.

<!-- TODO: 調和振動子による例 -->

### 不確定性原理

物理量の分散
$$
(ΔA)^2 := ⟨(A-⟨A⟩)^2⟩
$$
に対し, 以下の関係が成立する:
$$
(ΔA)^2 (ΔB)^2 \geq \frac14 \abs{⟨[A,B]⟩}^2.
$$
実際,
$$
\begin{aligned}
  (ΔA)^2 (ΔB)^2
    &= ⟨(A-⟨A⟩)^2⟩ ⟨(B-⟨B⟩)^2⟩ \\
    &≥ \abs{⟨(A-⟨A⟩)(B-⟨B⟩)⟩}^2 \\
    &≥ \abs{\Im{⟨(A-⟨A⟩)(B-⟨B⟩)⟩}}^2 \\
    &≥ \frac14\abs{⟨(A-⟨A⟩)(B-⟨B⟩)⟩ - ⟨(B-⟨B⟩)(A-⟨A⟩)⟩}^2 \\
    &= \frac14\abs{⟨[A-⟨A⟩,B-⟨B⟩]⟩}^2 \\
    &= \frac14\abs{⟨[A,B]⟩}^2. \\
\end{aligned}
$$

### 相互作用描像

:::screen

Hamiltonian $\^H$ を, 相互作用を含まない自由項 $H_0$ と相互作用項 $H_\mathrm{I}$ に分ける:
$$
H(t) = H_0 + H_\mathrm{I}(t).
$$
このとき, 以下を満たす演算子 $\^A_\mathrm{T}(t)$ と状態ベクトル $|ψ(t)⟩$ は**相互作用描像** Interaction picture と呼ばれる:
$$
\begin{gathered}
  iℏ \dv{\^A_\mathrm{T}}{t} = [\^A_\mathrm{T},\^H_0], \\
  iℏ \dv{}{t} |ψ(t)⟩_\mathrm{T} = \^H_\mathrm{I} |ψ(t)⟩_\mathrm{T}.
\end{gathered}
$$

:::

第 1 式より, Schrödinger 描像と相互作用描像の演算子の対応が得られる:
$$
\^A_\mathrm{T}(t) = e^{i\^H_0(t-t_0)} \^A e^{-i\^H_0(t-t_0)}.
$$
また, 期待値がどの描像でも等しいという条件
$$
{}_\mathrm{T}⟨ψ(t)| \^A_\mathrm{T}(t) |ψ(t)⟩_\mathrm{T} = {}_\mathrm{T}⟨ψ(t)| e^{i\^H_0(t-t_0)} \^A e^{-i\^H_0(t-t_0)} |ψ(t)⟩_\mathrm{T} = ⟨ψ(t)| \^A |ψ(t)⟩
$$
より, Schrödinger 描像と相互作用描像の状態ベクトルの対応が得られる:
$$
|ψ(t)⟩ = e^{-i\^H_0(t-t_0)} |ψ(t)⟩_\mathrm{T}.
$$
また, 時間発展演算子と同様の議論から,
$$
|ψ(t)⟩_\mathrm{T} = T \exp \bqty{- \frac{i}{ℏ} ∫_{t_0}^t \d{t'} \^H_\mathrm{I}(t')} |ψ(t_0)⟩_\mathrm{T}
$$

### 経路積分量子化

時刻 $t_i$ から $t_f$ の運動で粒子が $q_i := q(t_i)$ から $q_f := q (t_f)$ へ移動するときの作用は
$$
S[q(t)] = ∫_{t_i}^{t_f} \d{t} L(q, \.q, t)
$$
で与えられる. このとき, 汎関数積分を用いた次の量子化が定義される:

:::screen

状態 $|q_i,t_i⟩$ から状態 $|q_f,t_f⟩$ への確率振幅は以下であるという要請を**経路積分量子化** *Path integral formulation* という:
$$
\begin{gathered}
  K(q_f,t_f;q_i,t_i) := ⟨q_f,t_f ∣ q_i,t_i⟩ \overset{\text{要請}}{=} \int_{q_i}^{q_f} \mathcal{D}q \ e^{\frac{i}{ℏ} S[q(t)]}.
\end{gathered}
$$
また, この $K(q_f,t_f;q_i,t_i)$ を**時間発展 Green 関数**という.

:::

位置表示の波動関数に対して以下が成立する:
$$
ψ(q_f,t_f) = ∫ \d{{}^D q_i} K(q_f,t_f;q_i,t_i) ψ(q_i,t_i).
$$
実際,
$$
\begin{aligned}
  ψ(q_f,t_f) &= ⟨q_f,t_f ∣ ψ⟩ \\
    &= ⟨q_f,t_f| \pqty{∫ \d{{}^D q_i} |q_i,t_i⟩ ⟨q_i,t_i|} |ψ⟩ \\
    &= ∫ \d{{}^D q_i} ⟨q_f,t_f ∣ q_i,t_i⟩ ⟨q_i,t_i ∣ ψ⟩ \\
    &= ∫ \d{{}^D q_i} K(q_f,t_f;q_i,t_i) ψ(q_i,t_i).
\end{aligned}
$$

#### 例: 一次元自由一粒子系

一次元自由一粒子系の Lagrangian は
$$
L(q,\.q,t) = \frac{m}{2} \.q^2.
$$
このときの時間発展 Green 関数を求めると,
$$
\begin{aligned}
  K(q_f,t_f;q_i,t_i)
    &= ∫\mathcal{D}q \ \exp\bqty{\frac{i}{ℏ} ∫_{t_i}^{t_f} \d{t} \frac{m}{2} \.q^2} \\
    &= \sqrt{\frac{m}{2πiℏ(t_f-t_i)}} \exp\bqty{\frac{im(q_f-q_i)^2}{2ℏ(t_f-t_i)}}. \\
\end{aligned}
$$
したがって, 一般の位置表示の波動関数 $ψ(q,t)$ は,
$$
ψ(q,t) = \sqrt{\frac{m}{2πiℏ(t-t_0)}} \exp\bqty{\frac{im(q-q_0)^2}{2ℏ(t-t_0)}} × ψ(q_0,t_0).
$$

### 参考文献

- 清水 明 『新版 量子論の基礎 その本質のやさしい理解のために』 (サイエンス社, 2004)
- 杉田 勝実, 岡本 良夫, 関根 松夫 『経路積分と量子電磁力学』(森北出版, 1998)
