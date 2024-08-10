---
title : 粒子系の古典論ノート
author : xiupos
date : \today
pubDate : 2024-05-28T18:25:00+09:00
lang : ja
math : true
pdf : /pdf/note/particle-c.pdf
---

粒子系[^particles]の古典論の基本事項を体系的にまとめる.

[^particles]: ここでの「粒子系」は「(一般的な意味での)場でない」程度の意味である. 厳密には粒子系も時間 $ℝ$ から配位空間 $ℝ^D$ への場 $q=(q^i):ℝ→ℝ^D$ であるから, 場の理論の特別な場合とも言える.

### 最小作用の原理

粒子系の古典論において, 以下を原理として認める.

:::screen

時間 $t$ に依存する**一般化座標**と呼ばれるパラメータ $q^1(t),…,q^D(t)$ に対して, **作用** action と呼ばれる汎関数 $S[q^i]$ が存在し[^Sq], 物理現象において座標 $q^i$ は作用 $S[q^i]$ が最小となるような経路が選ばれる.

[^Sq]: 正しくは $S[q^1(t),…,q^D(t)]$ と書かれるべきであるが, 配位空間に関する任意の列 $\{a^1,…,a^D\}$ は単に $a^i$ と書かれることが多い. この添字 $i$ は添字集合 $\{a^i\}_{i=1}^D$ 程度の意味であり, あまり気にしてはいけない.

言いかえると, 時間 $t_1$ から $t_2$ の運動において, $q^i(t) ↦ q^i(t) + δq^i(t)$ (ただし両端固定 $δq^i(t_1)=δq^i(t_2)=0$) なる経路の微小変換に対し, 作用が停留値を取る:
$$
δS[q^i] ≡ S[q^i + δq^i] - S[q^i] = 0.
$$
この古典的原理を**最小作用の原理**という.

:::

系に対し適当な作用 $S[q^i]$, あるいは次節の Lagrangian を決定するのが, 物理学の本質と言えよう.

#### 例: 自由一次元一粒子系

質量 $m$ の自由一次元一粒子系の作用は
$$
S[q] = \frac{m}{2} \frac{(q(t_2)-q(t_1))^2}{t_2-t_1}
$$
である.

#### 例: 調和振動子

質量 $m$, 角振動数 $ω$ の調和振動子の作用は
$$
S[q] = \frac{mω}{2 \sin ω(t_2-t_1)} \bqty{(q(t_1)^2+q(t_2)^2) \cos ω(t_2-t_1) - 2q(t_1)q(t_2)}
$$
である. 上の例とあわせて, これらが $δS[q^i] = 0$ を満たすことは明らかである.

### Euler–Lagrange の運動方程式

系の作用を直接求めることは難しく, これから定義する Lagrangian を用いるのが便利である:

:::screen

作用は, 座標と時間に関する **Lagrangian** $L(q^i, \.q^i, t)$ を用いて以下のように表される:
$$
S[q^i] = ∫_{t_1}^{t_2} \d{t} L(q^i, \.q^i, t).
$$

:::

最小作用の原理に対し, この Lagrangian が満たすべき条件を求めよう. $q^i ↦ q^i + δq^i$ の変換に対し,
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
$δq^i(t)$ は $t_1<t<t_2$ で任意だから, 原理 $δS[q^i] = 0$ より, 次の運動方程式が得られる:

:::screen

最小作用の原理を満たすとき, Lagrangian $L(q^i,\.q^i,t)$ は以下の **Euler–Lagrange の運動方程式**を満たす:
$$
\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}} = 0.
$$

:::

これにより, 変分条件 $δS[q^i]=0$ を満たす $q^i(t)$ を求める問題は, Euler–Lagrange 方程式という微分方程式を解く問題と等価であることがわかった.

#### 例: 一次元一粒子系

一次元一粒子系の Lagrangian は
$$
L(q, \.q, t) = \frac12 m \.q^2 - V(q)
$$
で与えられる. ただし $V(q)$ は系のポテンシャルである. ここで,
$$
\pdv{L}{q} = - \pdv{V}{q}, \quad \dv{}{t}\pqty{\pdv{L}{\.q}} = \dv{}{t} (m \.q) = m \"q
$$
であるから, Euler–Lagrange の運動方程式は,
$$
m\"q + \pdv{V}{q} = 0.
$$
これは Newton の運動方程式として知られており, Lagrangian 決定の任意性を除けば, 最小作用の原理は物理原理として well-defined であることがわかる.

ポテンシャルが無い ($V=0$) ときの作用の表式を求める. 運動方程式 $m\"q = 0$ を解いて,
$$
\.q(t) = \frac{q(t_2)-q(t_1)}{t_2-t_1}.
$$
したがって, 作用は
$$
S[q] = ∫_{t_1}^{t_2} \d{t} \frac{m}{2} \frac{(q(t_2)-q(t_1))^2}{(t_1-t_2)^2} = \frac{m}{2} \frac{(q(t_2)-q(t_1))^2}{t_2-t_1}
$$
と求められる.

#### 例: 調和振動子

調和振動子の Lagrangian は,
$$
L(q, \.q, t) = \frac12 m \.q^2 - \frac12 m ω^2 q^2.
$$
で与えられる. ここで,
$$
\pdv{L}{q} = - m ω^2 q, \quad \dv{}{t}\pqty{\pdv{L}{\.q}} = \dv{}{t} (m \.q) = m \"q
$$
であるから, Euler–Lagrange の運動方程式は
$$
m\"q + m ω^2 q = 0.
$$

作用の表式を求める. 運動方程式を解いて,
$$
\begin{aligned}
  q(t) &= \frac{q_1 \sin ω(t-t_2) - q_2 \sin ω(t-t_1)}{\sin ω(t_1-t_2)}, \\
  \.q(t) &= ω \frac{q_1 \cos ω(t-t_2) - q_2 \cos ω(t-t_1)}{\sin ω(t_1-t_2)}. \\
\end{aligned}
$$
ただし, $q_1 ≡ q(t_1)$, $q_2 ≡ q(t_2)$ とした. したがって, 作用は,
$$
\begin{aligned}
  S[q]
    &= ∫_{t_1}^{t_2} \d{t} \frac{m}{2} \bqty{\qty{ω \frac{q_1 \cos ω(t-t_2) - q_2 \cos ω(t-t_1)}{\sin ω(t_1-t_2)}}^2 - ω^2 \qty{\frac{q_1 \sin ω(t-t_2) - q_2 \sin ω(t-t_1)}{\sin ω(t_1-t_2)}}^2} \\
    &= ∫_{t_1}^{t_2} \d{t} \frac{mω^2}{2} \frac{q_1^2 \cos 2ω(t-t_2) + q_2^2 \cos 2ω(t-t_1) - 2q_1q_2\cos(2t-t_1-t_2)}{\sin^2 ω(t_2-t_1)} \\
    &= \frac{mω}{2 \sin ω(t_2-t_1)} \bqty{(q_1^2+q_2^2) \cos ω(t_2-t_1) - 2q_1q_2} \\
\end{aligned}
$$
と求められる.

### Noether の定理

Lagrangian は運動方程式を与えるだけでなく, 系の対称性に関する情報も持っている. 時間と座標の連続変換に対し作用が不変であるとき, 系には対応する不変量が存在することが知られている. この定理は Noether の定理と呼ばれている.

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
    &   \quad \pqty{\text{Lie 微分 $δ^Lq^i(t) ≡ q'^i(t) - q^i(t) = δq^i - \.q^i δt$}} \\
    &=  ∫_{t_1}^{t_2} \d{t} \bqty{δ\.t L + (δ^Lq^i + \.q^i δt) \pdv{L}{q^i} + (∂_tδ^Lq^i + \"q^i δt) \pdv{L}{\.q^i} + δt \pdv{L}{t}} \\
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
ここで, 最後の式の第一項は Euler–Lagrange の運動方程式より消え, 第二項の $t_1$, $t_2$ は任意である[^noether]. したがって, この変換に対し作用が不変 $δS=0$ であるとすると, 対応する保存量が得られる:

[^noether]: 最小作用の原理の場合と違い, このときの $δq^i$ は両端固定でない. そのため, Euler-Lagrange の運動方程式の際に消えた発散項を, 今回の場合は消すことができない.

:::screen

時間の微小変換 $t↦t'=t+δt$ に対し, 座標が $q^i(t)↦q'^i(t')=q^i(t)+δq^i(t)$ と変換されるとき, 作用が不変であるならば, 量
$$
δQ ≡ δq^i p_i - δt H ≡ δq^i \pdv{L}{\.q^i} - δt \pqty{\pdv{L}{\.q^i} \.q^i - L}
$$
は保存する(**Noether の定理** *Noether's theorem*):
$$
\dv{δQ}{t} = 0, \quad (⇔ δQ = \mathrm{const.})
$$
ここで, 量
$$
p_i ≡ \pdv{L}{\.q^i}, \quad H ≡ \.q^i \pdv{L}{\.q^i} - L = \.q^i p_i - L
$$
はそれぞれ一般化運動量, Hamiltonian と呼ばれる(後述).

:::

#### 例: 空間並進に対する不変量

空間並進 $t↦t'=t, q^i(t)↦q'^i(t')=q^i(t)+ε^i$ に対し, 作用が不変であるとき, 一般化運動量は保存する:
$$
δQ = ε^i p_i = \mathrm{const.} \quad ∴ p_i = \mathrm{const.}
$$

#### 例: 時間並進に対する不変量

時間並進 $t↦t'=t+ε$, $q^i(t)↦q'^i(t')=q^i(t)$ に対し, 作用が不変であるとき, Hamiltonian は保存する:
$$
δQ = - ε H = \mathrm{const.} \quad ∴ H = \mathrm{const.}
$$

#### 例: 空間回転に対する不変量

3 次元空間での一粒子を考える. 正規直交座標系 $q=\bm{x}$ を取り, 空間回転 $t↦t'=t$, $\bm{x}(t) ↦ \bm{x}'(t') = R(\bm{ε}) \bm{x}(t) = \bm{x}(t) - \bm{ε} × \bm{x}(t)$ に対し, 作用が不変であるとき, 対応する保存量 $\bm{L}$ は角運動量と呼ばれる:
$$
δQ = (- \bm{ε} × \bm{x}) ⋅ \bm{p} = - \bm{ε} ⋅ \pqty{\bm{x} × \bm{p}} = \mathrm{const.}
$$
$$
∴ \bm{L} ≡ \bm{x} × \bm{p} = \mathrm{const.}
$$

<!-- TODO: 一般の Galilei 群に対する不変量 -->

### Hamilton–Jacobi 方程式

前節で導入された Hamiltonian は, 系に関して Lagrangian と同程度の情報を持つ. 以降, Hamiltonian の性質について詳しくみていく.

:::screen

Lagrangian $L$ が与えられたとき, $q^i$ に対して
$$
p_i ≡ \pdv{L}{\.q^i}
$$
を**一般化運動量**, または $q^i$ に**共役な運動量** *conjugate momentum* といい, 一般化座標とそれに共役な運動量の組 $(q^i, p_i)$ を**正準変数** *canonical variables* という.

Lagrangian $L$ と正準変数 $(q^i, p_i)$ が与えられたとき,
$$
H(q^i, p_i, t) ≡ \.q^i p_i - L
$$
を **Hamiltonian** という.

:::

一般化運動量と Hamiltonian は作用を端点で偏微分することで得ることもできる:
$$
p_i(t) = \pdv{S}{q^i(t)}, \quad H(q^i,p_i,t) = - \pdv{S}{t}.
$$
ただし作用は $S[q^i]=∫_{t_0}^{t} \d{t'} L(q^i,\.q^i,t')$ で与えられている. 実際, Norther の定理と同じ状況での変分は
$$
δS[q^i] = \bqty{δq^i p_i - δt H}_{t'=t_0}^{t'=t}.
$$
始点での変位を $δt(t_0)=δq^i(t_0)=0$ とすれば,
$$
δS[q^i] = δq^i p_i - δt H.
$$
この変分は経路の始点と途中 $t'∈[t_0,t)$ によらない形になっているから, 一点 $t$ での変位から求めたい全微分が得られる:
$$
\d{S} = \d{q^i} p_i - \d{t} H.
$$

これらの性質を組み合わせることで以下の方程式が得られる:

:::screen

最小作用の原理を満たす作用 $S[q^i] = ∫_{t_0}^t \d{t'} L(q^i,\.q^i,t')$ に対し, 作用の端点 $t$, $q(t)$ での偏微分は **Hamilton–Jacobi 方程式** *Hamilton–Jacobi equation* を満たす:
$$
H\pqty{q^i(t),\pdv{S}{q^i(t)},t}+\pdv{S}{t}=0.
$$

:::

### Hamilton の運動方程式

Lagrangian の場合と同様に, 最小作用の原理に対し Hamiltonian が満たす条件を求めよう. Hamiltonian $H(q^i, p_i, t) ≡ \.q^i p_i - L$ の全微分は,
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
ここで, Euler-Lagrangian 方程式が成立するとき $\.p_i = ∂L / ∂q^i$ であることを用いると, Hamiltonian に関する運動方程式が得られる:

:::screen

最小作用の原理を満たすとき, Hamiltonian は以下の **Hamilton の運動方程式**あるいは**正準方程式** canonical equation を満たす:
$$
\.p_i = - \pdv{H}{q^i}, \quad \.q^i = \pdv{H}{p_i}.
$$

:::

Lagrangian が時間に陽に依存しないとき, Hamiltonian は保存する:
$$
\pdv{H}{t} = -\pdv{L}{t} = 0.
$$

$q^i(t)$ と $p_i(t)$ を独立にした作用
$$
S[q^i, p_i] = ∫_{t_1}^{t_2}\d{t} \bqty{\.q^i(t) p_i(t) - H\pqty{q^i(t),p_i(t),t}}.
$$
も用いられる.

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

正準変数の変換 $(q^i, p_i) ↦ (q'^j, p'_j) = (q'^j(q^i, p_i), p'_j(q^i, p_i))$ に対して Hamiltonian が $H(q^i,p_i,t) ↦ H'(q'^j,p'_j,t)$ と変換されるとき, この正準変数の変換を**正準変換** *canonical transformation* という. いずれの表示でも最小作用の原理を満たすとき, Hamiltonian の定義から,
$$
\begin{aligned}
  δS[q^i,p_i] &= δ∫\d{t} (\.q^i p_i - H) = 0, \\
  δS'[q'^i,p'_i] &= δ∫\d{t} (\.q'^i p'_i - H') = 0.
\end{aligned}
$$
したがって, ある関数 $W$ が存在して,
$$
\begin{gathered}
  (\.q^i p_i - H) - (\.q'^i p'_i - H') = \dv{W}{t}. \\
  ∴\d{W} = p_i \d{q^i} - p'_i \d{q'^i} - (H - H') \d{t}.
\end{gathered}
$$
または, 両辺に $\d{(q'^i p'_i)}/\d{t}$ を足して,
$$
\begin{gathered}
  (\.q^i p_i - H) - (- q'^i \.p'_i - H') = \dv{}{t} \pqty{W + q'^i p'_i} =: \dv{W'}{t}. \\
  ∴\d{W'} = p_i \d{q^i} + q'^i \d{p'_i} - (H - H') \d{t}.
\end{gathered}
$$
これら $W(q^i, q'^i, t)$, $W'(q^i, p'_i, t)$ をどちらも**母関数**といい, 以下を満たす.
$$
\begin{gathered}
p_i = \pdv{W}{q^i}, \quad p'_i = - \pdv{W}{q'^i}, \quad H' = H + \pdv{W}{t}, \\
p_i = \pdv{W'}{q^i}, \quad q'^i = \pdv{W'}{p'_i}, \quad H' = H + \pdv{W'}{t}.
\end{gathered}
$$

### Poisson 括弧

:::screen

正準変数 $(q^i, p_i)$ に対し, **Poisson 括弧** Poisson braket は以下で定義される演算である:
$$
\{A, B\}_\mathrm{P} ≡ \pdv{A}{q^i}\pdv{B}{p_i} - \pdv{B}{q^i}\pdv{A}{p_i}.
$$

:::

正準変数自身は以下を満たす:
$$
\{q^i, p_j\}_\mathrm{P} = δ_j^i, \quad \{q^i, q^j\}_\mathrm{P} = \{p_i, p_j\}_\mathrm{P} = 0.
$$
また, Hamilton の運動方程式は以下のように書き換えられる:
$$
\begin{aligned}
\dv{q^i}{t} = \{q^i, H\}_\mathrm{P}, && \dv{p_i}{t} = \{p_i, H\}_\mathrm{P}.
\end{aligned}
$$
より一般に, 正準変数と時間に関する物理量 $A(q^i, p_i, t)$ について, 時間微分に関して以下が成立する:
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
この式は, 物理量 $A$ の全時間発展が Hamiltonian $H$ によって記述されることを意味している.

<!-- TODO: Hamilton 形式による Noether の定理 -->

### 参考文献

- ランダウ, L., リフシッツ, E. 『力学』 (広重 徹, 水戸 巌訳, 東京図書, 2008)
- 高橋 康, 柏 太郎 『量子場を学ぶための場の解析力学入門 増補第2版』 (講談社サイエンティフィク, 2005)
- 柏 太郎 『新版 演習 場の量子論』 (サイエンス社, 2006)
