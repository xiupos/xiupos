---
title : Lie 群と Lie 代数
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "_preamble"
---

### Lie 群

群 $G$ に対し, パラメータ集合 $A⊂ℝ^r$ が存在し, 写像 $R:A→G$ が以下の性質を満たすとき, $R$ を**実 Lie 群** *real Lie group* という.

1. $∃e∈A$, $R(e) = e_G$,
2. $∀a∈A$, $∃\=a∈A$, $R(\=a) = R^{-1}(a)$,
3. $∀a,b∈A$, $∃c∈A$, $R(c)=R(a)R(b)$,
4. 上記 2,3 について, $\=a = \=a(a)$, $c=c(a,b)$ がそれぞれの変数に関し無限回微分可能.

ただし $e_G$ は群 $G$ の単位元. 通常は $R(0)=e_G$ を満たすようパラメータを調整する.

TODO: 例

### Lie 代数

ベクトル空間 $L$ が括弧積と呼ばれる写像 $[⋅,⋅]:L×L→L$ に対して以下を満たすとき, $L$ を **Lie 代数** *Lie algebra* という.

1. **双線型性**: $[aX+bY, Z] = a[X,Z] + b[Y,Z]$, $[X, aY+bZ] = a[X,Y] + b[X,Z]$,
2. **交代性**: $[X,X]$ = 0.
3. **Jacobi 恒等式**: $[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$.

交代性から $[X,Y] = - [Y,X]$ がわかる. 実際,
$$
0 = [X+Y,X+Y] = [X,X] + [X,Y] + [Y,X] + [Y,Y] = [X,Y] + [Y,X].
$$

### 参考文献

- 	和達 三樹 『微分・位相幾何』 (岩波書店, 1996)
