---
title : 物理ノート
pubDate : 2023-10-05T01:00:00+09:00
lang : ja
draft : true
math : true
---

## 汎関数

### 汎関数微分

汎関数 $F[\varphi(x)]$ の点 $y$ における汎関数微分は
$$
\fdv{F[\varphi(x)]}{ε(y)} := \lim_{ε→0} \frac{F[\varphi(x) + εδ(x-y)] - F[\varphi(x)]}{ε}.
$$

## 解析力学

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
      L( q_i + δq_i, \.q_i + δ\.q_i, t) - L(q_i, \.q_i, t)
    } \\
=&  ∫ \dd{t} \bqty{
      δq_i \pdv{L}{q_i}
      + δ\.q_i \pdv{L}{\.q_i}
      + o\pqty{\sqrt{δq_i δq_i + δ\.q_i δ\.q_i}}
    } \\
=&  ∫ \dd{t} \bqty{
      δq_i \pdv{L}{q_i} + \dv{δq_i}{t} \pdv{L}{\.q_i}
    }
    \quad \pqty{∵ δ\.q_i = \dv{δq_i}{t}} \\
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
      \left. \pdv{L}{q_i} \right|_{t = t'} ε δ(t' - t) + \left. \pdv{L}{\.{q_i}_i} \right|_{t = t'} ε \.δ(t' - t)
      + o(ε^2)
    } \\
&=  ∫ \dd{t} \bqty{
      \left. \pdv{L}{q_i} \right|_{t = t'} δ(t' - t) + \left. \pdv{L}{\.q_i} \right|_{t = t'} \.δ(t' - t)
    } \\
&=  \pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}}. \qquad \pqty{∵ ∫ \dd{t'} f(t') \.δ(t' - t) = - \.f(t)}
\end{aligned}
$$
これを用いると Euler–Lagrange の運動方程式は
$$
\fdv{S[q_i(t')]}{q_i(t)} = \pdv{L}{q_i} - \dv{}{t} \pqty{\pdv{L}{\.q_i}} = 0.
$$

#### 例: 調和振動子

調和振動子の Lagrangian は,
$$
L(q, \.q, t) = \frac12 \.q^2 - \frac12 m ω^2 q^2.
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

## 代数学

### 群

集合 $G$ と写像 $μ : G × G → G$ に対して, 以下の3条件を考える.

1. **結合律**: $μ(μ(x, y), z) = μ(x, μ(y, z))$,
2. **単位元の存在**: $∃ e ∈ G$, $μ(x, e) = μ(e, x) = x$,
3. **逆元の存在**: $∃ x' ∈ G$, $μ(x, x') = μ(x', x) = e$,
4. **可換律**: $μ(x, y) = μ(y, x)$.

組 $(G, μ)$ あるいは単に $G$ について, 条件1を満たすものを**半群** semi-group, 条件1,2を満たすものを**モノイド** monoid, 条件1,2,3を満たすものを**群** group, 条件1,2,3,4を満たすものを**可換群** commutative group あるいは **Abel 群** abelian group という. $μ(x, y) =: x ⋅ y =: xy$, $e =: 1$, $x' =: x^{-1}$ などと表記される. また, 可換群において, $μ(x, y) =: x + y$, $e =: 0$, $x' =: -x$ などと表記される.

群 $G$ が有限集合であるとき, $G$ を**有限群** finite group という. このとき, $G$ の濃度を $G$ の**位数** order といい, $\abs{G}$ と書く. 群 $G$ が有限群でないとき, $G$ を**無限群** infinite group という.

群 $G$ の元 $g$ に対して, $g^n = e$ となる $n ∈ ℕ$ が存在するとき, $g$ は有限位数であるといい, またこれを満たす最小の $n$ を $g$ の位数といい, $\mathrm{ord}(g)$ と書く. 位数 $n$ の $g$ の羃乗で作られる群を**巡回群**という.

集合 $X$ から $X$ への全単射の全体は, 写像の合成に関して群をなし, これを $X$ の**自己同型群**といい, $\mathrm{Aut}(X)$ と書く.

### 部分群と剰余類

群 $G$ について, 部分集合 $H ⊂ G$ が群の元 $x, y ∈ H$ に対して $x y^{-1} ∈ H$ を満たすとき, $H$ を $G$ の**部分群**という. また, 部分集合 $S ⊂ G$ に対して, $S$ を含む最小の部分群を **$S$ が生成する部分群** subgroup generated by $S$ といい, $\ev{S}$ と書く. 特に $G = \ev{S}$ であるとき, $S$ を $G$ の**生成系** system of generators という.

群 $G$ の部分群 $H$ について, $gH := \{ gh \mid h ∈ H \} ⊂ G$ を**左剰余類** left conset という. 左剰余類の全体を $G/H$ と書く. 同様に右剰余類 $Hg$ とその全体 $H \backslash G$ が定まる.

群 $G$ の部分群 $H$ について, 群の元 $g ∈ G$ に対し $gHg^{-1} = H$ を満たす $H$ を $G$ の**正規部分群** normal subgroup といい, $H \triangleleft G$ と書く. 群の元 $g, g' ∈ G$ に対して, $G/H$ 上の演算 $(gH)(g'H) := (gg')H$ によって $G/H$ は群となる. この群を**商群** quotient group という.

### 準同型写像

群 $G$, $G'$ について, 写像 $f : G → G'$ が群の元 $x, y ∈ G$ に対し $f(xy) = f(x) f(y)$ を満たすとき, $f$ を $G$ から $G'$ への**準同型写像** homomorphism, あるいは単に**準同型** hommomorohic という. また, 準同型 $f$ が全単射であるとき, $f$ を**同型写像** isomorphism, あるいは単に**同型** isomorphic といい, $G ≃ G'$ と書く.

準同型写像 $f : G → G'$ に対して, 部分群 $\Im f := \{ f(x) ∈ G' \mid x ∈ G \}$ を $f$ の**像**, 部分群 $\mathrm{Ker} f := \{ x ∈ G \mid f(x) = e' ∈ G' \}$ を $f$ の**核**という. また, $\mathrm{Ker} f$ は $G$ の正規部分群である: $\mathrm{Ker} f \triangleleft G$. また, $\mathrm{Coker} f := G' / \Im f$ を**余核** cokernel, $\mathrm{Coim} f := G' / \mathrm{Ker} f$ を**余像** coimage という.

### 群の作用

群 $G$ と集合 $X$ について, 準同型 $ρ : G → \mathrm{Aut} (X)$ が与えられたとき, **群 $G$ が集合 $X$ に左作用する** $G$ acts on $X$ あるいは単に**作用する**といい, $g ⋅ x = gx := ρ(g) (x)$ と書く. このとき, $g, h ∈ G$, $x ∈ X$ に対し, $g (hx) = (gh) x$, $ex = x$ を満たす. また, この $X$ を**左 $G$-集合** left $G$-set あるいは単に **$G$-集合** $G$-set という. 同様に右作用と右 $G$-集合も $x ⋅ g = xg := ρ(g) (x)$ によって定義される.

群 $G$ の $X$ への作用 $G × X → X$ に対して, $Gx := \{ gx \mid g ∈ G \}$ を $x$ の**軌道** orbit という. また, $G_x := \{ g ∈ G \mid gx = x \}$ を**固定化部分群** stabilizer という. このとき, $G$ の $G_x$ による商群と軌道 $Gx$ は同型である: $G / G_x ≃ Gx$.

左 $G$-集合 $X$ について, $x ∈ X$ に対して $Gx = X$ となる作用は**推移的** transitive であるという. また, $G_x = \{ e \}$ であるとき, この作用は**単一推移的** simply transitive という.

### 環・体

集合 $R$ に対して, 加法 $+$ について Abel 群, 乗法 $⋅$ について半群で, $x, y, z ∈ R$ に対して**分配法則** $x (y + z) = x y + x z$, $(x + y) z = x z + y z$ を満たすとき, 組 $(R, +, ⋅)$ あるいは単に $R$ を**環** ring という.

乗法について可換である環を**可換環** commutative ring という. 乗法について群である環を**斜体** skew field または**可除環** division ring という. 乗法について可換群である環, つまり可換環かつ斜体である環を**可換体** commutative ring または単に**体** field という.

環 $R$ が任意の元 $x, y ∈ R$ について $x, y ≠ 0$ ならば $xy ≠ 0$ であるとき, $R$ を整環 domain という. **聖域**である可換環を特に**整域** integral domain という.

### 部分環

環 $R$ の加法に関する部分群 $S$ について, $S$ が $R$ の乗法で閉じている, つまり任意の $S$ の元 $x, y ∈ S$ について $xy ∈ S$ であるとき, $S$ を $R$ の**部分環** subring という.

環 $R$ 部分環 $\{ x ∈ R \mid ∀ y ∈ R, x y = y x \}$ を $R$ の中心といい, $Z(R)$ と書く.

### 環準同型

環 $G$, $G'$ について, 写像 $\varphi : R → R'$ が環の元 $x, y ∈ R$ に対し $f\varphi(x + y) = \varphi(x) + \varphi(y)$, $\varphi(xy) = \varphi(x) \varphi(y)$ を満たすとき, $\varphi$ を $R$ から $R'$ への**環準同型写像** ring homomorphism, あるいは単に**環準同型** ring hommomorohic という.

### 代数

環 $R$ に対し, 環 $S$ および環準同型 $ρ : R → Z(S)$ の組 $(R, ρ)$ または単に $S$ を $R$ 上の**代数** algebra または **$R$ 代数**という.

体 $K$ 上の代数 $S$ について, $S$ の $K$ 上の基底 $\{ e_μ \}$ に対し
$$
e_μ e_ν = {a^λ}_{μν} e_λ
$$
を満たす ${a^λ}_{μν} ∈ K$ を $S$ の**構造定数** structure constant という.

### 環上の加群

環 $R$ に対し, Abel 群 $M$ の加法 $+$ と写像 $λ : R × M → M$ が $a, b ∈ R$, $m, m' ∈ R$ に対し以下の条件を満たすとき, 組 $(M, +, λ)$ または単に $M$ を $R$ 上の**左加群** left module over $R$ または単に**左 $R$ 加群** left $R$-module, **$R$ 加群** $R$-module という:

1. **Abel 群の加法に対するスカラー作用の分配律**: $λ(a, m + m') = λ(a, m) + λ(a, m')$,
2. **環の加法に対するスカラー作用の分配則**: $λ(a + b, m) = λ(a, m) + λ(a, m')$,
3. **環の乗法とスカラー作用の両立条件**: $λ(ab, m) = λ(a, λ(b, m))$,
4. **スカラー作用の単位元の存在**: $λ(1, m) = m$.

$R$ 上の右加群または右 $R$-加群も同様に定義される.

## 線形代数学

### ベクトル空間

体 $K$ 上の加群を $K$ 上の**ベクトル空間**という. ベクトル空間の元を**ベクトル**と呼ぶ.

ベクトル空間 $V$ のベクトル列 $\{ u_i \}$ の**線形結合**と呼ばれる $c^i u_i$ ($c^i ∈ K$) について,  $c^i u_i = 0$ を満たす $c^i$ が $c^i = 0$ に限るとき, この $\{ u_i \}$ は**線形独立**であるという. また, $V$ の全てのベクトルが $\{ u_i \}$ の線形結合で表されるとき, この $\{ u_i \}$ が $V$ を**生成する**という. $V$ のベクトル列 $\{ e_i \}$ が線形独立かつ $V$ を生成するとき, この $\{ e_i \}$ を $V$ の**基底**という. $V$ の基底を構成するベクトルの個数を $V$ の**次元**といい $\dim(V)$ と書く.

### 線形写像

$K$ 上のベクトル空間 $U$, $V$ に対し, 写像 $T : U → V$ が**線形性** $T(au + bv) = a T(u) + b T(v)$ ($a, b ∈ K$, $u, v ∈ U$) を満たすとき, $T$ を $K$ 上の**線形写像**といい, その全体を $\mathrm{Hom}_K (U, V)$ と書く. $U$ から $U$ 自身への線形写像の全体 $\mathrm{End}_K (U) := \mathrm{Hom}_K (U, U)$ の元を**線形変換**といい, 恒等写像 $1_U ∈ \mathrm{End}_K (U)$ を**単位変換**という. 線形写像の部分写像を**線形作用素**あるいは**線形演算子**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $T^{-1} T = 1_U$, $T T^{-1} = 1_V$ を満たす $T^{-1} ∈ \mathrm{Hom}_K (V, U)$ が存在するとき, $T$ を $K$ 上の**線形同型写像**といい, $U$ と $V$ は $K$ 上の**線形同型**という. 線形同型写像 $T ∈ \mathrm{End}_K (U)$ を**同型変換**, $T^{-1}$ を**逆変換**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $\Im (T) = \{ T(u) ∈ V \mid u ∈ U \}$ を $T$ の**像**, $\mathrm{Ker} (T) = \{ u ∈ U \mid T(u) = 0 ∈ V \}$ を $T$ の**核**という.

線形写像 $T := \mathrm{Hom}_K (U, V)$ に対して, $U$ の基底 $\{ u_1, \.s u_n \}$, $V$ の基底 $\{ v_1, \.s, v_m \}$ について $(T( u_1), \cdots, T(u_n)) = (v_1, \cdots, v_m) A$ と表されるとき, 行列 $A$ を**表現行列**という.

線形変換 $T ∈ \mathrm{End}_K (U)$ に対して, あるベクトル $u ∈ U$ が $T(u) = λ u$ を満たすとき, $λ ∈ K$ を $T$ の**固有値**, $u$ を $λ$ に属する $T$ の**固有ベクトル**という. 異なる固有値に属する固有ベクトルは直交する.

### 双対空間

$K$ 上のベクトル空間 $V$ に対し, 線形写像 $V^{*} := \mathrm{Hom}_K (V, K)$ を**双対空間**といい, $V^{*}$ の元を**線形汎関数**, あるいは代数的1-形式という. 双対空間はベクトル空間であり, その次元は元のベクトル空間と等しい: $\dim (V^{*}) = \dim (V)$.

$V$ の基底 $\{ e_i \}$ に対して, $e^i(e_j) = δ_{ij}$ を満たす $V^{*}$ の基底 $\{ e^i \}$ を $\{ e_i \}$ の**双対基底**という. 線形写像 $T ∈ \mathrm{Hom}_K (U, V)$ に対して, $(T^† (ω))(u) = ω(T(u))$ を満たす $T^† ∈ \mathrm{Hom}_K (V^{*}, U^{*})$ を $T$ の**双対写像**という. 表現行列 $A$ を持つ線形写像 $T$ の双対写像 $T^†$ の表現行列は $A^†$ である. $A = A^†$ であるとき $A$ を **Hermite 行列**あるいは**自己共役行列**といい, このとき $T = T^†$ であるから $T$ を **Hermite 変換**あるいは**自己共役変換**という.

### テンソル代数

体 $K$ 上のベクトル空間 $V$, $W$ の基底 $\{ v_i \}$, $\{ w_j \}$ について, $v, v' ∈ V$, $w, w' ∈ W$, $c ∈ K$ に関して以下の**双線形性**を満たす**テンソル積** tensor product で作られる組 $\{ v_i ⊗ w_j \}$ を基底とするベクトル空間を $V ⊗ W$ と書き, $V$ と $W$ との**テンソル積空間** tensor product space という. このとき, $\dim (V ⊗ W) = \dim (V) ⋅ \dim (W)$.

1. 第一引数に対する**線形性**: $(v + v') ⊗ w = v ⊗ w + v' ⊗ w$,
2. 第二引数に対する**線形性**: $v ⊗ (w + w') = v ⊗ w + v ⊗ w'$,
3. **スカラー倍に対する結合性**: $(c v) ⊗ w = v ⊗ (c w) = c (v ⊗ w)$.

ベクトル空間列 $\{ V_i \}$ に対し, 多重線形なテンソル積空間 $V_1 ⊗ \cdots ⊗ V_p$ が自然に構成される. 一つのベクトル空間 $V$ によるテンソル積空間 $V^{⊗ p} := \underbrace{V ⊗ \cdots ⊗ V}_p$ と ${V^{*}}^{⊗ q}$ について, $V^{⊗ p}$ あるいは $V^{⊗ p} ⊗ {V^{*}}^{⊗ q}$ を**テンソル空間** tensor product という.

体 $K$ 上のベクトル空間 $V$ に対し, $T^0(V) := K$, $T^p(V) := V^{⊗ p}$ の直和 $T(V) := ⨁^∞_{p=0} T^p(V)$ を**テンソル代数** tensor algebra という.

### 外積代数

テンソル積空間 $V^{⊗ p}$ に対し, ベクトル $v_1, \.s v_p ∈ V$ と置換群 $S_p$ を用いて,
$$
\begin{aligned}
v_1 ⊙ \cdots ⊙ v_p &:= \frac1{p!} ∑_{σ ∈ S_p} v_{σ(1)} ⊗ \cdots ⊗ v_{σ(p)}, \\
v_1 ∧ \cdots ∧ v_p &:= \frac1{p!} ∑_{σ ∈ S_p} \mathrm{sgn} (σ) \ v_{σ(1)} ⊗ \cdots ⊗ v_{σ(p)},
\end{aligned}
$$
と定義される積 $⊗$ をそれぞれ**対称積**, $∧$ を**交代積**あるいは**外積**という. 対称積は $v_1 \cdots v_p := v_1 ⊙ \cdots ⊙ v_p$ とも書く. $u, v ∈ V$ について, $u ⊙ v = v ⊙ u$, $u ∧ v = - v ∧ u$ を満たす. また, 交代 $V$ の基底 $\{ e_i \}$ に対し, $\{ e_1 ⊙ \cdots ⊙ e_p \}$ を基底とするベクトル空間 $S^p (V)$ を $V$ の **$p$ 次対称テンソル空間** space of symmetric tensors, $\{ e_1 ∧ \cdots ∧ e_p \}$ を基底とするベクトル空間 $Λ^p (V)$ を $V$ の **$p$ 次交代テンソル空間** space of alternating tensors という.

交代テンソル空間 $Λ^p(V)$, $Λ^q(V)$ について, 2つの交代テンソル空間を交代テンソル空間に移す双線形写像 $Λ^p(V) × Λ^q(V) → Λ^{p+q}(V)$ を以下で定義する: $Λ^p(V)$ の基底 $\{ e_1 ∧ \cdots ∧ e_p \}$ と $Λ^q(V)$ の基底 $\{ e_1 ∧ \cdots ∧ e_q \}$ に対し, $\displaystyle t = \frac1{p!} t^{μ_1\cdotsμ_p} e_{μ_1} ∧ \cdots ∧ e_{μ_p} ∈ Λ^p(V)$, $\displaystyle s = \frac1{q!} s^{μ_1\cdotsμ_q} e_{μ_1} ∧ \cdots ∧ e_{μ_q} ∈ Λ^q(V)$ の外積は,
$$
\begin{aligned}
t ∧ s
&=  \left( \frac1{p!} t^{μ_1 \cdots μ_p} e_{μ_1} ∧ \cdots ∧ e_{μ_p} \right)
    ∧
    \left( \frac1{q!} s^{μ_1 \cdots μ_q} e_{μ_1} ∧ \cdots ∧ e_{μ_q} \right) \\
&:= \frac1{p!q!} t^{μ_1 \cdots μ_p} s^{μ_{p+1} \cdots μ_{p+q}}
    (e_{μ_1} ∧ \cdots ∧ e_{μ_p}) ∧ (e_{μ_{p+1}} ∧ \cdots ∧ e_{μ_{p+q}}).
\end{aligned}
$$
また, $t ∧ s = (-1)^{pq} s ∧ t$ を満たす.

体 $K$ 上のベクトル空間 $V$ に対して, $Λ^0(V) := K$ と $Λ^p(V)$ の直和 $Λ(V) := ⨁^∞_{p=0} Λ^p(V)$ を **Grassmann 代数** Grassmann algebra あるいは**外積代数** exterior algebra という.

### 内積空間

複素数体 $ℂ$ 上のベクトル空間 $V$ について, 写像 $\ev{\ ,\ } : V × V → ℂ$ が $u, v, w ∈ V$, $a, b ∈ ℂ$ に関して以下の条件を満たすとき, この写像を**内積**と呼び, このとき $V$ を**内積空間**と呼ぶ. 第一引数を制限した内積は $V$ に双対である: $u ∈ V$ に対して $\ev{u, \ } ∈ \mathrm{Hom}_ℂ (V, ℂ) = V^{*}$.

1. 第二引数に対する**線形性**: $\ev{u, a v + b w} = a \ev{u, v} + b \ev{u, w}$,
2. **共役対称性**: $\ev{u, v} = (\ev{v, u})^{*}$,
3. **正定値性**: $\ev{u, u} \geq 0$,
4. **非退化性**: $\ev{u, u} = 0 ⇒ u = 0$.

$V$ の基底 $\{ u_i \}$ が $\ev{u_i, u_j} = δ_{i, j}$ を満たすとき, この $\{ u_i \}$ を $V$ の**正規直交基底**という. このとき, $\{ \ev{u_i, \ } \}$ は $\{ u_i \}$ の双対基底である.

線形変換 $T ∈ \mathrm{End}_ℂ (V)$ が Hermite 変換であるとき, $u, v ∈ V$ に対して $\ev{u, T(v)} = \ev{T(u), v}$ を満たす.

線形変換 $U ∈ \mathrm{End}_ℂ (V)$ が内積を不変に保つ, つまり $u, v ∈ V$ に対して $\ev{U(u), U(v)} = \ev{u, v}$ を満たすとき, $U$ を **unitary 変換**という. 言い換えると, unitary 変換は $U^† U = UU^† = 1_V$ あるいは $U^† = U^{-1}$ を満たす線形変換 $U$ である.

### ブラ-ケット記法

複素数体 $ℂ$ 上のベクトル空間 $H$ のベクトルを $\ket{\varphi}$ と書き, **ケットベクトル**と呼ぶ. また, 双対空間 $H^{*}$ のベクトルを $\bra{\varphi} := \ev{(\ket{\varphi}), \ }$ と書き, **ブラベクトル**と呼ぶ. これらの記法を用いて, ベクトル $\ket{\varphi}, \ket{ψ} ∈ H$ の内積は $\braket{\varphi}{ψ}$ と書く. 例えば, $H$ の基底 $\{ \ket{m} \}$ とその双対基底 $\{ \bra{n} \}$ は $\braket{n}{m} = δ_{nm}$ を満たす. また, 双対写像はブラベクトルに右から作用する: $A^† ∈ \mathrm{End}_K (H^{*})$ で $\ev{(A \ket{\varphi}), \ } = \bra{\varphi} A^†$. 線形変換 $A ∈ \mathrm{End}_ℂ (H)$ が Hermite 変換, つまり $\bra{\varphi} (A \ket{ψ}) = (\bra{\varphi} A) \ket{ψ}$ であるとき, これを単に $\ev{A}{ψ}$ と書く. また, $\ket{\varphi}^† := \bra{\varphi}$, $\bra{\varphi}^† := \ket{\varphi}$ と定義すれば $(A \ket{\varphi})^† = \bra{\varphi} A^†$ が得られる.

複素数体 $ℂ$ 上のベクトル空間 $H$ の基底 $\{ \ket{n} \}$ に対し, 線形写像 $\ketbra{n}{n}$ を**射影写像**という: ケットベクトル $\ket{\varphi} = ∑_m \varphi_m \ket{m}$ に対し, $\ket{n} \ev{n | \varphi} = \varphi_n \ket{n}$. また, $∑_n \ketbra{n}{n} = 1_H$ である. 線形変換 $A \in \mathrm{End}_\mathbb{C}(H)$ の固有値 $\{ a_n \}$ にそれぞれ属する固有ベクトル $\{ \ket{a_n} \}$ はベクトル空間 $H$ の基底であり, $A$ は射影写像 $\ketbra{a_n}{a_n}$ の線形結合で表される: $A = ∑_n a_n \ketbra{a_n}{a_n}$.

## 量子力学

### 状態ベクトルと観測量

ある物理状態は**状態ベクトル**と呼ばれる Hilbert 空間 $\mathcal{H}$ のベクトル $\ket{ψ}$ で表される. 状態ベクトル $\ket{ψ}$ に定数 $c ∈ ℂ$ をかけた $c \ket{ψ}$ は同じ状態を表し, 状態ベクトル $\ket{ψ}$ は常に正規化されているとする: $\braket{ψ}{ψ} = 1$. または, 正規化されていない状態ベクトル $\ket{ψ'}$ に対し, $\ket{ψ} = \ket{ψ'} / \sqrt{\braket{ψ'}{ψ'}}$ は正規化された状態ベクトルである. $\{e^{i θ} \ket{ψ}\}_{θ ∈ ℝ}$ を**射線** ray といい, 同じ状態を表す状態ベクトルである.

観測により物理状態が $\ket{ψ}$ から $\ket{\varphi}$ に遷移する確率は $\abs{\braket{\varphi}{ψ}}^2$ で与えられ, $\braket{\varphi}{ψ}$ を**遷移振幅**という.

ある物理量 $A$ を観測するとき, $A$ に対応する Hermite 演算子 $\^A$ の固有値 $a$ が観測される物理量で, 物理状態は物理量 $A = a$ を観測後に固有値 $a$ に属する固有状態 $\ket{a}$ に遷移する. その確率は
$$
\abs{\braket{a}{ψ}}^2 = \braket{ψ}{a} \braket{a}{ψ} = \braket{ψ}{a} \braket{a}{a} \braket{a}{ψ} = \abs{\ket{a} \braket{a}{ψ} }^2.
$$
また, 物理量 $A$ の期待値は
$$
\begin{aligned}
  \ev{A} &:= ∫ \dd{a} a \abs{\braket{a}{ψ}}^2 = ∫ \dd{a} a \braket{ψ}{a} \braket{a}{ψ} \\
    &= ∫ \dd{a} \bra{ψ} \^A  \ket{a} \braket{a}{ψ} = \bra{ψ} \^A \pqty{∫ \dd{a} \ketbra{a}{a}} \ket{ψ} \\
    &= \bra{ψ} \^A \ket{ψ}.
\end{aligned}
$$

### 波動関数

ある物理量 $A$ について, 固有値 $a$ が観測される確率振幅を $ψ(a) := \braket{a}{ψ}$ と書き, **$A$ 表示した波動関数**という. このとき, 物理量 $a$ が観測される確率は$\abs{\braket{a}{ψ}}^2 = \abs{ψ(a)}^2$ であり, 正規化条件は
$$
\begin{aligned}
  1 &= \braket{ψ}{ψ} = \bra{ψ} \pqty{∫ \dd{a} \ketbra{a}{a}} \ket{ψ} \\
  &= ∫ \dd{a} \braket{ψ}{a} \braket{a}{ψ} \\
  &= ∫ \dd{a} ψ^{*}(a) ψ(a) = ∫ \dd{a} \abs{ψ(a)}^2.
\end{aligned}
$$
また, 波動関数は状態ベクトルを固有状態によって展開したときの係数である:
$$
\ket{ψ} = \pqty{∫ \dd{a} \ketbra{a}{a}} \ket{ψ} = ∫ \dd{a} \ket{a} \braket{a}{ψ} = ∫ \dd{a} ψ(a) \ket{a}.
$$

物理量 $B$ について演算子 $\^B$ について, $\^B ψ(a) := \bra{a} \^B \ket{ψ}$ と定義する. $B = b$ に属する固有状態 $\ket{b}$ に対して, 固有波動関数 $ψ_b(a) := \braket{b}{a}$ とすれば,
$$
\^B ψ_b(a) = \bra{b} \^B \ket{a} = b \braket{b}{a} = b ψ_b(a),
$$
また, 物理量 $B$ の期待値は,
$$
\begin{aligned}
  \ev{B} &= \bra{ψ} \^B \ket{ψ} = \bra{ψ} \pqty{∫ \dd{a} \ketbra{a}{a}} \^B \ket{ψ} \\
    &= ∫ \dd{a} \braket{ψ}{a} \bra{a} \^B \ket{ψ} \\
    &= ∫ \dd{a} ψ^{*}(a) \^B ψ(a).
\end{aligned}
$$

### 正準量子化

正準変数 $(q_i, p^i)$ に対し, 演算子 $(\^q_i, \^p^i)$ が**正準交換関係**と呼ばれる以下の対応を満たすよう要請する. これを**正準量子化**という. ただし $[\^A, \^B] := \^A \^B - \^B \^A$ は交換子:
$$
\begin{aligned}
  \{ q_i, p^j \}_\mathrm{P} &= \delta_i^j, & &\leftrightarrow & - \frac{i}{\hbar} [\^q_i, \^p^j] &= \delta_i^j, \\
  \{ q_i, q_j \}_\mathrm{P} &= 0, & &\leftrightarrow & - \frac{i}{\hbar} [\^q_i, \^q_j] &= 0, \\
  \{ p^i, p^j \}_\mathrm{P} &= 0, & &\leftrightarrow & - \frac{i}{\hbar} [\^p^i, \^p^j] &= 0. \\
\end{aligned}
$$
正準変数を変数として持つ物理量 $A = A(q_i, p^i)$ の演算子は, 正準変数の演算子を形式的に代入したもの $\^A = \^A(\^q_i, \^p^i)$ である. TODO: ただし, $\^A$ が Hermite になるよう適当に正準変数の順序を調整する.

正準変数の演算子 $(\^q_i, \^p^i)$ について $\hat{q}_i = q_i$ であるとき, $\hat{p}^i$ の具体形を求める. ある定数 $a_i$ に対し, $e^{\frac{i}{\hbar} a_j \^p^j} \^q_i e^{- \frac{i}{\hbar} a_j \^p^j} = \^q_i + a_i$ である. 実際,
$$
\begin{aligned}
  \dv{}{a_j} (e^{\frac{i}{\hbar} a_k \^p^k} \^q_i e^{- \frac{i}{\hbar} a_k \^p^k})
    &=  \dv{e^{\frac{i}{\hbar} a_k \^p^k}}{a_j} \^q_i e^{- \frac{i}{\hbar} a_k \^p^k} + e^{\frac{i}{\hbar} a_k \^p^k} \^q_i \dv{e^{- \frac{i}{\hbar} a_k \^p^k}}{a_j} \\
    &=  \frac{i}{\hbar} \^p^j e^{\frac{i}{\hbar} a_k \^p^k} \^q_i e^{- \frac{i}{\hbar} a_k \^p^k} - \frac{i}{\hbar} e^{\frac{i}{\hbar} a_k \^p^k} \^q_i \^p^j e^{- \frac{i}{\hbar} a_k \^p^k} \\
    &=  \frac{i}{\hbar} \^p^j e^{\frac{i}{\hbar} a_k \^p^k} \^q_i e^{- \frac{i}{\hbar} a_k \^p^k} - \frac{i}{\hbar} e^{\frac{i}{\hbar} a_k \^p^k} (i \hbar \delta_i^j + \^p^j \^q_i) e^{- \frac{i}{\hbar} a_k \^p^k} \\
    &\quad (\because [\^q_i, \^p^j] = \^q_i \^p^j - \^p^j \^q_i = i \hbar \delta_i^j) \\
    &=  \frac{i}{\hbar} \^p^j e^{\frac{i}{\hbar} a_k \^p^k} \^q_i e^{- \frac{i}{\hbar} a_k \^p^k} + \delta_i^j - \frac{i}{\hbar} e^{\frac{i}{\hbar} a_k \^p^k} \^p^j \^q_i e^{- \frac{i}{\hbar} a_k \^p^k} \\
    &\quad (\because [e^{\frac{i}{\hbar} a_k \^p^k}, \^p^j] = e^{\frac{i}{\hbar} a_k \^p^k} \^p^j - \^p^j e^{\frac{i}{\hbar} a_k \^p^k} = 0) \\
    &=  \delta_i^j.
\end{aligned}
$$
したがって,
$$
\^q_i e^{- \frac{i}{\hbar} a_j \^p^j} \ket{q} = e^{- \frac{i}{\hbar} a_j \^p^j} (\^q_i + a_i) \ket{q} = (q_i + a_i) e^{- \frac{i}{\hbar} a_j \^p^j} \ket{q}.
$$
$$
∴ e^{- \frac{i}{\hbar} a_i \^p^i} \ket{q} = \ket{q + a}.
$$
左から $\bra{ψ}$ を内積させて Hermite 共役を取ると,
$$
\bra{q} e^{\frac{i}{\hbar} a_i \^p^i} \ket{ψ} = \braket{q + a}{ψ}.
\quad ∴ e^{\frac{i}{\hbar}a_i \^p^i} ψ(q) = ψ(q + a).
$$
$a_i = δq_i ≪ 1$ で,
$$
\pqty{1 + \frac{i}{\hbar} δq_i \^p^i} ψ(q) = \pqty{1 + δq_i \pdv{}{q_i}} ψ(q).
$$
$δq_i$ は任意だから,
$$
\^p^i ψ(q) = - i \hbar \pdv{}{q_i} ψ(q).
$$
また,
$$
\bra{q} \^p^i \ket{ψ} = \bra{q} \pqty{- i \hbar \pdv{}{q_i}} \ket{ψ}.
\quad ∴ \^p^i \ket{ψ} = - i \hbar \pdv{}{q_i} \ket{ψ}.
$$
固有波動関数 $ψ_p(q)$ に対し,
$$
- i \hbar \pdv{}{q_i} ψ_p(q) = \^p^i ψ_p(q) = p^i ψ_p(q).
$$
$$
∴ ψ_p(q) = \braket{q}{p} = \frac1{(\sqrt{2π \hbar})^D} e^{\frac{i}{\hbar} q_i p^i}.
$$
ただし, $D$ は一般化座標の次元とし, 固有状態の直交性を満たすよう定数を取った:
$$
\begin{aligned}
  \braket{p'}{p} &= \bra{p'} \pqty{∫ \dd{{}^Dq} \ketbra{q}{q}} \ket{p} = ∫ \dd{{}^D q} \braket{p'}{q} \braket{q}{p} \\
    &= ∫ \dd{{}^D q} ψ_{p'}^{*}(q) ψ_p(q) = ∫ \frac{\dd{{}^D q}}{(2π \hbar)^D} e^{\frac{i}{\hbar} q_i (p^i - {p'}^i)} \\
    &= δ^D(p^i - {p'}^i).
\end{aligned}
$$

#### 例: 調和振動子

調和振動子の Hamiltonian は

## 場の解析力学

### 最小作用の原理

4 元座標に依存するパラメータ $\phi_α (x)$ について, **作用** action と呼ばれる汎関数 $S[\phi_α]$ が存在し, $\phi_α$ は物理現象において $S[\phi_α]$ が最小となるよう変化する. つまり, 停留条件 $δS[\phi_α] = 0$ を満たす.

### Euler–Lagrange の運動方程式

作用は, スカラー場 $\phi_α$ に関する **Lagrangian 密度** Lagrangian density $ℒ(\phi_α, ∂_μ \phi_α)$ を用いて以下のように表される:
$$
S[\phi_α] = ∫ \dd{{}^4 x}  ℒ(\phi_α, ∂_μ {\phi_α}).
$$
$\phi_α + δ\phi_α$ の変分をとって,
$$
\begin{aligned}
δS[\phi_α]
=&  ∫ \dd{{}^4 x}  \bqty{
      ℒ(\phi_α + δ\phi_α, ∂_μ \phi_α + ∂_μ δ\phi_α)
      - ℒ(\phi_α, ∂_μ \phi_α)
    } \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δ\phi_α \pdv{ℒ}{\phi_α}
      + δ∂_μ \phi_α \pdv{ℒ}{(∂_μ \phi_α)}
      + o\pqty{\sqrt{
        δ\phi_α^{*} δ\phi_α + δ∂_μ\phi_α^{*} δ∂^μ\phi_α
      }}
    } \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δ\phi_α \pdv{ℒ}{\phi_α}
      + ∂_μ δ\phi_α \pdv{ℒ}{(∂_μ \phi_α)}
    }
    \quad (∵ δ∂_μ \phi_α = ∂_μ δ\phi_α) \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δ\phi_α \pdv{ℒ}{\phi_α}
      - δ\phi_α ∂_μ \pqty{\pdv{ℒ}{(∂_μ \phi_α)}}
      + ∂_μ \pqty{
        δ\phi_α \pdv{ℒ}{(∂_μ \phi_α)}
      }
    }.
\end{aligned}
$$
ここで, 発散項は境界条件より消える:
$$
δS[\phi_α]
= ∫ \dd{{}^4 x}  δ\phi_α \bqty{
    \pdv{ℒ}{\phi_α}
    - ∂_μ \pqty{\pdv{ℒ}{(∂_μ \phi_α)}}
  }.
$$
したがって, 停留条件 $δS[\phi_α] = 0$ より,
**Euler–Lagrange の運動方程式**が得られる:
$$
\pdv{ℒ}{\phi_α} - ∂_μ \pqty{ \pdv{ℒ}{(∂_μ \phi_α)} }
= 0.
$$

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場 $\phi_α$ の Lagrangian 密度は,
$$
ℒ(\phi_α, ∂_μ \phi_α) = \frac12 ∂_μ \phi_α ∂^μ \phi_α - \frac12 μ^2 \phi_α^2.
$$
ここで,
$$
\begin{aligned}
\pdv{ℒ}{\phi_α} = - μ^2 \phi_α, &&
∂_μ \pqty{ \pdv{ℒ}{(∂_μ \phi_α)} } = ∂_μ ∂^μ \phi_α.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
(∂_μ ∂^μ + μ^2) \phi_α = 0.
$$

#### 例: de Broglie 場

de Broglie 場 $ψ$ の Lagrangian 密度は,
$$
ℒ(ψ, ∂_μ ψ) = i \hbar ψ^† ∂_t ψ - \frac{\hbar^2}{2m} ∂_i ψ^† ∂^i ψ.
$$
ここで, $ψ$ と $ψ^†$ を独立に扱って,
$$
\begin{aligned}
  \pdv{ℒ}{ψ^†} &= i \hbar ∂_t ψ, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ^†)} } &= ∂_t \pqty{ \pdv{ℒ}{(∂_t ψ^†)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ^†)} } \\
    &= 0 - \frac{\hbar}{2 m} ∂_i ∂^i ψ \\
    &= - \frac{\hbar}{2 m} \laplacian ψ,
\end{aligned}
$$
$$
\begin{aligned}
  \pdv{ℒ}{ψ} &= 0, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ)} } &= ∂_t \pqty{ \pdv{ℒ}{(∂_t ψ)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ)} } \\
    &= i \hbar ∂_i ψ^† - \frac{\hbar}{2 m} ∂_i ∂^i ψ^† \\
    &= i \hbar ∂_i ψ^† - \frac{\hbar}{2 m} \laplacian ψ^†.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
\begin{aligned}
  i \hbar ∂_t ψ &= - \frac{\hbar}{2 m} \laplacian ψ, & - i \hbar ∂_t ψ^† &= - \frac{\hbar}{2 m} \laplacian ψ^†.
\end{aligned}
$$

#### 例: 電磁場

電磁場 $A_μ$ の Lagrangian 密度は,
$$
\begin{aligned}
ℒ(A_ν, ∂_μ A_ν) = - \frac14 F_{μν} F^{μν} + A_μ j^μ, &&
F^{μν} := ∂^μ A^ν - ∂^ν A^μ.
\end{aligned}
$$
ここで,
$$
\begin{aligned}
\pdv{ℒ}{A_ν} &= j^μ, \\
∂_μ \pqty{\pdv{ℒ}{(∂_μ A_ν)}}
&=  ∂_μ \qty{ \pdv{}{(∂_μ A_ν)} \pqty{ - \frac14 F_{ρσ} F^{ρσ} } } \\
&=  ∂_μ \qty{ \pdv{}{(∂_μ A_ν)} \bqty{ - \frac12 (
      ∂_ρ A_σ ∂^ρ A^σ - ∂_ρ A_σ ∂^σ A^ρ
    ) } } \\
&=  ∂_μ \bqty{ - (∂^μ A^ν - ∂^ν A^μ) } \\
&=  - ∂_μ F^{μν}.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
∂_μ F^{μν} = - j^ν.
$$

#### 例: 自由粒子との関係

スカラー場 $\phi$ について, 空間座標と時間座標に分けて考える: $\phi(x, t)$. 作用は
$$
\begin{aligned}
S[\phi(x)]
&= ∫ \dd{{}^4 x}  ℒ (\phi(x, t), ∂_μ \phi(x, t)) \\
&= ∫ \dd{t} ∫ \dd{{}^3 x}  ℒ (\phi(x, t), ∇ \phi(x, t), \.{\phi}(x, t)).
\end{aligned}
$$
ここで, **Lagrangian** $L(x, \.x, t)$ を以下のように定義する:
$$
L(x, \.x, t) = ∫ \dd{{}^3 x}  ℒ (\phi(x, t), ∇ \phi(x, t), \.{\phi}(x, t)).
$$
このとき, 作用は
$$
S[x] = ∫ \dd{t} L(x, \.x, t).
$$

### Hamiltonの運動方程式

**一般化運動量** $π^α ≡ ∂ℒ / ∂\.{\phi}_α$ を用いて, **Hamiltonian 密度** $ℋ(\phi_α, ∇ \phi_α, π^α, ∇ π^α) ≡ π^α \.{\phi}_α - ℒ$ を定義する. Hamiltonian の定義の変分は,
$$
\begin{aligned}
  δℋ
  &= \.{\phi}_α δπ^α + π^α δ\.{\phi}_α - δℒ \\
  &= \.{\phi}_α δπ^α + π^α δ\.{\phi}_α - \bqty{\pdv{ℒ}{\phi_α} - \div \pdv{ℒ}{(\grad \phi_α)}} δ\phi_α + \div \bqty{\pdv{ℒ}{(\grad \phi_α)} δ\phi_α} + π^α δ\.{\phi_α} \\
  &= - \bqty{\pdv{ℒ}{\phi_α} - \div \pdv{ℒ}{(\grad \phi_α)}} δ\phi_α + \.{\phi}_α δπ^α + \div \bqty{\pdv{ℒ}{(\grad \phi_α)} δ\phi_α}.
\end{aligned}
$$
また, Hamiltonianの変分は,
$$
\begin{aligned}
  δℋ
  &= \pdv{ℋ}{\phi_α} δ\phi_α + \pdv{ℋ}{(\grad \phi_α)} ⋅ δ(\grad \phi_α) + \pdv{ℋ}{π^α} δπ^α + \pdv{ℋ}{(\grad π^α)} ⋅ δ(\grad π^α) \\
  &= \pdv{ℋ}{\phi_α} δ\phi_α + \div \bqty{\pdv{ℋ}{(\grad \phi_α)} δ\phi_α} - \div \pdv{ℋ}{(\grad \phi_α)} δ\phi_α + \pdv{ℋ}{π^α} δπ^α + \div \bqty{\pdv{ℋ}{(\grad π^α)} δπ^α} - \div \pdv{ℋ}{(\grad π^α)} δπ^α \\
  &= \bqty{\pdv{ℋ}{\phi_α} - \div \pdv{ℋ}{(\grad \phi_α)}} δ\phi_α + \bqty{\pdv{ℋ}{π^α} - \div \pdv{ℋ}{(\grad π^α)}} δπ^α + \div \bqty{\pdv{ℋ}{(\grad \phi_α)} δ\phi_α} + \div \bqty{\pdv{ℋ}{(\grad π^α)} δπ^α}
\end{aligned}
$$
ここで, Euler-Lagrangian 方程式が成立するとき $\displaystyle \.π^α = - \bqty{\pdv{ℒ}{\phi_α} - \div \pdv{ℒ}{(\grad \phi_α)}}$ であることを用いると, **Hamilton の運動方程式**あるいは**正準方程式** canonical equation が得られる:
$$
\begin{aligned}
  \.{\phi}_α &= \bqty{\pdv{ℋ}{π^α} - \div \pdv{ℋ}{(\grad π^α)}}, \\
  \.π^α &= - \pdv{ℋ}{\phi_α} - \div \pdv{ℋ}{(\grad \phi_α)}.
\end{aligned}
$$
TODO: ただし発散項は作用で消えることを用いた.
このとき $π^α$ は $\phi_α$ に**共役な運動量** conjugate momentum といい, また $(\phi_i, π_i)$ の組を**正準変数** canonical variables という.

## 位相空間

### 位相空間

**台集合**と呼ばれる集合 $X$ と**開集合系**と呼ばれる $X$ の部分集合の族 $\mathscr{U}$ に対して, 以下の条件を満たす組 $(X, \mathscr{U})$ または単に $X$ を**位相空間** topological space という. 開集合系の元を**開集合**という.

1. 空集合および台集合は開集合:  $\varnothing, X ∈ \mathscr{U}$.
2. 開集合の和もまた開集合: $\~{\mathscr{U}} ⊂ \mathscr{U} ⇒ \bigcup_{U ∈ \tilde{\mathscr{U}}} U ∈ \mathscr{U}$.
3. 有限個の開集合の積もまた開集合: $U_1, \.s, U_n ∈ \mathscr{U} ⇒ \bigcap^n_{i = 1} U_i ∈ \mathscr{U}$.

位相空間 $X$ の点 $x ∈ X$ について, $x$ を含む開集合を $x$ の**開近傍**といい, $x$ の開近傍を含む任意の集合を $x$ の**近傍**という.

### 連続写像と同相

位相空間 $X$, $Y$ と 写像 $f : X → Y$ について, $x ∈ X$ に対し $f(x) ∈ Y$ の近傍の $f$ による逆像が $x$ の近傍になるとき, $f$ は $x$ で連続であるという. また, $Y$ の開集合の $f$ による逆像が $X$ の開集合となるとき, $f$ を連続という. 全単射 $f : X → Y$ が連続で $f^{-1}$ も連続であるとき, $f$ を**同相写像**といい, $X$ と $Y$ は**位相同型**あるいは**同相**という.

## 束と接続

### 束と切断

**底空間** base space と呼ばれる空間 $B$ と**全空間** total space と呼ばれる空間 $E$ に対して, **射影** projection と呼ばれる写像 $π : E → B$ があるとき, 三対 $(E, π, B)$ を**束** bundle という. $E \xrightarrow{π} B$, または単に $E$ を束と呼ぶこともある.
$$
\xymatrix{
  E \ar[d]^{π} \\
  B
}
$$

任意の $b ∈ B$ について, 射影による逆像 $π^{-1}(b) ∈ E$ を束の $b$ 上の**ファイバー** fibre という. 位相空間 $B$, $E$ を底空間, 全空間に持つ束 $E \xrightarrow{π} B$ に対し, 位相空間 $F$ が任意の $b ∈ B$ 上のファイバーと同相であるとき, $F$ を束のファイバーという. 特に $E = B × F$ であるとき, この束 $E$ は**自明な束** trivial bundle という. このときの射影は $π = \mathrm{prod}_1$.
$$
\xymatrix{
  B × F \ar[d]^{\mathrm{prod}_1} \\
  B
}
$$

また, 写像 $σ : B → E$ が $π \circ σ = 1_B$ を満たすとき, $σ$ を**切断** cross section という. 言い換えると, 切断とは, 任意の底空間上の点 $b ∈ B$ に対して各ファイバー上の 1 点 $σ(b) ∈ π^{-1}(b)$ を決める写像 $σ$ である. 束 $E$ の切断の全体を $Γ(E)$ と表す.
$$
\xymatrix{
  E \\
  B \ar[u]_{σ ∈ Γ(E)}
}
$$

### ファイバー束と構造群

全空間 $E$, 底空間 $M$, ファイバー $F$ が可微分多様体で, 射影 $π$ が全射である束 $E \xrightarrow{π} M$ について考える. $M$ の開被覆 $\{U_i\}$ に対して, **局所自明化** local trivialization と呼ばれる微分同相写像 $\varphi_i : U_i × F → π^{-1}(U_i)$ が存在するとき, この束 $E \xrightarrow{π} M$ を**ファイバー束** fibre bundle という.
$$
\xymatrix{
  U_i × F \ar[d]^{\mathrm{pr}_1} \ar[r]_-{\varphi_i}^-{≃} & π^{-1}(U_i) \ar[d]^{π} \ar@{}[r]|*{⊂} & E \ar[d]^{π} \\
  U_i \ar@{=}[r] & U_i \ar@{}[r]|{⊂} & M
}
$$

点 $p^i ∈ U_i ⊂ M$ における局所自明化 $\varphi_i$ を $\varphi_{i,p} := \varphi_i(p,\ ) : F → π^{-1}(p)$ とする. 底空間上の点 $p ∈ U_i ∩ U_j ≠ \varnothing$ について, $g_{ij} (p) := \varphi_{i,p}^{-1} \circ \varphi_{j,p} : F → F$ あるいは $g_{ij} (p)$ を**変換関数** transition function といい, $p ∈ U_i \cup U_j \cup U_k$ に対してコサイクル条件 $g_{ij} (p) g_{jk} = g_{ik}$ を満たす.
$$
\xymatrix{
  F \ar[r]_-{\varphi_{i,p}} & π^{-1}(p) \ar[d]^{π} & F \ar@/_18pt/[ll]_{g_{ij}(p)} \ar[l]^-{\varphi_{j,p}} \\
  \{p\} \ar@{=}[r] & \{p\} & \{p\} \ar@{=}[l]
}
$$
$F$ に左作用する位相群 $G$ を用いて $g_{ij} (p) : U_i ∩ U_j → G$ であるとき, $G$ を**構造群** structure group といい, このときのファイバー束 $E \xrightarrow{π} M$ を $G$**-束** $G$-bundle ともいう.

底空間 $M$とその開被覆 $\{U_i\}$, ファイバー $F$, 構造群 $G$, 変換関数 $g_{ij} (p)$ が与えられたとき, ファイバー束を構成可能である.

### 主 $G$-束と同伴ファイバー束

射影 $π$ が微分可能な $G$-束 $P \xrightarrow{π} M$ を考える. $G$ が $P$ に右から作用し, $p ∈ M$ 上のファイバー上の点が $G$ の作用で同一ファイバー上に移る (**単純推移的** simply transitive) とき, このファイバー束 $P \xrightarrow{π} M$ を**主 $G$-束** principal $G$-bundle, あるいは単に**主束** principal bundle という. 言い換えると, 主 $G$-束とは, 射影が微分可能, ファイバーが位相群 $G$ である $G$-束である.

主 $G$-束 $P \xrightarrow{π} M$, $G$ が左作用する可微分多様体 $F$ が与えられたとき, 商空間
$$
P ×_G F := (P × F) / G
$$
と写像 $π_1 : P ×_G F → M, (u, f) ↦ π(u)$ はファイバー $F$ のファイバー束 $P ×_G F \xrightarrow{π_1} M$ を与える. これを**同伴ファイバー束** associated fibre bundle という. 反対に, 上の定義のように $G$-束から同伴する主 $G$-束を構成可能である.

### ベクトル束

体 $K$ 上のベクトル空間 $V$ をファイバーとするファイバー束 $E \xrightarrow{π} M$ について考える. $M$ の開被覆 $\{U_i\}$ に対して, $p ∈ U_i ⊂ M$ における局所自明化 $\phi_i(p,\ ): V → π^{-1}$ が線形同型を与えるとき, このファイバー束 $E \xrightarrow{π} M$ を**ベクトル束** vector bundle という. 言い換えると, ベクトル束とは, 次元 $n$ のベクトル空間をファイバーとして持つ $GL(n)$-束である. 自明かつファイバーが $V = K$ であるベクトル束を**自明な直線束**という. また, 主 $GL(n)$-束の同伴ファイバー束は**同伴ベクトル束**と呼ばれる.

### 接束と余接束

可微分多様体 $M$ 上の点 $p ∈ M$ に対し, $p$ の座標近傍における局所座標 $\{ x_μ \}$ 上で定義された微分作用素 $\displaystyle ∂_μ := \pdv{}{x^μ}$ を用いた $\{ ∂_μ \}$ を基底とするベクトル空間 $T_pM$ を**接空間** tangent space といい, 接空間のベクトルを**接ベクトル** tangent vector という. 全空間 $TM := \bigcup_{p ∈ M} T_pM$ に対して射影 $π : M → TM$ が $π^{-1} (p) ∈ T_pM$ を満たすようなベクトル束 $TM \xrightarrow{π} M$ を**接束** tangent bundle という. 接束の切断を**ベクトル場** vector field という.

接空間 $T_pM$ の双対空間 $T^{*}_pM$ を**余接空間** cotangent space といい, $T_pM$ の基底 $\{ ∂_μ \}$ の双対基底は $\{ \dd{x^μ} \}$ である: $\dd{x^μ} (∂_ν) = δ^μ_ν$. また余接空間のベクトルを**余接ベクトル** cotangent vector という. 全空間 $T^{*}M := \bigcup_{p ∈ M} T^{*}_pM$ に対して射影 $π : M → T^{*}M$ が $π^{-1}(p) ∈ T^{*}_pM$ を満たすようなベクトル束 $T^{*}M \xrightarrow{π} M$ を**余接束** cotangent bundle という.

### 微分形式とベクトル束上の接続

ベクトル束 $E \xrightarrow{x} M$ に対し, $M$ の余接空間の $k$ 次交代テンソル空間 $Λ^k (T^{*}M) := \bigcup_{p ∈ M} Λ^k (T^{*}_pM)$ を付け加えた $Λ^k (T^{*}M) ⊗ E \xrightarrow{π_1} M$ の切断 $Ω^{k} (M, E) := Γ(Λ^k (T^{*}M) ⊗ E)$ を $E$ に値を取る **$k$-形式** $k$-form の空間という.
$$
\xymatrix{
  Λ^k (T^{*}M) ⊗ E \\
  M \ar[u]_{\phi ∈ Ω^{k} (M, E)}
}
$$

ベクトル束 $E$ が自明な直線束であるとき単に $Ω^k (M) := Ω^k (M, E) = Γ(Λ^k (T^{*}M))$ と書き, 単に $k$-形式の空間という.
$$
\xymatrix{
  Λ^k (T^{*}M) \\
  M \ar[u]_{ω ∈ Ω^{k} (M)}
}
$$

#### 全微分 : $Ω^0 (M) → Ω^1 (M)$

自明な直線束に値を取る $0$-形式を $1$-形式に移す微分 $\dd{} : Ω^0 (M) → Γ(T^{*}M) = Ω^1 (M)$ は全微分である: $f, g ∈ Ω^0 (M)$, $fg ∈ Ω^0 (M)$ に対して, Leibniz 則を満たす:
$$
\dd{(fg)} = (\dd{f}) g + f (\dd{g}).
$$
$$
\xymatrix{
  K & T^{*}M \\
  \ \ar@{|.>}[r]^{\dd{}} & \ \\
  M \ar[uu]^{Ω^0 (M) ∋ f} & M \ar[uu]_{\dd{f} ∈ Ω^1 (M)}
}
$$

$T^{*}_pM$ の基底 $\{d x^μ\}$ に対し, $f ∈ Ω^0 (M)$ は局所的に
$$
\dd{f} := (∂_μ f )\ \dd{x^μ}.
$$

#### 外微分 : $Ω^k (M) → Ω^{k+1} (M)$

自明な直線束に値を取る $k$-形式を $(k+1)$-形式に移す微分 $\dd{} : Ω^k (M) → Ω^{k+1} (M)$ を**外微分** exterior derivative という: $ω ∈ Ω^k (M)$, $ξ ∈ Ω^l (M)$, $ω ∧ ξ ∈ Ω^{k+l} (M)$ に対して, Leibniz 則を満たす:
$$
\dd{(ω ∧ ξ)} = \dd{ω} ∧ ξ + (-1)^k ω ∧ \dd{ξ}.
$$
$$
\xymatrix{
  Λ^k (T^{*}M) & Λ^{k+1} (T^{*}M) \\
  \ \ar@{|.>}[r]^{\dd{}} & \ \\
  M \ar[uu]^{Ω^{k} (M) ∋ ω} & M \ar[uu]_{\dd{ω} ∈ Ω^{k+1} (M)}
}
$$

$T^{*}_pM$ の基底 $\{d x^μ\}$ に対し, $ω = \frac1{k!} ω_{μ_1 \cdots μ_k} \dd{x^{μ_1}} ∧ \cdots ∧ \dd{x^{μ_k}} ∈ Ω^k (M)$ は局所的に
$$
\dd{ω} := \frac1{k!} (∂_ν ω_{μ_1 \cdots μ_k}) \dd{x^ν} ∧ \dd{x^{μ_1}} ∧ \cdots ∧ \dd{x^{μ_k}}.
$$
このとき, 外積代数の交代性より外微分を2回作用させると0になる: $\dd{{}^2} = 0$. また, $X, Y ∈ T_pM$ に対し, $ω ∈ Ω^1 (M)$ の外微分は次の等式を満たす:
$$
\dd{ω} (X, Y) = X (ω (Y)) - Y (ω (X)) - ω ([ X, Y ]).
$$

#### 共変微分 : $Ω^0 (M, E) → Ω^1(M, E)$

ベクトル束 $E$ に値を取る $0$-形式を $1$-形式に移す微分 $D : Ω^0 (M, E) → Ω^1 (M, E)$ を**接続** connection という: $f ∈ Ω^0 (M)$, $ξ' ∈ Ω^0 (M, E) = Γ(E)$, $f ξ' ∈ Ω^0 (M, E)$ に対して, Leibniz 則を満たす:
$$
D (f ξ') = \dd{f} ⊗ ξ' + f D ξ'.
$$
$$
\xymatrix{
  E & T^{*}M ⊗ E \\
  \ \ar@{|.>}[r]^{D} & \ \\
  M \ar[uu]^{Ω^0 (M, E) ∋ \phi} & M \ar[uu]_{D \phi ∈ Ω^1 (M, E)}
}
$$

$p ∈ M$ の座標近傍 $U_i ⊂ M$ とその局所自明化 $\varphi_{i,p} := \varphi_i (p,\ )$ に対し, 切断 $\phi ∈ Γ(E)$ の接続は
$$
D \phi := \varphi_{i,p} (\dd{} + A_i) \varphi_{i,p}^{-1} \circ \phi.
$$
ここで, Lie 代数に値を取る $1$-形式 $A_i ∈ Ω^1 (U_i, \mathrm{End} (E)) = Γ(T^{*}U_i ⊗ \frak{g})$ は**接続 $1$-形式**または**ゲージ場** gauge field といい, **局所標構場** local frame field と呼ばれる $Ω (U_i, E) = Γ(π^{-1} (U_i))$ の局所的な基底 $\{ e_a \}$ を用いて, $∇  e_a = \varphi_{i,p} {(A_i)^b}_a ⊗ \varphi_{i,p}^{-1} \circ e_b$ と展開できる. また, ゲージ場は別の座標近傍と「接続」する役割を持つ: $p ∈ M$ の座標近傍 $U_i, U_j ⊂ M$ とその局所自明化 $\varphi_{i,p} := \varphi_i (p,\ )$, $\varphi_{j,p} := \varphi_j (p,\ )$ に対し, 切断 $\phi ∈ Γ(E)$ は
$$
D \phi = \varphi_{i,p} (\dd{} + A_i) \varphi_{i,p}^{-1} \circ \phi = \varphi_{j,p} (\dd{} + A_j) \varphi_{j,p}^{-1} \circ \phi,
$$
あるいは 局所切断 $\phi_i := \varphi_{i,p}^{-1} \circ \phi$, $\phi_j  := \varphi_{j,p}^{-1} \circ \phi$ と, それらに対する局所的な接続 $D_i := \dd{} + A_i$, $D_j := \dd{} + A_j$ を用いて, 変換関数による局所的な接続の変換式が得られる:
$$
D_i \phi_i = g_{ij} (p) D_j \phi_j.
$$
また, ベクトル束の構造群が $GL(n)$ であることを用いて,
$$
\begin{aligned}
\varphi_{j,p} (\dd{} + A_j) \varphi_{j,p}^{-1} \circ \phi
&= \varphi_{j,p} \dd{(\varphi_{j,p}^{-1} \circ \phi)} + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
&= \varphi_{j,p} \dd{(\varphi_{j,p}^{-1} \circ \varphi_{i,p} \circ \varphi_{i,p}^{-1} \circ \phi)} + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
&= \varphi_{j,p} \dd{(g_{ji} (p) \varphi_{i,p}^{-1} \circ \phi)} + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
&= \varphi_{j,p} \dd{(g_{ji} (p))} \varphi_{i,p}^{-1} \circ \phi + \varphi_{j,p} g_{ji} (p) \dd{(\varphi_{i,p}^{-1} \circ \phi)} + \varphi_{j,p} A_j \varphi_{j,p}^{-1} \circ \phi \\
&= \varphi_{i,p} \dd{(\varphi_{i,p}^{-1} \circ \phi)} + \varphi_{i,p} g_{ij} (p) \dd{(g_{ji} (p))} \varphi_{i,p}^{-1} \circ \phi + \varphi_{i,p} g_{ij} (p) A_j g_{ji} (p) \varphi_{i,p}^{-1} \circ \phi \\
&= \varphi_{i,p} (d + g_{ij} (p) \dd{g_{ji} (p)} + g_{ij} (p) A_j g_{ji} (p)) \varphi_{i,p}^{-1} \circ \phi .
\end{aligned}
$$
これが $\varphi_{i,p} (\dd{} + A_i) \varphi_{i,p}^{-1} \circ \phi$ と等しい条件は,
$$
A_i = g_{ij} (p) \dd{g_{ji}} (p) + g_{ij} (p) A_j g_{ji} (p),
$$
あるいは $A := A_j$, $A' := A_i$, $g := g_{ij} (p)$ として,
$$
A' = g \dd{g^{-1}} + g A g^{-1}.
$$
変換関数による変換に相当する $A ↦ A' = g \dd{g^{-1}} + g A g^{-1}$ を**ゲージ変換** gauge transformation という. また, ゲージ場をスカラー倍 $A ↦ λ A$ しても接続の性質は変わらない.

$$
\xymatrix{
  F \ar[r]_-{\varphi_{i,p}} & π^{-1}(p) & F \ar@/_18pt/[ll]_{g_{ij}(p)} \ar[l]^-{\varphi_{j,p}} & T^{*}_pM ⊗ F \ar[r]_-{\varphi_{i,p}} & T^{*}_pM ⊗ π^{-1}(p) & T^{*}_pM ⊗ F \ar@/_18pt/[ll]_{g_{ij}(p)} \ar[l]^-{\varphi_{j,p}} \\
  & \ \ar@{|.>}@/^5pt/[rrr]^{D} &&& \ \\
  \{p\} \ar[uu]^{\phi_i} \ar@{=}[r] & \{p\} \ar[uu]^{\phi} & \{p\} \ar@{=}[l] \ar[uu]_{\phi_j} & \{p\} \ar@{=}[r] \ar[uu]_{\phi_i} & \{p\} \ar[uu]_{\phi} & \{p\} \ar@{=}[l] \ar[uu]_{\phi_j}
}
$$

実用上, 接続はしばしば局所的な接続と同一視される:
$$
D \phi := (\dd{} + A) \phi.
$$
例えば, $D e_a = {A^b}_a ⊗ e_b$, $D' \phi' = g D \phi$ など. $T^{*}_pM$ の基底 $\{ d x^μ \}$ に対して, 接続 $1$-形式 $A = A_μ \dd{x^μ}$ を用いて, 局所的に $D \phi = D_μ \phi \ \dd{x^μ} = (∂_μ + A_μ) \phi \ \dd{x^μ}$ と展開される. このとき, 接続の成分表示を**共変微分** convariant derivative という:
$$
D_μ \phi = (∂_μ + A_μ) \phi.
$$
また, $\{ \dd{x^μ} \}$ を双対基底に持つ $T_pM$ の基底 $\{ ∂_μ \}$ に対して, $X = X^μ ∂_μ ∈ T_pM$ を用いた $D_X \phi := D \phi (X) = X^μ D_μ \phi : Γ (E) → Γ (E)$ を共変微分と呼ぶこともある. また, 単に接続 $D \phi = (\dd{} + A) \phi$ を共変微分と呼ぶこともある.

#### 共変外微分 : $Ω^k (M, E) → Ω^{k+1} (M, E)$

ベクトル束 $E$ に値を取る $k$-形式を $(k+1)$-形式に移す微分 $D : Ω^k (M, E) → Ω^{k+1} (M, E)$ を**共変外微分** covariant exterior derivative という: $ω ∈ Ω^k (M) = Γ (Λ^k(T^{*}M))$, $ξ ∈ Ω^l (M, E) = Γ (Λ^l(T^{*}M) ⊗ E)$, $ω ∧ ξ ∈ Ω^{k+l} (M, E) = Γ (Λ^{k+l} (T^{*}M) ⊗ E)$ に対して, Leibniz 則を満たす:
$$
D (ω ∧ ξ) = \dd{ω} ∧ ξ + (-1)^k ω ∧ D ξ,
$$
あるいは, $l = 0$ のとき,
$$
D (ω ⊗ ξ) = \dd{ω} ⊗ ξ + (-1)^k ω ∧ D ξ.
$$
$$
\xymatrix{
  Λ^k (T^{*}M) ⊗ E & Λ^{k+1} (T^{*}M) ⊗ E \\
  \ \ar@{|.>}[r]^{D} & \ \\
  M \ar[uu]^{Ω^{k} (M, E) ∋ \phi} & M \ar[uu]_{D\phi ∈ Ω^{k+1} (M, E)}
}
$$

接ベクトル $X, Y ∈ T_pM$ に対し, $\phi ∈ Ω^1 (M, E)$ の共変外微分は次の等式を満たす:
$$
D \phi (X, Y) = D_X (\phi (Y)) - D_Y (\phi (X)) - \phi ([ X, Y ]).
$$

#### 曲率

$p ∈ M$ において $E$ の切断を2回共変外微分する操作 $R := D^2 : π^{-1} (p) → Λ^2(T^{*}_pM) ⊗ π^{-1} (p)$ を $p$ における接続 $D$ の**曲率** curvature という. このとき, **Bianchi 恒等式** Bianchi identity を満たす:
$$
DR = 0.
$$

$ξ ∈ Γ(E) = Ω^0 (M, E)$ に対し, $p ∈ M$ の接ベクトル $X, Y ∈ T_pM$ を用いた等式
$$
\begin{aligned}
D (D ξ) (X, Y)
  &= D_X (D ξ (Y)) - D_Y (D ξ (X)) - D ξ ([ X, Y ]) \\
  &= D_X D_Y ξ - D_Y D_X ξ - D_{[ X, Y ]} ξ
\end{aligned}
$$
より, **Ricchi 恒等式** Ricci identity が得られる:
$$
R (X, Y) ξ = (D_X D_Y - D_Y D_X - D_{[X, Y]}) ξ.
$$

局所標構場 $\{ e_a \}$ の曲率は, 接続 $1$-形式 $A = ({A^b}_a)$ を用いて,
$$
\begin{aligned}
D^2 e_a
  &= D ({A^b}_a ⊗ e_b) \\
  &= d {A^b}_a ⊗ e_b - {A^b}_a ∧ D e_b \\
  &= d {A^b}_a ⊗ e_b - {A^b}_a ∧ {A^c}_b ⊗ e_c \\
  &= (d {A^c}_a + {A^c}_b ∧ {A^b}_a) ⊗ e_c
\end{aligned}
$$
であるから, **構造方程式** structure equation が得られる:
$$
R e_a = (d {A^b}_a + {A^b}_c ∧ {A^c}_a) ⊗ e_b.
$$
このとき, $R e_a = {F^b}_a ⊗ e_b$ となる Lie 代数に値を取る $2$-形式
$$
\begin{aligned}
F &= ({F^b}_a) \\
  &= (\dd{{A^b}_a} + {A^b}_c ∧ {A^c}_a) \\
  &= \dd{A} + A ∧ A \\
  &∈ Ω^2 (M, \mathrm{End}(E)) = Γ (Λ^2 (T^{*}M) ⊗ \frak{g})
\end{aligned}
$$
を**曲率 $2$-形式** curvature $2$-form あるいは**場の強さ** field strength という. ゲージ変換 $A ↦ A' = g \dd{g^{-1}} + gAg^{-1}$ に対して, 場の強さ $F$ の変換規則は $F ↦ F' = gFg^{-1}$ である. また, 場の強さの外微分より, Bianchi 恒等式の別の表示が得られる:
$$
\begin{aligned}
d F
  &= \dd{(\dd{A} + A ∧ A)} \\
  &= \dd{{}^2} A + \dd{(A ∧ A)} \\
  &= \dd{A} ∧ A - A ∧ \dd{A} \\
  &= (F - A ∧ A) ∧ A - A ∧ (F - A ∧ A) \\
  &= F ∧ A - A ∧ F \\
  &=: - [A, F]. \\
\end{aligned}
$$
$$
∴ \dd{{}_A} F := \dd{F} + [A, F] = 0.
$$
また, ゲージ場 $A = A_μ \dd{x^μ}$, 場の強さ $\displaystyle F = \frac12 F_{μν} \dd{x^μ} ∧ \dd{x^ν}$ について,
$$
\begin{aligned}
F &= \dd{A} + A ∧ A \\
  &= \dd{(A_μ \dd{x^μ})} + (A_μ \dd{x^μ}) ∧ (A_ν \dd{x^ν}) \\
  &= ∂_ν A_μ \dd{x^ν} ∧ \dd{x^μ} + A_μ A_ν \dd{x^μ} ∧ \dd{x^ν} \\
  &= \frac12 (∂_μ A_ν - ∂_ν A_μ) \dd{x^μ} ∧ \dd{x^ν} + \frac12 (A_μ A_ν - A_ν A_μ) \dd{x^μ} ∧ \dd{x^ν} \\
  &= \frac12 (∂_μ A_ν - ∂_ν A_μ + [A_μ, A_ν]) \dd{x^μ} ∧ \dd{x^ν}.
\end{aligned}
$$
したがって, 場の強さの成分表示は,
$$
F_{μν} = ∂_μ A_ν - ∂_ν A_μ + [A_μ, A_ν].
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