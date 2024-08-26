---
title : 粒子系の量子論ノート
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

粒子系[^particles]の量子論の基本事項を体系的にまとめる.

[^particles]: [古典論](./field-c.md)同様, ここでの「粒子系」は「(一般的な意味での)場でない」程度の意味である.

### 状態ベクトルと観測量

まずは演算子形式と呼ばれる量子論の定式化を与える.

:::screen

ある物理状態は**状態ベクトル** *state vector* と呼ばれる Hilbert 空間 $\mathcal{H}$ のベクトル $|ψ⟩$ で表される.

:::

状態ベクトル $|ψ⟩$ に定数 $c ∈ ℂ$ をかけた $c |ψ⟩$ は同じ状態を表し, 可能な限り[^norm]状態ベクトル $|ψ⟩$ は正規化されているとする: $⟨ψ | ψ⟩ = 1$. または, 正規化されていない状態ベクトル $|ψ'⟩$ に対し, $|ψ⟩ = |ψ'⟩ / \sqrt{⟨ψ' | ψ'⟩}$ は正規化された状態ベクトルである. $\{e^{i θ} |ψ⟩\}_{θ ∈ ℝ}$ を**射線** ray といい, 同じ状態を表す状態ベクトルである.

[^norm]: ノルム $|⟨ψ|ψ⟩|^2$ が有限値に収束するときに限る. 例えば後述の位置の固有状態 $|q⟩$ のノルムは発散する: $⟨q|q⟩=δ^D(q-q)=δ^D(0)$.

状態ベクトルの内積は, 状態間の遷移確率を与える.

:::screen

物理状態が $|ψ⟩$ から $|φ⟩$ に遷移する確率は $|⟨φ | ψ⟩|^2$ で与えられ, $⟨φ | ψ⟩$ を**遷移振幅**という.

:::

演算子 $\^V:\mathcal{H}→\mathcal{H}$ の作用によって状態 $|ψ⟩$ が $|ψ'⟩ = \^V |ψ⟩$ になるとき, $\^{V}$ の作用によって状態が $|ψ⟩$ から $|φ⟩$ に遷移する遷移振幅は $⟨φ | ψ'⟩ = ⟨φ|\^V|ψ⟩$ である.

量子論における物理量は演算子で表される. 状態がその演算子によって変わらないとき(固有状態)に, 古典論的な物理量は係数(固有値)として現れる.

:::screen

ある物理量 $A$ を観測するとき, $A$ に対応する Hermite 演算子 $\^A : \mathcal{H} → \mathcal{H}$ の固有値 $a$ が観測される物理量で, この性質を**観測量** observable という. このとき, 物理状態は物理量 $A = a$ を観測後に固有値 $a$ に属する固有状態 $|a⟩$ に遷移する.

:::

状態 $|ψ⟩$ で観測量 $\^A$ の固有値 $a$ が観測される確率は
$$
|⟨a | ψ⟩|^2 = ⟨ψ | a⟩ ⟨a | ψ⟩ = ⟨ψ | a⟩ ⟨a | a⟩ ⟨a | ψ⟩ = ||a⟩ ⟨a | ψ⟩ |^2.
$$
また, 状態 $|ψ⟩$ に対する物理量 $A$ の期待値は
$$
\begin{aligned}
  ⟨A⟩ &≡ ∫ \d{a} a |⟨a | ψ⟩|^2 = ∫ \d{a} a ⟨ψ | a⟩ ⟨a | ψ⟩ \\
    &= ∫ \d{a} ⟨ψ| \^A  |a⟩ ⟨a | ψ⟩ = ⟨ψ| \^A \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ \\
    &= ⟨ψ| \^A |ψ⟩.
\end{aligned}
$$
物理量 $A$ と対応する演算子 $\^A$ を単に $A$ と書くこともある.

Hilbert 空間の性質から, 固有状態はそれぞれ直交している:
$$
\begin{aligned}
  \textsf{連続スペクトル} \quad &:& ⟨a|b⟩ &= δ^D(a-b), \\
  \textsf{離散スペクトル} \quad &:& ⟨m|n⟩ &= δ_{mn}. \\
\end{aligned}
$$
また, 固有状態は完全系をなす:
$$
\begin{aligned}
  \textsf{連続スペクトル} \quad &:& ∫\d{a}|a⟩⟨a| &= 1, \\
  \textsf{離散スペクトル} \quad &:& ∑_n|n⟩⟨n| &= 1. \\
\end{aligned}
$$

### 波動関数

:::screen

ある観測量 $A$ について, 固有値 $a$ が観測される確率振幅を $ψ(a) ≡ ⟨a | ψ⟩$ と書き, **$A$ 表示した波動関数**という.

:::

物理量 $a$ が観測される確率は$|⟨a | ψ⟩|^2 = |ψ(a)|^2$ であり, 正規化条件は
$$
\begin{aligned}
  1 &= ⟨ψ | ψ⟩ = ⟨ψ| \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ \\
  &= ∫ \d{a} ⟨ψ | a⟩ ⟨a | ψ⟩ \\
  &= ∫ \d{a} ψ^{*}(a) ψ(a) = ∫ \d{a} |ψ(a)|^2.
\end{aligned}
$$
また, 波動関数は状態ベクトルを固有状態によって展開したときの係数である:
$$
|ψ⟩ = \pqty{∫ \d{a} |a⟩ ⟨a|} |ψ⟩ = ∫ \d{a} |a⟩ ⟨a | ψ⟩ = ∫ \d{a} ψ(a) |a⟩.
$$

:::screen

観測量 $B$ について, 任意の状態ベクトル $|ψ⟩$ に対し
$$
⟨a| \^B |ψ⟩ = \^B_A ⟨a | ψ⟩ = \^B_A ψ(a)
$$
を満たす波動関数に対する演算子 $\^B_A : ℂ → ℂ$ が存在するとき, 観測量 $A$ に対して $\^B |ψ⟩ ↔ \^B_A ψ(a)$ の対応がある.

:::

誤解が無いとき, 区別せず $\^B_A$ を同じ $\^B$ と書く. $B = b$ に属する固有状態 $|b⟩$ に対して $ψ_b(a) ≡ ⟨a | b⟩$ とすれば, $b$ は $\^B_A$ の固有値, $ψ_b(a)$ はそれに属する固有波動関数である:
$$
\^B_A ψ_b(a) = ⟨a| \^B |b⟩ = b ⟨a | b⟩ = b ψ_b(a).
$$
また, 物理量 $B$ の期待値は,
$$
\begin{aligned}
  ⟨B⟩ &= ⟨ψ| \^B |ψ⟩ = ⟨ψ| \pqty{∫ \d{a} |a⟩ ⟨a|} \^B |ψ⟩ \\
    &= ∫ \d{a} ⟨ψ | a⟩ ⟨a| \^B |ψ⟩ \\
    &= ∫ \d{a} ⟨ψ | a⟩ \^B_A ⟨a | ψ⟩ \\
    &= ∫ \d{a} ψ^{*}(a) \^B_A ψ(a).
\end{aligned}
$$
また, 途中式より, $\^B$ を $\^B_A$ を用いて表示することができる. これを **$\^B$ の $A$-表示**という:
$$
\^B = ∫ \d{a} |a⟩ \^B_A ⟨a|.
$$

### 時間発展と描像

系が時間 $t$ によって発展していく表現を考える.

:::screen

状態ベクトルが時間に依存するとき, その時間発展は**時間発展演算子**と呼ばれる unitary 演算子を用いて変換される:
$$
|ψ(t)⟩ = \^U(t, t_0) |ψ(t_0)⟩.
$$
ただし, $\^U(t_2, t_1) = \^U^{\dagger}(t_1, t_2) = \^U^{-1}(t_1, t_2)$ を満たす.

:::

時間発展演算子が unitary 演算子である必要性は, 正規化条件から得られる:
$$
1 = ⟨ψ(t)⟩|ψ(t)⟩ = ⟨ψ(t_0)⟩| \^U^{\dagger}(t, t_0) \^U(t, t_0) |ψ(t_0)⟩ = ⟨ψ(t_0)⟩|ψ(t_0)⟩.
$$

時間発展演算子が時間に依存しないとき, 時刻の基準を $t = 0$ として $\^U(t) ≡ \^U(t, 0)$ と略記する. 例えば $\^U(t_2 - t_1) = \^U(t_2, t_1) = \^U(t_2, 0) \^U^{-1}(t_1, 0)$. また, 時間発展演算子が時間に依存する場合でも, 誤解が無いとき $\^U(t) ≡ \^U(t, 0)$ と略記する.

:::screen

状態ベクトルのみが時間発展し, 演算子は時間に依存しないとする方法を **Schrödinger 描像** *Schrödinger picture* という. Schrödinger 描像の演算子, 状態ベクトル, 固有状態を以下のように書く:
$$
\begin{aligned}
  \textsf{演算子} \quad &: \quad \^A, && \^A_\mathrm{S}, \\
  \textsf{状態ベクトル} \quad &: \quad |ψ(t)⟩, && |ψ(t)⟩_\mathrm{S}, \\
  \textsf{固有状態} \quad &: \quad |a⟩, && |a⟩_\mathrm{S}. \\
\end{aligned}
$$

:::

これとは対照的に, 演算子に時間発展を押し付ける描像も考えられる.

:::screen

演算子のみが時間発展し, 状態ベクトルは時間に依存しないとする方法を **Heisenberg 描像** *Heisenberg picture* という. Heisenberg 描像の演算子, 状態ベクトル, 固有状態を以下のように書く:
$$
\begin{aligned}
  \textsf{演算子} \quad &: \quad \^A(t), && \^A_\mathrm{H}(t), \\
  \textsf{状態ベクトル} \quad &: \quad |ψ⟩, && |ψ⟩_\mathrm{H}, \\
  \textsf{固有状態} \quad &: \quad |a,t⟩, && |a,t⟩_\mathrm{H}. \\
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
  ⟨ψ | ψ⟩ = ⟨ψ| \^U^{-1}(t) \^U(t) |ψ⟩ = ⟨ψ(t) | ψ(t)⟩, \\
  ψ(a,t) = ⟨a,t | ψ⟩ = ⟨a| \^U(t) |ψ⟩ = ⟨a | ψ(t)⟩, \\
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

また交換子 $[\^A, \^B] ≡ \^A \^B - \^B \^A$ の時間変化は
$$
\begin{aligned}
  {[}\^A(t), \^B(t){]}
    &= [\^U^{-1}(t) \^A \^U(t), \^U^{-1}(t) \^B \^U(t)] \\
    &= \^U^{-1}(t) \^A \^U(t) \^U^{-1}(t) \^B \^U(t) - \^U^{-1}(t) \^B \^U(t) \^U^{-1}(t) \^A \^U(t) \\
    &= \^U^{-1}(t) \^A \^B \^U(t) - \^U^{-1}(t) \^B \^A \^U(t) \\
    &= \^U^{-1}(t) (\^A \^B - \^B \^A) \^U(t) \\
    &= \^U^{-1}(t) [\^A, \^B] \^U(t). \quad (=: [\^A, \^B]_\mathrm{H})
\end{aligned}
$$

時間発展演算子の表式は量子化と呼ばれる要請によってはじめて得られる.

### 正準量子化

:::screen

古典論における Poisson 括弧 $\{⋅,⋅\}_\mathrm{P}$ に対し, 量子論における交換関係 $\displaystyle \frac1{i{\hbar}}[\^⋅,\^⋅]_\mathrm{H}$ が対応するという要請を**正準量子化**という:
$$
\{A,B\}_\mathrm{P} \quad \xmapsto{\text{要請}} \quad \frac1{i{\hbar}}[\^A_\mathrm{H}(t),\^B_\mathrm{H}(t)].
$$

:::

一粒子の正準変数 $(q^i, p_i)$ に対して正準量子化すると,
$$
\begin{aligned}
  \{ q^i, p_j \}_\mathrm{P} &= δ_j^i, \\
  \xrightarrow{\text{正準量子化}} \quad \frac1{i{\hbar}} [{\^q^i}{}_\mathrm{H}, {\^p_j}{}_\mathrm{H}] &= δ_j^i, \\
\end{aligned}
$$
$$
\begin{aligned}
  \{ q^i, q^j \}_\mathrm{P} = \{ p_i, p_j \}_\mathrm{P} &= 0, \\
  \xrightarrow{\text{正準量子化}} \quad \frac1{i{\hbar}} [{\^q^i}{}_\mathrm{H}, {\^q^j}{}_\mathrm{H}] = \frac1{i{\hbar}} [{\^p_i}{}_\mathrm{H}, {\^p_j}{}_\mathrm{H}] &= 0. \\
\end{aligned}
$$
したがって, 演算子 $(\^q^i, \^p_i)$ の交換関係が得られる:

:::screen

一粒子の正準変数の演算子 $(\^q^i, \^p_i)$ は**正準交換関係**をと呼ばれる以下の交換関係を満たす:
$$
\begin{gathered}
  {[}{\^q^i}, {\^p_j}{]} = i{\hbar} δ_i^j, \\
  [\^q^i, \^q^j] = [\^p_i, \^p_j] = 0.
\end{gathered}
$$

:::

正準変数を変数として持つ物理量 $A = A(q^i, p_i)$ に対応する演算子は, 正準変数の演算子を形式的に代入したものである:
$$
A = A(q^i, p_i)
\quad \xrightarrow{\text{正準量子化}} \quad
\^A |ψ(t)⟩ = A(\^q^i, \^p_i) |ψ(t)⟩.
$$
TODO: ただし, $\^A$ が Hermite になるよう量子化前に正準変数の順序を調整する(Weyl 順序).

また, $B$ 表示した波動関数に対する演算子 $\^A_B$ について, 同様に正準変数の演算子を代入したものとなる:
$$
A = A(q^i, p_i)
\quad \xrightarrow{\text{正準量子化}} \quad
\^A_B ψ(b,t) = A({\^q^i}{}_B, {\^p_i}{}_B) ψ(b,t).
$$
特に, 正準変数の演算子が $b$ とそれの微分の関数 $({\^q^i}{}_B, {\^p_i}{}_B) = ({q^i}{}_B(b, \pdv{}{b}), {p_i}{}_B(b, \pdv{}{b}))$ であるとき, これを Schrödinger 表現という.

### 時間発展演算子と運動方程式

時間発展演算子の具体的な表式と, 系の時間発展を記述する運動方程式を求めよう.

時間に依存する物理量 $A(q^i,p_i,t)$ の時間発展を正準量子化して,
$$
\begin{aligned}
  \dv{A}{t} &= \{A, H\}_\mathrm{P} + \pdv{A}{t} \\
  \xrightarrow{\text{正準量子化}} \quad
  \dv{\^A_\mathrm{H}}{t} &= \frac1{i{\hbar}}[\^A_\mathrm{H},\^H] + \pqty{\dv{\^A}{t}}_\mathrm{H}. \\
\end{aligned}
$$
これは観測量 $A$ の時間発展を表した方程式である:

:::screen

時間に依存する物理量 $A(q^i,p_i,t)$ に対応する演算子 $\^A(q^i,p_i,t)$ の時間発展は以下であり, これを **Heisenberg の運動方程式** *Heisenberg equation* という:
$$
i{\hbar} \dv{\^A_\mathrm{H}}{t} = [\^A_\mathrm{H},\^H] + i{\hbar} \pqty{\dv{\^A}{t}}_\mathrm{H}.
$$

:::

特に, 時間に依存しない物理量 $A(q^i,p_i)$ の Heisenberg の運動方程式は,
$$
i{\hbar} \dv{\^A_\mathrm{H}}{t} = [\^A_\mathrm{H},\^H].
$$
この運動方程式を用いて, 時間発展演算子 $\^U(t)$ の具体的な表式を求める. 両辺それぞれ計算して,
$$
\begin{aligned}
  i{\hbar} \dv{\^A_\mathrm{H}}{t}
    &= i{\hbar} \dv{}{t} \bqty{\^U^{-1}(t) \^A \^U(t)} \\
    &= i{\hbar} \dv{\^U^{-1}(t)}{t} \^A \^U(t) + i{\hbar} \^U^{-1}(t) \^A \dv{\^U(t)}{t}, \\
  [\^A_\mathrm{H},\^H_\mathrm{H}]
    &= \^U^{-1}(t) \^A \^H \^U(t) + \^U^{-1}(t) \^H \^A \^U(t).
\end{aligned}
$$
辺々比較して,
$$
i{\hbar} \dv{\^U(t)}{t} = \^H \^U(t).
$$
これは時間発展演算子 $\^U(t)$ に関する微分方程式であり, これを解くことで $\^U(t)$ の表式が得られる:

:::screen

Hamiltonian が時間に陽に依存しないとき, 時間発展演算子は初期時間に依存せず,
$$
\^U(t-t_0) = e^{- \frac{i}{{\hbar}} {(t-t_0) \^H}},
$$
または Hamiltonian が時間に陽に依存するとき, 時間発展演算子は初期時間に依存し,
$$
\^U(t, t_0) = T \exp \bqty{- \frac{i}{{\hbar}} ∫_{t_0}^t \d{t'} \^H(t')}.
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
つまり, 先に右に作用する演算子ほど「若い」ように並び換える.

実際, $\^U(t)$ に関する微分方程式を両辺積分して,
$$
\begin{aligned}
   &\ \^U(t,t_0) \\
  =&\ 1 + \frac1{i{\hbar}} ∫_{t_0}^t \d{t_1} \^H(t_1) \^U(t_1, t_0) \\
   &\ \quad (\text{$\^U(t_1,t_0)$ を代入}) \\
  =&\ 1 + \frac1{i{\hbar}} ∫_{t_0}^t \d{t_1} \^H(t_1) + \frac1{i{\hbar}} ∫_{t_0}^t \d{t_1} \frac1{i{\hbar}} ∫_{t_0}^{t_1} \d{t_2} \^H(t_1) \^H(t_2) \^U(t_2, t_0) \\
   &\ \quad (\text{繰り返し $\^U(t_j,t_0)$ を代入}) \\
  =&\ 1 + \frac1{i{\hbar}} ∫_|ψ(t)⟩_{\mathrm{S}} {t_0}^t \d{t_1} \^H(t_1) + \frac1{i{\hbar}} ∫_{t_0}^t \d{t_1} \frac1{i{\hbar}} ∫_{t_0}^{t_1} \d{t_2} \^H(t_1) \^H(t_2) \\
   &\ \qquad \qquad + \frac1{i{\hbar}} ∫_{t_0}^t \d{t_1} \frac1{i{\hbar}} ∫_{t_0}^{t_1} \d{t_2} \frac1{i{\hbar}} ∫_{t_0}^{t_2} \d{t_3} \^H(t_1) \^H(t_2) \^H(t_3) + ⋯ \\
  =&\ ∑_{n=0}^∞ \frac1{(i{\hbar})^n} ∫_{t_0}^t \d{t_1} ∫_{t_0}^{t_1} \d{t_2} ⋯ ∫_{t_0}^{t_{n-1}} \d{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
   &\ \quad (\text{$t>t_1>…>t_{n-1}$ であることに注意して, 時間順序積を作用させる}) \\
  =&\ T ∑_{n=0}^∞ \frac1{n!} \frac1{(i{\hbar})^n} ∫_{t_0}^t \d{t_1} ∫_{t_0}^t \d{t_2} ⋯ ∫_{t_0}^t \d{t_n} \^H(t_1) \^H(t_2) ⋯ \^H(t_n) \\
  =&\ T ∑_{n=0}^∞ \frac1{n!} \bqty{\frac1{i{\hbar}} ∫_{t_0}^t \d{t} \^H(t)}^n \\
  =&\ T \exp \bqty{\frac1{i{\hbar}} ∫_{t_0}^t \d{t} \^H(t)}.
\end{aligned}
$$

$\^U(t)$ に関する微分方程式 $i{\hbar} \d{\^U(t)} / \d{t} = \^H \^U(t)$ を $|ψ⟩$ に作用させると,
$$
\begin{aligned}
  i{\hbar} \dv{\^U(t)}{t} |ψ⟩ &= \^H \^U(t) |ψ⟩. \\
  ∴ \quad i{\hbar} \dv{}{t} |ψ(t)⟩ &= \^H |ψ(t)⟩.
\end{aligned}
$$
これは状態 $|ψ(t)⟩$ の時間発展を表した方程式である:

:::screen

状態 $|ψ(t)⟩$ 時間発展は以下であり, これを **Schrödinger の運動方程式** *Schrödinger equation* という:
$$
i{\hbar} \dv{}{t} |ψ(t)⟩ = \^H |ψ(t)⟩.
$$

:::

Schrödinger の運動方程式に左から $⟨q|$ を内積させると,
$$
⟨q| \^H |ψ(t)⟩ = i{\hbar} \pdv{}{t} ψ(q, t).
$$
これは Hamiltonian の Schrödinger 表現 $\^H ψ(q, t) = ⟨q| \^H |ψ(t)⟩$ である:

:::screen

位置 $q$ 表示の波動関数 $ψ(q, t)$ に対して, Hamiltonian $\^H$ の Schrödinger 表現は,
$$
\^H ψ(q, t) = i{\hbar} \pdv{}{t} ψ(q, t).
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
\^q^i ψ(q,t) = ⟨q| \^q^i |ψ(t)⟩ = q^i ⟨q | ψ(t)⟩ = q^i ψ(q,t).
$$

これに対応する $\^p_i$ の表現を求める. ある定数 $a^i$ に対し, $e^{\frac{i}{{\hbar}} a^j \^p_j} \^q^i e^{- \frac{i}{{\hbar}} a^j \^p_j} = \^q^i + a^i$ である. 実際,
$$
\begin{aligned}
   &\ \dv{(e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k})}{a^j} \\
  =&\ \dv{e^{\frac{i}{{\hbar}} a^k \^p_k}}{a^j} \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k} + e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i \dv{e^{- \frac{i}{{\hbar}} a^k \^p_k}}{a^j} \\
  =&\ \frac{i}{{\hbar}} \^p_j e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k} - \frac{i}{{\hbar}} e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i \^p_j e^{- \frac{i}{{\hbar}} a^k \^p_k} \\
  =&\ \frac{i}{{\hbar}} \^p_j e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k} - \frac{i}{{\hbar}} e^{\frac{i}{{\hbar}} a^k \^p_k} (i {\hbar} δ_i^j + \^p_j \^q^i) e^{- \frac{i}{{\hbar}} a^k \^p_k} \\
   &\ \quad (∵ [\^q^i, \^p_j] = \^q^i \^p_j - \^p_j \^q^i = i {\hbar} δ_i^j) \\
  =&\ \frac{i}{{\hbar}} \^p_j e^{\frac{i}{{\hbar}} a^k \^p_k} \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k} + δ_i^j - \frac{i}{{\hbar}} e^{\frac{i}{{\hbar}} a^k \^p_k} \^p_j \^q^i e^{- \frac{i}{{\hbar}} a^k \^p_k} \\
   &\ \quad (∵ [e^{\frac{i}{{\hbar}} a^k \^p_k}, \^p_j] = e^{\frac{i}{{\hbar}} a^k \^p_k} \^p_j - \^p_j e^{\frac{i}{{\hbar}} a^k \^p_k} = 0) \\
  =&\ δ_i^j.
\end{aligned}
$$
したがって,
$$
\^q^i e^{- \frac{i}{{\hbar}} a^j \^p_j} |q⟩ = e^{- \frac{i}{{\hbar}} a^j \^p_j} (\^q^i + a^i) |q⟩ = (q^i + a^i) e^{- \frac{i}{{\hbar}} a^j \^p_j} |q⟩.
$$
$$
∴ e^{- \frac{i}{{\hbar}} a^i \^p_i} |q⟩ = |q+a⟩.
$$
一般の状態ベクトル $|ψ(t)⟩$ に $e^{- \frac{i}{{\hbar}} a^i \^p_i}$ を作用させることを考える:
$$
\begin{aligned}
  e^{- \frac{i}{{\hbar}} a^i \^p_i} |ψ(t)⟩
    &= e^{- \frac{i}{{\hbar}} a^i \^p_i} \pqty{∫ \d{{}^D q'} |q'⟩ ⟨q'|} |ψ(t)⟩
    = ∫ \d{{}^D q'} e^{- \frac{i}{{\hbar}} a^i \^p_i} |q'⟩ ⟨q' | ψ(t)⟩ \\
    &= ∫ \d{{}^D q'} ψ(q',t) |q'+a⟩ \\
    &= ∫ \d{{}^D q'} ψ(q'-a,t) |q'⟩.
\end{aligned}
$$
左から $⟨q|$ をかけると,
$$
\begin{aligned}
  ⟨q| e^{- \frac{i}{{\hbar}} a^i \^p_i} |ψ(t)⟩
    &= ⟨q| ∫ \d{{}^D q'} ψ(q'-a,t) |q'⟩ = ∫ \d{{}^D q'} ψ(q'-a,t) ⟨q | q'⟩ \\
    &= ∫ \d{{}^D q'} ψ(q'-a,t) δ^D(q - q') \\
    &= ψ(q-a,t).
\end{aligned}
$$
ただし固有状態の直交性 $⟨q | q'⟩ = δ^D(q - q')$ を用いた. $a$ について1次まで羃展開して,
$$
⟨q| \pqty{1 - \frac{i}{{\hbar}} a^i \^p_i} |ψ(t)⟩ = \pqty{1 - a^i \pdv{}{q^i}} ψ(q,t). \quad ∴  - \frac{i}{{\hbar}} ⟨q| \^p_i |ψ(t)⟩ = - \pdv{}{q^i} ψ(q,t).
$$
$$
∴ \^p_i ψ(q,t) = ⟨q| \^p_i |ψ(t)⟩ = - i{\hbar} \pdv{}{q^i} ψ(q,t).
$$

:::screen

位置 $q$ 表示の波動関数 $ψ(q, t)$ に対して, 運動量演算子 $\^p$ の Schrödinger 表現は,
$$
\^p_i ψ(q, t) = - i{\hbar} \pdv{}{q^i} ψ(q, t).
$$

:::

運動量 $p$ の固有波動関数 $ψ_p(q,t)$ に対し,
$$
- i {\hbar} \pdv{}{q^i} ψ_p(q,t) = \^p_i ψ_p(q,t) = p_i ψ_p(q,t).
$$
$$
∴ ψ_p(q,t) = ⟨q | p⟩ = \frac1{(\sqrt{2π {\hbar}})^D} e^{\frac{i}{{\hbar}} q^i p_i}.
$$
ただし, $D$ は座標 $q$ の次元とし, 固有状態の直交性を満たすよう定数を決めた:
$$
\begin{aligned}
  ⟨p',t | p,t⟩ &= ⟨p',t| \pqty{∫ \d{{}^Dq} |q,t⟩ ⟨q,t|} |p,t⟩ = ∫ \d{{}^D q} ⟨p',t | q,t⟩ ⟨q,t | p,t⟩ \\
    &= ∫ \d{{}^D q} ψ_{p'}^{*}(q,t) ψ_p(q,t) = ∫ \frac{\d{{}^D q}}{(2π {\hbar})^D} e^{\frac{i}{{\hbar}} q^i (p_i - {p'}_i)} \\
    &= δ^D(p_i - {p'}_i).
\end{aligned}
$$

### Schrödinger 方程式

:::screen

Schrödinger の運動方程式に $\^H = H(\^q^i, \^p_i)$ やその表現を代入したものもまた **Schrödinger 方程式**という: 位置 $q$ 表示では,
$$
\begin{aligned}
  H\pqty{q^i, - i{\hbar} \pdv{}{q^i}} ψ(q, t) &= i{\hbar} \pdv{}{t} ψ(q, t).
\end{aligned}
$$
:::

<!-- TODO: 定常状態の Schrödinger 方程式 -->

#### 例: 一次元一粒子系

一次元一粒子系の Hamiltonian は
$$
H(q,p) = \frac{p^2}{2m} + V(q).
$$
正準量子化して, Hamiltonian の演算子は
$$
H(\^q, \^p) = \frac{\^p^2}{2m} + V(\^q) = - \frac{{\hbar}^2}{2m} \pdv{{}^2}{q^2} + V(q).
$$
したがって Schrödinger 方程式は,
$$
\bqty{- \frac{{\hbar}^2}{2m} \pdv{{}^2}{q^2} + V(q)} ψ(q, t) = i{\hbar} \pdv{}{t} ψ(q, t).
$$

#### 例: 三次元一粒子系

三次元一粒子系の Hamiltonian は
$$
H(\bm{x},\bm{p}) = \frac{\bm{p}^2}{2m} + V(\bm{x}).
$$
正準量子化して, Hamiltonian の演算子は
$$
H(\^{\bm{x}}, \^{\bm{p}}) = \frac{\^{\bm{p}}^2}{2m} + V(\^{\bm{x}}) = - \frac{{\hbar}^2}{2m} \laplacian + V(\bm{x}).
$$
したがって Schrödinger 方程式は,
$$
\bqty{- \frac{{\hbar}^2}{2m} \laplacian + V(\bm{x})} ψ(\bm{x}, t) = i{\hbar} \pdv{}{t} ψ(\bm{x}, t).
$$

### 生成・消滅演算子

:::screen

演算子 $\^a$ とその Hermite 共役 $\^a^{\dagger}$ が次の交換関係を満たすとき, $\^a$ を**消滅演算子** annihilation operator, $\^a^{\dagger}$ を**生成演算子** creation operator という:
$$
\begin{gathered}
{}[\^a, \^a^{\dagger}] = 1, \\
  [\^a, \^a] = [\^a^{\dagger}, \^a^{\dagger}] = 0.
\end{gathered}
$$
また, Hermite 演算子 $\^N ≡ \^a^{\dagger} \^a$ を**数演算子** the number operation といい, $\^N$ の固有値 $n$ に属する固有状態を $|n⟩$ とする:
$$
\^N|n⟩ = n|n⟩.
$$

:::

$\^a^{\dagger}|n⟩$ は固有値 $n+1$ に属する固有状態である:
$$
\begin{aligned}
  \^N\^a^{\dagger}|n⟩
    &= \^a^{\dagger}\^a\^a^{\dagger}|n⟩ \\
    &= \^a^{\dagger}(\^a^{\dagger}\^a + 1)|n⟩ \\
    &= \^a^{\dagger}(\^N + 1)|n⟩ \\
    &= (n + 1)\^a^{\dagger}|n⟩.
\end{aligned}
$$
したがって $|n+1⟩$ は $\^a^{\dagger}|n⟩$ を正規化して,
$$
\begin{gathered}
  |n+1⟩ = \frac{\^a^{\dagger}|n⟩}{\sqrt{⟨n|\^a\^a^{\dagger}|n⟩}} = \frac{\^a^{\dagger}|n⟩}{\sqrt{⟨n|(\^N + 1)|n⟩}} = \frac{\^a^{\dagger}|n⟩}{\sqrt{n+1}}. \\
  ∴ \^a^{\dagger}|n⟩ = \sqrt{n+1}|n+1⟩.
\end{gathered}
$$
また, 同様に $\^a|n⟩$ は固有値 $n-1$ に属する固有状態である:
$$
\begin{aligned}
  \^N\^a|n⟩
    &= \^a^{\dagger}\^a\^a|n⟩ \\
    &= (\^a\^a^{\dagger} - 1)\^a|n⟩ \\
    &= \^a(\^a^{\dagger}\^a - 1)|n⟩ \\
    &= \^a(\^N - 1)|n⟩ \\
    &= (n - 1)\^a|n⟩.
\end{aligned}
$$
したがって $|n-1⟩$ は $\^a|n⟩$ を正規化して,
$$
\begin{gathered}
  |n-1⟩ = \frac{\^a|n⟩}{\sqrt{⟨n|\^a^{\dagger}\^a|n⟩}} = \frac{\^a|n⟩}{\sqrt{⟨n|\^N|n⟩}} = \frac{\^a|n⟩}{\sqrt{n}}. \\
  ∴ \^a|n⟩ = \sqrt{n}|n-1⟩.
\end{gathered}
$$
特に $n=0$ のときの状態 $|0⟩$ を真空状態といい, $\^a|0⟩ = 0$ を満たす:
$$
⟨0|\^a^{\dagger}\^a|0⟩ = ⟨0|\^N|0⟩ = 0.
$$
$n<0$ は許されない: ある固有値 $n<0$ に属する固有状態 $|n⟩$ に対し,
$$
n = ⟨n|\^N|n⟩ = ⟨n|\^a^{\dagger}\^a|n⟩ = ⟨n'|n'⟩ ≥ 0.
$$
ただし $|n'⟩ ≡ \^a|n⟩$. これは $n<0$ に矛盾する. したがって, $n≥0$ である. また, $n$ が正の非整数とすると, 繰り返し $\^a$ を左右することで $n$ を負にすることができてしまうから, $n$ は非整数ではない. したがって, $n$ は 0 以上の整数である: $n = 0,1,2,…$.

TODO: 調和振動子による例

### 不確定性原理

:::screen

物理量 $A$ の分散 $(ΔA)^2 ≡ ⟨(A-⟨A⟩)^2⟩$ に対し, 以下の関係が成立する:
$$
(ΔA)^2 (ΔB)^2 \geq \frac14 \abs{⟨[A,B]⟩}^2.
$$

:::

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
  i{\hbar} \dv{\^A_\mathrm{T}}{t} = [\^A_\mathrm{T},\^H_0], \\
  i{\hbar} \dv{}{t} |ψ(t)⟩_\mathrm{T} = \^H_\mathrm{I} |ψ(t)⟩_\mathrm{T}.
\end{gathered}
$$

:::

第 1 式より, Schrödinger 描像と相互作用描像の演算子の対応が得られる:
$$
\^A_\mathrm{T}(t) = e^{\frac{i}{{\hbar}}(t-t_0)\^H_0} \^A e^{-\frac{i}{{\hbar}}\^H_0(t-t_0)}.
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
|ψ(t)⟩_\mathrm{T} = T \exp \bqty{- \frac{i}{{\hbar}} ∫_{t_0}^t \d{t'} \^H_\mathrm{I}(t')} |ψ(t_0)⟩_\mathrm{T}
$$

### 経路積分表示

時刻 $t_i$ に座標 $q_i$ で粒子が観測された状態に対し, 時刻 $t_f$ に座標 $q_f$ で粒子が観測される確率振幅は
$$
⟨q_f,t_f|q_i,t_i⟩ \quad \pqty{= ⟨q_f|\^U(t_f,t_i)|q_i⟩ = ⟨q_f|T \exp \bqty{\frac1{i{\hbar}} ∫_{t_i}^{t_f} \d{t} \^H(t)}|q_i⟩}
$$
で与えられる. 時間 $t_i$, $t_f$ 間を $N$ 分割する:
$$
Δt = \frac{t_f-t_i}{N}, \quad t_j = t_i + nΔt, \quad q_j = q(t_j). \quad t_0=t_i, \quad \ t_N=t_f.
$$
完全系 $∫\d{q_j}|q_j⟩⟨q_j| = 1$ を順に挟めば,
$$
\begin{aligned}
  ⟨q_f,t_f|q_i,t_i⟩
    &= ∫\d{{}^Dq_1} ⋯ ∫\d{{}^Dq_{N-1}} ⟨q_f,t_f|q_{N-1},t_{N-1}⟩⟨q_{N-1},t_{N-1}|⋯|q_1,t_1⟩⟨q_1,t_1|q_i,t_i⟩ \\
    &= ∫\d{{}^Dq_1} ⋯ ∫\d{{}^Dq_{N-1}} \pqty{∏_{j=0}^{N-1} ⟨q_{j+1},t_{j+1}|q_j,t_j⟩} \\
\end{aligned}
$$
ここで, $Δt$ が十分に小さいとすると,
$$
⟨q_{j+1},t_{j+1}|q_j,t_j⟩ = ⟨q_{j+1}|\exp \bqty{-\frac{i}{{\hbar}} Δt \^H(t_j)}|q_j⟩
$$
ここで, $\^H(t_j)=H(\^q,\^p,t_j)$ は Weyl 順序であって,
$$
⟨q_{j+1}|\^H(t_j)|q_j⟩ = ∫\frac{\d{{}^Dp_j}}{(2π\hbar)^D} e^{i(q_{j+1}-q_j)p_j/\hbar} H\pqty{\frac{q_{j+1}+q_j}{2}, p_j,t_j}
$$
を満たす. これを用いると,
$$
\begin{aligned}
  ⟨q_{j+1},t_{j+1}|q_j,t_j⟩
    &= ∫\frac{\d{{}^Dp_j}}{(2π\hbar)^D} e^{i(q_{j+1}-q_j)p_j/\hbar} \exp \bqty{-\frac{i}{{\hbar}} Δt H\pqty{\frac{q_{j+1}+q_j}{2}, p_j,t_j}} \\
    &= ∫\frac{\d{{}^Dp_j}}{(2π\hbar)^D} \exp \frac{i}{{\hbar}} Δt \bqty{\frac{q_{j+1}-q_j}{Δt}p_j - H\pqty{\frac{q_{j+1}+q_j}{2}, p_j,t_j}} \\
\end{aligned}
$$
したがって,
$$
\begin{aligned}
  ⟨q_f,t_f|q_i,t_i⟩
    &= ∫\d{{}^Dq_1} ⋯ ∫\d{{}^Dq_{N-1}} \qty{∏_{j=0}^{N-1} ∫\frac{\d{{}^Dp_j}}{(2π\hbar)^D} \exp \frac{i}{{\hbar}} Δt \bqty{\frac{q_{j+1}-q_j}{Δt}p_j - H\pqty{\frac{q_{j+1}+q_j}{2}, p_j,t_j}}} \\
    &= ∫\frac{\d{{}^Dp_0}}{(2π\hbar)^D} ∏_{j=1}^{N-1} ∫\frac{\d{{}^Dq_j}\d{{}^Dp_j}}{(2π\hbar)^D} \exp \frac{i}{{\hbar}} ∑_{j=0}^{N-1} Δt \bqty{\frac{q_{j+1}-q_j}{Δt}p_j - H\pqty{\frac{q_{j+1}+q_j}{2}, p_j,t_j}}. \\
\end{aligned}
$$
あるいは $N→∞$ の極限で
$$
\begin{aligned}
  ⟨q_f,t_f|q_i,t_i⟩
    &= ∫_{q_i,p=-∞}^{q_f,p=+∞} \mathcal{D}^Dq \ \mathcal{D}^Dp \ \exp \frac{i}{\hbar} ∫_{t_i}^{t_f} \d{t} \bqty{\.q^i p_i - H(q^i,p_i,t)} \\
    &≡ ∫_{q_i,p=-∞}^{q_f,p=+∞} \mathcal{D}^Dq \ \mathcal{D}^Dp \ e^{\frac{i}{\hbar} S[q^i,p_i]}.
\end{aligned}
$$

<!-- TODO: 位相空間の経路積分量子化 -->

### 経路積分量子化

時刻 $t_i$ から $t_f$ の運動で粒子が $q_i ≡ q(t_i)$ から $q_f ≡ q (t_f)$ へ移動するときの作用は
$$
S[q(t)] = ∫_{t_i}^{t_f} \d{t} L(q, \.q, t)
$$
で与えられる. このとき, 汎関数積分を用いた次の量子化が定義される:

:::screen

状態 $|q_i,t_i⟩$ から状態 $|q_f,t_f⟩$ への確率振幅は以下であるという要請を**経路積分量子化** *Path integral formulation* という:
$$
\begin{gathered}
  K(q_f,t_f;q_i,t_i) ≡ ⟨q_f,t_f|q_i,t_i⟩ \overset{\text{要請}}{=} ∫_{q_i}^{q_f} \mathcal{D}^Dq \ e^{\frac{i}{{\hbar}} S[q(t)]}.
\end{gathered}
$$
また, この $K(q_f,t_f;q_i,t_i)$ を**伝播関数**という. これは **Green 関数**とも呼ばれ, 以下を満たす:
$$
\pqty{H(q^i,p_i,t)-i{\hbar}\pdv{}{t}} K(q,t;q_0,t_0) = -i{\hbar}δ^D(q-q_0)δ(t-t_0).
$$

:::

位置表示の波動関数に対して以下が成立する:
$$
ψ(q,t) = ∫ \d{{}^D q_0} K(q,t;q_0,t_0) ψ(q_0,t_0).
$$
実際,
$$
\begin{aligned}
  ψ(q,t) &= ⟨q,t | ψ⟩ \\
    &= ⟨q,t| \pqty{∫ \d{{}^D q_0} |q_0,t_0⟩ ⟨q_0,t_0|} |ψ⟩ \\
    &= ∫ \d{{}^D q_0} ⟨q,t|q_0,t_0⟩ ⟨q_0,t_0|ψ⟩ \\
    &= ∫ \d{{}^D q_0} K(q,t;q_0,t_0) ψ(q_0,t_0).
\end{aligned}
$$

<!-- TODO: Green 関数であることの証明 -->

経路積分量子化は古典極限を取ることで最小作用の原理を与える. $q'=q+δq$ として鞍点法を用いると,
$$
\begin{aligned}
  K(q_f,t_f;q_i,t_i)
    &= ∫_{q_i}^{q_f} \mathcal{D}^Dq' \ e^{\frac{i}{{\hbar}} S[q'(t)]} \\
    &\quad \pqty{\text{$q'=q+δq$ のとき $\displaystyle S[q'] = S[q] + ∫_{t_i}^{t_f} \d{t'} \fdv{S[q(t)]}{q(t')} δq(t')$}} \\
    &= e^{\frac{i}{{\hbar}} S[q(t)]} ∫_{q_i}^{q_f} \mathcal{D}^Dδq \ \exp\pqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t'} \fdv{S[q(t)]}{q(t')} δq(t')}. \\
\end{aligned}
$$
したがって, ${\hbar}→0$ の極限で $|K(q_f,t_f;q_i,t_i)|^2=1$ となる条件は
$$
\fdv{S[q^i(t)]}{q^j(t')} = 0 \quad (t_1<t'<t_2)
$$
となる. これは最小作用の原理に他ならない.

#### 例: 一次元自由一粒子系

一次元自由一粒子系の Lagrangian は
$$
L(q,\.q,t) = \frac{m}{2} \.q^2.
$$
このときの伝播関数を求めると,
$$
\begin{aligned}
  K(q_f,t_f;q_i,t_i)
    &= ∫_{q_i}^{q_f} \mathcal{D}q \ \exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} \frac{m}{2} \.q^2} \\
    &= \sqrt{\frac{m}{2πi{\hbar}(t_f-t_i)}} \exp\bqty{\frac{im(q_f-q_i)^2}{2{\hbar}(t_f-t_i)}}. \\
\end{aligned}
$$
したがって, 一般の位置表示の波動関数 $ψ(q,t)$ は,
$$
ψ(q,t) = ∫\d{q_0} \sqrt{\frac{m}{2πi{\hbar}(t-t_0)}} \exp\bqty{\frac{i}{{\hbar}} \frac{m}{2} \frac{(q-q_0)^2}{t-t_0}} × ψ(q_0,t_0).
$$

<!-- TODO: 調和振動子 -->

### $n$ 点 Green 関数と生成汎関数

:::screen

$t_f>t_m>t_i$ ($m=1,…,n$) に対し
$$
⟨q_f,t_f| T\^q(t_1)⋯\^q(t_n) |q_i,t_i⟩ = ∫_{q_i}^{q_f} \mathcal{D}^Dq \ q(t_1)⋯q(t_n) e^{\frac{i}{{\hbar}} S[q(t)]}
$$
を **$n$ 点 Green 関数**という. ただし $T$ は時間順序積.

:::

実際, $t_f>t_{σ_1}>⋯>t_{σ_n}>t_i$ を満たす適当な置換 $σ = \pmqty{1&⋯&n\\σ_1&⋯&σ_n}$ を用いると,
$$
\begin{aligned}
   &\ ⟨q_f,t_f| T\^q(t_1)⋯\^q(t_n) |q_i,t_i⟩ \\
  =&\ ⟨q_f,t_f| \^q(t_{σ_1})⋯\^q(t_{σ_n}) |q_i,t_i⟩ \\
  =&\ ⟨q_f,t_f| \^q(t_{σ_1}) \pqty{ ∫\d{{}^D q_{σ_1}} |q_{σ_1},t_{σ_1}⟩ ⟨q_{σ_1},t_{σ_1}|} ⋯ \^q(t_{σ_n}) \pqty{∫\d{{}^D q_{σ_n}}|q_{σ_n},t_{σ_n}⟩ ⟨q_{σ_n},t_{σ_n}|} |q_i,t_i⟩ \\
  =&\ ∫\d{{}^D q_{σ_1}}⋯∫\d{{}^D q_{σ_n}} ⟨q_f,t_f| \^q(t_{σ_1}) |q_{σ_1},t_{σ_1}⟩ ⟨q_{σ_1},t_{σ_1}| ⋯\^q(t_{σ_n}) |q_{σ_n},t_{σ_n}⟩ ⟨q_{σ_n},t_{σ_n}|q_i,t_i⟩ \\
  =&\ ∫\d{{}^D q_{σ_1}}⋯∫\d{{}^D q_{σ_n}} q_{σ_1}⋯q_{σ_n} ⟨q_f,t_f|q_{σ_1},t_{σ_1}⟩ ⟨q_{σ_1},t_{σ_1}| ⋯ |q_{σ_n},t_{σ_n}⟩ ⟨q_{σ_n},t_{σ_n}|q_i,t_i⟩ \\
  =&\ ∫\d{{}^D q_{σ_1}}⋯∫\d{{}^D q_{σ_n}} q_{σ_1}⋯q_{σ_n} \pqty{∫_{q_{σ_1}}^{q_f} \mathcal{D}^Dq \ e^{\frac{i}{{\hbar}} S_{t∈[t_{σ_1},t_f]}[q]}} \pqty{∫_{q_{σ_2}}^{q_{σ_1}} \mathcal{D}^Dq \ e^{\frac{i}{{\hbar}} S_{t∈[t_{σ_2},t_{σ_1}]}[q]}} ⋯ \pqty{∫_{q_i}^{q_{σ_n}} \mathcal{D}^Dq \ e^{\frac{i}{{\hbar}} S_{t∈[t_i,t_{σ_n}]}[q]}} \\
  =&\ ∫_{q_i}^{q_f} \mathcal{D}^Dq \ q(t_{σ_1})⋯q(t_{σ_n}) e^{\frac{i}{{\hbar}} S[q(t)]}. \\
  =&\ ∫_{q_i}^{q_f} \mathcal{D}^Dq \ q(t_1)⋯q(t_n) e^{\frac{i}{{\hbar}} S[q(t)]}. \\
\end{aligned}
$$
これは置換 $σ$ に依らず成立する.

$n$ 点 Green 関数は次に定義される生成汎関数から機能的に得ることができる:

:::screen

$$
\begin{aligned}
  Z[J(t)]
    &≡ ⟨q_f,t_f| T\exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} J(t)\^q(t)} |q_i,t_i⟩ \\
    &= ∫_{q_i}^{q_f} \mathcal{D}^Dq \ \exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} J(t)q(t)} e^{\frac{i}{{\hbar}} S[q(t)]} \\
    &= ∫_{q_i}^{q_f} \mathcal{D}^Dq \exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} \qty{L(q(t),\.q(t),t) + J(t)q(t)}} \\
\end{aligned}
$$
で定義される汎関数 $Z[J(t)]$ を**生成汎関数**という. この生成汎関数を $n$ 回汎関数微分すると $n$ 点 Green 関数が得られる:
$$
(-i)^n {\hbar}^n \left. \frac{δ^n Z[J(t)]}{δJ(t_1)⋯δJ(t_n)} \right|_{J=0} = ⟨q_f,t_f| T\^q(t_1)⋯\^q(t_n) |q_i,t_i⟩.
$$

:::

実際, 生成汎関数の汎関数積分表示は
$$
\begin{aligned}
   &\ ⟨q_f,t_f| T\exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} J(t)\^q(t)} |q_i,t_i⟩ \\
  =&\ ⟨q_f,t_f| T ∑_{n=0}^∞ \frac1{n!} \bqty{\frac{i^n}{{\hbar}^n} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} J(t_1)⋯J(t_n) \^q(t_1)⋯\^q(t_n)} |q_i,t_i⟩ \\
  =&\ ∑_{n=0}^∞ \frac1{n!} \frac{i^n}{{\hbar}^n} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} J(t_1)⋯J(t_n) ⟨q_f,t_f| T\^q(t_1)⋯\^q(t_n)|q_i,t_i⟩  \\
  =&\ ∑_{n=0}^∞ \frac1{n!} \frac{i^n}{{\hbar}^n} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} J(t_1)⋯J(t_n) ∫_{q_i}^{q_f} \mathcal{D}^Dq \ q(t_1)⋯q(t_n) e^{\frac{i}{{\hbar}} S[q(t)]}  \\
  =&\ ∫_{q_i}^{q_f} \mathcal{D}^Dq \ \bqty{∑_{n=0}^∞ \frac1{n!} \frac{i^n}{{\hbar}^n} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} J(t_1)⋯J(t_n) q(t_1)⋯q(t_n)} e^{\frac{i}{{\hbar}} S[q(t)]}  \\
  =&\ ∫_{q_i}^{q_f} \mathcal{D}^Dq \ \exp\bqty{\frac{i}{{\hbar}} ∫_{t_i}^{t_f} \d{t} J(t)q(t)} e^{\frac{i}{{\hbar}} S[q(t)]}. \\
\end{aligned}
$$
また, 式変形の途中
$$
Z[J(t)] = ∑_{n=0}^∞ \frac1{n!} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} \bqty{\frac{i^n}{{\hbar}^n} ⟨q_f,t_f| T\^q(t_1)⋯\^q(t_n)|q_i,t_i⟩} J(t_1)⋯J(t_n)
$$
を $Z[J(t)]$ の $J=0$ まわりの汎関数冪展開
$$
Z[J(t)] = ∑_{n=0}^∞ \frac1{n!} ∫_{t_i}^{t_f} \d{t_1} ⋯ ∫_{t_i}^{t_f} \d{t_n} \left. \frac{δ^n Z[J(t)]}{δJ(t_1)⋯δJ(t_n)} \right|_{J=0} J(t_1)⋯J(t_n)
$$
と比較すると $n$ 点 Green 関数との関係式が得られる.

### 非相対論的方程式

非相対論的な一粒子 $(\bm{x},\bm{p})$ の分散関係
$$
H(\bm{x},\bm{p},t) = \frac{\bm{p}^2}{2m} + V(\bm{x},t)
$$
の量子化を考える. このときの Schrödinger 方程式は,
$$
\pqty{\frac{{\^{\bm{p}}}^2}{2m} + V(\^{\bm{x}},t)} |ψ(t)⟩ = i{\hbar} \dv{}{t} |ψ(t)⟩,
$$
あるいは位置 $\bm{x}$ 表示の Schrödinger 方程式は,
$$
\pqty{-\frac{{\hbar}^2}{2m} \laplacian + V(\bm{x},t)} ψ(\bm{x},t) = i{\hbar} \pdv{}{t} ψ(\bm{x},t).
$$
一般に Schrödinger 方程式というとき, この方程式を指すことが多い.

:::screen

非相対論的な一粒子の位置表示の波動関数 $ψ(\bm{x},t)$ は次の **Schrödinger 方程式**を満たす:
$$
\pqty{-\frac{{\hbar}^2}{2m} \laplacian + V(\bm{x},t)} ψ(\bm{x},t) = i{\hbar} \pdv{}{t} ψ(\bm{x},t).
$$

:::

時間 $t$ にいて粒子が $\bm{x}$ に見い出される確率密度を
$$
ρ(\bm{x},t) = |ψ(\bm{x},t)|^2
$$
とすると, 粒子の確率は連続方程式
$$
\pdv{ρ}{t} + \div\bm{j} = 0
$$
を満たす. ただし
$$
\bm{j}(\bm{x},t) ≡ \frac{{\hbar}}{2im} \pqty{ψ^* \grad ψ - ψ \grad ψ^*}
$$
は確率流密度と呼ばれる. 実際,
$$
\begin{aligned}
  \pdv{ρ}{t}
    &= \pdv{}{t} (ψ^* ψ) \\
    &= \frac1{i{\hbar}} \pqty{ψ^* i{\hbar}\pdv{}{t} ψ + ψ i{\hbar}\pdv{}{t} ψ^*} \\
    &= \frac1{i{\hbar}} \bqty{ψ^* \pqty{-\frac{{\hbar}^2}{2m} \laplacian + V(\bm{x},t)} ψ - ψ \pqty{-\frac{{\hbar}^2}{2m} \laplacian + V(\bm{x},t)} ψ^*} \\
    &= - \frac{{\hbar}}{2im} \pqty{ψ^* \laplacian ψ - ψ \laplacian ψ^*} \\
    &= - \frac{{\hbar}}{2im} \bqty{\div (ψ^* \grad ψ) - \grad ψ^* \grad ψ - \div (ψ \grad ψ^*) + \grad ψ \grad ψ^*} \\
    &= - \div \bqty{\frac{{\hbar}}{2im} \pqty{ψ^* \grad ψ - ψ \grad ψ^*}} \\
    &= - \div \bm{j}. \\
\end{aligned}
$$

### 相対論的方程式

相対論的な一粒子 $(\bm{x},\bm{p})$ の分散関係
$$
\pqty{\frac{H(\bm{x},\bm{p})}{c}}^2 = \bm{p}^2 + (mc)^2
$$
の量子化を考える. 状態ベクトル $|ψ(t)⟩$ に Hamiltonian 演算子を二回作用させると,
$$
\frac{{\^H}^2}{c^2} |ψ(t)⟩ = \frac1{c^2} \pqty{i{\hbar}\dv{}{t}} \pqty{i{\hbar}\dv{}{t}} |ψ(t)⟩ = - {\hbar}^2 \frac{\d{{}^2}}{c^2\d{t^2}} |ψ(t)⟩.
$$
また, 分散関係より,
$$
\frac{{\^H}^2}{c^2} |ψ(t)⟩ = \pqty{\frac{H\pqty{\^{\bm{x}},\^{\bm{p}}}}{c^2}}^2 |ψ(t)⟩ = \bqty{{\^{\bm{p}}}^2 + (mc)^2} |ψ(t)⟩.
$$
したがって,
$$
\bqty{{\^{\bm{p}}}^2 + (mc)^2} |ψ(t)⟩ = - {\hbar}^2 \frac{\d{{}^2}}{c^2\d{t^2}} |ψ(t)⟩.
$$
特に, 位置 $\bm{x}$ 表示の波動関数については,
$$
\bqty{- {\hbar}^2 \laplacian + (mc)^2} ψ(\bm{x},t) = - {\hbar}^2 \frac{∂^2}{c^2∂t^2} ψ(\bm{x},t).
$$
あるいは $x=(x^μ)=(t,\bm{x})$, $(∂^μ) = (c^{-1} ∂_t,\grad)$ として,
$$
\bqty{∂^μ∂_μ + \pqty{\frac{mc}{{\hbar}}}^2} ψ(x) = 0.
$$
これは相対論的な一粒子の位置表示の波動関数が満たすべき方程式である:

:::screen

相対論的な一粒子の位置表示の波動関数 $ψ(x)$ は次の **Klein-Gordon 方程式**を満たす:
$$
\bqty{∂^μ∂_μ + \pqty{\frac{mc}{{\hbar}}}^2} ψ(x) = 0.
$$

:::

$d$ 次正方行列 $α_1$, $α_2$, $α_3$, $β$ に対し,
$$
\frac{H}{c} = α^1p_1 + α^2p_2 + α^3p_3 + βmc ≡ \bm{α}⋅\bm{p} + βmc,
$$
としたとき, 相対論的分散関係式 $(H/c)^2=p^2+(mc)^2$ を満たす $\bm{α}$, $β$ の条件を考える. 2乗すると,
$$
\begin{aligned}
  \pqty{\frac{H}{c}}^2
    &= (α^1p_1 + α^2p_2 + α^3p_3 + βmc)(α^1p_1 + α^2p_2 + α^3p_3 + βmc) \\
    &= (α^1)^2p_1^2 + (α^2)^2p_2^2 + (α^3)^2p_3^2 + \{α^i,α^j\}p_ip_j|_{i≠j} + \{α^i,β\}p_imc + β^2(mc)^2.
\end{aligned}
$$
これが分散関係式を満たす条件は
$$
β^2=0, \quad \{α^i,β\} = 0, \quad \{α^i,α^j\} = δ^{ij}.
$$
定義の式に左から $β$ をかけて,
$$
\frac{H}{c} = \bm{α}⋅\bm{p} + βmc,
$$
または左から $β$ をかけ, $(γ^μ)=(γ^0,\bm{γ})≡(β,β\bm{α})$ とすれば,
$$
γ^0\frac{H}{c} = \bm{γ}⋅\bm{p} + mc.
$$
ただし, $γ^μ$ は以下の反交換関係を満たす:
$$
\{γ^μ,γ^ν\}=g^{μν}.
$$
実際, $\{α^i,α^j\} = δ^{ij}$ に $β^2$ を左からをかけると,
$$
δ^{ij} = β^2 \{α^i,α^j\} = ββα^iα^j + ββα^jα^i = - βα^iβα^j - βα^jβα^i = - \{βα^i,βα^j\}.
$$
ただし, $βα^i=-α^iβ$ を使った. さて, このときの分散関係式は $d^2$ 本の連立方程式である. これらを量子化すると,
$$
\begin{gathered}
  \pqty{\bm{α}⋅\bm{p} + βmc} |ψ(t)⟩ = i{\hbar}\frac{\d{}}{c\d{t}} |ψ(t)⟩, \\
  \pqty{-i{\hbar}\bm{α}⋅\grad + βmc} ψ(x,t) = i{\hbar}\frac{∂}{c∂t} ψ(x,t).
\end{gathered}
$$
または $γ^μ$ を使って,
$$
\begin{gathered}
  \pqty{\bm{γ}⋅\bm{p} + mc} |ψ(t)⟩ = i{\hbar}γ^0\frac{\d{}}{c\d{t}} |ψ(t)⟩, \\
  \pqty{-i{\hbar}\bm{γ}⋅\grad + mc} ψ(x,t) = i{\hbar}γ^0\frac{∂}{c∂t} ψ(x,t).
\end{gathered}
$$
偏微分をまとめると,
$$
\pqty{iγ^μ∂_μ - \frac{mc}{{\hbar}}} ψ(x,t) = 0.
$$
または Dirac 演算子 $\slashed{∂}≡γ^μ∂_μ$ を用いると,
$$
\pqty{i\slashed{∂} - \frac{mc}{{\hbar}}} ψ(x,t) = 0.
$$

:::screen

相対論的な一 Fermi 粒子の位置表示の波動関数 $ψ(x)$ は次の **Dirac 方程式**を満たす: $β^2=0$, $\{α^i,β\} = 0$, $\{α^i,α^j\} = δ^{ij}$ を満たす行列 $α$, $β$ に対し,
$$
  \pqty{-i{\hbar}\bm{α}⋅\grad + βmc} ψ(x,t) = i{\hbar}\frac{∂}{c∂t} ψ(x,t),
$$
あるいは, $\{γ^μ,γ^ν\}=g^{μν}$ を満たす $γ$ 行列に対し, $\slashed{∂}≡γ^μ∂_μ$ として,
$$
  \pqty{i\slashed{∂} - \frac{mc}{{\hbar}}} ψ(x,t) = 0.
$$

:::

時間 $t$ にいて粒子が $\bm{x}$ に見い出される確率密度を
$$
ρ(\bm{x},t) = ψ^{\dagger}(\bm{x},t) ψ(\bm{x},t)
$$
とすると, 粒子の確率は連続方程式
$$
\frac{∂ρ}{c∂t} + \div\bm{j} = 0
$$
を満たす. ただし
$$
\bm{j}(\bm{x},t) ≡ ψ^{\dagger}(\bm{x},t)\bm{α}ψ(\bm{x},t)
$$
は確率流密度と呼ばれる. あるいは, $γ$ 行列を用いると, 連続方程式は
$$
∂_μ j^μ(x) ≡ 0
$$
と簡単になる. 実際,
$$
\begin{aligned}
  \frac{∂ρ}{c∂t}
    &= \frac{∂}{c∂t} (ψ^{\dagger} ψ) \\
    &= \frac1{i{\hbar}} \bqty{ψ^{\dagger} \pqty{i{\hbar}\overrightarrow{\frac{∂}{c∂t}}} ψ - ψ^{\dagger} \pqty{-i{\hbar}\overleftarrow{\frac{∂}{c∂t}}} ψ} \\
    &= \frac1{i{\hbar}} \bqty{ψ^{\dagger} \pqty{-i{\hbar}\bm{α}⋅\overrightarrow{\grad} + βmc} ψ - ψ^{\dagger} \pqty{i{\hbar}\bm{α}⋅\overleftarrow{\grad} + βmc} ψ} \\
    &= - \bqty{ψ^{\dagger} \bm{α}⋅\overrightarrow{\grad} ψ + ψ^{\dagger} \bm{α}⋅\overleftarrow{\grad} ψ} \\
    &= - \grad⋅\pqty{ψ^{\dagger} \bm{α} ψ}, \\
\end{aligned}
$$
$$
\begin{aligned}
  \frac{∂ρ}{c∂t}
    &= \frac{∂}{c∂t} (\overline{ψ}ψ) ≡ \frac{∂}{c∂t} (ψ^{\dagger}γ^0ψ) \\
    &= \frac1{i{\hbar}} \bqty{ψ^{\dagger} \pqty{i{\hbar}γ^0\overrightarrow{\frac{∂}{c∂t}}} ψ - ψ^{\dagger} \pqty{-i{\hbar}γ^0\overleftarrow{\frac{∂}{c∂t}}} ψ} \\
    &= \frac1{i{\hbar}} \bqty{ψ^{\dagger} \pqty{-i{\hbar}\bm{γ}⋅\overrightarrow{\grad} + mc} ψ - ψ^{\dagger} \pqty{i{\hbar}\bm{γ}⋅\overleftarrow{\grad} + mc} ψ} \\
    &= - \bqty{ψ^{\dagger} \bm{γ}⋅\overrightarrow{\grad} ψ + ψ^{\dagger} \bm{γ}⋅\overleftarrow{\grad} ψ} \\
    &= - \grad⋅\pqty{ψ^{\dagger} \bm{γ} ψ}. \\
\end{aligned}
$$
ここで $\overline{ψ}≡ψ^{\dagger}γ^0$ は Dirac 共役と呼ばれる.

### 場の量子論との関係

位置 $\bm{x}$ 表示の波動関数 $Ψ(\bm{x},t)$ に対し,
$$
Ψ(\bm{x},t) = ⟨\bm{x},t|Ψ⟩ = ⟨0|\^ψ(\bm{x},t)|Ψ⟩
$$
を満たすような演算子 $\^ψ(\bm{x},t)$ を**場の演算子**という. つまり,
$$
|\bm{x},t⟩ = {\^ψ}^{\dagger}(\bm{x},t)|0⟩.
$$
ここで, $|0⟩$ は**真空状態**と呼ばれる状態で, ${\^ψ}^{\dagger}(\bm{x},t)$ を真空状態に作用させることで $(\bm{x},t)$ に1粒子が観測される状態になる. この場の演算子 $\^ψ(\bm{x},t)$ はある古典場 $ψ(\bm{x},t)$ を力学変数として量子化した結果に得られるものである.

場の演算子 $\^ψ(\bm{x},t)$ は波動関数 $Ψ(\bm{x},t)$ と同じ Schrödinger 方程式を満たす. 実際, Schrödinger 方程式に代入すると,
$$
H \pqty{\bm{x},-i{\hbar}\grad} ⟨0|\^ψ(\bm{x},t)|Ψ⟩ = i{\hbar}\pdv{}{t} ⟨0|\^ψ(\bm{x},t)|Ψ⟩.
$$
$$
∴ H \pqty{\bm{x},-i{\hbar}\grad} \^ψ(\bm{x},t) = i{\hbar}\pdv{}{t} \^ψ(\bm{x},t).
$$
反対に, 古典場 $ψ(\bm{x},t)$ が満たす Euler-Lagrange 方程式に対し, その場を量子化した演算子 $\^ψ(\bm{x},t)$ によって得られる1粒子状態の波動関数 $Ψ(\bm{x},t) = ⟨\bm{x},t|Ψ⟩ = ⟨0|\^ψ(\bm{x},t)|Ψ⟩$ は, Euler-Lagrange 方程式のうちの1つと同じ形の Schrödinger 方程式を満たす.

### 参考文献

- 清水 明 『新版 量子論の基礎 その本質のやさしい理解のために』 (サイエンス社, 2004)
- 杉田 勝実, 岡本 良夫, 関根 松夫 『経路積分と量子電磁力学』(森北出版, 1998)
- 日笠 健一 『ディラック方程式 相対論的量子力学と量子場理論』 (サイエンス社, 2004)
- 坂井 典佑 『場の量子論』(裳華房フィジックスライブラリー, 2002)
