---
title : 汎関数の計算
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
math : true
---

定義域が関数族であるような関数を物理では**汎関数** *functional* と呼ぶ. 例えば, $F:\{A→B\}→C$ など. このとき, $φ:A→B$ に対して $F[φ(x)]∈C$ と書くことが多い. ただし表記中 $x∈A$ は「ダミー」であって, 汎関数の定義中で用いられる変数を明示しているだけに過ぎない. 単に $F[φ]$ と書かれることもある. この文章中では, ダミー変数を添字にした $F_x[φ]$, $F_{x∈A}[φ]$ も用いる[^suffix]. $F[φ(x)]$ が汎関数であるとき, 通常の関数 $g:C→D$ を合成した $g(F[φ(x)])$ もまた汎関数である.

[^suffix]: $F[φ(x)]$ という表記法は誤解を生む. たとえば, 十分に小さい $x$ の関数 $ε:A→A$ に対して $F[φ(x+ε(x))]$ を考える. このとき,
    $$
    φ(x+ε(x)) = φ(x)+φ'(x)ε(x)
    $$
    であるが,
    $$
    F[φ(x+ε(x))] ≠ F[φ(x)+φ'(x)ε(x)]
    $$
    である. ダミー変数を添字にした $F_x[φ]$ という表記法を用いれば, 不等号の理由は明らかであろう:
    $$
    F_{x+ε(x)}[φ] ≠ F_x[φ+φ'ε].
    $$

物理では, 汎関数といえば専ら積分である. この文章では頻出する汎関数の基本的な計算方法についてまとめる. 数学的な厳密性は一切考慮していない. 高校微積分程度の習得を目指している[^iiwake]. また, 勝手な解釈も多く含んでいるので, 気持ち程度に読んでほしい.

[^iiwake]: それすら怪しいかもしれない. 気付いたことがあれば随時更新する.

### 汎関数の考え方

例として関数 $φ:[a,b]→ℝ$ の汎関数 $F[φ(x)]$ を考える. $I$ の分割 $a = x_0 < ⋯ < x_N = b$ に対し, 関数値を $φ_n := φ(x_n)$ として, 汎関数 $F[φ(x)]$ はある関数 $f_N(φ_0,…,φ_N)$ の分割数 $N$ を極限まで増やしたものと見做すことができる. たとえば積分 $\displaystyle F[φ(x)] = ∫_a^b \dd{x} φ(x)$ では, 分割幅を $Δx_n := x_n - x_{n-1}$ として, Riemann 積分の考え方を用いれば[^riemann],
$$
\begin{gathered}
  f_N(φ_0,…,φ_N) = ∑_{n=1}^{N} Δx_n × φ(x_n) \\
  \xrightarrow{N→∞} \quad F[φ(x)] =  ∫_a^b \dd{x} φ(x).
\end{gathered}
$$
または, 等間隔な分割 $\displaystyle x_n := a + \frac{n(b-a)}{N}$, 分割幅 $\displaystyle Δx := \frac{b-a}{N}$ に対し, 例えば $φ(x) := x^2$ とすると,
$$
\begin{gathered}
  f_N(x_0^2,…,x_N^2) = ∑_{n=1}^{N} \Delta{x} × x_n^2 \\
  \xrightarrow{N→∞} \quad F[x^2] = ∫_a^b \dd{x} x^2.
\end{gathered}
$$
このような汎関数の離散的な表現を考えることも重要である. 特に, 汎関数積分の計算においては離散表現が必須である.

[^riemann]: これは Riemann 積分ではなく「区分求積法」である. Riemann 和を用いるならば $φ_n = φ(x_n)$ ではなく, 代表点 $x_{n-1}≤ξ_n≤x_n$ を用いて $φ_n := φ(ξ_n)$ とするべき. しかし, ここでは計算を主目的としているので, 細かいことは気にしない.

#### 汎関数の例

以下は汎関数である:

1. 積分
    $$
    \begin{gathered}
      i_N(φ_0,…,φ_N) = ∑_{n=1}^N Δx × g(φ_n) \\
      \xrightarrow{N→∞} \quad I[φ(x)] = ∫ \dd{x} g(φ(x)).
    \end{gathered}
    $$

2. 代入
    $$
    \begin{gathered}
      s(φ_0,…,φ_N;x_m=x') = ∑_{n=1}^N Δx × φ_n \frac{δ_{nm}}{Δx} = φ_m \\
      \xrightarrow{N→∞} \quad S[φ(x)](x') = ∫ \dd{x} φ(x) δ(x-x') = φ(x').
    \end{gathered}
    $$
    汎関数中のデルタ関数 $δ(x-x')$ は, 離散表現の $\displaystyle \frac{δ_{nm}}{Δx}$ に対応している.

3. Fourier 変換
    $$
    \begin{gathered}
      f_N(φ_0,…,φ_N;k_m) = ∑_{n=1}^N \frac{Δx}{\sqrt{2π}} × φ_n e^{-ik_mx_n} \\
      \xrightarrow{N→∞} \quad \mathcal{F}[φ(x)](k) = ∫ \frac{\dd{x}}{\sqrt{2π}} φ(x) e^{-ikx}.
    \end{gathered}
    $$

4. Fourier 逆変換
    $$
    \begin{gathered}
      f^{\text{``$\scriptstyle-1$''}}_N(\~φ_0,…,\~φ_N;x_n) = ∑_{m=1}^N \frac{Δk}{\sqrt{2π}} × \~φ_m e^{ik_mx_n} \\
      \xrightarrow{N→∞} \quad \mathcal{F}^{-1}[\~φ(k)](x) = ∫ \frac{\dd{k}}{\sqrt{2π}} \~φ(k) e^{ikx};
    \end{gathered}
    $$
    実際, $\mathcal{F}^{-1}[\mathcal{F}[φ(\~x)](k)](x) = φ(x)$.

5. 汎関数のダミー変数を関数にしたもの
    $$
    \begin{gathered}
      g_N(x_0,…,x_N) = f_N(φ_0,…,φ_N) \\
      \xrightarrow{N→∞} \quad G_t[x] := F_{x(t)}[φ].
    \end{gathered}
    $$
    ただし, $x_n = x(t_n)$. 例えば $\displaystyle F_x[φ] := ∫\dd{x} φ(x)$ に対して,
    $$
    \begin{gathered}
    g_N(x_0,…,x_N) = f_N(φ_0,…,φ_N) = ∑_{n=1}^N Δx × φ_n = ∑_{n=1}^N Δt × \frac{Δx}{Δt} φ(x_n) \\
    \xrightarrow{N→∞} \quad G_t[x] = F_{x(t)}[φ] = ∫\dd{x(t)} φ(x(t)) = ∫\dd{t} \dv{x}{t} φ(x(t)).
    \end{gathered}
    $$

### 汎関数微分

:::screen

汎関数 $F[φ(x)]$ の点 $y$ における**汎関数微分** *functional derivative* は, 以下で定義される:
$$
\fdv{F[φ(x)]}{φ(y)} := \lim_{h→0} \frac{F[φ(x) + hδ(x-y)] - F[φ(x)]}{h}.
$$

:::

物理では汎関数微分を変分とも呼び, 単に $\displaystyle \fdv{F[φ]}{φ}$ とも略記される.

汎関数微分の離散的な表現は, $y=x_m$ として, 定義から
$$
\begin{aligned}
  \quad&\ \lim_{h→0} \frac{\displaystyle f_N\pqty{φ_1+h\frac{δ_{1m}}{Δx},…,φ_N+h\frac{δ_{Nm}}{Δx}} - f_N(φ_1,…,φ_N)}{h} \\
  =&\ \frac1{Δx} \lim_{h→0} \frac{f_N(φ_1,…,φ_m+h/Δx,…,φ_N) - f_N(φ_1,…,φ_N)}{h/Δx} \\
  =&\ \frac1{Δx} \pdv{f_N}{φ_m}.
\end{aligned}
$$
したがって, 汎関数微分演算子 $\displaystyle \fdv{}{φ(y)}$ に対応する離散表現は $\displaystyle \frac1{Δx} \pdv{}{φ_m}$ である.

汎関数微分は線形性
$$
\fdv{}{φ(y)} \Big\{ aF[φ(x)] + bG[φ(x)] \Big\} = a \fdv{F[φ(x)]}{φ(y)} + b \fdv{G[φ(x)]}{φ(y)}
$$
や Leibniz 則
$$
\fdv{}{φ(y)} \Big\{ F[φ(x)] G[φ(x)] \Big\} = \fdv{F[φ(x)]}{φ(y)} G[φ(x)] + F[φ(x)] \fdv{G[φ(x)]}{φ(y)}
$$
を満たす.

#### 汎関数微分の計算例

以下の汎関数 $F[φ(x)]$ について汎関数微分 $\displaystyle \fdv{F[φ(x)]}{φ(y)}$ を計算する:

1. $\displaystyle F[φ(x)] = ∫ \dd{x} g(x) φ(x)$:
    $$
    \begin{aligned}
       &\ \fdv{}{φ(y)} ∫ \dd{x} g(x) φ(x) \\
      =&\ \lim_{h→0} \frac1h \bqty{∫ \dd{x} g(x) (φ(x) + hδ(x-y)) - ∫ \dd{x} g(x) φ(x)} \\
      =&\ \lim_{h→0} \frac1h ∫ \dd{x} g(x) hδ(x-y) \\
      =&\ ∫ \dd{x} g(x) δ(x-y) = g(y).
    \end{aligned}
    $$
    離散表現では, $y=x_m$ として,
    $$
    \frac1{Δx} \pdv{}{φ_m} ∑_{n=1}^N Δx × g(x_n) φ_n = g(x_m).
    $$

2. $F[φ(x)] = φ(x')$:
    $$
    \fdv{φ(x')}{φ(y)} = \fdv{}{φ(y)} ∫ \dd{z} φ(z) δ(x'-z) = δ(x'-y).
    $$
    離散表現では, $y=x_m$, $x'=x_k$ として,
    $$
    \frac1{Δx} \pdv{}{φ_m} ∑_{n=1}^N Δx × φ_n \frac{δ_{nk}}{Δx} = \frac{δ_{mk}}{Δx}.
    $$

3. $\displaystyle F[φ(x)] = ∫ \dd{x} g(φ(x))$:
    $$
    \begin{aligned}
       &\ \fdv{}{φ(y)} ∫ \dd{x} g(φ(x)) \\
      =&\ \lim_{h→0} \frac1h \bqty{∫ \dd{x} g(φ(x) + hδ(x-y)) - ∫ \dd{x} g(φ(x))} \\
      =&\ \lim_{h→0} \frac1h \qty{∫ \dd{x} \bqty{h \dv{g(φ(x))}{φ(x)} δ(x-y) + O(h^2)}} \\
      =&\ \lim_{h→0} \frac1h \bqty{h \dv{g(φ(y))}{φ(y)} + O(h^2)} \\
      =&\ \dv{g(φ(y))}{φ(y)}.
    \end{aligned}
    $$
    離散表現では, $y=x_m$ として,
    $$
    \frac1{Δx} \pdv{}{φ_m} ∑_{n=1}^N Δx × g(φ_n) = \dv{g(φ_m)}{φ_m}.
    $$

4. $\displaystyle F[φ(x)] = ∫ \dd{x} g\pqty{φ'(x)}$:
    $$
    \begin{aligned}
       &\ \fdv{}{φ(y)} ∫ \dd{x} g\pqty{φ'(x)} \\
      =&\ \lim_{h→0} \frac1h \bqty{∫ \dd{x} g\pqty{\dv{\qty{φ(x) + hδ(x-y)}}{x}} - ∫ \dd{x} g\pqty{\dv{φ(x)}{x}}} \\
      =&\ \lim_{h→0} \frac1h \bqty{∫ \dd{x} g\pqty{\dv{φ(x)}{x} + h\dv{δ(x-y)}{x}} - ∫ \dd{x} g\pqty{\dv{φ(x)}{x}}} \\
      =&\ \lim_{h→0} \frac1h \qty{∫ \dd{x} \bqty{h \dv{g(\dd{φ(x)}/\dd{x})}{(\dd{φ(x)}/\dd{x})} \dv{δ(x-y)}{x} + O(h^2)}} \\
      =&\ \lim_{h→0} \frac1h \qty{∫ \dd{x} \bqty{- h \dv{}{x} \dv{g(\dd{φ(x)}/\dd{x})}{(\dd{φ(x)}/\dd{x})} δ(x-y) + h \dv{}{t} \pqty{\dv{g(\dd{φ(x)}/\dd{x})}{(\dd{φ(x)}/\dd{x})} δ(x-y)} + O(h^2)}} \\
       &\ (∵\text{部分積分}) \\
      =&\ \lim_{h→0} \frac1h \bqty{- h \dv{}{y} \dv{g(\dd{φ(y)}/\dd{y})}{(\dd{φ(y)}/\dd{y})} + h ∫ \dd{\pqty{\dv{g(\dd{φ(x)}/\dd{x})}{(\dd{φ(x)}/\dd{x})} δ(x-y)}} + O(h^2)} \\
      =&\ - \dv{}{y} \dv{g(\dd{φ(y)}/\dd{y})}{(\dd{φ(y)}/\dd{y})} + ∫ \dd{\pqty{\dv{g(\dd{φ(x)}/\dd{x})}{(\dd{φ(x)}/\dd{x})} δ(x-y)}} \\
      =&\ - \dv{}{y} \dv{g(φ'(y))}{φ'(y)} + ∫ \dd{\pqty{\dv{g(φ'(x))}{φ'(x)} δ(x-y)}}.
    \end{aligned}
    $$
    特に $y$ が積分範囲の内部にあるとき, 発散項を消すことができて,
    $$
    \fdv{}{φ(y)} ∫ \dd{x} g\pqty{φ'(x)} = - \dv{}{y} \dv{g(φ'(y))}{φ'(y)}.
    $$
    離散表現では, $y=x_m$ として,
    $$
    \begin{aligned}
      \frac1{Δx} \pdv{}{φ_m} ∑_{n=1}^N Δx × g\pqty{\frac{φ_n-φ_{n-1}}{Δx}}
        &= - \frac{\displaystyle g'\pqty{\frac{φ_{m+1}-φ_{m}}{Δx}} - g'\pqty{\frac{φ_m-φ_{m-1}}{Δx}}}{Δx}.
    \end{aligned}
    $$

5. $\displaystyle F[φ(x)] = ∫ \dd{x} g\pqty{φ(x),φ'(x)}$:  
    上の例を繰り返し使うことで,
    $$
    \fdv{}{φ(y)} ∫ \dd{x} g\pqty{φ(x),φ'(x)} = \pdv{g}{φ(y)} - \dv{}{y} \pdv{g}{φ'(y)} + ∫ \dd{\pqty{\pdv{g}{φ'(x)} δ(x-y)}},
    $$
    あるいは, $y$ が積分範囲の内部にあるとき,
    $$
    \fdv{}{φ(y)} ∫ \dd{x} g\pqty{φ(x),φ'(x)} = \pdv{g}{φ(y)} - \dv{}{y} \pdv{g}{φ'(y)}.
    $$

### 汎関数冪級数

:::screen

連続な汎関数は Tayler 級数に相当する以下の冪級数に展開することができる. これを **Volterra 級数** *Volterra series* という: 微小な関数 $η(x)$ を用いて,
$$
\begin{aligned}
  F[φ(x) + η(x)]
    &= F[φ(x)] + ∫ \dd{y} \fdv{F[φ(x)]}{φ(y)} η(y) \\
    &  \qquad\qquad\quad + \frac12 ∫ \dd{y_1} ∫ \dd{y_2} \frac{δ^2F[φ(x)]}{δφ(y_1) δφ(y_2)} η(y_1) η(y_2) + ⋯ \\
    &= ∑_{n = 0}^∞ \frac1{n!} ∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯η(y_n).
\end{aligned}
$$

:::

特に, $φ=0$ まわりの冪展開は,
$$
\begin{aligned}
  F[φ(x)]
    &= F[0] + ∫ \dd{y} \left. \fdv{F[φ(x)]}{φ(y)} \right|_{φ=0} φ(y) + \frac12 ∫ \dd{y_1} ∫ \dd{y_2} \left. \frac{δ^2F[φ(x)]}{δφ(y_1) δφ(y_2)} \right|_{φ=0} φ(y_1) φ(y_2) + ⋯ \\
    &= ∑_{n = 0}^∞ \frac1{n!} ∫ \dd{y_1} ⋯ ∫ \dd{y_n} \left. \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} \right|_{φ=0} φ(y_1)⋯φ(y_n).
\end{aligned}
$$

汎関数冪級数の離散表現は,
$$
\begin{aligned}
   &\ f_N(φ_0+η_0,…,φ_N+η_N) \\
  =&\ f_N(φ_0,…,φ_N) + ∑_{m=0}^N Δx \frac1{Δx}\pdv{f_N}{φ_m} η_m + \frac12 ∑_{{m_1}=0}^N Δx ∑_{{m_2}=0}^N Δx \frac1{(Δx)^2} \frac{∂^2f_N}{∂φ_{m_1}∂φ_{m_2}} η_{m_1} η_{m_2} + ⋯ \\
  =&\ ∑_{n=0}^∞ \frac1{n!} ∑_{{m_1}=0}^N Δx ⋯ ∑_{{m_n}=0}^N Δx \frac1{(Δx)^n} \frac{∂^nf_N(φ_0,…,φ_N)}{∂φ_{m_1}⋯∂φ_{m_n}} η_{m_1} ⋯ η_{m_n}.
\end{aligned}
$$
この表現は関数 $f_N(φ_0+η_0,…,φ_N+η_N)$ の $(φ_0,…,φ_N)$ まわりでの Taylor 展開になっている.

$n$ 階汎関数微分 $\displaystyle \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)}$ が $y_1,…,y_n$ について対称であると仮定して, $\displaystyle \fdv{{}^n F}{φ^n}$ と略記する. また,
$$
\fdv{{}^n F}{φ^n} * η^n := ∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯η(y_n)
$$
とすると, Volterra 級数は以下のように書き直せる:
$$
F[φ(x) + η(x)] = ∑_{n = 0}^∞ \frac1{n!} \fdv{{}^n F}{φ^n} * η^n.
$$

#### 冪級数を用いた計算例

1. $\displaystyle \fdv{{}^n F}{φ^n} * η^n$ の $η(y)$ による汎関数微分:
    $$
    \begin{aligned}
      &\ \fdv{}{η(y)} \pqty{\fdv{{}^n F}{φ^n} * η^n} \\
      =&\ \lim_{h→0} \frac1h \left[∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} [η(y_1)+hδ(y_1-y)]⋯[η(y_n)+hδ(y_n-y)]\right. \\
        &\qquad\qquad\quad - \left.∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯η(y_n)\right] \\
      =&\ \lim_{h→0} \frac1h \bqty{∑_{i=0}^n ∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯\widehat{η(y_i)}⋯η(y_n) hδ(y_i-y) + O(h^2)} \\
      =&\ ∑_{i=0}^n ∫ \dd{y_1} ⋯ ∫ \dd{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯\widehat{η(y_i)}⋯η(y_n) δ(y_i-y) \\
      =&\ n ∫ \dd{y_1} ⋯ ∫ \dd{y_{n-1}} \frac{δ^n F[φ(x)]}{δφ(y)δφ(y_1)⋯δφ(y_{n-1})} η(y_1)⋯η(y_{n-1}) \\
      =&\ n \fdv{}{φ(y)} \pqty{\fdv{{}^{n-1} F}{φ^{n-1}}} * η^{n-1} \quad \pqty{\text{$\displaystyle =: n \fdv{{}^{n} F}{φ^{n}} * η^{n-1}$ とも書く}}.
    \end{aligned}
    $$

2. $g(F[φ(x)])$ の汎関数微分:
    $$
    \begin{aligned}
       &\ \fdv{g(F[φ(x)])}{φ(y)} \\
      =&\ \lim_{h→0} \frac1h \bqty{g(F[φ(x) + hδ(x-y)]) - g(F[φ(x)])} \\
      =&\ \lim_{h→0} \frac1h \bqty{g \pqty{F[φ(x)] + ∫ \dd{z} \fdv{F[φ(x)]}{φ(z)} hδ(z-y) + O(h^2)} - g(F[φ(x)])} \\
      =&\ \lim_{h→0} \frac1h \bqty{g \pqty{F[φ(x)] + h \fdv{F[φ(x)]}{φ(y)} + O(h^2)} - g(F[φ(x)])} \\
      =&\ \lim_{h→0} \frac1h \bqty{h \dv{g(F[φ(x)])}{F[φ(x)]} \fdv{F[φ(x)]}{φ(y)} + O(h^2)} \\
      =&\ \dv{g(F[φ(x)])}{F[φ(x)]} \fdv{F[φ(x)]}{φ(y)}.
    \end{aligned}
    $$

3. $x$ の積分で定義される汎関数 $F[φ(x, t)]$ に対し, 微分 $\displaystyle \dv{}{t}F[φ(x, t)]$:
    $$
    \begin{aligned}
       &\ \dv{}{t}F[φ(x, t)] \\
      =&\ \lim_{h→0} \frac{F[φ(x, t + h)] - F[φ(x, t)]}{h} \\
      =&\ \lim_{h→0} \frac1h \qty{F\bqty{φ(x, t) + h \pdv{φ(x, t)}{t} + O(h^2)} - F[φ(x, t)]} \\
      =&\ \lim_{h→0} \frac1h \qty{F\bqty{φ(x, t)} + h ∫ \dd{y} \fdv{F[φ(x)]}{φ(y)} \pdv{φ(y, t)}{t} + O(h^2) - F[φ(x, t)]} \\
      =&\ ∫ \dd{y} \fdv{F[φ(x, t)]}{φ(y, t)} \pdv{φ(y, t)}{t}. \\
    \end{aligned}
    $$

4. 微小変換 $x(t)↦x'(t)=x(t)+δx(t)$ に対し $φ(x(t))↦φ'(x'(t))=φ(x(t))+δφ(x(t))$ と変換されるとき, 汎関数 $F_{x'(t)}[φ']$ を 1 次まで展開することを考える. 汎関数 $F_{x(t)}[φ']$ をパラメータ $x(t)$ に関する汎関数 $G_t[x]:=F_{x(t)}[φ']$ と見れば $δx(t)$ の 1次で展開することができ,
    $$
    \begin{aligned}
       &\ F_{x'(t)}[φ'] \\
      =&\ F_{x(t)+δx(t)}[φ'] \\
       &\ \pqty{= G_t[x+δx] = G_t[x] + ∫\dd{x_0} \fdv{G_t[x]}{x(t_0)} δx(t_0)} \\
      =&\ F_{x(t)}\bqty{φ'} + ∫\dd{t_0} \fdv{F_{x(t)}\bqty{φ'}}{x(t_0)} δx(t_0) \\
      =&\ F_{x(t)}\bqty{φ+δ^Lφ} + ∫\dd{t_0} \fdv{F_{x(t)}\bqty{φ+δ^Lφ}}{x(t_0)} δx(t_0) \\
      =&\ F_{x(t)}\bqty{φ+δ^Lφ} + ∫\dd{t_0} \fdv{F_{x(t)}\bqty{φ}}{x(t_0)} δx(t_0). \\
    \end{aligned}
    $$
    ただし, $δ^Lφ(x(t))$ は Lie 微分である:
    $$
    δ^Lφ(x(t)) := φ'(x(t)) - φ(x(t)) = δφ(x(t)) - \dv{φ(x(t))}{x(t)} δx(t).
    $$
    次に $F_{x(t)}[φ']$ を 1 次で展開して,
    $$
    \begin{aligned}
       &\ F_{x(t)}[φ+δ^Lφ] \\
      =&\ F_{x(t)}[φ] + ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δ^Lφ(x(t_0)) \\
      =&\ F_{x(t)}[φ] + ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) - ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{x(t_0)} δx(t_0) \\
      =&\ F_{x(t)}[φ] + ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) - ∫\dd{t_0} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{t_0} δx(t_0). \\
    \end{aligned}
    $$
    これを前の式に代入すれば, $F_{x'(t)}[φ']$ の 1 次の展開が得られる:
    $$
    \begin{aligned}
      F_{x'(t)}[φ']
        &= F_{x(t)}[φ] + ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δ^Lφ(x(t_0)) + ∫\dd{t_0} \fdv{F_{x(t)}[φ]}{x(t_0)} δx(t_0) \\
        &= F_{x(t)}[φ] + ∫\dd{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) \\
        &  \qquad\qquad + ∫\dd{t_0} \bqty{\fdv{F_{x(t)}[φ]}{x(t_0)} - \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{t_0}} δx(t_0). \\
    \end{aligned}
    $$

5. 一般の汎関数微分:  
    $$
    \begin{aligned}
      (DF)[φ(x)][η(x)]
        &:= \left. \dv{F[φ(x)+λη(x)]}{λ} \right|_{λ=0} \\
        &= \lim_{h→0} \frac{F[φ(x)+hη(x)]-F[φ(x)]}{h}. \\
    \end{aligned}
    $$
    先に定義した汎関数微分は
    $$
    \fdv{F[φ(x)]}{φ(y)} = (DF)[φ(x)][δ(x-y)]
    $$
    と書ける. また, $F[φ(x)+hη(x)]$ を冪展開すると
    $$
    F[φ(x)+hη(x)] = F[φ(x)] + h ∫ \dd{y} \fdv{F[φ(x)]}{φ(y)} η(y) + O(h^2)
    $$
    だから, 定義式に代入すれば, 一般の汎関数微分の表示が得られる[^direct]:
    $$
    (DF)[φ(x)][η(x)] = ∫ \dd{x} \fdv{F[φ(x)]}{φ(x)} η(x) = \fdv{{} F}{φ} * η.
    $$
    また, この表示を汎関数冪級数に代入すれば, 一般の汎関数微分に関する冪級数展開が得られる:
    $$
    F[φ(x) + η(x)]
    = ∑_{n = 0}^∞ \frac1{n!} (D^nF)[φ(x)]\underbrace{[η(x)] \cdots [η(x)]}_n.
    $$

[^direct]: $δF[φ(x)]/δφ(y)$ が $y$ の寄与に対してだけデルタ関数を足した微分であったことを思い出せば, $(DF)[φ(x)][η(x)]$ は $η(x)$ で特徴付けられる方向に沿った微分と考えることができる. これはちょうど偏微分 $∂f(\bm{x})/∂x_i$ と方向微分 $\bm{v} \cdot ∇f(\bm{x})$ の関係に対応している.

### 汎関数積分

:::screen

$x∈[a,b]$ の関数上で定義される $F[φ(x)]$ の**汎関数積分** *functional integration* は, 以下で定義される:
$$
\begin{aligned}
  ∫ \mathcal{D}φ(x) F[φ(x)]
    &:= \frac1{θ} \pqty{∏_{x∈[a,b]} ∫ \dd{φ(x)}} F[φ(x)] \\
    &:= \lim_{N→∞} \frac1{θ(N)} ∫ \dd{φ_0} ⋯ ∫ \dd{φ_N} f_N(φ_0,…,φ_N).
\end{aligned}
$$
ただし, $θ$ は有限値に収束させるための正規化因子[^fuctor], $f_N(φ_0,…,φ_N)$ は $F[φ(x)]$ の離散表現である. 単に $∫ \mathcal{D} φ F[φ]$ とも略記される.

:::

[^fuctor]: 正規化因子 $θ$ は積分が収束すればいいので, 決定には任意性が残る. そのため実用上は, 物理的な要請などによる適当な正規化によって決定するか, 汎関数積分どうしの比を取ることでこの任意性はクリアされる. 後者はちょうど, 不定積分 $∫\dd{x} f(x) = F(x) + C$ が定数 $C$ の任意性を持ち, 実用上は差を取ること(=定積分) $∫_a^b \dd{x} f(x) = F(b) - F(a)$ によってこの任意性が解消されるのと似ているように思う.

$\varphi(x)$ の端を固定した汎関数積分も重要である:
$$
\begin{aligned}
  ∫_{φ_0}^{φ} \mathcal{D}φ(x) F[φ(x)]
    &:= \left. \frac1{θ} \pqty{∏_{x∈(a,b)} ∫ \dd{φ(x)}} F[φ(x)] \right|_{φ(a)=φ_0}^{φ(b)=φ} \\
    &:= \lim_{N→∞} \frac1{θ(N)} ∫ \dd{φ_1} ⋯ ∫ \dd{φ_{N-1}} f_N(φ_0,φ_1,…,φ_{N-1},φ).
\end{aligned}
$$
これは, 端点を固定した経路の経路上各点について積分した積になっていることから, **経路積分**とも呼ばれる(汎関数積分全体を経路積分と呼ぶことも多い). 経路積分の表記法については[別記事](./path-integral-notation)を参照.

#### 汎関数積分の計算例

1. 自由粒子型:
    $$
    I(φ) = ∫_{φ(a)=φ_0}^{φ(b)=φ} \mathcal{D}φ(x) \exp \bqty{i ∫_a^b \dd{x} \frac{A}2 \qty{φ'(x)}^2},
    $$
    ただし $\displaystyle ∫ \dd{φ} I(φ) = 1$ として正規化する. $\displaystyle F[φ(x)] = \exp \bqty{i ∫_a^b \dd{x} \frac{A}2 \qty{φ'(x)}^2}$ の離散表現は,
    $$
    f_N(φ_0,φ_1,…,φ_{N-1},φ) = \exp \bqty{i ∑_{n=1}^N Δx × \frac{A}2 \pqty{\frac{φ_n - φ_{n-1}}{Δx}}^2}_{φ_0=φ_0}^{φ_N=φ}.
    $$
    ただし, 分割幅を $Δx := (b-a)/N$ とした. したがって $F[φ(x)]$ の汎関数積分は,
    $$
    \begin{aligned}
      I(φ) &= ∫_{φ(a)=φ_0}^{φ(b)=φ} \mathcal{D}φ(x) \exp \bqty{i ∫_a^b \dd{x} \frac{A}2 \qty{φ'(x)}^2} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \dd{φ_1} ⋯ ∫ \dd{φ_{N-1}} \exp \bqty{i ∑_{n=1}^N Δx × \frac{A}2 \pqty{\frac{φ_n - φ_{n-1}}{Δx}}^2}_{φ_0=φ_0}^{φ_N=φ} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \dd{φ_1} ⋯ ∫ \dd{φ_{N-1}} \exp \bqty{\frac{iA}{2Δx} ∑_{n=1}^N (φ_n - φ_{n-1})^2}_{φ_0=φ_0}^{φ_N=φ} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \dd{φ_1} ⋯ ∫ \dd{φ_{N-1}} \exp \qty{\frac{iA}{2Δx} \bqty{(φ - φ_{N-1})^2 + ∑_{k=1}^{N-1} (φ_{N-k} - φ_{N-(k+1)})^2}}_{φ_0=φ_0}.
    \end{aligned}
    $$
    ここで $φ_{N-k}$ の積分について考えると,
    $$
    \begin{aligned}
      & ∫ \dd{φ_{N-k}} \exp \qty{\frac{iA}{2Δx} \bqty{\frac1k (φ - φ_{N-k})^2 + (φ_{N-k} - φ_{N-(k+1)})^2}} \\
        =&  ∫ \dd{φ_{N-k}} \exp \qty{\frac{iA}{2Δx} \bqty{\frac{k+1}k φ_{N-k}^2 - 2 \pqty{\frac1k φ + φ_{N-(k+1)}} φ_{N-k} + \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}}}  \\
        =&  ∫ \dd{φ_{N-k}} \exp \bqty{\frac{iA}{2Δx} \frac{k+1}k φ_{N-k}^2 - \frac{iA}{2Δx} 2 \pqty{\frac1k φ + φ_{N-(k+1)}} φ_{N-k} + \frac{iA}{2Δx} \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}}  \\
        &   \quad \pqty{∫ \dd{x} \exp \pqty{-iax^2+ibx} = \sqrt{\frac{π}{ia}} \exp \pqty{\frac{ib^2}{4a}} } \\
        =&  \sqrt{\frac{k}{k+1}} \sqrt{\frac{2πiΔx}{A}} \exp \bqty{- \frac{iA}{2Δx} \frac{k}{k+1} (φ + φ_{N-(k+1)})^2 + \frac{iA}{2Δx} \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}} \\
        =&  \sqrt{\frac{k}{k+1}} \sqrt{\frac{2πiΔx}{A}} \exp \bqty{\frac{iA}{2Δx} \frac1{k+1} \pqty{φ - φ_{N-(k+1)}}^2}
    \end{aligned}
    $$
    より, $k=1,…,N-1$ で順に積分することで,
    $$
    \begin{aligned}
      I(φ) &=  \lim_{N→∞} \frac1{θ(N)} \sqrt{\frac12} \sqrt{\frac23} ⋯ \sqrt{\frac{N-1}{N}} \pqty{\sqrt{\frac{2πiΔx}{A}}}^{N-1} \exp \bqty{\frac{iA}{2NΔx} \pqty{φ - φ_0}^2} \\
        &=  \lim_{N→∞} \frac1{θ(N)} \frac1{\sqrt{N}} \pqty{\frac{2πiΔx}{A}}^{(N-1)/2} \exp \bqty{\frac{iA}{2NΔx} \pqty{φ - φ_0}^2}.
    \end{aligned}
    $$
    ここで, 定数 $C$ を用いて $\displaystyle θ(N) = \frac1C\pqty{\frac{2πiΔx}{A}}^{N/2}$ とすれば,
    $$
    \begin{aligned}
      I(φ) &=  \lim_{N→∞} C \pqty{\frac{A}{2πiΔx}}^{N/2} \frac1{\sqrt{N}} \pqty{\frac{2πiΔx}{A}}^{(N-1)/2} \exp \bqty{\frac{iA}{2NΔx} \pqty{φ - φ_0}^2} \\
        &=  \lim_{N→∞} C \sqrt{\frac{a}{2πiNΔx}} \exp \bqty{\frac{iA}{2NΔx} \pqty{φ - φ_0}^2} \\
        &=  C \sqrt{\frac{A}{2πi(b-a)}} \exp \bqty{i \frac{A}2 \frac{(φ - φ_0)^2}{b-a}}.
    \end{aligned}
    $$
    正規化条件より定数 $C$ を決定すると,
    $$
    1 = ∫ \dd{φ} I(φ) = C ∫ \dd{φ} \sqrt{\frac{A}{2πi(b-a)}} \exp \bqty{i \frac{A}2 \frac{(φ - φ_0)^2}{b-a}} = C.
    $$
    したがって,
    $$
    I(φ) = ∫_{φ(a)=φ_0}^{φ(b)=φ} \mathcal{D}φ(x) \exp \bqty{i ∫_a^b \dd{x} \frac{A}2 \qty{φ'(x)}^2} = \sqrt{\frac{A}{2πi(b-a)}} \exp \bqty{i \frac{A}2 \frac{(φ - φ_0)^2}{b-a}}.
    $$

2. 汎関数積分の連結:  
    $x_3>x_2>x_1$ に対し, $x∈[x_3,x_1]$ の関数上で定義される汎関数 $F[φ(x)]$ について,
    $$
    ∫_{φ_1}^{φ_2} \mathcal{D}φ(x) ∫\dd{φ_2} ∫_{φ_2}^{φ_3} \mathcal{D}φ(x) F[φ(x)] = ∫_{φ_1}^{φ_3} \mathcal{D}φ(x) F[φ(x)].
    $$
    実際,
    $$
    \begin{aligned}
       &\ ∫_{φ_1}^{φ_2} \mathcal{D}φ(x) ∫\dd{φ_2} ∫_{φ_2}^{φ_3} \mathcal{D}φ(x) g(φ_2) F[φ(x)] \\
      =&\ \frac1θ \pqty{∏_{x∈(t_1,t_2)} ∫\dd{φ(x)}} ∫\dd{φ(x_2)} \pqty{∏_{x∈(t_2,t_3)} ∫\dd{φ(x)}} F[φ(x)] \\
      =&\ \frac1θ \pqty{∏_{x∈(t_1,t_3)} ∫\dd{φ(x)}} F[φ(x)] \quad \pqty{∵(t_1,t_2)∪\{t_2\}∪(t_2,t_3) = (t_1,t_3)} \\
      =&\ ∫_{φ_1}^{φ_3} \mathcal{D}φ(x) F[φ(x)]. \\
    \end{aligned}
    $$

    特に, 指数法則 $F_{x∈A}[φ]F_{x∈B}[φ]=F_{x∈A∪B}[φ]$ を満たす汎関数 (例えば $F_{x∈[a,b]}[φ] = \exp \bqty{∫_a^b \dd{x} φ(x)}$) に対しては,
    $$
    \begin{aligned}
       &\ ∫\dd{φ_2} g(φ_2) \pqty{∫_{φ_1}^{φ_2} \mathcal{D}φ(x) F_{x∈[x_1,x_2]}[φ]} \pqty{∫_{φ_2}^{φ_3} \mathcal{D}φ(x) F_{x∈[x_2,x_3]}[φ]} \\
      =&\ ∫_{φ_1}^{φ_3} \mathcal{D}φ(x) F_{x∈[x_1,x_3]}[φ] g(φ(x_2)).
    \end{aligned}
    $$
    実際,
    $$
    \begin{aligned}
       &\ ∫\dd{φ_2} g(φ_2) \pqty{∫_{φ_1}^{φ_2} \mathcal{D}φ(x) F_{x∈[x_1,x_2]}[φ]} \pqty{∫_{φ_2}^{φ_3} \mathcal{D}φ(x) F_{x∈[x_2,x_3]}[φ]} \\
      =&\ ∫_{φ_1}^{φ_2} \mathcal{D}φ(x) ∫\dd{φ_2} ∫_{φ_2}^{φ_3} \mathcal{D}φ'(x) g(φ_2) F_{x∈[x_1,x_2]}[φ] F_{x∈[x_2,x_3]}[φ'] \\
      =&\ ∫_{φ_1}^{φ_3} \mathcal{D}φ(x) g(φ(x_2)) F_{x∈[x_1,x_3]}[φ]. \\
    \end{aligned}
    $$

3. デルタ汎関数 $δ[φ(x)]$:  
    汎関数積分で
    $$
    δ[φ(x)] := ∫\mathcal{D}ξ(x) \exp\bqty{i∫\dd{x} φ(x) ξ(x)}
    $$
    と定義される. 離散表現は
    $$
    \begin{aligned}
    δ_N(\{φ_n\})
      &≡ \frac1{θ(N)} \pqty{∏_n ∫\dd{ξ_n}} \exp\bqty{i ∑_n Δx × φ_n ξ_n} \\
      &= \frac1{θ(N)} ∏_n ∫\dd{ξ_n} \exp \Big( i Δx × φ_n ξ_n \Big) \\
      &= \frac1{θ(N)} ∏_n 2π δ(φ_n Δx) \\
      &= \frac1{θ(N)} \pqty{\frac{2π}{Δx}}^N ∏_n δ(φ_n) \\
    \end{aligned}
    $$
    となって, 正規化因子を $θ(N) = \pqty{2π/Δx}^{N}$ と置けば
    $$
    δ_N(\{φ_n\}) = ∏_n δ(φ_n)
    $$
    であるから, $N→∞$ の極限で, デルタ汎関数は
    $$
    δ[φ(x)] = ∏_x δ(φ(x))
    $$
    と書ける. さて, 汎関数デルタ関数は,
    $$
    \begin{gathered}
      ∫\mathcal{D}φ(x) F[φ(x)] δ[φ(x) - \~φ(x)] = F[\~φ(x)], \\
      ∫\mathcal{D}φ(x) δ[φ(x)] = 1 \\
    \end{gathered}
    $$
    の性質を満たす. 実際,
    $$
    \begin{aligned}
       &\ ∫\mathcal{D}φ(x) F[φ(x)] δ[φ(x) - \~φ(x)] \\
      =&\ \frac1{θ} \pqty{∏_{x} ∫ \dd{φ(x)}} F[φ(x)] \pqty{∏_x δ(φ(x) - \~φ(x))} \\
      =&\ \frac1{θ} \pqty{∏_{x} ∫ \dd{φ(x)} δ(φ(x) - \~φ(x))} F[φ(x)] \\
      =&\ F[\~φ(x)] \\
    \end{aligned}
    $$
    であって, 恒等的に $F[φ(x)]=1$, $\~φ(x)=1$ とすれば第二式が得られる.

### 汎関数 Fourier 変換

:::screen

汎関数 $F[φ(x)]$ に対する汎関数 Fourier 変換 $\mathscr{F}$ は
$$
\mathscr{F}\{F[φ(x)]\}[ξ(x)] := ∫\mathcal{D}φ(x) F[φ(x)] \exp\bqty{-i∫\dd{x} φ(x) ξ(x)},
$$
また, $\~F[ξ(x)]$ に対する逆変換 $\mathscr{F}^{-1}$ は
$$
\mathscr{F}^{-1}\{\~F[ξ(x)]\}[φ(x)] := ∫\mathcal{D}ξ(x) \~F[ξ(x)] \exp\bqty{i∫\dd{x} φ(x) ξ(x)}
$$
で定義され,
$$
\mathscr{F}^{-1}\{\mathscr{F}\{F[\~φ(x)]\}[ξ(x)]\}[φ(x)] = F[φ(x)]
$$
を満たす.

:::

離散表現で汎関数 Fourier 変換の表式を導出する. 汎関数の離散表現 $f_N(\{φ_n\})$ と $\~f_N(\{ξ_n\})$ に対し, $g_N(\{\sqrt{Δx}φ_n\}) ≡ f_N(\{φ_n\})$ と $\~g_N(\{\sqrt{Δx}ξ_n\}) ≡ \~f_N(\{ξ_n\})$ を定義して, $g_N$ と $\~g_N$ の間の多変数 Fourier 変換を考えると,
$$
\begin{aligned}
  \~g_N(\{\sqrt{Δx}ξ_n\})
    &= \pqty{∏_n ∫\frac{\sqrt{Δx}\dd{φ_n}}{\sqrt{2π}}} g_N(\{\sqrt{Δx}φ_n\}) \exp\bqty{-i∑_n\sqrt{Δx}φ_n × \sqrt{Δx}ξ_n} \\
    &= \pqty{\frac{Δx}{2π}}^{N/2} \pqty{∏_n ∫\dd{φ_n}} g_N(\{\sqrt{Δx}φ_n\}) \exp\bqty{-i∑_n Δx × φ_nξ_n} \\
\end{aligned}
$$
となるから, 結局 $f_N$ と $\~f_N$ の関係は
$$
\~f_N(\{ξ_n\}) = \pqty{\frac{Δx}{2π}}^{N/2} \pqty{∏_n ∫\dd{φ_n}} f_N(\{φ_n\}) \exp\bqty{-i∑_n Δx × φ_nξ_n}
$$
となって, $N→∞$ の極限で汎関数 Fourier 変換が得られる. 逆変換も同様.

汎関数デルタ関数 $δ[φ(x)]$ を用いれば, 容易に逆変換であることがわかる:
$$
\begin{aligned}
  &\quad \mathscr{F}^{-1}\{\mathscr{F}\{F[\~φ(x)]\}[ξ(x)]\}[φ(x)] \\
  &= ∫\mathcal{D}ξ(x) \mathcal{F}\{F[\~φ(x)]\}[ξ(x)] \exp\bqty{i∫\dd{x} φ(x) ξ(x)} \\
  &= ∫\mathcal{D}\~φ(x) F[\~φ(x)] ∫\mathcal{D}ξ(x) \exp\qty{i∫\dd{x} \Big[φ(x) - \~φ(x)\Big] ξ(x)} \\
  &= ∫\mathcal{D}\~φ(x) F[\~φ(x)] δ[φ(x) - \~φ(x)] \\
  &= F[φ(x)].
\end{aligned}
$$

#### 汎関数 Fourier 変換の計算例

規格化定数は都合の良いように取る.

1. $1$ (恒等的に1である汎関数) の汎関数 Fourier 変換:  
    $$
    \mathscr{F}\{1\}[ξ(x)] = ∫\mathcal{D}φ(x) \exp\bqty{-i∫\dd{x} φ(x) ξ(x)} = δ[ξ(x)].
    $$

2. デルタ汎関数 $δ[φ(x)]$ の汎関数 Fourier 変換:  
    $$
    \begin{aligned}
      \mathscr{F}\{δ[φ(x)]\}[ξ(x)]
        &= ∫\mathcal{D}φ(x) δ[φ(x)] \exp\bqty{-i∫\dd{x} φ(x) ξ(x)} \\
        &= \exp\bqty{-i∫\dd{x} 0 × ξ(x)} \\
        &= 1 \\
    \end{aligned}
    $$

### 参考文献

- Stevens, C. F. *The Six Core Theories of Modern Physics* (United Kingdom, MIT Press, 1995)
