---
title : 複素解析
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "!preamble"
---

### Fourier 級数

区間 $(-L, L)$ で区分的に連続な周期 $2L$ の関数 $f(x)$ は以下の冪級数に展開することができる. これを **Fourier 級数** Fourier series という:
$$
\begin{gathered}
  f(x) = \frac{a_0}2 + ∑_{n=1}^∞ \pqty{a_n \cos \frac{nπx}L + b_n \sin \frac{nπx}L}, \\
  a_n = \frac1L ∫_{-L}^L \d{x} f(x) \cos \frac{nπx}L, \\
  b_n = \frac1L ∫_{-L}^L \d{x} f(x) \sin \frac{nπx}L. \\
\end{gathered}
$$
