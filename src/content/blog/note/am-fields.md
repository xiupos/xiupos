---
title : 場の解析力学
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 最小作用の原理

4 元座標に依存するパラメータ $ϕ_α (x)$ について, **作用** action と呼ばれる汎関数 $S[ϕ_α]$ が存在し, $ϕ_α$ は物理現象において $S[ϕ_α]$ が最小となるよう変化する. つまり, 停留条件 $δS[ϕ_α] = 0$ を満たす.

### Euler–Lagrange の運動方程式

作用は, スカラー場 $ϕ_α$ に関する **Lagrangian 密度** Lagrangian density $ℒ(ϕ_α, ∂_μ ϕ_α)$ を用いて以下のように表される:
$$
S[ϕ_α] = ∫ \dd{{}^4 x}  ℒ(ϕ_α, ∂_μ {ϕ_α}).
$$
$ϕ_α + δϕ_α$ の変分をとって,
$$
\begin{aligned}
δS[ϕ_α]
=&  ∫ \dd{{}^4 x}  \bqty{
      ℒ(ϕ_α + δϕ_α, ∂_μ ϕ_α + ∂_μ δϕ_α)
      - ℒ(ϕ_α, ∂_μ ϕ_α)
    } \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δϕ_α \pdv{ℒ}{ϕ_α}
      + δ∂_μ ϕ_α \pdv{ℒ}{(∂_μ ϕ_α)}
      + o\pqty{\sqrt{
        δϕ_α^{*} δϕ_α + δ∂_μϕ_α^{*} δ∂^μϕ_α
      }}
    } \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δϕ_α \pdv{ℒ}{ϕ_α}
      + ∂_μ δϕ_α \pdv{ℒ}{(∂_μ ϕ_α)}
    }
    \quad (∵ δ∂_μ ϕ_α = ∂_μ δϕ_α) \\
=&  ∫ \dd{{}^4 x}  \bqty{
      δϕ_α \pdv{ℒ}{ϕ_α}
      - δϕ_α ∂_μ \pqty{\pdv{ℒ}{(∂_μ ϕ_α)}}
      + ∂_μ \pqty{
        δϕ_α \pdv{ℒ}{(∂_μ ϕ_α)}
      }
    }.
\end{aligned}
$$
ここで, 発散項は境界条件より消える:
$$
δS[ϕ_α]
= ∫ \dd{{}^4 x}  δϕ_α \bqty{
    \pdv{ℒ}{ϕ_α}
    - ∂_μ \pqty{\pdv{ℒ}{(∂_μ ϕ_α)}}
  }.
$$
したがって, 停留条件 $δS[ϕ_α] = 0$ より,
**Euler–Lagrange の運動方程式**が得られる:
$$
\pdv{ℒ}{ϕ_α} - ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ_α)} }
= 0.
$$

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場 $ϕ_α$ の Lagrangian 密度は,
$$
ℒ(ϕ_α, ∂_μ ϕ_α) = \frac12 ∂_μ ϕ_α ∂^μ ϕ_α - \frac12 μ^2 ϕ_α^2.
$$
ここで,
$$
\begin{aligned}
\pdv{ℒ}{ϕ_α} = - μ^2 ϕ_α, &&
∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ_α)} } = ∂_μ ∂^μ ϕ_α.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
(∂_μ ∂^μ + μ^2) ϕ_α = 0.
$$

#### 例: de Broglie 場

de Broglie 場 $ψ$ の Lagrangian 密度は,
$$
ℒ(ψ, ∂_μ ψ) = i ℏ ψ^† ∂_t ψ - \frac{ℏ^2}{2m} ∂_i ψ^† ∂^i ψ.
$$
ここで, $ψ$ と $ψ^†$ を独立に扱って,
$$
\begin{aligned}
  \pdv{ℒ}{ψ^†} &= i ℏ ∂_t ψ, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ^†)} } &= ∂_t \pqty{ \pdv{ℒ}{(∂_t ψ^†)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ^†)} } \\
    &= 0 - \frac{ℏ}{2 m} ∂_i ∂^i ψ \\
    &= - \frac{ℏ}{2 m} \laplacian ψ,
\end{aligned}
$$
$$
\begin{aligned}
  \pdv{ℒ}{ψ} &= 0, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ)} } &= ∂_t \pqty{ \pdv{ℒ}{(∂_t ψ)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ)} } \\
    &= i ℏ ∂_i ψ^† - \frac{ℏ}{2 m} ∂_i ∂^i ψ^† \\
    &= i ℏ ∂_i ψ^† - \frac{ℏ}{2 m} \laplacian ψ^†.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
\begin{aligned}
  i ℏ ∂_t ψ &= - \frac{ℏ}{2 m} \laplacian ψ, & - i ℏ ∂_t ψ^† &= - \frac{ℏ}{2 m} \laplacian ψ^†.
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

### Hamiltonの運動方程式

**一般化運動量** $π^α ≡ ∂ℒ / ∂\.{ϕ}_α$ を用いて, **Hamiltonian 密度** $ℋ(ϕ_α, ∇ ϕ_α, π^α, ∇ π^α) ≡ π^α \.{ϕ}_α - ℒ$ を定義する. Hamiltonian の定義の変分は,
$$
\begin{aligned}
  δℋ
  &= \.{ϕ}_α δπ^α + π^α δ\.{ϕ}_α - δℒ \\
  &= \.{ϕ}_α δπ^α + π^α δ\.{ϕ}_α - \bqty{\pdv{ℒ}{ϕ_α} - \div \pdv{ℒ}{(\grad ϕ_α)}} δϕ_α + \div \bqty{\pdv{ℒ}{(\grad ϕ_α)} δϕ_α} + π^α δ\.{ϕ_α} \\
  &= - \bqty{\pdv{ℒ}{ϕ_α} - \div \pdv{ℒ}{(\grad ϕ_α)}} δϕ_α + \.{ϕ}_α δπ^α + \div \bqty{\pdv{ℒ}{(\grad ϕ_α)} δϕ_α}.
\end{aligned}
$$
また, Hamiltonianの変分は,
$$
\begin{aligned}
  δℋ
  &= \pdv{ℋ}{ϕ_α} δϕ_α + \pdv{ℋ}{(\grad ϕ_α)} ⋅ δ(\grad ϕ_α) + \pdv{ℋ}{π^α} δπ^α + \pdv{ℋ}{(\grad π^α)} ⋅ δ(\grad π^α) \\
  &= \pdv{ℋ}{ϕ_α} δϕ_α + \div \bqty{\pdv{ℋ}{(\grad ϕ_α)} δϕ_α} - \div \pdv{ℋ}{(\grad ϕ_α)} δϕ_α + \pdv{ℋ}{π^α} δπ^α + \div \bqty{\pdv{ℋ}{(\grad π^α)} δπ^α} - \div \pdv{ℋ}{(\grad π^α)} δπ^α \\
  &= \bqty{\pdv{ℋ}{ϕ_α} - \div \pdv{ℋ}{(\grad ϕ_α)}} δϕ_α + \bqty{\pdv{ℋ}{π^α} - \div \pdv{ℋ}{(\grad π^α)}} δπ^α + \div \bqty{\pdv{ℋ}{(\grad ϕ_α)} δϕ_α} + \div \bqty{\pdv{ℋ}{(\grad π^α)} δπ^α}
\end{aligned}
$$
ここで, Euler-Lagrangian 方程式が成立するとき $\displaystyle \.π^α = - \bqty{\pdv{ℒ}{ϕ_α} - \div \pdv{ℒ}{(\grad ϕ_α)}}$ であることを用いると, **Hamilton の運動方程式**あるいは**正準方程式** canonical equation が得られる:
$$
\begin{aligned}
  \.{ϕ}_α &= \bqty{\pdv{ℋ}{π^α} - \div \pdv{ℋ}{(\grad π^α)}}, \\
  \.π^α &= - \pdv{ℋ}{ϕ_α} - \div \pdv{ℋ}{(\grad ϕ_α)}.
\end{aligned}
$$
TODO: ただし発散項は作用で消えることを用いた.
このとき $π^α$ は $ϕ_α$ に**共役な運動量** conjugate momentum といい, また $(ϕ_i, π_i)$ の組を**正準変数** canonical variables という.

### 参考文献

- 高橋 康, 柏 太郎 『量子場を学ぶための場の解析力学入門 増補第2版』 (講談社サイエンティフィク, 2005)
