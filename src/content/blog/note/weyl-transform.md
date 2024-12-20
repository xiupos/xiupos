---
title : Weyl 変換と Weyl 順序
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
math : true
draft : true
---

### 正準量子化と演算子の順序

正準量子化では, 古典的 Hamiltonian $H(x,p,t)$ に対して正準変数 $(x,p)$ を演算子 $(\^x,\^p)$ に置き換えて, Hermite 演算子 $H(\^x,\^p,t)$ がつくられる. 例えば調和振動子の Hamiltonian
$$
H(x,p) = \frac12 p^2 + \frac12 x^2
$$
に対して置き換え $x↦\^x$, $p↦\^p$ を実行すると,
$$
H(\^x,\^p) = \frac12 \^p^2 + \frac12 \^x^2
$$
が得られる.

しかし, この置き換えは一意ではない. 正準変数 $(x,p)$ は量子論においては非可換 $\^x\^p ≠ \^p\^x$ であるが, 古典論においては可換 $xp = px$ であるから, 置き換える前の並びによって得られる演算子が変わってしまうのである. たとえば Hamiltonian
$$
H(x,p) = x^2p^2
$$
に対して単純に正準変数を置き換えると $\^x^2\^p^2$ となるが, これは Hermite ではないからそもそも不適である. Hermite にするためには, 古典論の時点で並び換える必要があり, 例えば
$$
H_1(x,p) = \frac{x^2p^2 + p^2x^2}{2} \quad ⟼ \quad H_1(\^x,\^p) = \frac{\^x^2\^p^2 + \^p^2\^x^2}{2}
$$
とすればよい. しかし, 別の並び換え
$$
H_2(x,p) = xp^2x \quad ⟼ \quad H_2(\^x,\^p) = \^x\^p^2\^x
$$
もまた Hermite になる. これらは古典論においては全く同じもの $H_1(x,p)=H_2(x,p)$ であるが, 量子論においてはもはや別のもの $H_1(\^x,\^p)≠H_2(\^x,\^p)$ である.

並び順は任意であって, 問題ごとに決められるべきであるが, 並びを一意に, しかも機械的に求めることのできる便利な方法も存在する. それがこの記事の題にある Weyl 順序だが, その前に Weyl 変換を導入しよう.

### Weyl 変換

:::screen

Weyl 変換は q-数 $(\^x,\^p)$ の関数を c-数 $(x,p)$ の関数へ変換する一対一の線形な写像 $W$ で,
$$
\begin{gathered}
  H(\^x,\^p,t) \quad \xmapsto{W} \quad H_{\mathrm{W}} (x,p,t) \quad (≡ W[H(\^x,\^p,t)](x,p,t)\ ), \\
  H_{\mathrm{W}} (x,p,t) ≡ ∫\d{y} e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| H(\^x,\^p,t) \middle| x+\frac{y}{2} \right\rangle
\end{gathered}
$$
で定義される. または運動量の固有ケットを用いて
$$
H_{\mathrm{W}} (x,p,t) = ∫\d{q} e^{iqx/\hbar} \left\langle p+\frac{q}{2} \middle| H(\^x,\^p,t) \middle| p-\frac{q}{2} \right\rangle
$$
と書くこともできる.

:::

さっそく先程の例で計算してみよう. 
