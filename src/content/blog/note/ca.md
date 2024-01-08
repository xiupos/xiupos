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
    &=    \pqty{  \pdv{u}{x} + i \pdv{v}{x}} e^{-iθ} \cos θ
        + \pqty{  \pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{  \pdv{u}{x} + i \pdv{v}{x}} e^{-iθ} (e^{iθ} - i \sin θ)
        + \pqty{  \pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{  \pdv{u}{x} + i \pdv{v}{x}}
        - \pqty{i \pdv{u}{x} -   \pdv{v}{x}} e^{-iθ} \sin θ
        + \pqty{  \pdv{u}{y} + i \pdv{v}{y}} e^{-iθ} \sin θ \\
    &=    \pqty{  \pdv{u}{x} + i \pdv{v}{x}}
        + \bqty{
              \pqty{\pdv{u}{y} + \pdv{v}{x}}
            - i \pqty{\pdv{u}{x} - \pdv{v}{y}}
          }
          e^{-iθ} \sin θ
\end{aligned}
$$
したがって, $f(z)=u(z)+iy(z)$ が $z=x+yi$ で微分可能であるための条件は,
$$
\pdv{u}{x} = \pdv{v}{y}, \quad \pdv{u}{y} = - \pdv{v}{x}.
$$
これを **Cauchy-Riemann 方程式** Cauchy-Riemann equation という.

### 正則関数と特異点

関数 $f(z)$ が $z$ とその近傍で一価関数かつ微分可能であるとき, $f(z)$ は $z$ において**正則**という. $f(z)$ が領域 $D$ 内の全ての点で正則であるとき, $f(z)$ は $D$ において正則という.

$f(z)$ が正則でない点を $f(z)$ の**特異点** singularity という. また近くに特異点が存在しない特異点を特に**孤立特異点**といい, 以下の二つに分類される:
- **$N$ 位の極**: 自然数 $N$ に対し, その点のまわりで関数 $f(z)$ が $\displaystyle \frac1{(z-a)^N}$ のように振る舞う特異点.
- **真性特異点**: 形式的には $∞$ 位の極.
- **分岐点**: その点を中心とする閉曲線に沿って一周するとき, 周回の度に値が変わるような特異点.

### 複素積分

関数 $f(z)$ の経路 $C$ に沿った積分は
$$
I = ∫_C \dd{z} f(z).
$$
または, 関数を $f(z)=u(z)+iv(z)$, 経路を $C(t)∈ℂ$ として,
$$
I = ∫ \dd{t} f(C(t)) = ∫ \dd{t} u(C(t)) + i ∫ \dd{t} v(C(t)).
$$

領域 $D$ で正則な $f(z)$ を, その境界である閉曲線 $∂D$ で積分するとその値は $0$ になる. これを **Cauchy の積分定理**という:
$$
∮_{∂D} \dd{z} f(z) = 0.
$$
実際, $z=x+iy$, $f(z)=u(x,y)+iv(x,y)$ に対し,
$$
\begin{aligned}
  ∮_{∂D} \dd{z} f(z)
    &=  ∮_{∂D} (\dd{x}+i\dd{y}) \Big[ u(x,y)+iv(x,y) \Big] \\
    &=  ∮_{∂D} \bigg\{ \dd{x} \Big[ u(x,y)+iv(x,y) \Big] + \dd{y} \Big[ i u(x,y) - v(x,y) \Big] \bigg\} \\
    &=  ∮_{∂D} \Big[ \dd{x} u(x,y) - \dd{y} v(x,y) \Big] + i ∮_{∂D} \Big[ \dd{y} u(x,y) + \dd{x} v(x,y) \Big] \\
    &=  ∬_D \dd{x} \dd{y} \bqty{- \pdv{v}{x} - \pdv{u}{y}} + i ∬_D \dd{x} \dd{y} \bqty{\pdv{u}{x} - \pdv{v}{y}} \qquad (∵\text{Green の定理}) \\
    &= 0. \qquad (∵\text{Cauchy-Riemann 方程式})
\end{aligned}
$$
Cauchy の積分定理より, 積分は経路を特異点を越えない連続的な経路の変更に対して不変である: $C↦C'$ の経路変更に対して, 内部領域 $D$ で関数 $f(z)$ 正則であるから,
$$
∫_C \dd{z} f(z) \quad ↦ \quad ∫_{C'} \dd{z} f(z) = ∫_{C' + \overline{C}} \dd{z} f(z) - ∫_{\overline{C}} \dd{z} f(z) = ∫_C \dd{z} f(z).
$$

領域 $D$ で正則な関数 $f(z)$ について, $z=a∈D$ を囲む $D$ 内の閉曲線 $C$ に対し以下が成立する. これを **Cauchy の積分公式**という:
$$
f(a) = \frac1{2πi} ∮_C \dd{z} \frac{f(z)}{z-a}.
$$
実際, $z=a$ を中心とし $D$ 内に含まれる半径 $\varepsilon$ の円 $S$ に対し, $C$ と $S$ を巡り内部が正則であるような閉曲線 $C'$ について Cauchy の積分定理より,
$$
∮_{C'} \dd{z} \frac{f(z)}{z-a} = ∮_C \dd{z} \frac{f(z)}{z-a} + ∮_{\overline{S}} \dd{z} \frac{f(z)}{z-a} = 0.
$$
$$
\begin{aligned}
  ∴ ∮_C \dd{z} \frac{f(z)}{z-a}
    &=  ∮_S \dd{z} \frac{f(z)}{z-a} \\
    &\quad (z = a + \varepsilon e^{iθ}, \; \dd{z} = i \varepsilon e^{iθ} \dd{θ}) \\
    &=  ∫_0^{2π} \dd{θ} i \varepsilon e^{iθ} \frac{f(a + \varepsilon e^{iθ})}{\varepsilon e^{iθ}} \\
    &=  i ∫_0^{2π} \dd{θ} f(a + \varepsilon e^{iθ}) \\
    &=  i ∫_0^{2π} \dd{θ} \Big[ f(a) + O(\varepsilon) \Big] \\
    &=  2πi f(a) + O(\varepsilon).
\end{aligned}
$$
ここで $\varepsilon$ は任意だから, $\varepsilon→0$ の極限で Cauchy の積分公式が得られる.

Cauchy の積分公式の条件下で, 以下が同様に成立する. これを **Goursat の定理**という.
$$
f^{(n)}(a) = \frac{n!}{2πi} ∮_C \dd{z} \frac{f(z)}{(z-a)^{n+1}}.
$$
これは Cauchy の積分公式を $a$ で $n$ 回微分することで得られる.

### 冪級数

複素数の冪級数
$$
f(z) = ∑_{n=0}^∞ c_n z^n = c_0 + c_1 z + c_2 z^2 + ⋯
$$
について, これが収束する条件は $n→∞$ の極限で $|c_nz^n|>|c_{n+1}z^{n+1}|$ であるから, **収束半径**と呼ばれる実数
$$
R = \lim_{n→∞} \frac{|c_n|}{|c_{n+1}|}
$$
に対し, $|z|<R$ で $f(z)$ は収束する: 実際,
$$
R - |z| = \lim_{n→∞} \pqty{\frac{|c_n|}{|c_{n+1}|} - \abs{\frac{z^{n+1}}{z^n}}} = \lim_{n→∞} \frac{|c_nz^n|-|c_{n+1}z^{n+1}|}{|c_{n+1}z^n|}>0.
$$

$z=a$ において正則な関数 $f(z)$ を以下の冪級数に展開することができる. これを $z=a$ まわりの **Tayler 級数展開**という:
$$
\begin{gathered}
  f(z) = ∑_{n=0}^∞ A_n (z-a)^n = A_0 + A_1 (z-a) + A_2 (z-a)^2 + ⋯ \\
  A_n = \frac1{2πi} ∮_C \dd{z} \frac{f(z)}{(z-a)^{n+1}} = \frac{f^{(n)}(a)}{n!}. \quad (∵\text{Goursat の定理})
\end{gathered}
$$
ただし $z=a$ を中心として $f(z)$ が正則である半径 $R$ の円領域 $D$ に対し, $C$ は $z=a$ を囲む $D$ 内の閉曲線. また収束半径は $R$.

$z=a$ を極あるいは真性特異点として持つ関数 $f(z)$ を以下の冪級数に展開することができる. これを $z=a$ まわりの **Laurent 級数展開**という:
$$
\begin{gathered}
  f(z) = ∑_{n=-∞}^∞ A_n (z-a)^n = ⋯ + \frac{A_{-1}}{z-a} + A_0 + A_1 (z-a) + ⋯, \\
  A_n = \frac1{2πi} ∮_C \dd{z} \frac{f(z)}{(z-a)^{n+1}}.
\end{gathered}
$$
ただし $z=a$ を中心として $f(z)$ が正則である円環領域 $D$ に対し, $C$ は $z=a$ を囲む $D$ 内の閉曲線. $n < 0$ 項を $f(z)$ **主要部**という.

### 留数定理

$z=a$ まわりの Laurent 級数展開 $f(z) = ∑_{n=-∞}^∞ A_n (z-a)^n$ において, $n=-1$ の項の係数
$$
\Res(a) := A_{-1} = \frac1{2πi} ∮_C \dd{z} f(z)
$$
を**留数** residual といい, 次の**留数定理**が成立: $f(z)$ が閉曲線 $C$ 内で有限個の特異点 $a_1,…,a_N$ を除いて正則であるとき,
$$
∮_C \dd{z} f(z) = 2πi ∑_{n=1}^N \Res(a_n).
$$
実際, 特異点を $z=a_n$ のみ含む閉曲線 $C_n$ に対し, 留数の定義から
$$
∮_{C_n} \dd{z} f(z) = 2πi \Res(a_n).
$$
$C$ および $\overline{C_1},…,\overline{C_N}$ を巡り, 内部が正則であるような閉曲線 $C'$ を考えると, Cauchy の積分定理より
$$
\begin{gathered}
  ∮_{C'} \dd{z} f(z) = ∮_C \dd{z} f(z) + ∑_{n=1}^N ∮_{\overline{C_n}} \dd{z} f(z) = 0. \\
  ∴ ∮_C \dd{z} f(z) = ∑_{n=1}^N ∮_{C_n} \dd{z} f(z) = 2πi ∑_{n=1}^N \Res(a_n).
\end{gathered}
$$

#### 留数の求め方の例

$z=a$ で正則な関数 $g(z)$ に対し, 以下の $f(z)$ は $z=a$ で特異点を持つ. このとき, $f(z)$ の留数 $\Res(a)$ の求め方は以下:

- $\displaystyle f(z) = \frac{g(z)}{(z-a)^n}$ ($n$ は自然数):
$$
\begin{aligned}
  f(z) &= \frac{1}{(z-a)^n} ∑_{m=0}^N \frac{g^{(m)}(a)}{m!} (z-a)^{m} \\
       &= \frac{1}{z-a} ∑_{m=0}^N \frac{g^{(m)}(a)}{m!} (z-a)^{m-(n-1)}
\end{aligned}
$$
より, $m = n-1$ の項は留数:
$$
\Res(a) = \frac{g^{(n-1)}(a)}{(n-1)!}.
$$
特に $n=1, 2$ のとき
$$
\begin{aligned}
  f(z) &= \frac{g(z)}{z-a} & ⇒ \quad \Res(a) &= g(a), \\
  f(z) &= \frac{g(z)}{(z-a)^2} & ⇒ \quad \Res(a) &= g'(a).
\end{aligned}
$$

- $\displaystyle f(z) = \frac{g(z)}{h(z)}$ ($h(z)=0$, $h'(z)≠0$):
$$
\begin{aligned}
  f(z) &= \frac{g(z)}{∑_{n=1}^N h^{(n)}(a) \ (z-a)^n / n!} \\
       &= \frac1{z-a} \frac{g(z)}{∑_{n=1}^N h^{(n)}(a) \ (z-a)^{n-1} / n!}.
\end{aligned}
$$
したがって分母の総和の $n=1$ 項は留数:
$$
\Res(a) = \frac{g(z)}{h'(a)}.
$$

#### 定積分への応用

### 分岐点を持つ関数
