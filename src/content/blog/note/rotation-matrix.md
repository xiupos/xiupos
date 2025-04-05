---
title: 回転行列と生成子
author: xiupos
date: \today
pubDate: 2024-09-21T18:25:00+09:00
lang: ja
math: true
draft: true
preamble: "!preamble"
preamble: "!preamble"
---

座標回転を考える. ある直交座標系 $K$ で粒子の位置が $\bm{x}=(x^i)_{i=1,2,3}$ だったとする.

$$
\bm{x}' = R \bm{x} \qq{or} x'^i = {R^i}_j x^j
$$

$$
δ_{ij} {R^i}_k {R^j}_{\ell} = δ_{k\ell}
$$
両辺に $δ^{km}$ をかけて
$$
R^{\top}R = 1 \qq{or} {R_j}^m {R^j}_{\ell} = δ^m_{\ell}
$$

$$
R = I + ε \qq{or} {R^i}_j = δ^i_j + {ϵ^i}_j \quad ({ϵ^i}_j ≪ 1)
$$

$$
δ_{ij} {R^i}_k {R^j}_{\ell} = δ_{ij} (δ^i_k + {ϵ^i}_k)(δ^j_{\ell} + {ϵ^j}_{\ell}) = δ_{k\ell} + δ_{i\ell} {ϵ^i}_k + δ_{kj} {ϵ^j}_{\ell} + O(ϵ^2) = δ_{k\ell}
$$

$$
ϵ_{ji} + ϵ_{ij} = 0.
$$

$$
\bm{x}' = \pqty{1-\frac{i}2ϵ^{k\ell}M_{k\ell}} \bm{x}
$$

