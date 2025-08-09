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

1変数の場合と同様に, より一般の場合での公式を求めてみよう[^conv].

[^conv]: 解析接続することを前提とし, 積分の収束条件にはそこまで神経質にならないことにする.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12  \sum_{j=1}^N α_j (x_j-χ_{0j})^2} = \sqrt{\frac{(2π)^N}{\prod_{j=1}^N α_j}}. \quad$ ($α_j≠0$)  
  ∵ 各 $x_j$ について1変数 Gauss 積分. 積分の収束性について気にする場合は, 指数の肩の $α_j$, $χ_{0j}$ についてそれぞれ1変数 Gauss 積分と同様の条件を課せば良い.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2π)^N}{\det A}}. \quad$ ($A$ : $N×N$ 実対称行列)  
  ∵ 行列式が正の直交行列 $O$ で $A$ を対角化 $O^{-1}AO = \operatorname{diag}(λ_1,\cdots,λ_N)$ して変数変換 $(\bm{y}-\bm{y}_0)=O^⊤ (\bm{x}-\bm{x}_0)$, $\d{{}^N y}=\d{{}^N x}$ すると, 指数の肩が $(\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0) = (\bm{y}-\bm{y}_0)^⊤ O^⊤AO (\bm{y}—\bm{y}_0) = \sum_{j=1}^N λ_j (y_j-y_{0j})^2$ と簡単になるから, $\prod_{j=1}^N λ_j = \det A$ に注意して積分. 積分が収束するのは $A$ が正定値であるとき.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2π)^N}{\det A}}. \quad$ ($A$ : $N×N$ 実正則行列で対角化可能)  
  ∵ $A$ を対称行列 $A_{\mathrm{sym}} ≡ (A+A^⊤)/2$ と反対称行列 $A_{\mathrm{anti}} ≡ (A-A^⊤)/2$ に分解 $A = A_{\mathrm{sym}} + A_{\mathrm{anti}}$  すると, 指数の肩の $A_{\mathrm{anti}}$ に関する項は $∑_{i,j} (A_{\mathrm{anti}})_{ij} (x_i-x_{0i}) (x_j-x_{0j}) = - ∑_{i,j} (A_{\mathrm{anti}})_{ij} (x_j-x_{0j}) (x_i-x_{0i})$ となって消える. また $\dim A_{\mathrm{anti}} = 0$ より $\dim A = \dim A_{\mathrm{sym}}$ となるから, $A_{\mathrm{anti}}$ を無視して積分. 積分が収束するのは $A$ が正定値であるとき.

- $\displaystyle ∫\d{^N x}\ e^{\frac{i}2 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2πi)^N}{\det A}}. \quad$ ($A$ : $N×N$ 実正則行列で対角化可能)  
  ∵ 上と同様に $A$ を対角化して積分.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2π)^N}{\det A}}. \quad$ ($A$ : $N×N$ 複素正則行列で対角化可能)  
  ∵ 同様に $A$ を対称行列と思ってよい. 行列を実部と虚部に分解 $A = A_{\mathrm{R}} + iA_{\mathrm{I}}$ し, $A_{\mathrm{R}}$ を実下三角行列 $C$ で Cholesky 分解 $A_{\mathrm{R}} = CC^⊤$ して変数変換 $(\bm{y}-\bm{y}_0) = C^⊤ (\bm{x}-\bm{x}_0)$, $\d{{}^N y} = \d{{}^N x}\sqrt{\det{A_{\mathrm{R}}}}$ すれば $(\bm{x}-\bm{x}_0)^⊤A(\bm{x}-\bm{x}_0) = (\bm{y}-\bm{y}_0)^⊤(\bm{y}-\bm{y}_0) + i(\bm{y}-\bm{y}_0)^⊤\~A_{\mathrm{I}}(\bm{y}-\bm{y}_0)$. ここで $\~A_{\mathrm{I}}≡CA_{\mathrm{I}}C^⊤$ は実対称行列であるから, 対角化 $O^{-1}\~A_{\mathrm{I}}O = \operatorname{diag}(λ_1,\cdots,λ_N)$ して変数変換 $(\bm{u}-\bm{u}_0) = O^⊤(\bm{y}-\bm{y}_0)$, $\d{{}^N u}=\d{{}^N y}$ して結局 $(\bm{x}-\bm{x}_0)^⊤A(\bm{x}-\bm{x}_0) = ∑_j (1+iλ_j)(u_j-u_{0j})^2$. 最後に $\det{A} = \det{A_{\mathrm{R}}} ∑_j (1+iλ_j)$ に注意[^cholesky]して積分. Cholesky 分解できるのは $A$ が正定値であるとき.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 \bm{x}^⊤ A \bm{x} + \bm{J}^⊤ \bm{x}} = \sqrt{\frac{(2π)^N}{\det A}} e^{\frac12 \bm{J}^⊤ A^{-1} \bm{J}}. \quad$ ($A$ : $N×N$ 正則行列で対角化可能)  
  ∵ 平方完成 $-\frac12 \bm{x}^⊤ A \bm{x} + \bm{J}^⊤ \bm{x} = -\frac12 (\bm{x}-A^{-1}\bm{J})^⊤ A (\bm{x}-A^{-1}\bm{J}) + \frac12 \bm{J}^⊤ A^{-1} \bm{J}$ して積分.

- $\displaystyle ∫\d{^N x}\ e^{-\frac12 \bm{x}^⊤ A \bm{x} + i\bm{J}^⊤ \bm{x}} = \sqrt{\frac{(2π)^N}{\det A}} e^{- \frac12 \bm{J}^⊤ A^{-1} \bm{J}}. \quad$ ($A$ : $N×N$ 正則行列で対角化可能)

[^cholesky]: $Λ=\operatorname{diag}(λ_1,\cdots,λ_N)$ とすれば, $A = (CO)(1+iΛ)(CO)^⊤$ となるから, $\det{A} = (\det{C})^2 \det(1+iΛ) = \det{A_{\mathrm{R}}} ∑_j (1+iλ_j)$.

また沢山の公式を並べたが, 1変数の場合と同様に, 実際の計算では次の公式を使えばよい:

:::screen

多変数の Gauss 積分は
$$
∫\d{^N x}\ e^{-\frac12 (\bm{x}-\bm{x}_0)^⊤ A (\bm{x}-\bm{x}_0)} = \sqrt{\frac{(2π)^N}{\det A}}, \quad (\det{A}≠0)
$$
である.

:::

$A$ が正定値であったり, 全ての成分が純虚数であるときには左辺の積分は収束するが, そうでない時は解析接続されていると考えることにする. また $A$ が対角化できなくとも, 対角化可能な行列は稠密であって, 任意の行列は対角化可能な行列によって任意の精度で近似できる[^diag]から, この公式はかなり一般的に成り立つと信じることができる.

[^diag]: 中原 第2巻 p.89 の論法.

## 汎関数 Gauss 積分

最も簡単な形の汎関数 Gauss 積分は
$$
∫ \mathcal{D}x(t)\ e^{-\frac12 ∫ \d{t} \{x(t)\}^2} = 1
$$
である. 実際, 多変数 Gauss 積分で
$$
∫\d{^N x}\ e^{-\frac12 Δt |\bm{x}|^2} = \pqty{\frac{2π}{Δt}}^{N/2}
$$
が成立するが, あるいは書き直して
$$
\frac1{(2π/Δt)^{N/2}} ∫\d{x_1} \cdots ∫\d{x_N} e^{-\frac12 Δt (x_1^2 + \cdots + x_N^2)} = 1
$$
が成立するから, [汎関数積分の計算法](./functional#%E6%B1%8E%E9%96%A2%E6%95%B0%E7%A9%8D%E5%88%86)を思い出せば $N→∞$ の極限で汎関数積分になる.

より一般の場合も離散表現を考えることで構成できる:

- $\displaystyle ∫ \mathcal{D}x(t)\ e^{-\frac12 ∫ \d{t} ∫ \d{t'} \{x(t)-x_0(t)\}A(t,t')\{x(t')-x_0(t')\}} = \sqrt{\frac1{\det{A}}}$.  
    ∵ 離散表現は多変数 Gauss 積分
    $$
    \frac1{(2π/Δt)^{N/2}} ∫\d{x_1} \cdots ∫\d{x_N} e^{-\frac12 ∑_i Δt ∑_j Δt (x_i-x_{0i}) \frac{A_{ij}}{Δt} (x_j-x_{0j})} = \sqrt{\frac1{\det A}}
    $$
    である. 公式右辺の「行列式」 $\det A$ は形式的に定義されるもので, 離散表現における行式 $\det (A_{ij})$ の極限 $N→∞$ を取ったもの. 例えばデルタ関数 $δ(t-t')$ の行列式は $\det δ = \det (δ_{ij}) = 1$.

- $\displaystyle ∫ \mathcal{D}x(t)\ e^{-\frac12 ∫\d{t} ∫\d{t'} x(t)A(t,t')x(t') + ∫\d{t} J(x)x(t)} = \sqrt{\frac1{\det{A}}} e^{-\frac12 ∫\d{t} ∫\d{t'} J(t)G(t,t')J(t')}$.  
    ∵ 同様に離散表現を考えれば明らか. ただし右辺の $G(t,t')$ は $∫\d{t'} A(t,t')G(t',t'') = δ(t-t'')$ を満たし, $A_{ij}$ の逆行列の離散表現.

また, 指数の肩の "行列" $A(t,t')$ を演算子 $\^A$ に変えることもでき, こちらの方が実用的である:

- $\displaystyle ∫ \mathcal{D}x(t)\ e^{-\frac12 ∫ \d{t} \{x(t)-x_0(t)\}\^A\{x(t)-x_0(t)\}} = \sqrt{\frac1{\operatorname*{Det}{\^A}}}.\quad$  ($\^A$ : 演算子)  
    ∵ 演算子 $\^A$ の表現 $\^A x(t) = ∫\d{t'} A(t,t') x(t')$ を使えば前述の積分と同じ. 演算子 $\^A$ の行列式は表現 $\operatorname*{Det} \^A ≡ \det A$ で定義される.

- $\displaystyle ∫ \mathcal{D}x(t)\ e^{-\frac12 ∫ \d{t} x(t)\^Ax(t) + ∫\d{t} J(x)x(t)} = \sqrt{\frac1{\operatorname*{Det}{\^A}}} e^{-\frac12 ∫\d{t} ∫\d{t'} J(t)G(t,t')J(t')},\quad$ ($\^A$ : 演算子)  
    ∵ 同様に表現に変えれば明らか. ただし右辺の $G(t,t')$ は $\^A$ の Green 関数で $\^A G(t,t') = δ(t-t')$ を満たす. $\^A = \^A_{\mathrm{hermite}} + \^A_{\mathrm{anti}}$ のように Hermite 演算子[^hermite_op] $\^A_{\mathrm{hermite}}$ と反 Hermite 演算子 $\^A_{\mathrm{anti}}$ に分解して, 平方完成によって多変数の場合と同様に示すこともできる.

[^hermite_op]: ここで言う Hermite 演算子とは, 内積 $⟨x,y⟩≡∫\d{t}x(t)y(t)$ に関する Hermite 演算子 $∫\d{t}x(t)\^Ay(t) = ∫\d{t}\^Ax(t)y(t)$ である.

したがって公式は次である:

:::screen

汎関数 Gauss 積分は
$$
∫ \mathcal{D}x(t)\ e^{-\frac12 ∫ \d{t} \{x(t)-x_0(t)\}\^A\{x(t)-x_0(t)\}} = \sqrt{\frac1{\operatorname*{Det}{\^A}}}
$$
である.

:::

ここまでくると収束条件はかなり複雑なものである.

## 複素 Gauss 積分

$$
∫\d{{}^2 z} e^{-\frac12 |z|^2} = 2π
$$



## 参考文献

- 柏 太郎. 『経路積分 －例題と演習－』(裳華房, 2015)
- 中原 幹夫. 『理論物理学のための幾何学とトポロジー1, 2 (原著第2版)』(日本評論社, 2018)
