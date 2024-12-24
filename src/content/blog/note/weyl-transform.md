---
title : Weyl 変換と Weyl 順序
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
math : true
draft : true
---

正準量子化では, 古典的 Hamiltonian $H(x,p,t)$ に対して正準変数 $(x,p)$ を演算子 $(\^x,\^p)$ に置き換えて, Hermite 演算子 $H(\^x,\^p,t)$ がつくられる. 例えば調和振動子の Hamiltonian
$$
H(x,p) = \frac{p^2}{2m} + \frac12 mω^2 x^2
$$
に対して置き換え $x↦\^x$, $p↦\^p$ を実行すると,
$$
H(\^x,\^p) = \frac{\^p^2}{2m} + \frac12 mω^2 \^x^2
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

並び順は任意であって, 問題ごとに決められるべきである. しかし, 並びを一意に, しかも機械的に求めることのできる便利な方法も存在する. それが題にある Weyl 順序だが, その前に Weyl 変換を導入しよう. 以下, 簡単のため1次元系を考える.

### Weyl 変換

:::screen

Weyl 変換とは, q-数 $(\^x,\^p)$ の関数を c-数 $(x,p)$ の関数へ変換する線形な単射 $W$ であって,
$$
\begin{gathered}
  H(\^x,\^p,t) \quad \xmapsto{W} \quad H_{\mathrm{W}} (x,p,t) \qq{or} W[H(\^x,\^p,t)], \\
  H_{\mathrm{W}} (x,p,t) ≡ ∫\d{y}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| H(\^x,\^p,t) \middle| x+\frac{y}{2} \right\rangle
\end{gathered}
$$
で定義される[^var]. 運動量の固有ケットを用いて
$$
H_{\mathrm{W}} (x,p,t) = ∫\d{q}\ e^{iqx/\hbar} \left\langle p+\frac{q}{2} \middle| H(\^x,\^p,t) \middle| p-\frac{q}{2} \right\rangle
$$
と書くこともできる.

:::

[^var]: 本来ならば関数の引数を明示して $W[H(\^x,\^p,t)](x,p,t)$ と書くべきだが, q-数 $(\^x,\^p)$ と c-数 $(x,p)$ の文字の対応は自明だから, 一方しか書かないことが多い.

最後の運動量の固有ケットによる表示を導こう. 位置の固有ケットによる定義に完全性 $∫\d{p}|p⟩⟨p|=1$ を挟んで, $⟨x|p⟩ = e^{ipx/\hbar}/\sqrt{2π\hbar}$ に注意すると,
$$
\begin{aligned}
  H_{\mathrm{W}} (x,p,t)
    &≡ ∫\d{y} ∫\d{p_1} ∫\d{p_2}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| p_1 \middle\rangle \middle\langle p_1 \middle| H(\^x,\^p,t) \middle| p_2 \middle\rangle \middle\langle p_2 \middle| x+\frac{y}{2} \right\rangle \\
    &= ∫\d{y} ∫\d{p_1} ∫\d{p_2}\ e^{ipy/\hbar} \frac{e^{ip_1(x-y/2)/\hbar}}{\sqrt{2π\hbar}} ⟨ p_1 | H(\^x,\^p,t) | p_2 ⟩ \frac{e^{-ip_2(x+y/2)/\hbar}}{\sqrt{2π\hbar}} \\
    &= ∫\d{p_1} ∫\d{p_2}\ e^{i(p_1-p_2)x/\hbar} ⟨ p_1 | H(\^x,\^p,t) | p_2 ⟩ ∫\frac{\d{y}}{2π\hbar} e^{i[p-(p_1+p_2)/2]y/\hbar} \\
\end{aligned}
$$
となって, 最後の $y$ 積分はよく知られているようにデルタ関数の積分表示
$$
δ\pqty{p-\frac{p_1+p_2}2} = ∫\frac{\d{y}}{2π\hbar} e^{i[p-(p_1+p_2)/2]y/\hbar}
$$
だから,
$$
H_{\mathrm{W}} (x,p,t) = ∫\d{p_1} ∫\d{p_2}\ e^{i(p_1-p_2)x/\hbar} ⟨ p_1 | H(\^x,\^p,t) | p_2 ⟩ δ\pqty{p-\frac{p_1+p_2}2}
$$
となる. 変数変換 $\displaystyle (p_1,p_2) ↦ (r,q) = \pqty{\frac{p_1+p_2}2,p_1-p_2}$ を実行すれば
$$
\begin{aligned}
  H_{\mathrm{W}} (x,p,t)
    &= ∫\d{q} ∫\d{r}\ e^{iqx/\hbar} \left\langle r+\frac{q}{2} \middle| H(\^x,\^p,t) \middle| r-\frac{q}{2} \right\rangle δ(p-r) \\
    &= ∫\d{q}\ e^{iqx/\hbar} \left\langle p+\frac{q}{2} \middle| H(\^x,\^p,t) \middle| p-\frac{q}{2} \right\rangle
\end{aligned}
$$
となって, 運動量の固有ケットによる表示が得られた.

さて, 冒頭の例に出てきた
$$
H_1(\^x,\^p) = \frac{\^x^2\^p^2 + \^p^2\^x^2}{2}, \quad H_2(\^x,\^p) = \^x\^p^2\^x
$$
について Weyl 変換を実行してみよう. $H_1(\^x,\^p)$ は
$$
\begin{aligned}
  W[H_1(\^x,\^p)]
    &= ∫\d{y}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| H_1(\^x,\^p) \middle| x+\frac{y}{2} \right\rangle \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \left(
          \left\langle x-\frac{y}{2} \middle| \^x^2\^p^2 \middle| x+\frac{y}{2} \right\rangle
        + \left\langle x-\frac{y}{2} \middle| \^p^2\^x^2 \middle| x+\frac{y}{2} \right\rangle
      \right) \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \bqty{\pqty{x-\frac{y}{2}}^2 + \pqty{x+\frac{y}{2}}^2} \left\langle x-\frac{y}{2} \middle| \^p^2 \middle| x+\frac{y}{2} \right\rangle \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4} ∫\d{p'}\ \left\langle x-\frac{y}{2} \middle| \^p^2 \middle| p' \middle\rangle \middle\langle p' \middle| x+\frac{y}{2} \right\rangle \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4} ∫\d{p'}\ p'^2 \frac{e^{ip'(x-y/2)/\hbar}}{\sqrt{2π\hbar}} \frac{e^{-ip'(x+y/2)/\hbar}}{\sqrt{2π\hbar}} \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4} ∫\frac{\d{p'}}{2π\hbar} p'^2 e^{-ip'y\hbar} \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4} \pqty{-\hbar^2 \pdv{{}^2}{y^2}} ∫\frac{\d{p'}}{2π\hbar} e^{-ip'y/\hbar} \\
    &= - \frac{\hbar^2}2 ∫\d{y}\ e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4} δ''(y) \\
    &= - \frac{\hbar^2}2 ∫\d{y}\ \pdv{{}^2}{y^2} \bqty{e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4}} δ(y) \\
    &= - \frac{\hbar^2}2 \left. \pdv{{}^2}{y^2} \bqty{e^{ipy/\hbar} \pqty{x^2 + \frac{y^2}4}} \right|_{y=0} \\
\end{aligned}
$$

### Weyl 順序

:::screen

Weyl 順序とは, 正準変数の単項式 $\^x^m\^p^n$ を一意に並び変える操作であって,
$$
\{\^x^m\^p^n\}_{\mathrm{W}} ≡ \left.\pqty{\pdv{{}^m}{α^m} \pdv{{}^n}{β^n} \exp(α\^x + β\^p)}\right|_{α=β=0}
$$
で定義される. また, 正準変数の多項式に対しては線形であるように定義する.

古典的 Hamiltonian $H(x,p,t)$ の任意の並びに対する量子化 $H(\^x,\^p,t)$ に対して Weyl 順序を取ったものは $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ と書かれる. これを Weyl 変換をすると
$$
W[\{H(\^x,\^p,t)\}_{\mathrm{W}}] = H(x,p,t)
$$
となって, Weyl 変換の単射性から, $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ は Weyl 変換によって元の $H(x,p,t)$ に戻る唯一の順序である.

:::

古典的 Hamiltonian $H(x,p,t)$ は, 時間 $t$ の関数 $H_{mn}(t)$ を係数とした正準変数の単項式 $x^mp^n$ の線形結合
$$
H(x,p,t) = ∑_{m,n} H_{mn}(t) x^m p^n
$$
で展開できる. これを量子化した $H(\^x,\^p,t)$ には, 各項の $\^x^m\^p^n$ の順序の任意性があるのは前述の通りだが, Weyl 順序を取った
$$
\{H(\^x,\^p,t)\}_{\mathrm{W}} = ∑_{m,n} H_{mn}(t) \{\^x^m\^p^n\}_{\mathrm{W}}
$$
は順序に関して一意である. これを Weyl 変換することを考えよう.
