---
title : 位相空間
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "!preamble"
---

### 位相空間

**台集合**と呼ばれる集合 $X$ と**開集合系**と呼ばれる $X$ の部分集合の族 $\mathscr{U}$ に対して, 以下の条件を満たす組 $(X, \mathscr{U})$ または単に $X$ を**位相空間** topological space という. 開集合系の元を**開集合**という.

1. 空集合および台集合は開集合:  $\varnothing, X ∈ \mathscr{U}$.
2. 開集合の和もまた開集合: $\~{\mathscr{U}} ⊂ \mathscr{U} ⇒ \bigcup_{U ∈ \tilde{\mathscr{U}}} U ∈ \mathscr{U}$.
3. 有限個の開集合の積もまた開集合: $U_1, …, U_n ∈ \mathscr{U} ⇒ \bigcap^n_{i = 1} U_i ∈ \mathscr{U}$.

位相空間 $X$ の点 $x ∈ X$ について, $x$ を含む開集合を $x$ の**開近傍**といい, $x$ の開近傍を含む任意の集合を $x$ の**近傍**という.

### 連続写像と同相

位相空間 $X$, $Y$ と 写像 $f : X → Y$ について, $x ∈ X$ に対し $f(x) ∈ Y$ の近傍の $f$ による逆像が $x$ の近傍になるとき, $f$ は $x$ で連続であるという. また, $Y$ の開集合の $f$ による逆像が $X$ の開集合となるとき, $f$ を連続という. 全単射 $f : X → Y$ が連続で $f^{-1}$ も連続であるとき, $f$ を**同相写像**といい, $X$ と $Y$ は**位相同型**あるいは**同相**という.
