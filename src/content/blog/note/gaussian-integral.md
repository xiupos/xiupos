---
title: 色々な Gauss 積分
author: xiupos
date: \today
pubDate: 2024-07-22T09:00:00+09:00
lang: ja
math: true
draft: true
preamble: _preamble
---

## 1変数 Gauss 積分

最も簡単な形の Gauss 積分は
$$
∫ \d{x}\ e^{- \frac12 x^2} = \sqrt{2π}.
$$
である[^interval]. 実際, $I = ∫ \d{x}\ e^{-x^2}$ とすれば,
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
    ∵ $e^{-\frac12a(x-β)^2}$ に対する Gauss 積分を $a → \operatorname{Re} α > 0$ に解析接続.

- $\displaystyle ∫\d{x}\ e^{-\frac12αx^2 + βx + γ} = \sqrt{\frac{2π}{α}} e^{\frac{β^2}{2α} + γ}. \quad (α,β,γ∈\mathbb{C},\ \operatorname{Re} α > 0)$  
    ∵ 平方完成 $-\frac12αx^2 + βx + γ = -\frac12 α\pqty{x - \frac{β}{α}}^2 + \frac{β^2}{2α} + γ$ して積分.

- $\displaystyle ∫\d{x}\ e^{-\frac12ax^2+ikx} = \sqrt{\frac{2π}{a}} e^{-\frac12 \frac{k^2}{a}}. \quad (a>0)$  
    ∵ 平方完成 $-\frac12ax^2 + ikx = -\frac12 a\pqty{x - \frac{ik}{a}}^2 - \frac12 \frac{k^2}{a}$ して積分.

- $\displaystyle ∫\d{x}\ e^{\frac{i}2 a(x-x_0)^2} = \sqrt{\frac{2πi}{a}}. \quad (a≠0)$[^fresnel]  
    ∵ 変数変換 $y=x-x_0$ をした後, $\mathbb{C}$ 平面上 $-R→R→Re^{iπ/4}→-Re^{iπ/4}→-R$ なる扇形を2つ貼り合わせたような経路で $e^{\frac{i}2 az^2}$ を複素積分し, 極限 $R→0$.

[^fresnel]: 「Fresnel 積分」と呼ばれ, Gauss 積分と区別されることがあるが, ここでは Gauss 積分に含めることにする.

公式がたくさんあるように思えるが, 実際の計算ではとにかく平方完成して
$$
∫\d{x}\ e^{-\frac12α(x-χ_0)^2} = \sqrt{\frac{2π}{α}}
$$
の形に持っていくだけでよい. 成立しないのは
1. $\operatorname{Re} α <0$,
2. $\operatorname{Re} α = 0$ かつ $\operatorname{Im}χ≠0$
のときであるから, そのときだけ注意すればよい. たぶん.

#### 応用

1. 平均 $x_0$, 分散 $σ^2$ の正規分布 $\mathcal{N}(x_0,σ^2)$ の実軸上での積分:  
    確率密度関数 $\displaystyle ρ(x) = \frac1{\sqrt{2πσ^2}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2}}$ を実軸上で積分して,
    $$
    ∫\d{x}\ ρ(x) = \frac1{\sqrt{2πσ^2}} ∫\d{x}\ e^{-\frac12\frac{(x-x_0)^2}{σ^2}} = \frac1{\sqrt{2πσ^2}} × \sqrt{2πσ^2} = 1.
    $$
    したがって正規分布が確率の公理を満たしていることが確認された.

2. 正規分布 $\mathcal{N}(x_0,σ^2)$ の Fourier 変換:  
    確率密度関数 $\displaystyle ρ(x) = \frac1{\sqrt{2πσ^2}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2}}$ を Fourier 変換して,
    $$
    \mathcal{F}[ρ(x)](k) ≡ ∫ \frac{\d{x}}{\sqrt{2π}} ρ(x) e^{-ikx} = \frac1{\sqrt{2πσ^2}} ∫ \frac{\d{x}}{\sqrt{2π}} e^{-\frac12 \frac{(x-x_0)^2}{σ^2} -ikx}.
    $$
    ここで, 指数関数の肩を平方完成すると,
    $$
    \begin{aligned}
    -\frac12 \frac{(x-x_0)^2}{σ^2} -ikx
        &= -\frac12 \frac1{σ^2} (x - 2x_0x + x_0^2 + i2σ^2kx) \\
        &= -\frac12 \frac1{σ^2} [x + i2(σ^2k + ix_0)x + x_0^2] \\
        &= -\frac12 \frac1{σ^2} [x + i(σ^2k + ix_0)] - \frac1{2} \frac1{σ^2} (σ^2k + ix_0)^2 - \frac1{2} \frac1{σ^2} x_0^2 \\
        &= -\frac12 \frac1{σ^2} [x + i(σ^2k + ix_0)] - \frac1{2} \frac{k^2}{1/σ^2} - ikx_0
    \end{aligned}
    $$
    となるから, Gauss 積分を実行して
    $$
    \mathcal{F}[ρ(x)](k) = \frac1{\sqrt{2πσ^2}} × \sqrt{2πσ^2} × \frac1{\sqrt{2π}} e^{- \frac1{2} \frac{k^2}{1/σ^2} - ikx_0} = \frac1{\sqrt{2π}} e^{- \frac1{2} \frac{k^2}{1/σ^2}} e^{- ikx_0}
    $$
    となる. 正規分布の Fourier 変換も Gauss 型の関数になっている.

 3. ガンマ関数の $1/2$ での値:  
    ガンマ関数の定義式 $\displaystyle Γ(z) = ∫_0^∞ \d{t}\ t^{z-1} e^{-t}$ に $z=1/2$ を代入して,
    $$
    Γ\pqty{\frac12} = ∫_0^∞ \d{t}\ t^{-\frac12} e^{-t} = \sqrt{2} ∫_0^∞ \d{s}\ e^{-\frac12s^2} = \frac1{\sqrt{2}} ∫ \d{s}\ e^{-s^2} = \sqrt{π}.
    $$
    ただし, 2つ目のイコールで $s = \sqrt{2} t^{\frac12}$, $\d{s} = \frac1{\sqrt{2}} t^{-\frac12} \d{t}$ と変数変換した. 反対に $Γ(1/2) = \sqrt{π}$ を既知として Gauss 積分を証明することもできる.

## 多変数 Gauss 積分

