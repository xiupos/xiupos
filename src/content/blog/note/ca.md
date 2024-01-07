---
title : 複素解析
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 虚数単位と複素数体

$i^2 = -1$ を満たす数 $i$ を虚数単位と言い, 形式的に $i = \sqrt{-1}$ とも書く.

2 実数 $x,y∈ℝ$ を係数とした $1,i$ の線形結合 $x+yi$ を**複素数**といい, 複素数の全体を $ℂ$ と書く. 複素数 $z=x+yi$ の $x =: \Re{z}$, $y = \Im{z}$ をそれぞれ $z$ の**実部** real part, **虚部** imaginary part という.

複素数 $z=x+yi$ に対して, $z^*:=x-yi$ を $z$ 複素共役といい, 複素数 $z$ の絶対値 $|z|$ を $|z|^2 := z^*z = x^2 + y^2 ≥ 0$ で定義する.

### 三角関数と指数関数

複素数 $z$ に対する三角関数 $\cos z$, $\sin z$ を以下で定義する:
$$
\begin{aligned}
  \cos z &:= ∑_{n=0}^∞ \frac{(-1)^n}{(2n)!} z^{2n} = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} +- ⋯, \\
  \sin z &:= ∑_{n=0}^∞ \frac{(-1)^n}{(2n+1)!} z^{2n+1} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} +- ⋯.
\end{aligned}
$$
また, 指数関数 $e^z$ (または $\exp z$) を以下で定義する:
$$
e^z := ∑_{n=0}^∞ \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + ⋯.
$$
これらは実数における三角関数と指数関数の自然な拡張である.

指数関数と三角関数について以下が成立する:
$$
\begin{gathered}
  e^{iz} = \cos z + i \sin z, \\
  \cos z = \frac{e^{iz} + e^{-iz}}{2}, \quad \sin z = \frac{e^{iz} - e^{-iz}}{2i}.
\end{gathered}
$$

### 複素平面と極形式

複素数 $z=x+yi∈ℂ$ に対し, $(x,y)$ を点とする $ℝ^2$ 平面を**複素平面**といい, この $ℝ^2$ と $ℂ$ を同一視する. たとえば, 原点 $O = (0,0)$ から点 $(x,y)$ までの距離は $\sqrt{x^2+y^2}$ で複素数 $z$ の絶対値 $|z|$ と同じである.

$z = |z| e^{iθ} = |z| \cos θ + i |z| \sin θ$ のような形で与えられる複素数を**極形式**といい, $θ$ を**偏角**という: 実際, 複素平面上では点 $(|z| \cos θ, |z| \sin θ)$ に対応し, 極座標では $(|z|, θ)$ である. したがって,
$$
\begin{gathered}
  x + yi = |z| e^{iθ} \\
  ⇔ |z|^2 = x^2 + y^2,\; \cos θ = \frac{x}{|z|},\; \sin θ = \frac{y}{|z|}
\end{gathered}
$$
都合の良い偏角の範囲を偏角の**主値**といい, $\arg{z}$ と書く: たとえば $0 ≤ \arg{z} < 2π$ や $-π < \arg{z} ≤ π$ など.

### 複素微分

複素関数 $f(z)$ の点 $z$ における微分は
$$
\dv{f}{z} := \lim_{Δz→0} \frac{f(z + Δz) - f(z)}{Δz}.
$$
定義式の極限値が存在するとき, $f(z)$ は $z$ で微分可能であるという.

微分の定義式において $Δz = |Δz| e^{iθ}$ とすると,
$$
\dv{f}{z} = \lim_{|Δz|→0} \frac{e^{-iθ}}{|Δz|} \Big[f(z + |Δz| e^{iθ}) - f(z)\Big].
$$
$f(z)$ が $z$ で微分可能であるための条件は, この値が $θ$ によらないことである. $f(z)=u(z)+iv(z)$ が $z=x+iy$ で微分可能であるとき, $u(x,y) := u(x+iy)$, $v(x,y) := v(x+iy)$ として,
$$
\begin{aligned}
  \dv{f}{z}
    &=  \lim_{|Δz|→0} \frac{e^{-iθ}}{|Δz|}
        \Big[
              u(x + |Δz| \cos θ, y + |Δz| \sin θ)
          + i v(x + |Δz| \cos θ, y + |Δz| \sin θ)
          -   u(x, y)
          - i v(x, y)
        \Big] \\
    &=  \lim_{|Δz|→0} \frac{e^{-iθ}}{|Δz|}
        \bqty{
              \pdv{u}{x} |Δz| \cos θ
          +   \pdv{u}{y} |Δz| \sin θ
          + i \pdv{v}{x} |Δz| \cos θ
          + i \pdv{v}{y} |Δz| \sin θ
          + O(|Δz|^2)
        } \\
    &=    \pqty{\pdv{u}{x} + i \pdv{v}{x}} e^{-iθ} \cos θ
        + \pqty{\pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{\pdv{u}{x} + i \pdv{v}{x}} e^{-iθ} (e^{iθ} - i \sin θ)
        + \pqty{\pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{\pdv{u}{x} + i \pdv{v}{x}}
        + \pqty{\pdv{v}{x} - i \pdv{u}{x}} e^{-iθ} \sin θ
        + \pqty{\pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{\pdv{u}{x} + i \pdv{v}{x}}
        + \bqty{
              \pqty{\pdv{u}{y} + \pdv{v}{x}}
            - i \pqty{\pdv{u}{x} - \pdv{v}{y}}
          }
          e^{-iθ} \sin θ
\end{aligned}
$$
したがって, $f(z)$ が $z$ で微分可能であるための条件は,
$$
\pdv{u}{x} = \pdv{v}{y}, \quad \pdv{u}{y} = - \pdv{v}{x}.
$$
これを **Cauchy-Riemann 方程式** Cauchy-Riemann equation という.

### 正則関数


