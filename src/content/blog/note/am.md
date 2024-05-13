---
title : 粒子系の解析力学
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 最小作用の原理

粒子系の古典力学において, 以下を原理として認める.

:::screen

時間に依存する**一般化座標**と呼ばれるパラメータ $q^i$ に対して, **作用** action と呼ばれる汎関数 $S[q^i]$ が存在し, $q^i$ は物理現象において $S[q^i]$ が最小となるよう変化する. つまり, $q^i(t) ↦ q^i(t) + δq^i(t)$ (ただし両端固定 $δq^i(t_1)=δq^i(t_2)=0$) となる変換に対し, 作用が停留値を取る:
$$
δS[q^i] ≡ S[q^i + δq^i] - S[q^i] = 0.
$$
この古典的原理を**最小作用の原理**という.

:::

上の変分法は関数の 1 次の冪級数展開を用いて以下のように書き直される:
$$
δS[q^i(t)] = ∫_{t_1}^{t_2} \d{t'} \fdv{S[q^i(t)]}{q^i(t')} δq^i(t').
$$
$δq^i(t)$ は $t_1<t<t_2$ で任意だから, 最小作用の原理は汎関数微分を用いた以下の停留条件と等価である:
$$
\fdv{S[q^i(t)]}{q^i(t')} = 0. \quad (t_1<t<t_2)
$$

### Euler–Lagrange の運動方程式

作用は, 座標と時間に関する **Lagrangian** $L(q^i, \.q^i, t)$ を用いて以下のように表される:
$$
S[q^i] = ∫ \d{t} L(q^i, \.q^i, t).
$$
$q^i + δq^i$ の変分は,
$$
\begin{aligned}
δS[q^i]
=&  ∫_{t_1}^{t_2} \d{t} \bqty{
      L\pqty{q^i + δq^i, \.q^i + \dv{δq^i}{t}, t} - L(q^i, \.q^i, t)
    } \\
=&  ∫_{t_1}^{t_2} \d{t} \bqty{
      δq^i \pdv{L}{q^i} + \dv{δq^i}{t} \pdv{L}{\.q^i}
    } \\
=&  ∫_{t_1}^{t_2} \d{t} \bqty{
      δq^i \pdv{L}{q^i}
      - δq^i \dv{}{t} \pqty{\pdv{L}{\.q^i}}
      + \dv{}{t} \pqty{ δq^i \pdv{L}{\.q^i} }
    } \\
=&  ∫_{t_1}^{t_2} \d{t} δq^i \bqty{
      \pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}}
    }
    + \bqty{ δq^i \pdv{L}{\.q^i}}_{t=t_1}^{t=t_2}.
\end{aligned}
$$
ここで, 第2項は両端固定の境界条件 $δq^i(t_1)=δq^i(t_2)=0$ より消える:
$$
δS[q^i]
= ∫_{t_1}^{t_2} \d{t} δq^i \bqty{
    \pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}}
  }.
$$
$δq^i$ は任意だから, 条件 $δS[q^i] = 0$ より, 運動方程式が得られる:

:::screen

最小作用の原理を満たすとき, Lagrangian $L(q^i,\.q^i,t)$ は以下の **Euler–Lagrange の運動方程式**を満たす:
$$
\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}} = 0.
$$

:::

汎関数微分を用いても同様の結果が得られる. $t_1<t<t_2$ における作用の汎関数微分は
$$
\begin{aligned}
\fdv{S[q^i(t)]}{q^i(t')}
&=  \lim_{ε → 0}
    \frac{S[q^i(t) + ε δ(t - t')] - S[q^i(t)]}{ε} \\
&=  \lim_{ε → 0}
    \frac1ε
    \bqty{
      ∫_{t_1}^{t_2} \d{t} L ( q^i(t) + ε δ(t - t'), \.q^i(t) + ε \.δ(t - t'), t)
      - ∫_{t_1}^{t_2} \d{t} L (q^i(t), \.q^i(t), t)
    } \\
&=  \lim_{ε → 0}
    \frac1ε
    ∫_{t_1}^{t_2} \d{t} \bqty{
      \pdv{L}{q^i(t)} ε δ(t - t') + \pdv{L}{\.q^i(t)} ε \.δ(t - t')
      + o(ε^2)
    } \\
&=  ∫_{t_1}^{t_2} \d{t} \bqty{
      \pdv{L}{q^i(t)} δ(t - t') + \pdv{L}{\.q^i(t)} \.δ(t - t')
    } \\
&=  ∫_{t_1}^{t_2} \d{t} \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t') + \bqty{\pdv{L}{\.q^i(t)}δ(t-t')}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
したがって, $t_1<t'<t_2$ において,
$$
\fdv{S[q^i(t)]}{q^i(t')} = \pdv{L}{q^i(t')} - \dv{}{t'} \pqty{\pdv{L}{\.q^i(t')}}.
$$
または, 作用の変分を計算して,
$$
\begin{aligned}
  δS[q^i(t)]
    &= ∫_{t_1}^{t_2} \d{t'} \fdv{S[q^i(t)]}{q^i(t')} δq^i(t') \\
    &= ∫_{t_1}^{t_2} \d{t'} \qty{∫_{t_1}^{t_2} \d{t} \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t') + \bqty{\pdv{L}{\.q^i(t)}δ(t-t')}_{t=t_1}^{t=t_2}} δq^i(t') \\
    &= ∫_{t_1}^{t_2} \d{t'} ∫_{t_1}^{t_2} \d{t} δq^i(t') \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t') + \bqty{∫_{t_1}^{t_2} \d{t'} δq^i(t') \pdv{L}{\.q^i(t)}δ(t-t')}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \d{t} δq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}} + \bqty{δq^i(t) \pdv{L}{\.q^i(t)}}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
このように汎関数微分を用いても同様に Euler–Lagrange の運動方程式が得られる.

#### 例: 一次元一粒子系

一次元一粒子系の Lagrangian は,
$$
L(q, \.q, t) = \frac12 m \.q^2 - V(q).
$$
ここで,
$$
\begin{aligned}
\pdv{L}{q} &= - \pdv{V}{q}, &
\dv{}{t}\pqty{\pdv{L}{\.q}} &= \dv{}{t} (m \.q) = m \"q.
\end{aligned}
$$
したがって,
Euler–Lagrange の運動方程式より,
$$
m\"q + \pdv{V}{q} = 0.
$$

#### 例: 調和振動子

調和振動子の Lagrangian は,
$$
L(q, \.q, t) = \frac12 m \.q^2 - \frac12 m ω^2 q^2.
$$
ここで,
$$
\begin{aligned}
\pdv{L}{q} &= - m ω^2 q, &
\dv{}{t}\pqty{\pdv{L}{\.q}} &= \dv{}{t} (m \.q) = m \"q.
\end{aligned}
$$
したがって,
Euler–Lagrange の運動方程式より,
$$
m\"q + m ω^2 q = 0.
$$

### Noether の定理

時間の微小変換 $t↦t'=t+δt$ に対し, 座標が $q^i(t)↦q'^i(t')=q^i(t)+δq^i(t)$ と変換されるとする. このとき $t_1<t<t_2$ の作用は
$$
\begin{aligned}
  δS[q^i]
    &=  ∫_{t_1+δt(t_1)}^{t_2+δt(t_2)} \d{t'} L(q'^i(t'),∂'_tq'^i(t'),t') - ∫_{t_1}^{t_2} \d{t} L(q^i(t),\.q^i(t),t) \\
    &   \quad \pqty{\d{t'} = \dv{t'}{t} \d{t} = (1+δ\.t) \d{t}} \\
    &=  ∫_{t_1}^{t_2} \d{t} \Big[ (1+δ\.t) L(q'^i(t'),∂'_tq'^i(t'),t') - L(q^i(t),\.q^i(t),t) \Big] \\
    & \quad \pqty{
        ∂'_tq'(t') = \dv{t}{t'} ∂_t (q^i(t)+δq^i(t)) = (1-δ\.t)(\.q^i+δ\.q^i) = \.q^i+δ\.q^i-\.q^iδ\.t
      } \\
    &=  ∫_{t_1}^{t_2} \d{t} \Big[ δ\.t L + L(q^i+δq^i,\.q^i+δ\.q^i-\.q^iδ\.t,t+δt) - L(q^i,\.q^i,t) \Big] \\
    &=  ∫_{t_1}^{t_2} \d{t} \bqty{δ\.t L + δq^i \pdv{L}{q^i} + (δ\.q^i-\.q^iδ\.t) \pdv{L}{\.q^i} + δt \pdv{L}{t}} \\
    &   \quad \pqty{\text{Lie 微分 $δ^Lq^i(t) := q'^i(t) - q^i(t) = δq^i - \.q^i δt$}} \\
    &=  ∫_{t_1}^{t_2} \d{t} \bqty{δ\.t L + (δ^Lq^i + \.q^i δt) \pdv{L}{q^i} + (∂_tδ^Lq^i + \"q^i δt) \pdv{L}{\.q^i} + δt \pdv{L}{t}} \\
    &=  ∫_{t_1}^{t_2} \d{t} \bqty{δ\.t L + δ^Lq^i \pdv{L}{q^i} + δt \.q^i \pdv{L}{q^i} + ∂_tδ^Lq^i \pdv{L}{\.q^i} + δt \"q^i \pdv{L}{\.q^i} + δt \pdv{L}{t}} \\
    &=  ∫_{t_1}^{t_2} \d{t} \bqty{
        ∂_t \pqty{δt L} + δ^Lq^i \pdv{L}{q^i} + ∂_t\pqty{δ^Lq^i \pdv{L}{\.q^i}} - δ^Lq^i \dv{}{t} \pqty{\pdv{L}{\.q^i}}
      } \\
    &=  ∫_{t_1}^{t_2} \d{t} \qty{
          δ^Lq^i \bqty{\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}}}
        + \dv{}{t} \pqty{δ^Lq^i \pdv{L}{\.q^i} + δt L}
      } \\
    &=  ∫_{t_1}^{t_2} \d{t} δ^Lq^i \bqty{\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}}}
        + \bqty{δ^Lq^i \pdv{L}{\.q^i} + δt L}_{t=t_1}^{t=t_2} \\
    &=  ∫_{t_1}^{t_2} \d{t} δ^Lq^i \bqty{\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}}}
      + \bqty{δq^i \pdv{L}{\.q^i} - δt \pqty{\.q^i \pdv{L}{\.q^i} - L}}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
ここで, 第一項は Euler–Lagrange の運動方程式より消えて, 第二項の積分範囲は任意である[^noether]. したがって, この変換に対し作用が不変 $δS=0$ であるとすると, 対応する保存量が得られる:
$$
δQ := δq^i \pdv{L}{\.q^i} + δt \pqty{\pdv{L}{\.q^i} \.q^i - L} = \mathrm{const.}
$$
に対し,
$$
\dv{δQ}{t} = 0.
$$

[^noether]: 最小作用の原理の場合と違い, このときの $δq^i$ は両端固定でない. そのため, Euler-Lagrange の運動方程式の際に消えた発散項を, 今回の場合は消すことができない.

同じ結果を汎関数微分を用いて導出する. 同じ時間上での値を比較する Lie 微分 $δ^Lq^i(t) := q'^i(t) - q^i(t)$ に対し, 同じパラメータ(積分変数)での作用の値を比較する変分 $δ^LS[q(t)] := S[q'^i(t)] - S[q^i(t)] = S[q^i(t)+δ^Lq^i(t)] - S[q^i(t)]$ と定義する. 1次で展開して,
$$
\begin{aligned}
  δ^LS[q^i(t)]
    &= ∫\d{t'} \fdv{S[q^i(t)]}{q^i(t')} δ^Lq^i(t') \\
    &= ∫\d{t} δ^Lq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t}\pqty{\pdv{L}{\.q^i(t)}}} + ∫\d{\pqty{δ^Lq^i(t)\pdv{L}{\.q^i(t)}}}.
\end{aligned}
$$
また, $δq^i - δ^Lq^i(t) = \.q^i δt$ と同じように, $δS[q^i(t)]$ と $δ^LS[q^i(t)]$ の差を計算すると,
$$
\begin{aligned}
  δS[q^i(t)] - δ^LS[q^i(t)]
    &= (S[q'^i(t')] - S[q^i(t)]) - (S[q'^i(t)] - S[q^i(t)]) \\
    &= S[q'^i(t')] - S[q'^i(t)] \\
    &= ∫\d{t'} L(q'^i(t'),∂'_tq'^i(t'),t') - ∫\d{t} L(q'^i(t),\.q'^i(t),t) \\
    &  \quad \pqty{\d{t'} = \dv{t'}{t} \d{t} = (1+δ\.t) \d{t}} \\
    &= ∫\d{t} (1+δ\.t) L(q'^i(t'),∂'_tq'^i(t'),t') - ∫\d{t} L(q'^i(t),∂'_tq'^i(t),t) \\
    &= ∫\d{t} \bqty{δt \pdv{L}{q'^i(t)} \.q'^i + δt \pdv{L}{(∂'_tq'^i(t))} ∂'_t\.q'^i + δt \pdv{L}{t} + δ\.t L(q'^i(t),∂'_tq'^i(t),t+δt)} \\
    &= ∫\d{t} \bqty{δt \pdv{L}{q^i(t)} \.q^i + δt \pdv{L}{(\.q'^i(t))} \"q'^i + δt \pdv{L}{t} + δ\.t L} \\
    &= ∫\d{t} \dv{}{t} \pqty{δt L} \\
    &= ∫\d{\pqty{δt L}}. \\
\end{aligned}
$$
したがって,
$$
\begin{aligned}
  δS[q^i(t)]
    &= δ^LS[q^i(t)] + ∫\d{\pqty{δt L}} \\
    &= ∫\d{t} δ^Lq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t}\pqty{\pdv{L}{\.q^i(t)}}} + ∫\d{\pqty{δ^Lq^i(t)\pdv{L}{\.q^i(t)} + δt L}} \\
    &=  ∫\d{t} δ^Lq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t}\pqty{\pdv{L}{\.q^i(t)}}} + ∫ \d{\bqty{δq^i(t) \pdv{L}{\.q^i(t)} - δt \pqty{\.q^i(t) \pdv{L}{\.q^i(t)} - L}}}. \\
\end{aligned}
$$

#### 例: 空間並進に対する不変量

時間並進 $t↦t'=t, q^i(t)↦q'^i(t')=q^i(t)+ε^i$ に対し, 作用が不変であるとき, 対応する保存量は
$$
\begin{gathered}
  δQ = ε^i \pdv{L}{\.q^i} = \mathrm{const.} \\
  ∴ \pdv{L}{\.q^i} = \mathrm{const.}
\end{gathered}
$$
この不変量 $\displaystyle p_i := \pdv{L}{\.q^i}$ を**一般化運動量**という.

#### 例: 時間並進に対する不変量

時間並進 $t↦t'=t+ε$, $q^i(t)↦q'^i(t')=q^i(t)$ に対し, 作用が不変であるとき, 対応する保存量は
$$
\begin{gathered}
  δQ = ε \pqty{\.q^i \pdv{L}{\.q^i} - L} = \mathrm{const.} \\
  ∴ \.q^i \pdv{L}{\.q^i} - L = \mathrm{const.}
\end{gathered}
$$
この不変量 $\displaystyle H := \.q^i \pdv{L}{\.q^i} - L = \.q^i p_i - L$ を **Hamiltonian** という.

#### 例: 空間回転に対する不変量

$D=3$ とする. 空間回転 $t↦t'=t, \bm{x}(t) ↦ \bm{x}'(t') = R(\bm{ε}) \bm{x}(t) = \bm{x}(t) - \bm{ε} × \bm{x}(t)$ に対し, 作用が不変であるとき, 対応する保存量は
$$
δQ = (- \bm{ε} × \bm{x}) ⋅ \pdv{L}{\.{\bm{x}}} = - \bm{ε} ⋅ \pqty{\bm{x} × \pdv{L}{\.{\bm{x}}}} = \mathrm{const.}
$$
$$
∴ \bm{x} × \pdv{L}{\.{\bm{x}}} = \mathrm{const.}
$$
この不変量 $\displaystyle \bm{l} := \bm{x} × \pdv{L}{\.{\bm{x}}} = \bm{x} × \bm{p}$ を角運動量という.

TODO: 一般の回転変換に対する不変量

### Hamilton の運動方程式

**一般化運動量** $p_i ≡ ∂L / ∂\.q^i$ を用いて, **Hamiltonian** $H(q^i, p_i, t) ≡ \.q^i p_i - L$ を定義する. Hamiltonian の全微分は,
$$
\begin{aligned}
\d{H} &=  \.q^i \d{p_i} + p_i \d{\.q^i} - \d{L} \\
    &=  \.q^i \d{p_i} + p_i \d{\.q^i}
        - \pdv{L}{q^i} \d{q^i} - p_i \d{\.q^i} - \pdv{L}{t} \d{t} \\
    &   \quad \pqty{
          ∵ \d{L} = \pdv{L}{q^i} \d{q^i} + \pdv{L}{\.q^i} \d{\.q^i} + \pdv{L}{t} \d{t}
        } \\
    &=  - \pdv{L}{q^i} \d{q^i} + \.q^i \d{p_i} - \pdv{L}{t} \d{t}.
\end{aligned}
$$
ここで, Euler-Lagrangian 方程式が成立するとき $\.p_i = ∂L / ∂q^i$ であることを用いると, **Hamilton の運動方程式**あるいは**正準方程式** canonical equation が得られる:
$$
\begin{aligned}
\.p_i = - \pdv{H}{q^i}, && \.q^i = \pdv{H}{p_i}.
\end{aligned}
$$

$p_i$ を $q^i$ に**共役な運動量** conjugate momentum といい, また $(q^i, p_i)$ の組を**正準変数** canonical variables という.

Lagrangian が時間に陽に依存しないとき, Hamiltonian は保存する:
$$
\pdv{H}{t} = -\pdv{L}{t} = 0.
$$

#### 例: 一次元一粒子系

一次元一粒子系の Lagrangian は,
$$
L(q, \.q, t) = \frac12 m \.q^2 - V(q).
$$
ここで, 一般化運動量の定義より,
$$
p = \pdv{L}{\.q} = m \.q.
$$
したがって $\.q = p / m$ であるから, Hamiltonian の定義より,
$$
H(q, p, t) = \frac{p}{m} p - L\pqty{q, \frac{p}{m}, t} = \frac{p^2}{2m} + V(q).
$$
ここで,
$$
\begin{aligned}
\pdv{H}{q} &= \dv{V}{q}, & \pdv{H}{p} &= \frac{p}{m}.
\end{aligned}
$$
したがって, Hamilton の運動方程式は,
$$
\begin{aligned}
\.p &= - \dv{V}{q}, & \.q &= \frac{p}{m}.
\end{aligned}
$$

#### 例: 調和振動子

調和振動子の Lagrangian は,
$$
L(q, \.q, t) = \frac12 m \.q^2 - \frac12 m ω^2 q^2.
$$
ここで, 一般化運動量の定義より,
$$
p = \pdv{L}{\.q} = m \.q.
$$
したがって $\.q = p / m$ であるから, Hamiltonian の定義より,
$$
H(q, p, t) = \frac{p}{m} p - L\pqty{q, \frac{p}{m}, t} = \frac{p^2}{2m} + \frac12 m ω^2 q^2.
$$
ここで,
$$
\begin{aligned}
\pdv{H}{q} &= m ω^2 q, & \pdv{H}{p} &= \frac{p}{m}.
\end{aligned}
$$
したがって, Hamilton の運動方程式は,
$$
\begin{aligned}
\.p &= - m ω^2 q, & \.q &= \frac{p}{m}.
\end{aligned}
$$

### 正準変換

正準変数の変換 $(q^i, p_i) ↦ (Q^j, P_j) = (Q^j(q^i, p_i), P_j(q^i, p_i))$ に対して Hamiltonian が $H (q^i, p_i) ↦ K (Q^j, P_j)$ と変換されるとき, この正準変数の変換を**正準変換**という. Hamiltonian の定義から, $δ∫ \d{t} (\.q^i p_i - H) = 0$ かつ $δ∫ \d{t} (\.Q^i P_i - K) = 0$. したがって, ある関数 $W$ が存在して,
$$
\begin{gathered}
  (\.q^i p_i - H) - (\.Q^i P_i - K) = \dv{W}{t}. \\
  ∴\d{W} = p_i \d{q^i} - P_i \d{Q^i} - (H - K) \d{t}.
\end{gathered}
$$
または, 両辺に $\d{Q^i P_i}/\d{t}$ を足して,
$$
\begin{gathered}
  (\.q^i p_i - H) - (- Q^i \.P_i - K) = \dv{}{t} \pqty{W + Q^i P_i} =: \dv{W'}{t}. \\
  ∴\d{W'} = p_i \d{q^i} + Q^i \d{P_i} - (H - K) \d{t}.
\end{gathered}
$$
これら $W(q^i, Q^i, t)$, $W'(q^i, P_i, t)$ をどちらも**母関数**といい, 以下を満たす.
$$
\begin{gathered}
p_i = \pdv{W}{q^i}, \quad P_i = - \pdv{W}{Q^i}, \quad K = H + \pdv{W}{t}, \\
p_i = \pdv{W'}{q^i}, \quad Q^i = \pdv{W'}{P_i}, \quad K = H + \pdv{W'}{t}.
\end{gathered}
$$

### Poisson 括弧

正準変数 $(q^i, p_i)$ に対し, **Poisson 括弧** Poisson braket は以下で定義される演算である:
$$
\{A, B\}_\mathrm{P}
≡  \pdv{A}{q^i}\pdv{B}{p_i}
        - \pdv{B}{q^i}\pdv{A}{p_i}.
$$
例えば,
$$
\begin{aligned}
\{q^i, H\}_\mathrm{P} = \.q^i, && \{p_i, H\}_\mathrm{P} = \.p_i.
\end{aligned}
$$
$$
\begin{aligned}
\{q^i, q^j\}_\mathrm{P} = \{p_i, p_j\}_\mathrm{P} = 0, && \{q^i, p_j\}_\mathrm{P} = δ_j^i.
\end{aligned}
$$

ある物理量 $A(q^i, p_i, t)$ について, 時間発展に関する式は:
$$
\dv{A}{t} = \{A, H\}_\mathrm{P} + \pdv{A}{t}.
$$
実際, $A$ の時間による完全微分は,
$$
\begin{aligned}
\dv{A}{t}
&=  \pdv{A}{q^i} \.q^i + \pdv{A}{p_i} \.p_i + \pdv{A}{t} \\
&=  \pdv{A}{q^i} \pdv{H}{p_i} - \pdv{A}{p_i} \pdv{H}{q^i} + \pdv{A}{t} \\
&=  \{A, H\}_\mathrm{P} + \pdv{A}{t}.
\end{aligned}
$$
