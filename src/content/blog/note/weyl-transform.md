---
title : Weyl 変換と Weyl 順序
author : xiupos
date : \today
pubDate : 2024-12-26T11:40:00+09:00
lang : ja
math : true
preamble: "_preamble"
---

正準量子化では, 古典的 Hamiltonian $H(x,p,t)$ に対して正準変数 $(x,p)$ を演算子 $(\^x,\^p)$ に置き換えて, Hermite 演算子 $H(\^x,\^p,t)$ がつくられる. 例えば, 調和振動子の Hamiltonian
$$
H(x,p) = \frac{p^2}{2m} + \frac12 mω^2 x^2
$$
に対して置き換え $x↦\^x$, $p↦\^p$ を実行すると, Hamiltonian 演算子
$$
H_1(\^x,\^p) = \frac{\^p^2}{2m} + \frac12 mω^2 \^x^2
$$
が得られる.

しかし, 一般の Hamiltonian に対して, この置き換えは一意ではない. 正準変数 $(x,p)$ は古典論においては可換 $xp = px$ であるが, 量子論においては非可換 $\^x\^p ≠ \^p\^x$ であるから, 置き換える前の並びによって得られる演算子が変わってしまうのである. 例えば, 古典的 Hamiltonian $H(x,p) = xp$ に対して, 単純に正準変数を置き換えると
$$
H_1(x,p) = xp \quad ⟼ \quad H_1(\^x,\^p) = \^x\^p
$$
となるが, これは Hermite ではないから Hamiltonian 演算子として不適である. Hermite にするためには古典論の時点で並び替える必要があり, 例えば
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
  H_{\mathrm{W}} (x,p,t) ≡ ∫\d{y}\ e^{-ipy/\hbar} \left\langle x+\frac{y}{2} \middle| H(\^x,\^p,t) \middle| x-\frac{y}{2} \right\rangle
\end{gathered}
$$
で定義される[^var][^wigner]. 運動量の固有ケットを用いて
$$
H_{\mathrm{W}} (x,p,t) = ∫\d{q}\ e^{iqx/\hbar} \left\langle p+\frac{q}{2} \middle| H(\^x,\^p,t) \middle| p-\frac{q}{2} \right\rangle
$$
と書くこともできる.

:::

[^var]: 関数の引数を明示して $W[H(\^x,\^p,t)](x,p,t)$ と書くべきだが, q-数 $(\^x,\^p)$ と c-数 $(x,p)$ の文字の対応は自明だから, 一方しか書かないことが多い.

[^wigner]: この変換を Wigner 変換と呼び, 逆変換を Weyl 変換とする文献もある. むしろそっちが一般的? どちらにしろ, 共形場理論における Weyl 変換 $g_{αβ}↦e^{2ω}g_{αβ}$ とは別物であることに注意.

最後の運動量の固有ケットによる表示を導こう. 位置の固有ケットによる定義に完全性 $∫\d{p}|p⟩⟨p|=1$ を挟んで, $⟨x|p⟩ = e^{ipx/\hbar}/\sqrt{2π\hbar}$ に注意すると,
$$
\begin{aligned}
  H_{\mathrm{W}} (x,p,t)
    &≡ ∫\d{y} ∫\d{p_1} ∫\d{p_2}\ e^{-ipy/\hbar} \left\langle x+\frac{y}{2} \middle| p_1 \middle\rangle \middle\langle p_1 \middle| H(\^x,\^p,t) \middle| p_2 \middle\rangle \middle\langle p_2 \middle| x-\frac{y}{2} \right\rangle \\
    &= ∫\d{y} ∫\d{p_1} ∫\d{p_2}\ e^{-ipy/\hbar} \frac{e^{ip_1(x+y/2)/\hbar}}{\sqrt{2π\hbar}} ⟨ p_1 | H(\^x,\^p,t) | p_2 ⟩ \frac{e^{-ip_2(x-y/2)/\hbar}}{\sqrt{2π\hbar}} \\
    &= ∫\d{p_1} ∫\d{p_2}\ e^{i(p_1-p_2)x/\hbar} ⟨ p_1 | H(\^x,\^p,t) | p_2 ⟩ ∫\frac{\d{y}}{2π\hbar} e^{-i[p-(p_1+p_2)/2]y/\hbar} \\
\end{aligned}
$$
となって, 最後の $y$ 積分はよく知られているようにデルタ関数の積分表示
$$
δ\pqty{p-\frac{p_1+p_2}2} = ∫\frac{\d{y}}{2π\hbar} e^{-i[p-(p_1+p_2)/2]y/\hbar}
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
    &= ∫\d{y}\ e^{-ipy/\hbar} \left\langle x+\frac{y}{2} \middle| \^x \^p \middle| x-\frac{y}{2} \right\rangle \\
    &= ∫\d{y}\ e^{-ipy/\hbar} \pqty{x+\frac{y}{2}} \left\langle x+\frac{y}{2} \middle| \^p \middle| x-\frac{y}{2} \right\rangle \\
\end{aligned}
$$
となる. ここで, 最後の期待値は完全性 $∫\d{p}|p⟩⟨p|=1$ を挟めば
$$
\begin{aligned}
  \left\langle x+\frac{y}{2} \middle| \^p \middle| x-\frac{y}{2} \right\rangle
    &= ∫\d{p'}\ \left\langle x+\frac{y}{2} \middle| \^p \middle| p' \middle\rangle \middle\langle p' \middle| x-\frac{y}{2} \right\rangle \\
    &= ∫\d{p'}\ p' \frac{e^{ip'(x+y/2)/\hbar}}{\sqrt{2π\hbar}} \frac{e^{-ip'(x-y/2)/\hbar}}{\sqrt{2π\hbar}} \\
    &= ∫\frac{\d{p'}}{2π\hbar} p' e^{ip'y\hbar} \\
    &= -i\hbar \dv{}{y} \pqty{∫\frac{\d{p'}}{2π\hbar} e^{ip'y/\hbar}} \\
    &= -i\hbar δ'(y) \\
\end{aligned}
$$
と簡単になる. より一般に
$$
\left\langle x+\frac{y}{2} \middle| \^p^n \middle| x-\frac{y}{2} \right\rangle = (-i\hbar)^n δ^{(n)}(y)
$$
となることが同様に示せる. これを使えば, Weyl 変換は
$$
\begin{aligned}
  W[\^x\^p]
    &= - i\hbar ∫\d{y}\ e^{-ipy/\hbar} \pqty{x+\frac{y}{2}} δ'(y) \\
    &= i\hbar \left. \dv{}{y} \bqty{e^{-ipy/\hbar} \pqty{x+\frac{y}{2}}} \right|_{y=0} \\
    &= i\hbar \left. e^{-ipy/\hbar} \bqty{\frac{-ip}{\hbar} \pqty{x-\frac{y}{2}} + \frac12} \right|_{y=0} \\
    &= px + \frac{i\hbar}2 \\
\end{aligned}
$$
となるから, まとめると
$$
W[\^x\^p] = xp + \frac{i\hbar}2
$$
である. つまり, $H_1(x,p)$ の正準変換を置き換えて $H_1(\^x,\^p)$ を作ったはずが, Weyl 変換で古典的 Hamiltonian に戻すと余分な「お釣り」$+ i\hbar/2$ が出てきてしまう. 対して, Hermite 化した $\displaystyle \frac{\^x\^p+\^p\^x}2$ の Weyl 変換は
$$
\begin{aligned}
  W\bqty{\frac{\^x\^p+\^p\^x}2}
    &= ∫\d{y}\ e^{-ipy/\hbar} \left\langle x+\frac{y}{2} \middle| \frac{\^x\^p+\^p\^x}2 \middle| x-\frac{y}{2} \right\rangle \\
    &= \frac12 ∫\d{y}\ e^{-ipy/\hbar} \bqty{\pqty{x+\frac{y}{2}} + \pqty{x-\frac{y}{2}}} \left\langle x+\frac{y}{2} \middle| \^p \middle| x-\frac{y}{2} \right\rangle \\
    &= - i\hbar ∫\d{y}\ e^{-ipy/\hbar} x δ'(y) \\
    &= i\hbar \left. \dv{}{y} \pqty{e^{-ipy/\hbar} x} \right|_{y=0} \\
    &= i\hbar \left. e^{-ipy/\hbar} \pqty{\frac{-ip}{\hbar} x} \right|_{y=0} \\
    &= px \\
\end{aligned}
$$
となって
$$
W\bqty{\frac{\^x\^p+\^p\^x}2} = xp
$$
である. つまり, $H(x,p)=xp$ の量子化のうち, Weyl 変換によって元に戻る順序, つまり Weyl 順序は $\displaystyle H_2(\^x,\^p) = \frac{\^x\^p+\^p\^x}2$ である.

より高次の例も計算してみよう. $H(x,p)=x^2p$ については, 単純な置き換えでは
$$
\begin{aligned}
  W[\^x^2\^p] = x^2p + i\hbar x
\end{aligned}
$$
となって元には戻らない. そもそも $\^x^2\^p$ は Hermite ではないのだ. 並び替えて Hermite にしたものを試してみよう. 同様の計算によって
$$
W[\^x\^p\^x] = x^2p, \quad W\bqty{\frac{\^x^2\^p + \^p\^x^2}{2}} = x^2p
$$
などが確かめられる. 異なる2つの並びが, どちらも Weyl 順序になった. 交換関係 $[\^x,\^p] = \^x\^p-\^p\^x = i\hbar$ を使えば, これらが同じ演算子であることが容易にわかる.

では, Hermite であれば Weyl 順序なのだろうか. 実は Hermite な順序でも Weyl 順序になるとは限らない. 更に高次な例 $H(x,p)=x^2p^2$ を考えてみよう. Hermite に並び替えたものを計算すると,
$$
\begin{gathered}
  W\bqty{\^x\^p^2\^x} = x^2p^2 + \frac{\hbar^2}2, \\
  W\bqty{\frac{\^x^2\^p^2 + \^p^2\^x^2}2} = x^2p^2 - \frac{\hbar^2}2, \\
\end{gathered}
$$
となる. どちらも, Hermite ではあるが Weyl 順序ではない. これらは正準変数の交換関係を用いても等しくない $\^x\^p^2\^x \neq (\^x^2\^p^2 + \^p^2\^x^2)/2$ のである. ちなみに, Weyl 変換の線形性からこれらの和は直ちに Weyl 順序
$$
W\bqty{\frac{\^x^2\^p^2 + 2\^x\^p^2\^x + \^p^2\^x^2}4} = x^2p^2
$$
であることがわかる.

ここまでいくつかの例で Weyl 順序を求めてきたが, より機械的に Weyl 順序を求めることを考えてみよう. そのために重要となってくるのが, Weyl 順序の生成関数 $\exp(α\^x+β\^p)$ である. ここで, Baker–Campbell–Hausdorff の公式
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
となるから, 生成関数の Weyl 変換を計算すると
$$
\begin{aligned}
  W\bqty{e^{α\^x+β\^p}}
    &= W\bqty{e^{-i\hbar αβ/2}e^{α\^x}e^{β\^p}} \\
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{-ipy/\hbar} \left\langle x+\frac{y}{2} \middle| e^{α\^x}e^{β\^p} \middle| x-\frac{y}{2} \right\rangle \\
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{-ipy/\hbar} e^{α(x+y/2)} \left\langle x+\frac{y}{2} \middle| e^{β\^p} \middle| x-\frac{y}{2} \right\rangle \\
\end{aligned}
$$
となる. ここで, 最後の期待値は
$$
\begin{aligned}
  \left\langle x+\frac{y}{2} \middle| e^{β\^p} \middle| x-\frac{y}{2} \right\rangle
    &= ∑_n \frac1{n!} β^n \left\langle x+\frac{y}{2} \middle| \^p^n \middle| x-\frac{y}{2} \right\rangle \\
    &= ∑_n \frac{δ^{(n)}(y)}{n!} (-i\hbarβ)^n \\
    &= δ(y - i\hbarβ)
\end{aligned}
$$
と簡単になる. ただし, 2行目が3行目の式の $y$ まわりの Taylor 展開であることに注意. これを使うと, Weyl 変換は
$$
\begin{aligned}
  W\bqty{e^{α\^x+β\^p}}
    &= e^{-i\hbar αβ/2} ∫\d{y}\ e^{-ipy/\hbar} e^{α(x+y/2)} δ(y - i\hbarβ) \\
    &= e^{-i\hbar αβ/2} e^{βp} e^{αx} e^{i\hbar αβ/2} \\
    &= e^{αx+βp} \\
\end{aligned}
$$
となって, 結局, Weyl 順序の生成関数 $\exp(α\^x+β\^p)$ は Weyl 順序
$$
W\bqty{e^{α\^x+β\^p}} = e^{αx+βp}
$$
であるとわかる. ついでに, 生成関数は Hermite
$$
(e^{α\^x+β\^p})^† = e^{α\^x^†+β\^p^†} = e^{α\^x+β\^p}
$$
である.

### Weyl 順序

生成関数 $\exp(α\^x+β\^p)$ が Weyl 変換で $\exp(αx+βp)$ に戻ることを使うと, 任意の Hamiltonian 演算子を Weyl 順序に並び替えることができる.

:::screen

Weyl 順序とは, 正準変数の単項式 $\^x^m\^p^n$ を一意に並び替える操作であって,
$$
\{\^x^n\^p^m\}_{\mathrm{W}} ≡ \left. \pdv{{}^n}{α^n} \pdv{{}^m}{β^m} \exp(α\^x + β\^p) \right|_{α=β=0}
$$
で定義される. また, 正準変数の多項式に対しては線形であるように定義する.

古典的 Hamiltonian $H(x,p,t)$ の任意の順序に対する量子化 $H(\^x,\^p,t)$ に対して Weyl 順序を取ったものは $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ と書かれる. これを Weyl 変換をすると
$$
W[\{H(\^x,\^p,t)\}_{\mathrm{W}}] = H(x,p,t)
$$
となって, Weyl 変換の単射性から $\{H(\^x,\^p,t)\}_{\mathrm{W}}$ は Weyl 変換によって元の $H(x,p,t)$ に戻る唯一の順序である.

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

ところで, 生成関数 $\exp(α\^x+β\^p)$ は単項式の Weyl 順序で
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
  \{\^x^2\^p^0\}_{\mathrm{W}} = \^x^2, \quad \{\^x^0\^p^2\}_{\mathrm{W}} = \^p^2, \\
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
となることが, 単純な計算によってわかる. 実は, $\^x^n$ と $\^p^m$ を考えられる全ての並び替えを足して, その組合せの数 ${}_{n+m}C_m = \pmqty{n+m \\ m}$ で割れば得られるため, 慣れればすぐに Weyl 順序 $\{\^x^n\^p^m\}_{\mathrm{W}}$ を求めることができる.

### 応用: 経路積分表示

Weyl 順序という当初の目標は達せられた. 最後に, Weyl 順序の有名な応用例を見ていく. その前に, Weyl 変換を応用しやすい形に変形しよう. Weyl 変換が $\left\langle x+\frac{y'}{2} \middle| H(\^x,\^p,t) \middle| x-\frac{y'}{2} \right\rangle$ の $y'$ から $p$ への逆 Fourier 変換であることに気付けば, $H_{\mathrm{W}} (x,p,t)$ を $p$ から $y$ へ Fourier 変換して
$$
\left\langle x+\frac{y}{2} \middle| H(\^x,\^p,t) \middle| x-\frac{y}{2} \right\rangle = \frac1{2π\hbar} ∫\d{p}\ e^{ipy/\hbar} H_{\mathrm{W}} (x,p,t)
$$
となることがわかる. ここで, 変数を $\displaystyle (x,y)↦(x_i,x_f)=\pqty{x-\frac{y}2, x+\frac{y}2}$ で置き換えれば,
$$
⟨x_f|H(\^x,\^p,t)|x_i⟩ = ∫\frac{\d{p}}{2π\hbar} e^{ip(x_f-x_i)/\hbar} H_{\mathrm{W}} \pqty{\frac{x_f + x_i}{2}, p, t}
$$
となって, 応用しやすい形になる[^p].

[^p]: 運動量の固有ケットによる表示に対しても同様に
    $$
    ⟨p_f|H(\^x,\^p,t)|p_i⟩ = ∫\frac{\d{x}}{2π\hbar} e^{-i(p_f-p_i)x/\hbar} H_{\mathrm{W}} \pqty{x, \frac{p_f + p_i}{2}, t}
    $$
    が得られる.

いよいよ Weyl 順序の応用を考える. 時刻 $t_i$ に位置 $x_i$ で粒子が観測された状態 $|x_i,t_i⟩$ に対し, 時刻 $t_f$ に座標 $x_f$ で粒子が観測される状態 $|x_f,t_f⟩$ への確率振幅(遷移振幅)は
$$
⟨x_f,t_f|x_i,t_i⟩ = ⟨x_f|\^U(t_f,t_i)|x_i⟩
$$
で与えられる. ただし, $\^U(t_f,t_i)$ は時間発展演算子であって, よく知られているように系の Hamiltonian 演算子 $H(\^x,\^p,t)$ を使って
$$
\^U(t_f,t_i) ≡ T \exp \bqty{\frac1{i{\hbar}} ∫_{t_i}^{t_f} \d{t} H(\^x,\^p,t)}
$$
と書かれる[^T]. この確率振幅に対し, 時間 $t_i$, $t_f$ 間を $N$ 分割
$$
Δt ≡ \frac{t_f-t_i}{N}, \quad t_j ≡ t_i + nΔt, \quad x_j ≡ x(t_j). \quad t_0 ≡ t_i, \quad \ t_N ≡ t_f
$$
して, 完全系 $∫\d{q_j}|x_j,t_j⟩⟨x_j,t_j| = 1$ を順に挟めば,
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= ∫\d{x_1} ⋯ ∫\d{x_{N-1}} ⟨x_f,t_f|x_{N-1},t_{N-1}⟩⟨x_{N-1},t_{N-1}|⋯|x_1,t_1⟩⟨x_1,t_1|x_i,t_i⟩ \\
    &= ∫\d{x_1} ⋯ ∫\d{x_{N-1}} \pqty{∏_{j=0}^{N-1} ⟨x_{j+1},t_{j+1}|x_j,t_j⟩} \\
\end{aligned}
$$
となる. $N$ が十分大きければ, それぞれの $⟨x_{j+1},t_{j+1}|x_j,t_j⟩=⟨x_{j+1}|\^U(t_{j+1},t_j)|x_j⟩$ の時間発展演算子の積分は時間間隔 $Δt$ の1次までの近似で
$$
⟨x_{j+1},t_{j+1}|x_j,t_j⟩ = ⟨x_{j+1}|\bqty{1-\frac{i}{{\hbar}} Δt H(\^x,\^p,t_j)}|x_j⟩
$$
とできる. ここで, $H(\^x,\^p,t_j)$ が Weyl 順序であれば, 古典的 Hamiltonian $H(x,p,t)$ に対して,
$$
⟨x_{j+1}|H(\^x,\^p,t_j)|x_j⟩ = ∫\frac{\d{p_j}}{2π\hbar} e^{ip_j(x_{j+1}-x_j)/\hbar} H\pqty{\frac{x_{j+1}+x_j}{2}, p_j,t_j}
$$
を満たすから, それぞれの確率振幅は
$$
\begin{aligned}
  ⟨x_{j+1},t_{j+1}|x_j,t_j⟩
    &= ∫\frac{\d{p_j}}{2π\hbar} e^{ip_j(x_{j+1}-x_j)/\hbar} \bqty{1-\frac{i}{{\hbar}} Δt H\pqty{\frac{x_{j+1}+x_j}{2}, p_j,t_j}} \\
    &= ∫\frac{\d{p_j}}{2π\hbar} \exp \qty{\frac{i}{{\hbar}} Δt \bqty{p_j\frac{x_{j+1}-x_j}{Δt} - H\pqty{\frac{x_{j+1}+x_j}{2}, p_j,t_j}}} \\
\end{aligned}
$$
と求まる. 結局, $|x_i,t_i⟩$ から $|x_f,t_f⟩$ への遷移振幅は
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= ∫\d{x_1} ⋯ ∫\d{x_{N-1}} \pqty{∏_{j=0}^{N-1} ∫\frac{\d{p_j}}{2π\hbar} \exp \qty{\frac{i}{{\hbar}} Δt \bqty{\frac{x_{j+1}-x_j}{Δt}p_j - H\pqty{\frac{x_{j+1}+x_j}{2}, p_j,t_j}}}} \\
    &= ∫\frac{\d{p_0}}{2π\hbar} ∏_{j=1}^{N-1} ∫\frac{\d{x_j}\d{p_j}}{2π\hbar} \exp \qty{\frac{i}{{\hbar}} ∑_{j=0}^{N-1} Δt \bqty{\frac{x_{j+1}-x_j}{Δt}p_j - H\pqty{\frac{x_{j+1}+x_j}{2}, p_j,t_j}}} \\
\end{aligned}
$$
と書ける. [汎関数積分の計算法](./functional#%E6%B1%8E%E9%96%A2%E6%95%B0%E7%A9%8D%E5%88%86)を思い出せば, $N→∞$ の極限で
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= ∫_{x_i}^{x_f} \mathcal{D}x ∫ \mathcal{D}p \ \exp \qty{\frac{i}{\hbar} ∫_{t_i}^{t_f} \d{t} \Big[ \.x p - H(x,p,t) \Big] } \\
    &≡ ∫_{x_i}^{x_f} \mathcal{D}x ∫ \mathcal{D}p \ \exp \pqty{\frac{i}{\hbar} S[x,p]}
\end{aligned}
$$
と簡潔な形に書くこともできる. これらは**位相空間での経路積分表示**と呼ばれており, 正準量子化法から導かれたにも関わらず c-数のみの積分で構成されていることが特徴である.

さらに $p$ 積分を実行しよう. 今, Hamitonian が非相対論的
$$
H = \frac{p^2}{2m} + V(x)
$$
であるとすれば, 指数関数の肩の被積分関数は
$$
\.x p - H(x,p,t) = \.x p - \frac{p^2}{2m} - V(x) = - \frac{(p-m\.x)^2}{2m} + \frac{m}2 \.x^2 - V(x)
$$
と平方完成できて, 求める遷移振幅は
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= ∫\frac{\d{p_0}}{2π\hbar} ∏_{j=1}^{N-1} ∫\frac{\d{x_j}\d{p_j}}{2π\hbar} \\
    &\qquad × \exp \qty{\frac{i}{{\hbar}} ∑_{j=0}^{N-1} Δt \bqty{- \frac{(p_j-m(x_{j+1}-x_j)/Δt)^2}{2m} + \frac{m}2 \pqty{\frac{x_{j+1}-x_j}{Δt}}^2 - V\pqty{\frac{x_{j+1}+x_j}{2}}}} \\
\end{aligned}
$$
となる. $p$ に関する積分は単純な Fresnel 積分になって,
$$
\begin{aligned}
   &\ \pqty{∏_{j=0}^{N-1} ∫\frac{\d{p_j}}{2π\hbar}} \exp \qty{\frac{i}{{\hbar}} ∑_{j=0}^{N-1} Δt \bqty{- \frac{(p_j-m(x_{j+1}-x_j)/Δt)^2}{2m}}} \\
  =&\ ∏_{j=0}^{N-1} ∫\frac{\d{p_j}}{2π\hbar} \exp \qty{- i \frac{Δt}{2m{\hbar}} \pqty{p_j-m\frac{x_{j+1}-x_j}{Δt}}^2} \\
  =&\ ∏_{j=0}^{N-1} \frac1{2π\hbar} \sqrt{\frac{2πm\hbar}{iΔt}} = \pqty{\frac{m}{2πi\hbarΔt}}^{N/2} \\
\end{aligned}
$$
と計算できるから, 結局
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= \pqty{\frac{m}{2πi\hbarΔt}}^{N/2} ∏_{j=1}^{N-1} ∫\d{x_j} \exp \qty{\frac{i}{{\hbar}} ∑_{j=0}^{N-1} Δt \bqty{\frac{m}2 \pqty{\frac{x_{j+1}-x_j}{Δt}}^2 - V\pqty{\frac{x_{j+1}+x_j}{2}}}}, \\
\end{aligned}
$$
あるいは $N→∞$ の極限で, 汎関数積分
$$
\begin{aligned}
  ⟨x_f,t_f|x_i,t_i⟩
    &= ∫_{x_i}^{x_f} \mathcal{D}x \ \exp \qty{\frac{i}{\hbar} ∫_{t_i}^{t_f} \d{t} \Big[ \frac{m}2 \.x^2 - V(x) \Big] } \\
    &= ∫_{x_i}^{x_f} \mathcal{D}x \ \exp \bqty{\frac{i}{\hbar} ∫_{t_i}^{t_f} \d{t} L(x,\.x) } \\
    &≡ ∫_{x_i}^{x_f} \mathcal{D}x \ \exp \pqty{\frac{i}{\hbar} S[x]}
\end{aligned}
$$
と書ける. これらは**配位空間での経路積分表示**と呼ばれている.

[^T]: $T$ は時間順序積であって, 演算子の積を時間の順序関係に応じて
    $$
    T \^A(t_1) \^B(t_2) = \begin{cases}
      \^A(t_1) \^B(t_2), & (t_1 > t_2) \\
      \^B(t_2) \^A(t_1). & (t_2 > t_1) \\
    \end{cases}
    $$
    と並び替える.

### 参考文献

- 杉田 勝実, 岡本 良夫, 関根 松夫. 『経路積分と量子電磁力学』 (森北出版, 1998)
- 九後 汰一郎. 『ゲージ場の量子論 1』 (培風館, 1989)
