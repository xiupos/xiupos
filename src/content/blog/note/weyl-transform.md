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
に対して置き換え $x↦\^x$, $p↦\^p$ を実行すると, Hamiltonian 演算子
$$
H_1(\^x,\^p) = \frac{\^p^2}{2m} + \frac12 mω^2 \^x^2
$$
が得られる.

しかし, この置き換えは一意ではない. 正準変数 $(x,p)$ は古典論においては可換 $xp = px$ であるが, 量子論においては非可換 $\^x\^p ≠ \^p\^x$ であるから, 置き換える前の並びによって得られる演算子が変わってしまうのである. たとえば古典的 Hamiltonian $H(x,p) = xp$ に対して, 単純に正準変数を置き換えると
$$
H_1(x,p) = xp \quad ⟼ \quad H_1(\^x,\^p) = \^x\^p
$$
となるが, これは Hermite ではないから Hamiltonian 演算子として不適である. Hermite にするためには古典論の時点で並び換える必要があり, 例えば
$$
H_2(x,p) = \frac{xp+px}{2} \quad ⟼ \quad H_2(\^x,\^p) = \frac{\^x\^p+\^p\^x}{2}
$$
とすればよい.これらは古典論においては全く同じもの $H_1(x,p)=H_2(x,p)$ であるが, 量子論においては全く別物 $H_1(\^x,\^p)≠H_2(\^x,\^p)$ である.

Hamiltonian 演算子において, Hermite であれば順序は任意であって, 問題ごとに決められるべきである. しかし, 順序を一意に, しかも機械的に求めることのできる便利な方法も存在する. それが題にある Weyl 順序だが, その前に Weyl 変換を導入しよう. 以下, 簡単のため1次元系を考える.

### Weyl 変換

Weyl 変換は Hamiltonian 演算子を古典的 Hamiltonian に戻す一対一の変換である. 一対一であるから, Weyl 変換で元の古典的 Hamiltonian に戻る演算子の順序は一意であって, 差し当たりこれを Weyl 順序と呼ぼう.

:::screen

Weyl 変換とは, q-数 $(\^x,\^p)$ の関数を c-数 $(x,p)$ の関数へ変換する線形な全単射 $W$ であって,
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
H_1(\^x,\^p) = \^x \^p, \quad H_2(\^x,\^p) = \frac{\^x\^p+\^p\^x}2
$$
について Weyl 変換を実行してみよう. $\^x\^p$ の Weyl 変換を計算すると
$$
\begin{aligned}
  W[\^x\^p]
    &= ∫\d{y}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| \^x \^p \middle| x+\frac{y}{2} \right\rangle \\
    &= ∫\d{y}\ e^{ipy/\hbar} \pqty{x-\frac{y}{2}} \left\langle x-\frac{y}{2} \middle| \^p \middle| x+\frac{y}{2} \right\rangle \\
\end{aligned}
$$
となる. ここで, 最後の期待値は完全性 $∫\d{p}|p⟩⟨p|=1$ を挟めば
$$
\begin{aligned}
  \left\langle x-\frac{y}{2} \middle| \^p \middle| x+\frac{y}{2} \right\rangle
    &= ∫\d{p'}\ \left\langle x-\frac{y}{2} \middle| \^p \middle| p' \middle\rangle \middle\langle p' \middle| x+\frac{y}{2} \right\rangle \\
    &= ∫\d{p'}\ p' \frac{e^{ip'(x-y/2)/\hbar}}{\sqrt{2π\hbar}} \frac{e^{-ip'(x+y/2)/\hbar}}{\sqrt{2π\hbar}} \\
    &= ∫\frac{\d{p'}}{2π\hbar} p' e^{-ip'y\hbar} \\
    &= i\hbar \dv{}{y} \pqty{∫\frac{\d{p'}}{2π\hbar} e^{-ip'y/\hbar}} \\
    &= i\hbar δ'(y) \\
\end{aligned}
$$
と簡単になる. より一般に
$$
\left\langle x-\frac{y}{2} \middle| \^p^n \middle| x+\frac{y}{2} \right\rangle = (i\hbar)^n δ^{(n)}(y)
$$
となることが同様に示せる. これを使えば, Weyl 変換は
$$
\begin{aligned}
  W[\^x\^p]
    &= i\hbar ∫\d{y}\ e^{ipy/\hbar} \pqty{x-\frac{y}{2}} δ'(y) \\
    &= - i\hbar \left. \dv{}{y} \bqty{e^{ipy/\hbar} \pqty{x-\frac{y}{2}}} \right|_{y=0} \\
    &= - i\hbar \left. e^{ipy/\hbar} \bqty{\frac{ip}{\hbar} \pqty{x-\frac{y}{2}} - \frac12} \right|_{y=0} \\
    &= px + i\hbar \\
\end{aligned}
$$
となるから, まとめると
$$
W[\^x\^p] = xp + i\hbar
$$
である. つまり, $H_1(x,p)$ の正準変換を置き換えて $H_1(\^x,\^p)$ を作ったはずが, Weyl 変換で古典的 Hamiltonian に戻すと, 余分な「お釣り」$+ i\hbar$ が出てきてしまう. 対して, Hermite 化した $\displaystyle \frac{\^x\^p+\^p\^x}2$ の Weyl 変換は
$$
\begin{aligned}
  W\bqty{\frac{\^x\^p+\^p\^x}2}
    &= ∫\d{y}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| \frac{\^x\^p+\^p\^x}2 \middle| x+\frac{y}{2} \right\rangle \\
    &= \frac12 ∫\d{y}\ e^{ipy/\hbar} \bqty{\pqty{x-\frac{y}{2}} + \pqty{x+\frac{y}{2}}} \left\langle x-\frac{y}{2} \middle| \^p \middle| x+\frac{y}{2} \right\rangle \\
    &= i\hbar ∫\d{y}\ e^{ipy/\hbar} x δ'(y) \\
    &= - i\hbar \left. \dv{}{y} \pqty{e^{ipy/\hbar} x} \right|_{y=0} \\
    &= - i\hbar \left. e^{ipy/\hbar} \pqty{\frac{ip}{\hbar} x} \right|_{y=0} \\
    &= px \\
\end{aligned}
$$
となって
$$
W\bqty{\frac{\^x\^p+\^p\^x}2} = xp
$$
である. つまり, $H(x,p)=xp$ に量子化のうち, Weyl 変換によって元に戻る順序, つまり Weyl 順序は $\displaystyle H_2(\^x,\^p) = \frac{\^x\^p+\^p\^x}2$ である.

より高次の例も計算してみよう. $H(x,p)=x^2p$ については, 単純な置き換えでは
$$
\begin{aligned}
  W[\^x^2\^p] = x^2p + i\hbar x
\end{aligned}
$$
となって元には戻らない. そもそも $\^x^2\^p$ は Hermite ではないのだ. 並び換えて Hermite にしたものを試してみよう. 同様の計算によって
$$
W[\^x\^p\^x] = x^2p, \quad W\bqty{\frac{\^x^2\^p + \^p\^x^2}{2}} = x^2p
$$
などが確かめられる. 異なる2つの並びが, どちらも Weyl 順序になった. 交換関係 $[\^x,\^p] = \^x\^p-\^p\^x = i\hbar$ を使えば, これらが同じ演算子であることが容易にわかる.

では, Hermite であれば Weyl 順序なのだろうか. 実は Hermite な順序でも Weyl 順序になるとは限らない. 更に高次な例 $H(x,p)=x^2p^2$ を考えてみよう. Hermite に並び換えたものを計算すると,
$$
\begin{gathered}
  W\bqty{\^x\^p^2\^x} = x^2p^2 + \frac{\hbar^2}2, \\
  W\bqty{\frac{\^x^2\^p^2 + \^p^2\^x^2}2} = x^2p^2 - \frac{\hbar^2}2, \\
\end{gathered}
$$
となる. どちらも, Hermite ではあるが Weyl 順序ではない. Weyl 変換の線形性から, これらの和は直ちに Weyl 順序
$$
W\bqty{\frac{\^x^2\^p^2 + 2\^x\^p^2\^x + \^p^2\^x^2}2} = x^2p^2
$$
であることがわかる.

ここまでいくつかの例で Weyl 順序を求めてきたが, より機械的に Weyl 順序を求めることを考えてみよう. そのために重要になってくるのが, Weyl 順序の母関数 $\exp(α\^x+β\^p)$ である. ここで, Baker–Campbell–Hausdorff の公式
$$
e^{\^X}e^{\^Y} = \exp\qty{\^X + \^Y + \frac12 [\^X,\^Y] + \frac1{12} [\^X,[\^X,\^Y]] - \frac1{12} [\^Y,[\^Y,\^X]] + \cdots}
$$
を使えば,
$$
\begin{gathered}
  e^{α\^x}e^{β\^p} = \exp\pqty{α\^x+β\^p+\frac12 i\hbar αβ}, \\
  ∴e^{α\^x+β\^p} = e^{-i\hbar αβ/2}e^{α\^x}e^{β\^p}
\end{gathered}
$$
となるから, Weyl 変換を計算すると
$$
\begin{aligned}
  W\bqty{e^{α\^x+β\^p}}
    &= W\bqty{e^{-i\hbar αβ/2}e^{α\^x}e^{β\^p}} \\
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{ipy/\hbar} \left\langle x-\frac{y}{2} \middle| e^{α\^x}e^{β\^p} \middle| x+\frac{y}{2} \right\rangle \\
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{ipy/\hbar} e^{α(x-y/2)} \left\langle x-\frac{y}{2} \middle| e^{β\^p} \middle| x+\frac{y}{2} \right\rangle \\
\end{aligned}
$$
となる. ここで, 最後の期待値は
$$
\begin{aligned}
  \left\langle x-\frac{y}{2} \middle| e^{β\^p} \middle| x+\frac{y}{2} \right\rangle
    &= ∑_n \frac1{n!} β^n \left\langle x-\frac{y}{2} \middle| \^p^n \middle| x+\frac{y}{2} \right\rangle \\
    &= ∑_n \frac{δ^{(n)}(y)}{n!} (i\hbarβ)^n \\
    &= δ(y + i\hbarβ)
\end{aligned}
$$
と簡単になる. ただし, 2行目が3行目の式の $y$ まわりの Taylor 展開であることに注意. これを使うと, Weyl 変換は
$$
\begin{aligned}
  W\bqty{e^{α\^x+β\^p}}
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{ipy/\hbar} e^{α(x-y/2)} δ(y + i\hbarβ) \\
    &= e^{-i\hbar αβ/2} e^{βp} e^{αx} e^{i\hbar αβ/2} \\
    &= e^{αx+βp} \\
\end{aligned}
$$
となって, 結局, Weyl 順序の母関数 $\exp(α\^x+β\^p)$ は Weyl 順序
$$
W\bqty{e^{α\^x+β\^p}} = e^{αx+βp}
$$
であるとわかる. ついでに, 母関数は Hermite
$$
(e^{α\^x+β\^p})^† = e^{α\^x^†+β\^p^†} = e^{α\^x+β\^p}
$$
である.

### Weyl 順序

母関数 $\exp(α\^x+β\^p)$ が Weyl 変換で $\exp(αx+βp)$ に戻ることを使うと, 任意の Hamiltonian 演算子を Weyl 順序に並び換えることができる.

:::screen

Weyl 順序とは, 正準変数の単項式 $\^x^m\^p^n$ を一意に並び変える操作であって,
$$
\{\^x^n\^p^m\}_{\mathrm{W}} ≡ \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} \exp(α\^x + β\^p) \right|_{α=β=0}
$$
で定義される. また, 正準変数の多項式に対しては線形であるように定義する.

古典的 Hamiltonian $H(x,p,t)$ の任意の順序に対する量子化 $H(\^x,\^p,t)$ に対して Weyl 順序を取ったものは $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ と書かれる. これを Weyl 変換をすると
$$
W[\{H(\^x,\^p,t)\}_{\mathrm{W}}] = H(x,p,t)
$$
となって, Weyl 変換の単射性から, $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ は Weyl 変換によって元の $H(x,p,t)$ に戻る唯一の順序である.

:::

$\{\^x^n\^p^m\}_{\mathrm{W}}$ の Weyl 変換を計算すると
$$
\begin{aligned}
  W[\{\^x^n\^p^m\}_{\mathrm{W}}]
    &= W\left[ \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} \exp(α\^x + β\^p) \right|_{α=β=0} \right] \\
    &= \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} W[\exp(α\^x + β\^p)] \right|_{α=β=0} \\
    &= \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} \exp(αx + βp) \right|_{α=β=0} \\
    &= \left. \bqty{x^np^m \exp(αx + βp)} \right|_{α=β=0} \\
    &= x^np^m \\
\end{aligned}
$$
となるから[^comm], 結局
$$
W[\{\^x^n\^p^m\}_{\mathrm{W}}] = x^np^m
$$
となる. また, 古典的 Hamiltonian $H(x,p,t)$ は, 時間 $t$ の関数 $H_{nm}(t)$ を係数とした正準変数の単項式 $x^np^m$ の線形結合
$$
H(x,p,t) = ∑_{n,m} H_{nm}(t) x^n p^m
$$
で展開できる. これを量子化した $H(\^x,\^p,t)$ には, 各項の $\^x^n\^p^m$ の順序の任意性があるのは前述の通りだが, Weyl 順序を取った
$$
\{H(\^x,\^p,t)\}_{\mathrm{W}} = ∑_{n,m} H_{nm}(t) \{\^x^n\^p^m\}_{\mathrm{W}}
$$
は順序に関して一意である. Weyl 変換の線形性から, 直ちに
$$
W[\{H(\^x,\^p,t)\}_{\mathrm{W}}] = H(x,p,t)
$$
がわかる. ちなみに Weyl 順序の定義の Hermite 共役を取れば
$$
\{\^x^n\^p^m\}_{\mathrm{W}}^† = \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} [\exp(α\^x + β\^p)]^† \right|_{α=β=0} = \{\^x^n\^p^m\}_{\mathrm{W}}
$$
となるから, Weyl 順序であれば Hermite であることがすぐにわかる.

[^comm]: Weyl 変換 $W$ と偏微分 $\pdv{{}^n}{α^n}$, $\pdv{{}^m}{β^m}$ の可換性は, 数学的には非自明かもしれない.

ところで, 母関数 $\exp(α\^x+β\^p)$ は単項式の Weyl 順序で
$$
\exp(α\^x+β\^p) = ∑_{k,l} \frac1{k!l!} α^k β^l \{\^x^k\^p^l\}_{\mathrm{W}}
$$
と展開できる. これと羃展開 $\exp(α\^x+β\^p) = ∑_n (α\^x+β\^p)^n / n!$ を比較すれば,
$$
(α\^x+β\^p)^n = ∑_{k=0}^n \frac{n!}{k!(n-k)!} α^k β^{n-k} \{\^x^k\^p^{n-k}\}_{\mathrm{W}}
$$
となることがすぐにわかる. Weyl 順序を得るには, 定義式よりこちらの方が便利である. 例えば, $\^x$ と $\^p$ の次数の計が $n=2$ のときは
$$
(α\^x+β\^p)^2 = α^2 \^x^2 + αβ (\^x\^p + \^p\^x) + β^2 \^p^2
$$
より
$$
\begin{gathered}
  \{\^x^2\^p^0\}_{\mathrm{W}} = \^x^2, \quad \{\^x^0\^p^2\}_{\mathrm{W}} = \^x^2, \\
  \{\^x^1\^p^1\}_{\mathrm{W}} = \frac{\^x \^p + \^p \^x}2
\end{gathered}
$$
となる. $n=3$ のときは
$$
(α\^x+β\^p)^3 = α^3 \^x^3 + α^2 β (\^x^2\^p + \^x\^p\^x + \^p\^x^2) + α β^2 (\^x\^p^2 + \^p\^x\^p + \^p^2\^x) + β^3 \^p^3
$$
より
$$
\begin{aligned}
  \{\^x^3\^p^0\}_{\mathrm{W}} &= \^x^3, & \{\^x^2\^p^1\}_{\mathrm{W}} &= \frac{\^x^2\^p + \^x\^p\^x + \^p\^x^2}3, \\
  \{\^x^0\^p^3\}_{\mathrm{W}} &= \^p^3, & \{\^x^1\^p^2\}_{\mathrm{W}} &= \frac{\^x\^p^2 + \^p\^x\^p + \^p^2\^x}3
\end{aligned}
$$
となる. より高次な場合も同様に計算できる. これによって, これまでに出した例では
$$
\begin{aligned}
  H(x,p) &= xp & &⟼& \{H(\^x,\^p)\}_{\mathrm{W}} &= \frac{\^x\^p+\^p\^x}{2}, \\
  H(x,p) &= x^2p & &⟼& \{H(\^x,\^p)\}_{\mathrm{W}} &= \frac{\^x^2\^p + \^x\^p\^x + \^p\^x^2}3, \\
  H(x,p) &= x^2p^2 & &⟼& \{H(\^x,\^p)\}_{\mathrm{W}} &= \frac{\^x^2\^p^2 + \^x\^p\^x\^p + \^p\^x^2\^p + \^x\^p^2\^x + \^p\^x\^p\^x + \^p^2\^x^2}6 \\
\end{aligned}
$$
となることが, 単純な計算によってわかる. 実は, $\^x^n$ と $\^p^m$ を考えられる全ての並び換えを足して, その組合せの数 ${}_{n+m}C_m = \pmqty{n+m \\ m}$ で割れば得られるため, 慣れればすぐに Weyl 順序 $\{\^x^n\^p^m\}_{\mathrm{W}}$ を求めることができる.
