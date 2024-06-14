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

4 元座標に依存するパラメータ $ϕ^α (x)$ について, **作用** action と呼ばれる汎関数 $S[ϕ^α]$ が存在し, $ϕ^α$ は物理現象において $S[ϕ^α]$ が最小となるよう変化する. つまり, 停留条件 $δS[ϕ^α] = 0$ を満たす.

### Euler–Lagrange の運動方程式

作用は, スカラー場 $ϕ^α$ に関する **Lagrangian 密度** Lagrangian density $ℒ(ϕ^α, ∂_μ ϕ^α)$ を用いて以下のように表される:
$$
S[ϕ^α] = ∫ \d{{}^4 x}  ℒ(ϕ^α, ∂_μ {ϕ^α}).
$$
$ϕ^α + δϕ^α$ の変分をとって,
$$
\begin{aligned}
δS[ϕ^α]
=&  ∫ \d{{}^4 x}  \bqty{
      ℒ(ϕ^α + δϕ^α, ∂_μ ϕ^α + ∂_μ δϕ^α)
      - ℒ(ϕ^α, ∂_μ ϕ^α)
    } \\
=&  ∫ \d{{}^4 x}  \bqty{
      δϕ^α \pdv{ℒ}{ϕ^α}
      + δ∂_μ ϕ^α \pdv{ℒ}{(∂_μ ϕ^α)}
      + o\pqty{\sqrt{
        δϕ^{α*} δϕ^α + δ∂_μϕ^{α*} δ∂^μϕ^α
      }}
    } \\
=&  ∫ \d{{}^4 x}  \bqty{
      δϕ^α \pdv{ℒ}{ϕ^α}
      + ∂_μ δϕ^α \pdv{ℒ}{(∂_μ ϕ^α)}
    }
    \quad (∵ δ∂_μ ϕ^α = ∂_μ δϕ^α) \\
=&  ∫ \d{{}^4 x}  \bqty{
      δϕ^α \pdv{ℒ}{ϕ^α}
      - δϕ^α ∂_μ \pqty{\pdv{ℒ}{(∂_μ ϕ^α)}}
      + ∂_μ \pqty{
        δϕ^α \pdv{ℒ}{(∂_μ ϕ^α)}
      }
    }.
\end{aligned}
$$
ここで, 発散項は境界条件より消える:
$$
δS[ϕ^α]
= ∫ \d{{}^4 x}  δϕ^α \bqty{
    \pdv{ℒ}{ϕ^α}
    - ∂_μ \pqty{\pdv{ℒ}{(∂_μ ϕ^α)}}
  }.
$$
したがって, 停留条件 $δS[ϕ^α] = 0$ より,
**Euler–Lagrange の運動方程式**が得られる:
$$
\pdv{ℒ}{ϕ^α} - ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ^α)} }
= 0.
$$

または, Lagrangian 密度を空間全体にわたって積分した
$$
L[ϕ^α, \.ϕ^α]
= ∫ \d{{}^3 \bm{x}} ℒ(ϕ^α, ∂_μ ϕ^α)
= ∫ \d{{}^3 \bm{x}} ℒ(ϕ^α, \grad ϕ^α, \.ϕ^α)
$$
を Lagrangian $L[ϕ^α, \.ϕ^α]$ と定義すると,
$$
\begin{aligned}
\fdv{L[ϕ^α, \.ϕ^α]}{ϕ^α}
=&  \fdv{}{ϕ^α} ∫ \d{{}^3 \bm{x}} ℒ(ϕ^α, \grad ϕ^α, \.ϕ^α) \\
=&  \pdv{ℒ}{ϕ^α} - \div \pdv{ℒ}{(\grad ϕ^α)}, \\
&\pqty{∵ \text{変分公式 $\displaystyle\fdv{}{φ(y)} ∫ \d{x} g(φ'(x)) = - \dv{}{y} \dv{g(φ'(y))}{(φ'(y))}$}} \\
\fdv{L[ϕ^α, \.ϕ^α]}{\.ϕ^α}
=&  \fdv{}{\.ϕ^α} ∫ \d{{}^3 \bm{x}} ℒ(ϕ^α, \grad ϕ^α, \.ϕ^α) \\
=&  \pdv{ℒ}{\.ϕ^α}.
\end{aligned}
$$
より,
$$
\begin{aligned}
\fdv{S[ϕ^α]}{ϕ^α}
=&  \fdv{L}{ϕ^α} - \dv{}{t} \fdv{L}{\.ϕ^α} \\
=&  \pdv{ℒ}{ϕ^α} - \div \pdv{ℒ}{(\grad ϕ^α)} - \pdv{}{t} \pdv{ℒ}{\.ϕ^α} \\
=&  \pdv{ℒ}{ϕ^α} - ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ^α)} }.
\end{aligned}
$$
これを用いると Euler–Lagrange の運動方程式は
$$
\fdv{S[ϕ^α]}{ϕ^α} = \fdv{L}{ϕ^α} - \pdv{}{t} \fdv{L}{\.ϕ^α} = 0.
$$

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場 $ϕ^α$ の Lagrangian 密度は,
$$
ℒ(ϕ^α, ∂_μ ϕ^α) = \frac12 ∂_μ ϕ_α ∂^μ ϕ^α - \frac12 m^2 ϕ_α ϕ^α.
$$
ここで,
$$
\pdv{ℒ}{ϕ^α} = - m^2 ϕ_α, \quad ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ^α)} } = ∂_μ ∂^μ ϕ_α = □ ϕ_α.
$$
したがって, Euler–Lagrange の運動方程式より,
$$
(□ + m^2) ϕ^α = 0.
$$
これは **Klein-Gordon 方程式**と呼ばれる.

#### 例: 複素 Klein-Gordon 場

複素 Klein-Gordon 場 $ϕ^α$ の Lagrangian 密度は,
$$
ℒ(ϕ^α, ∂_μ ϕ^α) = \frac12 ∂_μ ϕ_α^* ∂^μ ϕ^α - \frac12 m^2 ϕ_α^* ϕ^α.
$$
ここで, $ϕ^α$ と ${ϕ^α}^*$ を独立に扱って,
$$
\begin{gathered}
\pdv{ℒ}{{ϕ^α}^*} = - m^2 ϕ_α, & ∂_μ \pqty{ \pdv{ℒ}{(∂_μ {ϕ^α}^*)} } = ∂_μ ∂^μ ϕ_α ≡ □ ϕ_α, \\
\pdv{ℒ}{ϕ^α} = - m^2 ϕ_α^*, & ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ϕ^α)} } = ∂_μ ∂^μ ϕ_α^* ≡ □ ϕ_α^*, \\
\end{gathered}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
(□ + m^2) ϕ^α = 0, \quad (□ + m^2) {ϕ^α}^* = 0.
$$

#### 例: de Broglie 場

de Broglie 場 $ψ$ の Lagrangian 密度は,
$$
ℒ(ψ, ∂_μ ψ) = i ℏ ψ^† ∂_μ ψ - \frac{ℏ^2}{2m} ∂_i ψ^† ∂^i ψ.
$$
ここで, $ψ$ と $ψ^†$ を独立に扱って,
$$
\begin{aligned}
  \pdv{ℒ}{ψ^†} &= i ℏ ∂_μ ψ, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ^†)} } &= ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ^†)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ^†)} } \\
    &= 0 - \frac{ℏ}{2 m} ∂_i ∂^i ψ \\
    &= - \frac{ℏ}{2 m} ∇^2 ψ,
\end{aligned}
$$
$$
\begin{aligned}
  \pdv{ℒ}{ψ} &= 0, \\
  ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ)} } &= ∂_μ \pqty{ \pdv{ℒ}{(∂_μ ψ)} } + ∂_i \pqty{ \pdv{ℒ}{(∂_i ψ)} } \\
    &= i ℏ ∂_i ψ^† - \frac{ℏ}{2 m} ∂_i ∂^i ψ^† \\
    &= i ℏ ∂_i ψ^† - \frac{ℏ}{2 m} ∇^2 ψ^†.
\end{aligned}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
\begin{aligned}
  i ℏ ∂_μ ψ &= - \frac{ℏ}{2 m} ∇^2 ψ, & - i ℏ ∂_μ ψ^† &= - \frac{ℏ}{2 m} ∇^2 ψ^†.
\end{aligned}
$$
これは **de Broglie 方程式**と呼ばれ, 非相対論的量子力学における波動関数の Schrödinger 方程式と関係がある.

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
これは古典電磁気学の基本方程式の一部として知られている.

#### 例: Dirac 場

Dirac 場 $ψ$ の Lagrangian 密度は,
$$
ℒ(A_ν, ∂_μ A_ν) = \overline{ψ} i\/∂ ψ - m \overline{ψ}ψ.
$$
ただし $\/∂≡γ^μ∂_μ$ は Dirac 演算子, $γ^μ$ は $\{γ^μ,γ^ν\}=g^{μν}$ を満たす $γ$ 行列で, $\overline{ψ}≡ψγ^0$ は Dirac 共役である. また, Dirac 場 $ψ$ は Dirac スピノルと呼ばれる列ベクトルで, 例えば4成分である: $ψ = (ψ_1, ψ_2, ψ_3, ψ_4)^{\mathsf{T}}$. ここで, $ψ$ と $\overline{ψ}$ を独立に扱って,
$$
\begin{gathered}
  \pdv{ℒ}{\overline{ψ}} = i\/∂ ψ - m ψ = (i\/∂ - m) ψ, \quad \pdv{ℒ}{(∂_μ\overline{ψ})} = 0, \\
  \pdv{ℒ}{ψ} = - m\overline{ψ}, \quad \pdv{ℒ}{(∂_μψ)} = \overline{ψ} iγ^μ. \\
\end{gathered}
$$
したがって, Euler–Lagrange の運動方程式より,
$$
(i\/∂ - m) ψ = 0, \quad \overline{ψ} (i\overleftarrow{\/∂} + m) = 0.
$$

### Noether の定理

座標の微小変換 $x↦x'=x+δx$ に対し, 座標が $ϕ^α(x)↦ϕ'^α(x)=ϕ^α(x)+δϕ^α(x)$ と変換されるとする. このとき作用は
$$
\begin{aligned}
  δS[ϕ^α]
    &=  ∫ \d{{}^4 x'} ℒ(ϕ'^α(x'),∂'_μϕ'^α(x')) - ∫ \d{{}^4 x} ℒ(ϕ^α(x),∂_μϕ^α(x)) \\

&   \quad \pqty{\d{{}^4 x'} = \d{{}^4 x} \abs{\pdv{x'^μ}{x^ν}} = \d{{}^4 x} \det(δ_ν^μ+∂_νδx^μ) = \d{{}^4 x} (1+∂_μδx^μ)} \\
    &=  ∫ \d{{}^4 x} \Big[ (1+∂_μδx^μ) ℒ(ϕ'^α(x'),∂'_μϕ'^α(x')) - ℒ(ϕ^α(x),∂_μϕ^α(x)) \Big] \\
    & \quad \left(
        \begin{aligned}
          ∂'_μϕ'^α(x') &= \pdv{x^ν}{x'^μ} ∂_ν(ϕ^α(x)+δϕ^α(x)) \\
                       &= (δ_μ^ν-∂_μδx^ν)(∂_νϕ^α+∂_νδϕ^α) \\
                       &= ∂_μϕ^α+∂_μδϕ^α-∂_μδx^ν∂_νϕ^α
        \end{aligned}
      \right) \\
    &=  ∫ \d{{}^4 x} \Big[ ∂_μδx^μ ℒ + ℒ(ϕ^α+δϕ^α,∂_μϕ^α+∂_μδϕ^α-∂_μδx^ν∂_νϕ^α) - ℒ(ϕ^α,∂_μϕ^α) \Big] \\
    &=  ∫ \d{{}^4 x} \bqty{∂_μδx^μ ℒ + δϕ^α \pdv{ℒ}{ϕ^α} + (∂_μδϕ^α-∂_μδx^ν∂_νϕ^α) \pdv{ℒ}{(∂_μϕ^α)}} \\
    &   \quad \pqty{\text{Lie 微分 $δ^Lϕ^α(t) := ϕ'^α(t) - ϕ^α(t) = δϕ^α - δx^μ∂_μϕ^α$}} \\
    &=  ∫ \d{{}^4 x} \bqty{∂_μδx^μ ℒ + (δ^Lϕ^α + δx^μ∂_μϕ^α) \pdv{ℒ}{ϕ^α} + (∂_μδ^Lϕ^α + δx^ν∂_μ∂_νϕ^α) \pdv{ℒ}{(∂_μϕ^α)}} \\
    &=  ∫ \d{{}^4 x} \bqty{∂_μδx^μ ℒ + δ^Lϕ^α \pdv{ℒ}{ϕ^α} + δx^μ∂_μϕ^α \pdv{ℒ}{ϕ^α} + ∂_μδ^Lϕ^α \pdv{ℒ}{(∂_μϕ^α)} + δx^ν∂_μ∂_νϕ^α \pdv{ℒ}{(∂_μϕ^α)}} \\
    &=  ∫ \d{{}^4 x} \qty{
        ∂_μ \pqty{δx^μ ℒ} + δ^Lϕ^α \pdv{ℒ}{ϕ^α} + ∂_μ\bqty{δ^Lϕ^α \pdv{ℒ}{(∂_μϕ^α)}} - δ^Lϕ^α ∂_μ\pqty{\pdv{ℒ}{(∂_μϕ^α)}}
      } \\
    &=  ∫ \d{{}^4 x} \qty{
          δ^Lϕ^α \bqty{\pdv{ℒ}{ϕ^α} - ∂_μ\pqty{\pdv{ℒ}{(∂_μϕ^α)}}}
        + ∂_μ\bqty{δ^Lϕ^α \pdv{ℒ}{(∂_μϕ^α)} + δx^μ ℒ}
      } \\
    &=  ∫ \d{{}^4 x} δ^Lϕ^α \bqty{\pdv{ℒ}{ϕ^α} - ∂_μ\pqty{\pdv{ℒ}{(∂_μϕ^α)}}}
      + ∫ \d{{}^4 x} ∂_μ\bqty{δϕ^α \pdv{ℒ}{(∂_μϕ^α)} - δx_ν \pqty{∂^νϕ^α \pdv{ℒ}{(∂_μϕ^α)} - g^{μν} ℒ}}. \\
\end{aligned}
$$
ここで, 第一項は Euler–Lagrange の運動方程式より無視でき, 第二項の積分範囲は任意である. したがって, この変換に対し作用が不変 $δS=0$ であるとすると, 対応する保存則が得られる:
$$
∂_μδJ^μ = 0,
$$
ただし,
$$
δJ^μ := δϕ^α \pdv{ℒ}{(∂_μϕ^α)} - δx_ν T^{μν}
$$
は**保存流**と呼ばれ,
$$
T^{μν} := ∂^νϕ^α \pdv{ℒ}{(∂_μϕ^α)} - g^{μν} ℒ
$$
は**正準エネルギー運動量テンソル**と呼ばれる.
実際, 変換の**生成子**と呼ばれる
$$
δQ(t) := ∫ \d{^3 \bm{x}} δJ^0(x)
$$
を時間微分すると,
$$
\begin{aligned}
  \dv{δQ}{t}
    &=  ∫ \d{^3 \bm{x}} ∂_0δJ^0 = ∫ \d{^3 \bm{x}} (∂_μδJ^μ - ∂_iδJ^i) \\
    &=  - ∫ \d{^3 \bm{x}} ∂_iδJ^i = - ∫ \d{V} \div (δ\bm{J}) \\
    &=  - ∫ \d{\bm{S}} ⋅ (δ\bm{J})
    \quad \xrightarrow{\text{境界条件}} \quad 0.
\end{aligned}
$$

TODO: 汎関数微分を用いた導出

TODO: 例

### Hamiltonの運動方程式

**一般化運動量** $π_α ≡ δL / δ\.{ϕ}^α = ∂ℒ / ∂\.{ϕ}^α$ を用いて, **Hamiltonian 密度** $ℋ(ϕ^α, ∇ ϕ^α, π_α, ∇ π_α) ≡ π_α \.{ϕ}^α - ℒ$ を定義する. Hamiltonian 密度の定義の変分は,
$$
\begin{aligned}
  δℋ
  &= \.{ϕ}^α δπ_α + π_α δ\.{ϕ}^α - δℒ \\
  &= \.{ϕ}^α δπ_α + π_α δ\.{ϕ}^α - \bqty{\pdv{ℒ}{ϕ^α} - \div \pdv{ℒ}{(\grad ϕ^α)}} δϕ^α + \div \bqty{\pdv{ℒ}{(\grad ϕ^α)} δϕ^α} + π_α δ\.{ϕ^α} \\
  &= - \bqty{\pdv{ℒ}{ϕ^α} - \div \pdv{ℒ}{(\grad ϕ^α)}} δϕ^α + \.{ϕ}^α δπ_α + \div \bqty{\pdv{ℒ}{(\grad ϕ^α)} δϕ^α}.
\end{aligned}
$$
また, Hamiltonian 密度の変分は,
$$
\begin{aligned}
  δℋ
  &= \pdv{ℋ}{ϕ^α} δϕ^α + \pdv{ℋ}{(\grad ϕ^α)} ⋅ δ(\grad ϕ^α) + \pdv{ℋ}{π_α} δπ_α + \pdv{ℋ}{(\grad π_α)} ⋅ δ(\grad π_α) \\
  &= \pdv{ℋ}{ϕ^α} δϕ^α + \div \bqty{\pdv{ℋ}{(\grad ϕ^α)} δϕ^α} - \div \pdv{ℋ}{(\grad ϕ^α)} δϕ^α + \pdv{ℋ}{π_α} δπ_α + \div \bqty{\pdv{ℋ}{(\grad π_α)} δπ_α} - \div \pdv{ℋ}{(\grad π_α)} δπ_α \\
  &= \bqty{\pdv{ℋ}{ϕ^α} - \div \pdv{ℋ}{(\grad ϕ^α)}} δϕ^α + \bqty{\pdv{ℋ}{π_α} - \div \pdv{ℋ}{(\grad π_α)}} δπ_α + \div \bqty{\pdv{ℋ}{(\grad ϕ^α)} δϕ^α} + \div \bqty{\pdv{ℋ}{(\grad π_α)} δπ_α}
\end{aligned}
$$
ここで, Euler-Lagrangian 方程式が成立するとき $\displaystyle \.π_α = - \bqty{\pdv{ℒ}{ϕ^α} - \div \pdv{ℒ}{(\grad ϕ^α)}}$ であることを用いると, **Hamilton の運動方程式**あるいは**正準方程式** canonical equation が得られる:
$$
\begin{aligned}
  \.{ϕ}^α &= \bqty{\pdv{ℋ}{π_α} - \div \pdv{ℋ}{(\grad π_α)}}, \\
  \.π_α &= - \bqty{\pdv{ℋ}{ϕ^α} - \div \pdv{ℋ}{(\grad ϕ^α)}}.
\end{aligned}
$$
TODO: ただし発散項は作用で消えることを用いた.

または, Hamiltonian 密度を空間全体にわたって積分した
$$
\begin{aligned}
  H[ϕ^α, π_α] &≡ ∫ \d{{}^3 \bm{x}} ℋ(ϕ^α, ∇ ϕ^α, π_α, ∇ π_α) \\
  &= ∫ \d{{}^3 \bm{x}} π_α \.{ϕ}^α - L[ϕ^α, \.{ϕ}^α]
\end{aligned}
$$
を Hamiltonian $H[ϕ^α, π_α]$ と定義すると,
$$
\begin{aligned}
  \fdv{H[ϕ^α, π_α]}{ϕ^α} &= \pdv{ℋ}{ϕ^α} - \div \pdv{ℋ}{(\grad ϕ^α)}, \\
  \fdv{H[ϕ^α, π_α]}{π_α} &= \pdv{ℋ}{π_α} - \div \pdv{ℋ}{(\grad π_α)} \\
\end{aligned}
$$
であるから, これを用いると Hamilton の運動方程式は,
$$
\.{ϕ}^α = \fdv{H}{π_α}, \quad \.π_α = - \fdv{H}{ϕ^α}.
$$

$π_α$ を $ϕ^α$ に**共役な運動量** conjugate momentum といい, また $(ϕ^α, π_α)$ の組を**正準変数** canonical variables という.

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場 $ϕ^α$ の Lagrangian 密度は,
$$
ℒ(ϕ^α, ∂_μ ϕ^α) = \frac12 ∂_μ ϕ_α ∂^μ ϕ^α - \frac12 m^2 ϕ_α ϕ^α.
$$
ここで, 一般化運動量の定義より,
$$
π_α = \pdv{ℒ}{\.{ϕ}^α} = \.{ϕ}_α.
$$
したがって $\.{ϕ}_α = π_α$ であるから, Hamiltonian 密度より,
$$
\begin{aligned}
  ℋ &= π_α \.{ϕ}^α - ℒ \\
    &= π_α π^α - \frac12 π_α π^α + \frac12 (\grad ϕ_α)⋅(\grad ϕ^α) + \frac12 m^2 ϕ_α ϕ^α \\
    &= \frac12 π_α π^α + \frac12 (\grad ϕ_α)⋅(\grad ϕ^α) + \frac12 m^2 ϕ_α ϕ^α.
\end{aligned}
$$
ここで,
$$
\begin{aligned}
  \pdv{ℋ}{π_α} - \div \pdv{ℋ}{(\grad π_α)} &= π^α, \\
  \pdv{ℋ}{ϕ^α} - \div \pdv{ℋ}{(\grad ϕ^α)} &= m^2 ϕ_α - ∇^2 ϕ_α.
\end{aligned}
$$
したがって, Hamilton の運動方程式は
$$
\.{ϕ}^α = π^α, \quad \.{π}_α = - m^2 ϕ_α + ∇^2 ϕ_α.
$$

TODO: 他の例

### Poisson 括弧

正準変数 $(ϕ^α, π_α)$ に対し, **Poisson 括弧** Poisson braket は以下で定義される演算である:
$$
\begin{aligned}
  \{A[ϕ^α, π_α], B[ϕ^α, π_α]\}_\mathrm{P}
    &≡ ∫ \d{{}^3 \bm{x}} \pqty{\fdv{A}{ϕ^α}\fdv{B}{π_α} - \fdv{B}{ϕ^α}\fdv{A}{π_α}} \\
    &≡ ∫ \d{{}^3 \bm{x}} \pqty{\fdv{A[ϕ^α, π_α]}{ϕ^α(t,\bm{x})}\fdv{B[ϕ^α, π_α]}{π_α(t,\bm{x})} - \fdv{B[ϕ^α, π_α]}{ϕ^α(t,\bm{x})}\fdv{A[ϕ^α, π_α]}{π_α(t,\bm{x})}}.
\end{aligned}
$$
例えば,
$$
\begin{gathered}
\{ϕ^α, H\}_\mathrm{P} = \.ϕ^α, \quad \{π_α, H\}_\mathrm{P} = \.π_α, \\
\{ϕ^α(t, \bm{x}), ϕ^β(t, \bm{x}')\}_\mathrm{P} = \{π_α(t, \bm{x}), π_β(t, \bm{x}')\}_\mathrm{P} = 0, \\
\{ϕ^α(t, \bm{x}), π_β(t, \bm{x}')\}_\mathrm{P} = δ^α_β δ^3(\bm{x}-\bm{x}').
\end{gathered}
$$

ある物理量 $A[ϕ^α, π_α]$ について, 時間発展に関する式は:
$$
\dv{A}{t} = \{A, H\}_\mathrm{P}.
$$
実際, $A$ の時間による完全微分は,
$$
\begin{aligned}
\dv{A}{t}
&=  ∫ \d{{}^3 \bm{x}} \fdv{A}{ϕ^α} \.ϕ^α + ∫ \d{{}^3 \bm{x}} \fdv{A}{π_α} \.π_α \\
&=  ∫ \d{{}^3 \bm{x}} \pqty{\fdv{A}{ϕ^α} \fdv{H}{π_α} - \fdv{H}{ϕ^α} \fdv{A}{π_α}} \\
&=  \{A, H\}_\mathrm{P}.
\end{aligned}
$$

### 平面波展開

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場の Lagrangian 密度は
$$
ℒ(ϕ, ∂_μ ϕ) = \frac12 ∂_μ ϕ ∂^μ ϕ - \frac12 m^2 {ϕ}^2,
$$
運動方程式は
$$
(□ + m^2) ϕ = 0,
$$
一般化運動量 $π ≡ ∂ℒ/∂ϕ$ は
$$
π = \.{ϕ},
$$
Hamiltonian は
$$
H[ϕ, π] = ∫ \d{{}^3 \bm{x}} \bqty{\frac12 π^2 + \frac12 |\grad ϕ|^2 + \frac12 m^2 ϕ^2}.
$$

さて, 実 Klein-Gordon 場 $ϕ(t,\bm{x})$ を 3 次元 Fourier 級数展開して,
$$
ϕ(t,\bm{x}) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i \bm{p}⋅\bm{x}}.
$$
ただし, $q(t, \bm{p})$ は展開係数. これを運動方程式 $(□ + m^2)ϕ = 0$ に代入すると,
$$
\begin{aligned}
 &\ (□ + m^2) ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ \pdv{{}^2}{t^2} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} - ∇^2 ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + m^2 ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \"q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} |\bm{p}|^2 q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} m^2 q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{\"q + (\bm{p}^2 + m^2) q} e^{i\bm{p}⋅\bm{x}} = 0.
\end{aligned}
$$
したがって, $p_0 ≡ \sqrt{|\bm{p}|^2 + m^2} > 0$ として $\"q(t, \bm{p}) + (p_0)^2 q(t, \bm{p}) = 0$ だから, $q(t, \bm{p})$ の一般解は
$$
q(t, \bm{p}) = q_1(\bm{p}) e^{-ip_0t} + q_2(\bm{p}) e^{ip_0t}.
$$
$ϕ(t,\bm{x})$ の展開を $q_1(\bm{p})$, $q_2(\bm{p})$ で書き直して,
$$
\begin{aligned}
  ϕ(t,\bm{x})
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i p_0t} + q_2(\bm{p}) e^{i p_0t}} e^{i \bm{p}⋅\bm{x}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i (p_0t - \bm{p}⋅\bm{x})} + q_2(\bm{p}) e^{i (p_0t + \bm{p}⋅\bm{x})}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i (p_0t - \bm{p}⋅\bm{x})} + q_2(-\bm{p}) e^{i (p_0t - \bm{p}⋅\bm{x})}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-ipx} + q_2(-\bm{p}) e^{ipx}}.
    \quad (px ≡ p_μx^μ = p_0t - \bm{p}⋅\bm{x})
\end{aligned}
$$
ここで, $ϕ(x)$ が実スカラー場であることから $ϕ(x) = ϕ^*(x)$.
$$
\begin{aligned}
  ϕ^*(x)
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1^*(\bm{p}) e^{ipx} + q_2^*(-\bm{p}) e^{-ipx}}
\end{aligned}
$$
であるから,
$$
\begin{aligned}
  \frac{a(\bm{p})}{\sqrt{2p_0}} ≡ \frac{q_1(\bm{p}) + q_2^*(-\bm{p})}{2}, \quad
  \frac{a^*(\bm{p})}{\sqrt{2p_0}} ≡ \frac{q_1^*(\bm{p}) + q_2(-\bm{p})}{2}
\end{aligned}
$$
とすれば, 実スカラー場 $ϕ(x)$ は $a(\bm{p})$, $a^*(\bm{p})$ によって以下のように展開できる:
$$
ϕ(x) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}.
$$
また, 一般化運動量 $π(x) = \.ϕ(x)$ は,
$$
\begin{aligned}
  π(x)
    &= \pdv{}{t} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{-ip_0 a(\bm{p}) e^{-ipx} + ip_0 a^*(\bm{p}) e^{ipx}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} (-i) p_0 \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}}.
\end{aligned}
$$
$ϕ(x)$ の展開と比較して,
$$
\begin{aligned}
  p_0 ϕ(x) + i π(x)
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} 2p_0 a(\bm{p}) e^{-ipx} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \sqrt{2p_0} a(\bm{p}) e^{-ip_0t} e^{i\bm{p}⋅\bm{x}}. \\
\end{aligned}
$$
$$
∴ \sqrt{2p_0} a(\bm{p}) e^{-ip_0t} = ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3}} \bqty{p_0 ϕ(x) + i π(x)} e^{-i\bm{p}⋅\bm{x}}
$$
したがって $a(\bm{p})$ の表式が得られる:
$$
a(\bm{p}) = ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}.
$$
Hamiltonian を $a(\bm{p})$, $a^*(\bm{p})$ で表記することを考える. $\grad ϕ(x)$ を計算すると,
$$
\begin{aligned}
  \grad ϕ(x)
    &= \grad ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} i\bm{p} \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}} \\
\end{aligned}
$$
したがって,
$$
\begin{aligned}
  H &= ∫ \d{{}^3 \bm{x}} \bqty{\frac12 π^2 + \frac12 |\grad ϕ|^2 + \frac12 m^2 ϕ^2} \\
    &= \frac12 ∫ \d{{}^3 \bm{x}} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p'}}}{\sqrt{(2π)^3 2p_0'}} \\
    & \qquad\qquad × \Big[\ \ (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a  (\bm{p}') e^{-i(p+p')x} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a^*(\bm{p}') e^{-i(p-p')x} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a  (\bm{p}') e^{ i(p-p')x} \\
    & \qquad\qquad \quad    + (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a^*(\bm{p}') e^{ i(p+p')x} \Big] \\
    &= \frac12 \sqrt{(2π)^3} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p'}}}{\sqrt{(2π)^3 2p_0'}} \\
    & \qquad\qquad × \Big[\ \ (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a  (\bm{p}') δ^3(\bm{p}+\bm{p}') e^{-i(p_0+p_0')t} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a^*(\bm{p}') δ^3(\bm{p}-\bm{p}') e^{-i(p_0-p_0')t} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a  (\bm{p}') δ^3(\bm{p}-\bm{p}') e^{ i(p_0-p_0')t} \\
    & \qquad\qquad \quad    + (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a^*(\bm{p}') δ^3(\bm{p}+\bm{p}') e^{ i(p_0+p_0')t} \Big] \\
    &= \frac12 ∫ \frac{\d{{}^3 \bm{p}}}{2p_0} \\
    & \qquad\qquad × \Big[\ \ (- p_0^2 + |\bm{p}|^2 + m^2) a  (\bm{p}) a  (-\bm{p}) e^{-2ip_0t} \\
    & \qquad\qquad \quad    + (+ p_0^2 + |\bm{p}|^2 + m^2) a  (\bm{p}) a^*( \bm{p}) \\
    & \qquad\qquad \quad    + (+ p_0^2 + |\bm{p}|^2 + m^2) a^*(\bm{p}) a  ( \bm{p}) \\
    & \qquad\qquad \quad    + (- p_0^2 + |\bm{p}|^2 + m^2) a^*(\bm{p}) a^*(-\bm{p}) e^{ 2ip_0t} \Big] \\
    & \quad \pqty{\text{$p_0^2 = |\bm{p}|^2 + m^2$ に注意する}} \\
    &= \frac12 ∫ \frac{\d{{}^3 \bm{p}}}{2p_0}
       \bqty{2p_0^2 a(\bm{p}) a^*(\bm{p}) + 2p_0^2 a^*(\bm{p}) a(\bm{p})} \\
    &= \frac12 ∫ \d{{}^3 \bm{p}} p_0
       \qty{a(\bm{p}) a^*(\bm{p}) + a^*(\bm{p}) a(\bm{p})} \\
    &= ∫ \d{{}^3 \bm{p}} p_0
       \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
\end{aligned}
$$
ただし $[a(\bm{p}), a^*(\bm{p})] ≡ a(\bm{p}) a^*(\bm{p}) - a^*(\bm{p}) a(\bm{p})$ とした. 式変形で $a(\bm{p})$, $a^*(\bm{p})$ の順序を並び換えしていないことに注意. また Hamiltonian は正準エネルギー運動量テンソルの ${T^0}_0$ を全空間で積分したもの
$$
H = ∫ \d{{}^3 \bm{x}} {T^0}_0
$$
であり, 場の全エネルギーである. 同様に, 全運動量は
$$
\bm{P}[ϕ, π] ≡ ∫ \d{{}^3 \bm{x}} ({T^0}_i) = - ∫ \d{{}^3 \bm{x}} π \grad ϕ = ∫ \d{{}^3 \bm{p}} \bm{p} \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
$$
したがって, 4元全運動量テンソルは
$$
P_μ[ϕ, π] = ∫ \d{{}^3 \bm{p}} p_μ \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
$$

まとめると,
$$
\begin{aligned}
  ϕ(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}, \\
  π(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} (-i) p_0 \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}}, \\
  a(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}, \\
  a^{*}(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) - i π(x)} e^{-ipx}, \\
  H[ϕ, π] &= ∫ \d{{}^3 \bm{p}} p_0 \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
\end{aligned}
$$

TODO: 他の例

### 参考文献

- 高橋 康, 柏 太郎 『量子場を学ぶための場の解析力学入門 増補第2版』 (講談社サイエンティフィク, 2005)
- 日置 善郎 『場の量子論 -摂動計算の基礎- (第3版)』 (吉岡書店, 2022)
