---
title : 汎関数の計算
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
math : true
---

ここでは定義域が関数であるような関数を**汎関数** *functional* とする. 例えば, $F:(A→B)→C$ など. このとき, $φ:A→B$ を用いて $F[φ(x)]∈C$ と書く. ただし表記中 $x∈A$ は「ダミー」であって, 汎関数の定義中で用いられる文字である. 単に $F[φ]$ とも略記される. この文章中では, ダミー変数を添字にした $F_x[φ]$ も用いる[^suffix]. $F[φ(x)]$ が汎関数であるとき, 通常の関数 $g:C→D$ を用いた $g(F[φ(x)])$ もまた汎関数である.

[^suffix]: $F[φ(x)]$ という表記法は誤解を生む. たとえば, 十分に小さい $x$ の関数 $ε:A→A$ に対して $F[φ(x+ε(x))]$ を考える. このとき,
    $$
    φ(x+ε(x))=φ(x)+φ'(x)ε(x)
    $$
    であるが,
    $$
    F[φ(x+ε(x))]≠F[φ(x)+φ'(x)ε(x)]
    $$
    である. ダミー変数を添字にした $F_x[φ]$ という表記法を用いれば, 不等号の理由は明らかであろう:
    $$
    F_{x+ε(x)}[φ]≠F_x[φ+φ'ε].
    $$

以下では物理において頻出する汎関数の基本的な計算方法についてまとめる. ここでは数学的な厳密性は一切考慮しない. 高校微積分程度の理解を目指している[^iiwake].

[^iiwake]: それすら怪しいかもしれない. 気付いたことがあれば随時更新する.

### 汎関数の考え方

区間 $I∈[a,b]$ で実数に値を取る関数 $φ(x)$ に対し, 汎関数 $F[φ(x)]$ を考える. $I$ の分割 $a = x_0 < ⋯ < x_N = b$ に対し, $φ_n := φ(x_n)$ として, ある関数 $f_N(φ_0,…,φ_N)$ の分割数を極限まで増やしたものと見做すことができる. たとえば $\displaystyle F[φ(x)] = ∫_a^b \d{x} φ(x)$ では, Riemann 積分の考え方を用いて,
$$
f_N(φ_0,…,φ_N) = ∑_{n=1}^{N} φ_n (x_n - x_{n-1}) (x_n - x_{n-1}) \overset{N→∞}{⟶} ∫_a^b \d{x} φ(x) = F[φ(x)].
$$
または, 等間隔な分割 $\displaystyle x_n := a + \frac{n(b-a)}{N}$, $\displaystyle Δx := \frac{b-a}{N}$ に対し, 例えば $φ(x) := x^2$ とすると,
$$
f_N(x_1^2,…,x_N^2) = ∑_{n=1}^{N} x_n^2 \Delta{x} \overset{N→∞}{⟶} ∫_a^b \d{x} x^2 = F[x^2].
$$

#### 汎関数の例

以下は汎関数である:

1. 積分
    $$
    I[φ(x)] = ∫ \d{x} φ(x).
    $$

2. 代入
    $$
    S[φ(x)](x') = φ(x') = ∫ \d{x} φ(x) δ(x-x').
    $$

3. Fourier 変換
    $$
    \mathcal{F}[φ(x)](k) = ∫ \frac{\d{x}}{\sqrt{2πℏ}} φ(x) e^{-(i/ℏ) kx}.
    $$

4. Fourier 逆変換
    $$
    \mathcal{F}^{-1}[\~φ(k)](x) = ∫ \frac{\d{k}}{\sqrt{2πℏ}} \~φ(k) e^{(i/ℏ) kx};
    $$
    実際, $\mathcal{F}^{-1}[\mathcal{F}[φ(\~x)](k)](x) = φ(x)$.

### 汎関数微分

:::screen

汎関数 $F[φ(x)]$ の点 $y$ における**汎関数微分** *functional derivative* は, 以下で定義される:
$$
\fdv{F[φ(x)]}{φ(y)} := \lim_{h→0} \frac{F[φ(x) + hδ(x-y)] - F[φ(x)]}{h}.
$$

:::

物理では汎関数微分を変分とも呼び, 単に $\displaystyle \fdv{F[φ]}{φ}$ とも略記される.

#### 汎関数微分の計算例

以下の汎関数 $F[φ(x)]$ について汎関数微分 $\displaystyle \fdv{F[φ(x)]}{φ(y)}$ を計算する:

1. $\displaystyle F[φ(x)] = ∫ \d{x} g(x) φ(x)$:
    $$
    \begin{aligned}
      \fdv{}{φ(y)} ∫ \d{x} g(x) φ(x)
        &=  \lim_{h→0} \frac1h \bqty{∫ \d{x} g(x) (φ(x) + hδ(x-y)) - ∫ \d{x} g(x) φ(x)} \\
        &=  \lim_{h→0} \frac1h ∫ \d{x} g(x) hδ(x-y) \\
        &=  ∫ \d{x} g(x) δ(x-y) =  g(y).
    \end{aligned}
    $$

2. $F[φ(x)] = φ(x')$:
    $$
    \fdv{φ(x')}{φ(y)} = \fdv{}{φ(y)} ∫ \d{z} δ(x'-z) φ(z) = δ(x'-y).
    $$

3. $\displaystyle F[φ(x)] = ∫ \d{x} g(φ(x))$:
    $$
    \begin{aligned}
      \fdv{}{φ(y)} ∫ \d{x} g(φ(x))
        &= \lim_{h→0} \frac1h \bqty{∫ \d{x} g(φ(x) + hδ(x-y)) - ∫ \d{x} g(φ(x))} \\
        &= \lim_{h→0} \frac1h \qty{∫ \d{x} \bqty{h \dv{g(φ(x))}{φ(x)} δ(x-y) + O(h^2)}} \\
        &= \lim_{h→0} \frac1h \bqty{h \dv{g(φ(y))}{φ(y)} + O(h^2)} \\
        &= \dv{g(φ(y))}{φ(y)}.
    \end{aligned}
    $$

4. $\displaystyle F[φ(x)] = ∫ \d{x} g(φ'(x))$:
    $$
    \begin{aligned}
      \fdv{}{φ(y)} ∫ \d{x} g(φ'(x))
        &= \lim_{h→0} \frac1h \bqty{∫ \d{x} g\pqty{\dv{\qty{φ(x) + hδ(x-y)}}{x}} - ∫ \d{x} g\pqty{\dv{φ(x)}{x}}} \\
        &= \lim_{h→0} \frac1h \bqty{∫ \d{x} g\pqty{\dv{φ(x)}{x} + h\dv{δ(x-y)}{x}} - ∫ \d{x} g\pqty{\dv{φ(x)}{x}}} \\
        &= \lim_{h→0} \frac1h \qty{∫ \d{x} \bqty{h \dv{g(\d{φ(x)}/\d{x})}{(\d{φ(x)}/\d{x})} \dv{δ(x-y)}{x} + O(h^2)}} \\
        &= \lim_{h→0} \frac1h \qty{∫ \d{x} \bqty{- h \dv{}{x} \dv{g(\d{φ(x)}/\d{x})}{(\d{φ(x)}/\d{x})} δ(x-y) + O(h^2)}} \quad (∵\text{部分積分}) \\
        &= \lim_{h→0} \frac1h \bqty{- h \dv{}{y} \dv{g(\d{φ(y)}/\d{y})}{(\d{φ(y)}/\d{y})} + O(h^2)} \\
        &= - \dv{}{y} \dv{g(\d{φ(y)}/\d{y})}{(\d{φ(y)}/\d{y})} = - \dv{}{y} \dv{g(φ'(y))}{φ'(y)}.
    \end{aligned}
    $$

### 汎関数冪級数

:::screen

連続な汎関数は Tayler 級数に相当する以下の冪級数に展開することができる. これを **Volterra 級数** *Volterra series* という:
$$
\begin{aligned}
  F[φ(x)] &= F[0] + ∫ \d{y} \fdv{F[φ(x)]}{φ(y)} φ(y) + \frac12 ∫ \d{y_1} ∫ \d{y_2} \frac{δ^2F[φ(x)]}{δφ(y_1) δφ(y_2)} φ(y_1) φ(y_2) + ⋯ \\
  &= ∑_{n = 0}^∞ \frac1{n!} ∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯φ(y_n),
\end{aligned}
$$

:::

または微小な関数 $η(x)$ を用いて,
$$
\begin{aligned}
  F[φ(x) + η(x)] &= F[φ(x)] + ∫ \d{y} \fdv{F[φ(x)]}{φ(y)} η(y) + \frac12 ∫ \d{y_1} ∫ \d{y_2} \frac{δ^2F[φ(x)]}{δφ(y_1) δφ(y_2)} η(y_1) η(y_2) + ⋯ \\
  &= ∑_{n = 0}^∞ \frac1{n!} ∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} η(y_1)⋯η(y_n).
\end{aligned}
$$

$n$ 階汎関数微分 $\displaystyle \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)}$ が $y_1,…,y_n$ について対称であると仮定して, $\displaystyle \fdv{{}^n F}{φ^n}$ と略記する. また,
$$
\fdv{{}^n F}{φ^n} * φ^n := ∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯φ(y_n)
$$
とすると, Volterra 級数は以下のように書き直せる:
$$
F[φ(x)] = ∑_{n = 0}^∞ \frac1{n!} \fdv{{}^n F}{φ^n} * φ^n.
$$

#### 冪級数を用いた計算例

1. $\displaystyle \fdv{{}^n F}{φ^n} * φ^n$ の汎関数微分:
    $$
    \begin{aligned}
      &\ \fdv{}{φ(y)} \pqty{\fdv{{}^n F}{φ^n} * φ^n} \\
      =&\ \lim_{h→0} \frac1h \left[∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x) + hδ(x - y)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯φ(y_n)\right. \\
        &\qquad\qquad\quad - \left.∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯φ(y_n)\right] \\
      =&\ \lim_{h→0} \frac1h ∫ \d{z} \fdv{}{z} \pqty{∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯φ(y_n)} hδ(z - y) \\
      =&\ \lim_{h→0} \frac1h ∑_{i=0}^n ∫ \d{y_1} ⋯ ∫ \d{y_n} \frac{δ^n F[φ(x)]}{δφ(y_1)⋯δφ(y_n)} φ(y_1)⋯\widehat{φ(y_i)}⋯φ(y_n) hδ(y_i-y) \\
      =&\ n ∫ \d{y_1} ⋯ ∫ \d{y_{n-1}} \frac{δ^n F[φ(x)]}{δφ(y)δφ(y_1)⋯δφ(y_{n-1})} φ(y_1)⋯φ(y_{n-1}) \\
      =&\ n \fdv{}{φ(y)} \pqty{\fdv{{}^{n-1} F}{φ^{n-1}}} * φ^{n-1}.
    \end{aligned}
    $$

2. $g(F[φ(x)])$ の汎関数微分:
    $$
    \begin{aligned}
      \fdv{g(F[φ(x)])}{φ(y)}
        &=  \lim_{h→0} \frac1h \bqty{g(F[φ(x) + hδ(x-y)]) - g(F[φ(x)])} \\
        &=  \lim_{h→0} \frac1h \bqty{g \pqty{F[φ(x)] + ∫ \d{z} \fdv{F[φ(x)]}{φ(z)} hδ(z-y) + O(h^2)} - g(F[φ(x)])} \\
        &=  \lim_{h→0} \frac1h \bqty{g \pqty{F[φ(x)] + h \fdv{F[φ(x)]}{φ(y)} + O(h^2)} - g(F[φ(x)])} \\
        &=  \lim_{h→0} \frac1h \bqty{h \dv{g(φ(x))}{φ(x)} \fdv{F[φ(x)]}{φ(y)} + O(h^2)} \\
        &=  \dv{g(φ(x))}{φ(x)} \fdv{F[φ(x)]}{φ(y)}.
    \end{aligned}
    $$

3. $x$ の積分で定義される汎関数 $F[φ(x, t)]$ に対し, 微分 $\displaystyle \dv{}{t}F[φ(x, t)]$:
    $$
    \begin{aligned}
      \dv{}{t}F[φ(x, t)]
        &= \lim_{h→0} \frac{F[φ(x, t + h)] - F[φ(x, t)]}{h} \\
        &= \lim_{h→0} \frac1h \qty{F\bqty{φ(x, t) + h \pdv{φ(x, t)}{t} + O(h^2)} - F[φ(x, t)]} \\
        &= \lim_{h→0} \frac1h \qty{F\bqty{φ(x, t)} + h ∫ \d{y} \fdv{F[φ(x)]}{φ(y)} \pdv{φ(y, t)}{t} + O(h^2) - F[φ(x, t)]} \\
        &= ∫ \d{y} \fdv{F[φ(x, t)]}{φ(y, t)} \pdv{φ(y, t)}{t}. \\
    \end{aligned}
    $$

4. 微小変換 $x(t)↦x'(t)=x(t)+δx(t)$ に対し $φ(x(t))↦φ'(x'(t))=φ(x(t))+δφ(x(t))$ と変換されるとき, 汎関数 $F_{x'(t)}[φ']$ を 1 次まで展開することを考える. 汎関数 $F_{x(t)}[φ']$ をパラメータ $x(t)$ に関する汎関数 $G_t[x]:=F_{x(t)}[φ']$ と見れば $δx(t)$ の 1次で展開することができ,
    $$
    \begin{aligned}
      F_{x'(t)}[φ']
        &= F_{x(t)+δx(t)}[φ'] \\
        & \pqty{= G_t[x+δx] = G_t[x] + ∫\d{x_0} \fdv{G_t[x]}{x(t_0)} δx(t_0)} \\
        &= F_{x(t)}\bqty{φ'} + ∫\d{t_0} \fdv{F_{x(t)}\bqty{φ'}}{x(t_0)} δx(t_0) \\
        &= F_{x(t)}\bqty{φ+δ^Lφ} + ∫\d{t_0} \fdv{F_{x(t)}\bqty{φ+δ^Lφ}}{x(t_0)} δx(t_0) \\
        &= F_{x(t)}\bqty{φ+δ^Lφ} + ∫\d{t_0} \fdv{F_{x(t)}\bqty{φ}}{x(t_0)} δx(t_0). \\
    \end{aligned}
    $$
    ただし, $δ^Lφ(x(t))$ は Lie 微分である:
    $$
    δ^Lφ(x(t)) := φ'(x(t)) - φ(x(t)) = δφ(x(t)) - \dv{φ(x(t))}{x(t)} δx(t).
    $$
    次に $F_{x(t)}[φ']$ を 1 次で展開して,
    $$
    \begin{aligned}
      F_{x(t)}[φ+δ^Lφ]
        &= F_{x(t)}[φ] + ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δ^Lφ(x(t_0)) \\
        &= F_{x(t)}[φ] + ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) - ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{x(t_0)} δx(t_0) \\
        &= F_{x(t)}[φ] + ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) - ∫\d{t_0} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{t_0} δx(t_0). \\
    \end{aligned}
    $$
    これを前の式に代入すれば, $F_{x'(t)}[φ']$ の 1 次の展開が得られる:
    $$
    \begin{aligned}
      F_{x'(t)}[φ']
        &= F_{x(t)}[φ] + ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δ^Lφ(x(t_0)) + ∫\d{t_0} \fdv{F_{x(t)}[φ]}{x(t_0)} δx(t_0) \\
        &= F_{x(t)}[φ] + ∫\d{x(t_0)} \fdv{F_{x(t)}[φ]}{φ(x(t_0))} δφ(x(t_0)) + ∫\d{t_0} \bqty{\fdv{F_{x(t)}[φ]}{x(t_0)} - \fdv{F_{x(t)}[φ]}{φ(x(t_0))} \dv{φ(x(t_0))}{t_0}} δx(t_0). \\
    \end{aligned}
    $$

### 汎関数積分

:::screen

$I$ 上の関数 $φ(x)$ 上の汎関数 $F[φ(x)]$ の**汎関数積分** *functional integration* は, 以下で定義される:
$$
\begin{aligned}
  ∫ \mathcal{D}φ(x) F[φ(x)]
    &:= \frac1{θ} \pqty{∏_{x} ∫ \d{φ(x)}} F[φ(x)] \\
    &:= \lim_{N→∞} \frac1{θ(N)} ∫ \d{φ_0} ⋯ ∫ \d{φ_N} f_N(φ_0,…,φ_N).
\end{aligned}
$$

:::

ただし, $θ$ は有限値に収束させるための正規化因子である. また, $f_N(φ_0,…,φ_N)$ は[汎関数の考え方](#汎関数の考え方)のものと同じで, 例えば $F[φ(x)] = ∫_I\d{x}g(φ(x))$ であるとき, 積分範囲 $I = [x_0, x_N]$ の $N$ 等分割 $x_0,…,x_N$, $Δx=(x_N-x_0)/N$, $x_n=x_0+nΔx$, $φ_n:=φ(x_n)$ を用いて, $f_N(φ_0,…,φ_N) = ∑_{n=1}^{N} g(φ_m) Δx$ $\overset{N→∞}{⟶} F[φ(x)]$ である. 単に $∫ \mathcal{D} φ F[φ]$ とも略記される.

$\varphi(x)$ の端を固定した汎関数積分も重要である:
$$
\begin{aligned}
  ∫_{φ_0}^φ \mathcal{D}φ(x) F[φ(x)]
    &:= \left. \frac1{θ} \pqty{∏_{x∈I} ∫ \d{φ(x)}} F[φ(x)] \right|_{φ_0}^φ \\
    &:= \lim_{N→∞} \frac1{θ(N)} ∫ \d{φ_1} ⋯ ∫ \d{φ_{N-1}} f_N(φ_0,φ_1,…,φ_{N-1},φ).
\end{aligned}
$$
これは, 端点を固定した経路について経路上各点について積分した積になっていることから, **経路積分**とも呼ばれる.

#### 汎関数積分の計算例

以下の汎関数 $F[φ(x)]$ について汎関数積分 $\displaystyle I(φ) = ∫_{φ_0}^φ \mathcal{D}φ(x) F[φ(x)]$ を計算する. ただし, $\displaystyle ∫ \d{φ} I(φ) = 1$ として正規化する:

1. $\displaystyle F[φ(x)] = \exp \bqty{i ∫_a^b \d{x} \pqty{\dv{\varphi(x)}{x}}^2}$:
    $$
    \begin{aligned}
      I(φ) &= ∫_{φ(a)=φ_0}^{φ(b)=φ} \mathcal{D}φ(x) \exp \bqty{i ∫_a^b \d{x} \pqty{\dv{\varphi(x)}{x}}^2} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \d{φ_1} ⋯ ∫ \d{φ_{N-1}} \exp \bqty{i ∑_{n=1}^N \pqty{\frac{φ_n - φ_{n-1}}{Δx}}^2 Δx}_{φ_0=φ_0}^{φ_N=φ} \quad \pqty{Δx := \frac{b-a}{N}} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \d{φ_1} ⋯ ∫ \d{φ_{N-1}} \exp \bqty{\frac{i}{Δx} ∑_{n=1}^N (φ_n - φ_{n-1})^2}_{φ_0=φ_0}^{φ_N=φ} \\
        &=  \lim_{N→∞} \frac1{θ(N)} ∫ \d{φ_1} ⋯ ∫ \d{φ_{N-1}} \exp \qty{\frac{i}{Δx} \bqty{(φ - φ_{N-1})^2 + ∑_{k=1}^{N-1} (φ_{N-k} - φ_{N-(k+1)})^2}}_{φ_0=φ_0}.
    \end{aligned}
    $$
    ここで,
    $$
    \begin{aligned}
      & ∫ \d{φ_{N-k}} \exp \qty{\frac{i}{Δx} \bqty{\frac1k (φ - φ_{N-k})^2 + (φ_{N-k} - φ_{N-(k+1)})^2}} \\
        =&  ∫ \d{φ_{N-k}} \exp \qty{\frac{i}{Δx} \bqty{\frac{k+1}k φ_{N-k}^2 - 2 \pqty{\frac1k φ + φ_{N-(k+1)}} φ_{N-k} + \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}}}  \\
        =&  ∫ \d{φ_{N-k}} \exp \bqty{\frac{i}{Δx} \frac{k+1}k φ_{N-k}^2 - \frac{i}{Δx} 2 \pqty{\frac1k φ + φ_{N-(k+1)}} φ_{N-k} + \frac{i}{Δx} \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}}  \\
        =&  \sqrt{\frac{k}{k+1}} \sqrt{iπΔx} \exp \bqty{- \frac{i}{Δx} \frac{k}{k+1} (φ + φ_{N-(k+1)})^2 + \frac{i}{Δx} \pqty{\frac1k φ^2 + φ_{N-(k+1)}^2}} \\
        &   \quad \pqty{∵ ∫ \d{x} \exp \pqty{-iax^2+ibx} = \sqrt{\frac{π}{ia}} \exp \pqty{\frac{ib^2}{4a}} } \\
        =&  \sqrt{\frac{k}{k+1}} \sqrt{iπΔx} \exp \bqty{\frac{i}{Δx} \frac1{k+1} \pqty{φ - φ_{N-(k+1)}}^2}
    \end{aligned}
    $$
    より, $k=1,…,N-1$ で順に積分することで,
    $$
    \begin{aligned}
      I(φ) &=  \lim_{N→∞} \frac1{θ(N)} \sqrt{\frac12} \sqrt{\frac23} ⋯ \sqrt{\frac{N-1}{N}} \pqty{\sqrt{iπΔx}}^{N-1} \exp \bqty{\frac{i}{NΔx} \pqty{φ - φ_0}^2} \\
        &=  \lim_{N→∞} \frac1{θ(N)} \frac1{\sqrt{N}} \pqty{iπΔx}^{(N-1)/2} \exp \bqty{\frac{i}{NΔx} \pqty{φ - φ_0}^2}.
    \end{aligned}
    $$
    ここで, 定数 $C$ を用いて $θ(N) = \pqty{iπΔx}^{N/2}/C$ とすれば,
    $$
    \begin{aligned}
      I(φ) &=  \lim_{N→∞} \frac{C}{\pqty{iπΔx}^{N/2}} \frac1{\sqrt{N}} \pqty{iπΔx}^{(N-1)/2} \exp \bqty{\frac{i}{NΔx} \pqty{φ - φ_0}^2} \\
        &=  \lim_{N→∞} \frac{C}{\sqrt{iπNΔx}} \exp \bqty{\frac{i}{NΔx} \pqty{φ - φ_0}^2} \\
        &=  \frac{C}{\sqrt{iπ(b-a)}} \exp \bqty{i \frac{(φ - φ_0)^2}{b-a}}.
    \end{aligned}
    $$
    また, 正規化条件より定数 $C$ を決定する:
    $$
    ∫ \d{φ} I(φ) = ∫ \d{φ} \frac{C}{\sqrt{iπ(b-a)}} \exp \bqty{i \frac{(φ - φ_0)^2}{b-a}} = C = 1.
    $$
    したがって,
    $$
    I(φ) = ∫_{φ(a)=φ_0}^{φ(b)=φ} \mathcal{D}φ(x) \exp \bqty{i ∫_a^b \d{x} \pqty{\dv{\varphi(x)}{x}}^2} = \frac1{\sqrt{iπ(b-a)}} \exp \bqty{i \frac{(φ - φ_0)^2}{b-a}}.
    $$

### 参考文献

- Stevens, C. F. *The Six Core Theories of Modern Physics* (United Kingdom, MIT Press, 1995)
