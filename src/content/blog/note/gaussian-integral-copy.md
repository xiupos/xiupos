---
title: 色々な Gauss 積分
author: xiupos
date: \today
pubDate: 2025-04-27T09:00:00+09:00
lang: ja
math: true
draft: true
preamble: _preamble
---

## 1変数 Gauss 積分

最も簡単な形の Gauss 積分は
$$
∫ \d{x}\ e^{- \frac12 x^2} = \sqrt{2π}
$$
である[^interval]. 実際, $I = ∫ \d{x}\ e^{-\frac12x^2}$ とすれば,
$$
I^2 = ∫ \d{x} ∫ \d{y}\ e^{- \frac12 (x^2 + y^2)} = ∫_0^{2π} \d{θ} ∫_0^∞\d{r}\ re^{- \frac12 r^2} = 2π \bqty{-e^{- \frac12 r^2}}_0^∞ = 2π
$$
となって, $I = \sqrt{2π}$ がわかる.

[^interval]: 積分範囲の指定のない積分は実軸上での積分
    $$
    ∫_{-∞}^∞ \d{x}\ e^{- \frac12 x^2}
    $$
    とする. また, おそらく通常は
    $$
    ∫ \d{x}\ e^{-x^2} = \sqrt{π}
    $$
    が Gauss 積分の公式とされるが, 物理においては $1/2$ の係数がある Gauss 積分が殆どであるから, この記事ではこちらを採用する.

以下のように, 実数の係数が付く場合の Gauss 積分も, 簡単な変数変換をすることで順に確かめることができる:

- $\displaystyle ∫ \d{x}\ e^{-\frac12ax^2} = \sqrt{\frac{2π}{a}}. \quad (a>0)$  
    ∵ 変数変換 $y = \sqrt{a}x$, $\d{y} = \sqrt{a} \d{x}$ して $y$ で積分.

- $\displaystyle ∫ \d{x}\ e^{-\frac12a(x-x_0)^2} = \sqrt{\frac{2π}{a}}. \quad (a>0)$  
    ∵ 変数変換 $y=x-x_0$, $\d{y} = \d{x}$ して $y$ で積分.

- $\displaystyle ∫ \d{x}\ e^{-\frac12ax^2 + bx + c} = \sqrt{\frac{2π}{a}} e^{\frac{b^2}{2a} + c}. \quad (a>0)$  
    ∵ 平方完成 $-\frac12ax^2 + bx + c = -\frac12 a\pqty{x - \frac{b}{a}}^2 + \frac{b^2}{2a} + c$ して積分.

また, 係数が複素数であるときにも, いくつかの場合で同様の公式が成立する:

- $\displaystyle ∫\d{x}\ e^{-\frac12a(x-χ_0)^2} = \sqrt{\frac{2π}{a}}. \quad$ $(a>0,\ χ_0∈\mathbb{C})$  
    ∵ $\mathbb{C}$ 平面上 $-R→R→R-β→-R-β→-R$ なる平行四辺形の経路で $e^{-\frac12 az^2}$ を複素積分し, 極限 $R→0$.

- $\displaystyle ∫\d{x}\ e^{-\frac12α(x-χ_0)^2} = \sqrt{\frac{2π}{α}}. \quad (α,χ_0∈\mathbb{C},\ \operatorname{Re} α > 0)$  
    ∵ $e^{-\frac12a(x-β)^2}$ に対する Gauss 積分で $a$ を $\operatorname{Re} α > 0$ に解析接続.

- $\displaystyle ∫\d{x}\ e^{-\frac12αx^2 + βx + γ} = \sqrt{\frac{2π}{α}} e^{\frac{β^2}{2α} + γ}. \quad (α,β,γ∈\mathbb{C},\ \operatorname{Re} α > 0)$  
    ∵ 平方完成 $-\frac12αx^2 + βx + γ = -\frac12 α\pqty{x - \frac{β}{α}}^2 + \frac{β^2}{2α} + γ$ して積分.

- $\displaystyle ∫\d{x}\ e^{-\frac12ax^2+ikx} = \sqrt{\frac{2π}{a}} e^{-\frac12 \frac{k^2}{a}}. \quad (a>0)$  
    ∵ 平方完成 $-\frac12ax^2 + ikx = -\frac12 a\pqty{x - \frac{ik}{a}}^2 - \frac12 \frac{k^2}{a}$ して積分.

- $\displaystyle ∫\d{x}\ e^{\frac{i}2 a(x-x_0)^2} = \sqrt{\frac{2πi}{a}}. \quad (a≠0)$[^fresnel]  
    ∵ 変数変換 $y=x-x_0$ をした後, $\mathbb{C}$ 平面上 $-R→R→Re^{iπ/4}→-Re^{iπ/4}→-R$ なる扇形を2つ貼り合わせたような経路で $e^{\frac{i}2 az^2}$ を複素積分し, 極限 $R→0$.

[^fresnel]: この積分は「Fresnel 積分」と呼ばれ, Gauss 積分と区別されることがあるが, ここでは Gauss 積分に含めることにする.

公式がたくさんあるように思えるが, 実際の計算ではとにかく平方完成して次の形に持っていくだけでよい:

:::screen

1変数の Gauss 積分は

$$
∫\d{x}\ e^{-\frac12α(x-χ_0)^2} = \sqrt{\frac{2π}{α}}, \quad (α≠0)
$$
である.

:::

ただし, 以下の場合には左辺の積分が収束しないことに注意:

1. $\operatorname{Re} α < 0$,
2. $α$ が純虚数かつ $\operatorname{Im} χ_0 ≠ 0$.

しかし, 右辺の平方根に注目することで $α≠0$ の複素数全体に解析接続することができるから, 物理での実用上はそこまで神経質にならなくてよい, かもしれない.

#### 応用

1. 平均 $x_0$, 分散 $σ^2$ の正規分布 $\mathcal{N}(x_0,σ^2)$ の実軸上での積分:  
    確率密度関数 $\displaystyle ρ(x) = \frac1{\sqrt{2πσ^2}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2}}$ を実軸上で積分すると
    $$
    ∫\d{x}\ ρ(x) = \frac1{\sqrt{2πσ^2}} ∫\d{x}\ e^{-\frac12\frac{(x-x_0)^2}{σ^2}} = \frac1{\sqrt{2πσ^2}} × \sqrt{2πσ^2} = 1
    $$
    となって, 確率密度として当然の結果が得られる.

2. 正規分布 $\mathcal{N}(x_0,σ^2)$ の Fourier 変換:  
    確率密度関数 $\displaystyle ρ(x) = \frac1{\sqrt{2πσ^2}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2}}$ を Fourier 変換して,
    $$
    \mathcal{F}[ρ(x)](k) ≡ ∫ \frac{\d{x}}{\sqrt{2π}} ρ(x) e^{-ikx} = \frac1{\sqrt{2πσ^2}} ∫ \frac{\d{x}}{\sqrt{2π}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2} -ikx}.
    $$
    ここで, 指数の肩を平方完成すると,
    $$
    -\frac12 \frac{(x-x_0)^2}{σ^2} -ikx = -\frac12 \frac1{σ^2} [x + i(σ^2k + ix_0)] - \frac1{2} \frac{k^2}{1/σ^2} - ikx_0
    $$
    となるから, Gauss 積分を実行して
    $$
    \mathcal{F}[ρ(x)](k) = \frac1{\sqrt{2πσ^2}} × \sqrt{2πσ^2} × \frac1{\sqrt{2π}} e^{- \frac1{2} \frac{k^2}{1/σ^2} - ikx_0} = \frac{e^{- ikx_0}}{\sqrt{2π}} e^{- \frac1{2} \frac{k^2}{1/σ^2}}
    $$
    となる. 正規分布の Fourier 変換も Gauss 型の関数になっている.

 3. ガンマ関数の $1/2$ での値:  
    ガンマ関数の定義式 $\displaystyle Γ(z) = ∫_0^∞ \d{t}\ t^{z-1} e^{-t}$ に $z=1/2$ を代入して,
    $$
    Γ\pqty{\frac12} = ∫_0^∞ \d{t}\ t^{-\frac12} e^{-t} = \sqrt{2} ∫_0^∞ \d{s}\ e^{-\frac12s^2} = \frac1{\sqrt{2}} ∫ \d{s}\ e^{-\frac12s^2} = \sqrt{π}.
    $$
    ただし, 2つ目のイコールで $s = \sqrt{2} t^{\frac12}$, $\d{s} = \frac1{\sqrt{2}} t^{-\frac12} \d{t}$ と変数変換した. 反対に $Γ(1/2) = \sqrt{π}$ を既知として Gauss 積分を証明することもできる.

## 多変数 Gauss 積分

最も簡単な多変数への拡張は, $N$ 変数 $\bm{x}=(x_1,\ldots,x_N)^⊤$ に対して
$$
∫\d{^N x}\ e^{-\frac12 |\bm{x}|^2} = \sqrt{(2π)^N}
$$
である. ただし $|\bm{x}|^2 = x_1^2 + \cdots + x_N^2$ である. 実際, $e^{-\frac12 |\bm{x}|^2} = e^{-\frac12 \sum_{j=1}^N x_j^2} = \prod_{j=1}^N e^{-\frac12 x_j^2}$ であるから, 各 $x_j$ の1変数 Gauss 積分に帰着して,
$$
∫\d{^N x}\ e^{-\frac12 |\bm{x}|^2} = \prod_{j=1}^N ∫\d{x_j}\ e^{-\frac12 x_j^2} = \prod_{j=1}^N \sqrt{2π} = \sqrt{(2π)^N}
$$
となる. 

1変数の場合と同様に, より一般の場合での公式を求めてみよう.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12  \sum_{j=1}^N α_j (x_j-χ_{0j})^2} = \sqrt{\frac{(2π)^N}{\prod_{j=1}^N α_j}}. \quad$ ($α≠0$)  
  ∵ 各 $x_j$ について1変数 Gauss 積分. 積分の収束性について気にする場合は, 指数の肩の $α_j$, $χ_{0j}$ についてそれぞれ1変数 Gauss 積分と同様の条件を課せば良い.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2π)^N}{\det A}}. \quad$ ($A$ : $N×N$ 行列で対角化可能 ⇔ 正規行列)  
  ∵ 行列式が正のユニタリ行列 $U$ で $A$ を対角化 $U^{-1}AU = \operatorname{diag}(λ_1,\cdots,λ_N)$ して変数変換 $\bm{y}=U^† \bm{x}$, $\d{{}^N y}=\d{{}^N x}$ すると, 指数の肩が $(\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0) = (\bm{y}-\bm{y}_0)^⊤ U^†AU (\bm{y}—\bm{y}_0) = \sum_{j=1}^N λ_j (y_j-y_{0j})^2$ と簡単になるから, $\prod_{j=1}^N λ_j = \det A$ に注意して積分.

## 汎関数 Gauss 積分

$Δt≡1/N$ として,
$$
∫\d{^N x}\ e^{-\frac12 Δt |\bm{x}|^2} = \pqty{\frac{2π}{Δt}}^{N/2},
$$
または書き直して
$$
\frac1{(2π/Δt)^{N/2}} ∫\d{x_1} \cdots ∫\d{x_N} e^{-\frac12 Δt |\bm{x}|^2} = 1
$$
である. 
$$
∫ \mathcal{D}x(t)\ e^{-∫ \d{t} \frac12 [x(t)]^2} = 1
$$
