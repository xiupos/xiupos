---
title : 不変デルタ関数と +iε
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "_preamble"
---

Minkowski 計量は $\operatorname{diag}(+---)$ とする.

Klein–Gordon 方程式
$$
(□+m^2) ϕ(x) = 0
$$
の Green 関数を調べよう.

場の積の期待値を
$$
Δ_+(x-y) ≡ ⟨0|ϕ(x)ϕ(y)|0⟩, \quad Δ_-(x-y) ≡ ⟨0|ϕ(y)ϕ(x)|0⟩
$$
で定義する. これらの
$$
\begin{gathered}
  (□+m^2) Δ_+(x) = (□+m^2) ⟨0|ϕ(x)ϕ(0)|0⟩ = ⟨0| [(□+m^2)ϕ(x)] ϕ(0) |0⟩ = 0, \\
  (□+m^2) Δ_-(x) = (□+m^2) ⟨0|ϕ(0)ϕ(x)|0⟩ = ⟨0| ϕ(0) [(□+m^2)ϕ(x)] |0⟩ = 0. \\
\end{gathered}
$$

交換子関数と反交換子関数は
$$
\begin{gathered}
  Δ(x-y) ≡ ⟨0|[ϕ(x),ϕ(y)]|0⟩ = Δ_+(x-y) - Δ_-(x-y), \\
  Δ_1(x-y) ≡ ⟨0|\{ϕ(x),ϕ(y)\}|0⟩ = Δ_+(x-y) + Δ_-(x-y). \\
\end{gathered}
$$
Klein–Gordon 演算子の線形性よりただちに,
$$
(□+m^2) Δ(x) = 0, \quad (□+m^2) Δ_1(x) = 0
$$

$$
Δ_{\rm F}(x-y) ≡ ⟨0|T[ϕ(x)ϕ(y)]|0⟩ = θ(x^0-y^0) Δ_+(x-y) + θ(y^0-x^0) Δ_-(x-y)
$$

$$
(□+m^2) Δ_{\rm F}(x) = - δ^4(x)
$$

$$
(□+m^2) Δ_{\rm F}(x) = (∂_0^2+m^2) θ(x^0) Δ_+(x) + (∂_0^2+m^2) θ(-x^0) Δ_-(x)
$$
