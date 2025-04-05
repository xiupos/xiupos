---
title : 圏論
author : xiupos
date : \today
pubDate : 2024-04-07T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "!preamble"
---

### 圏論

**圏** category $\mathcal{C}$ は, **対象** object のあつまり collection $\operatorname*{Ob}(\mathcal{C})$ と, 任意の 2 つの対象 $a, b ∈ \operatorname*{Ob}(\mathcal{C})$ に対して**射** morphism の集合 $\operatorname*{Mor}(a, b)$ で構成され, 射の合成 $\circ : \operatorname*{Mor}(a, b) × \operatorname*{Mor}(b, c) \overset{\circ}{→} \operatorname*{Mor}(a, c)$, $(f,g) \overset{\circ}{↦} g \circ f$ が以下を満たす:

- 結合律 : $f \circ (g \circ h) = (f \circ g) \circ h$,
- 単位射 : $∃1_a∈\operatorname*{Mor}(a,a)$ s.t. $f \circ 1_a = f$, $1_a \circ g = g$.

また, $a \overset{f}{→} b$ に対し, $f^{-1} \circ f = 1_a$, $f \circ f^{-1} = 1_b$ となる $f^{-1}$ が存在するとき, $f$ を同型射といい, $f^{-1}$ を $f$ の逆射という.
