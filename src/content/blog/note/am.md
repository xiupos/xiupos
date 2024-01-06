---
title : 解析力学
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 最小作用の原理

時間に依存する**一般化座標**と呼ばれるパラメータ $q_i$ に対して, **作用** action と呼ばれる汎関数 $S[q_i]$ が存在し, $q_i$ は物理現象において $S[q_i]$ が最小となるよう変化する. つまり, 停留条件 $δS[q_i] = 0$ を満たす.

### Euler–Lagrange の運動方程式

作用は, 座標と時間に関する **Lagrangian** $L(q_i, \.q_i, t)$ を用いて以下のように表される:
$$
S[q_i] = ∫ \dd{t} L(q_i, \.q_i, t).
$$
$q_i + δq_i$ の変分をとって,
$$
\begin{aligned}
δS[q_i]
=&  ∫ \dd{t} \bqty{
      L\pqty{q_i + δq_i, \.q_i + \dv{δq_i}{t}, t} - L(q_i, \.q_i, t)
    } \\
=&  ∫ \dd{t} \bqty{
      δq_i \pdv{L}{q_i} + \dv{δq_i}{t} \pdv{L}{\.q_i}
    } \\
=&  ∫ \dd{t} \bqty{
      δq_i \pdv{L}{q_i}
      - δq_i \dv{}{t} \pqty{\pdv{L}{\.q_i}}
      + \dv{}{t} \pqty{ δq_i \pdv{L}{\.q_i} }
    }.
\end{aligned}
$$
ここで, 発散項は境界条件より消える:
$$
δS[q_i]
= ∫ \dd{t} δq_i \bqty{
    \pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}}
  }.
$$
したがって, 停留条件 $δS[q_i] = 0$ より,
**Euler–Lagrange の運動方程式**が得られる:
$$
\pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}} = 0.
$$

または, 作用の汎関数微分は
$$
\begin{aligned}
\fdv{S[q_i(t')]}{q_i(t)}
&=  \lim_{ε → 0}
    \frac{S[q_i(t') + ε δ(t' - t)] - S[q_i(t')]}{ε} \\
&=  \lim_{ε → 0}
    \frac1ε
    ∫ \dd{t'} \bqty{
      L ( q_i(t') + ε δ(t' - t), \.q_i(t') + ε \.δ(t' - t), t')
      - L (q_i(t'), \.q_i(t'), t')
    } \\
&=  \lim_{ε → 0}
    \frac1ε
    ∫ \dd{t'} \bqty{
      \pdv{L}{q_i(t')} ε δ(t' - t) + \pdv{L}{\.q_i(t')} ε \.δ(t' - t)
      + o(ε^2)
    } \\
&=  ∫ \dd{t} \bqty{
      \pdv{L}{q_i(t')} δ(t' - t) + \pdv{L}{\.q_i(t')} \.δ(t' - t)
    } \\
&=  \pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}}. \qquad \pqty{∵ ∫ \dd{t'} f(t') \.δ(t' - t) = - \.f(t)}
\end{aligned}
$$
これを用いると Euler–Lagrange の運動方程式は
$$
\fdv{S[q_i(t')]}{q_i(t)} = \pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}} = 0.
$$

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

### Hamilton の運動方程式

**一般化運動量** $p^i ≡ ∂L / ∂\.q_i$ を用いて, **Hamiltonian** $H(q_i, p^i, t) ≡ p^i \.q_i - L$ を定義する. Hamiltonian の全微分は,
$$
\begin{aligned}
\dd{H} &=  \.q_i \dd{p^i} + p^i \dd{\.q_i} - \dd{L} \\
    &=  \.q_i \dd{p^i} + p^i \dd{\.q_i}
        - \pdv{L}{q_i} \dd{q_i} - p^i \dd{\.q_i} - \pdv{L}{t} \dd{t} \\
    &   \quad \pqty{
          ∵ \dd{L} = \pdv{L}{q_i} \dd{q_i} + \pdv{L}{\.q_i} \dd{\.q_i} + \pdv{L}{t} \dd{t}
        } \\
    &=  - \pdv{L}{q_i} \dd{q_i} + \.q_i \dd{p^i} - \pdv{L}{t} \dd{t}.
\end{aligned}
$$
ここで, Euler-Lagrangian 方程式が成立するとき $\.p^i = ∂L / ∂q_i$ であることを用いると, **Hamilton の運動方程式**あるいは**正準方程式** canonical equation が得られる:
$$
\begin{aligned}
\.p^i = - \pdv{H}{q_i}, && \.q_i = \pdv{H}{p^i}.
\end{aligned}
$$
このとき $p^i$ は $q_i$ に**共役な運動量** conjugate momentum といい, また $(q_i, p^i)$ の組を**正準変数** canonical variables という.

また, Lagrangian が時間に陽に依存しないとき, Hamiltonian は保存する:
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
H(q, p, t) = p \frac{p}{m} - L\pqty{q, \frac{p}{m}, t} = \frac{p^2}{2m} + V(q).
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
H(q, p, t) = p \frac{p}{m} - L\pqty{q, \frac{p}{m}, t} = \frac{p^2}{2m} + \frac12 m ω^2 q^2.
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

正準変数の変換 $(p^i, q_i) ↦ (P_j, Q_j) = (P_j(p^i, q_i), Q_j(p^i, q_i))$ に対して Hamiltonian が $H (q_i, p^i) ↦ K (Q_j, P_j)$ と変換されるとき, この正準変数の変換を**正準変換**という. Hamiltonian の定義から, $δ∫ \dd{t} (p^i \.q_i - H) = 0$ かつ $δ∫ \dd{t} (P^i \.Q_i - K) = 0$. したがって, ある関数 $W$ が存在して,
$$
(p^i \.q_i - H) - (P^i \.Q_i - K) = \dv{W}{t}.
$$
$$
∴
\dd{W} = p^i \dd{q_i} - P^i \dd{Q_i} + (K - H) \dd{t}.
$$
この $W(q_i, Q_i, t)$ を**母関数**といい, 以下を満たす.
$$
\begin{aligned}
p^i = \pdv{W}{q_i},
&& P^i = - \pdv{W}{Q_i},
&& K = H + \pdv{W}{t}.
\end{aligned}
$$

### Poisson 括弧

正準変数 $(q_i, p^i)$ に対し, **Poisson 括弧** Poisson braket は以下で定義される演算である:
$$
\{A, B\}_\mathrm{P}
≡  \pdv{A}{q_i}\pdv{B}{p^i}
        - \pdv{B}{q_i}\pdv{A}{p^i}.
$$
例えば,
$$
\begin{aligned}
\{q_i, H\}_\mathrm{P} = \.q_i, && \{p^i, H\}_\mathrm{P} = \.p^i.
\end{aligned}
$$
$$
\begin{aligned}
\{q_i, q_j\} = \{p^i, p^j\} = 0, && \{q_i, p^j\} = δ_i^j.
\end{aligned}
$$

ある物理量 $A(q_i, p^i, t)$ について, 時間による完全微分は,
$$
\begin{aligned}
\dv{A}{t}
&=  \pdv{A}{q_i} \.q_i + \pdv{A}{p^i} \.p^i + \pdv{A}{t} \\
&=  \pdv{A}{q_i} \pdv{H}{p^i} + \pdv{A}{p^i} \pdv{H}{q_i} + \pdv{A}{t}.
\end{aligned}
$$
Poisson 括弧を用いて書き直すと, 物理量 $A$ の時間発展に関する式が得られる:
$$
\dv{A}{t} = \{A, H\}_\mathrm{P} + \pdv{A}{t}.
$$
