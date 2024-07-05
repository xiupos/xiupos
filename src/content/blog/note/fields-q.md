---
title : 場の量子論ノート
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 正準量子化

:::screen

場の解析力学における Poisson 括弧 $\{⋅,⋅\}_\mathrm{P}$ に対し, 場の量子論における交換関係 $\displaystyle -i[⋅,⋅]_\mathrm{H}$ が対応するという要請を**正準量子化**という:
$$
\{A,B\}_\mathrm{P} \overset{\text{要請}}{\mapsto} -i[A_\mathrm{H},B_\mathrm{H}].
$$

:::

正準変数 $(ϕ^α(t, \bm{x}), π_α(t, \bm{x}))$ に対して正準量子化すると,
$$
\begin{aligned}
\{ϕ^α(t, \bm{x}), π_β(t, \bm{x}')\}_\mathrm{P} &= δ^α_β δ^3(\bm{x}-\bm{x}'), \\
  \overset{\text{正準量子化}}{⟶}
  - i [{ϕ^α}{}_\mathrm{H}(t, \bm{x}), {π_β}{}_\mathrm{H}(t, \bm{x}')] &= δ^α_β δ^3(\bm{x}-\bm{x}'), \\
  ⇔ \quad [ϕ^α(t, \bm{x}), π_β(t, \bm{x}')] &= i δ^α_β δ^3(\bm{x}-\bm{x}').
\end{aligned}
$$
$$
\begin{aligned}
  \{ϕ^α(t, \bm{x}), ϕ^β(t, \bm{x}')\}_\mathrm{P} = \{π_α(t, \bm{x}), π_β(t, \bm{x}')\}_\mathrm{P} &= 0, \\
  \overset{\text{正準量子化}}{⟶} - i [{ϕ^α}{}_\mathrm{H}(t, \bm{x}), {ϕ^β}{}_\mathrm{H}(t, \bm{x}')] = - i [{π_α}{}_\mathrm{H}(t, \bm{x}), {π_β}{}_\mathrm{H}(t, \bm{x}')] &= 0, \\
  ⇔ \quad [ϕ^α(t, \bm{x}), ϕ^β(t, \bm{x}')] = [π_α(t, \bm{x}), π_β(t, \bm{x}')] &= 0. \\
\end{aligned}
$$
したがって, 演算子 $(ϕ^α(t, \bm{x}), π_α(t, \bm{x}))$ の交換関係が得られる:

:::screen

演算子 $(ϕ^α(t, \bm{x}), π_α(t, \bm{x}))$ は(同時刻)**正準交換関係**と呼ばれる以下の交換関係を満たす:

$$
\begin{gathered}
  [ϕ^α(t, \bm{x}), π_β(t, \bm{x}')] = i δ^α_β δ^3(\bm{x}-\bm{x}'), \\
  [ϕ^α(t, \bm{x}), ϕ^β(t, \bm{x}')] = [π_α(t, \bm{x}), π_β(t, \bm{x}')] = 0. \\
\end{gathered}
$$

:::

### 生成・消滅演算子

:::screen

演算子 $a(\bm{p})$ とその Hermite 共役 $a^†(\bm{p})$ が次の交換関係を満たすとき, $a(\bm{p})$ を**消滅演算子** annihilation operator, $a^†(\bm{p})$ を**生成演算子** creation operator という:
$$
\begin{gathered}
{}[a(\bm{p}), a^†(\bm{p}')] = δ^3(\bm{p}-\bm{p}'), \\
  [a(\bm{p}), a(\bm{p}')] = [a^†(\bm{p}), a^†(\bm{p}')] = 0.
\end{gathered}
$$
また, Hermite 演算子 $n(\bm{p}) ≡ a^†(\bm{p}) a(\bm{p})$ を**数密度演算子**, $N≡∫\d{{}^3 \bm{p}} n(\bm{p}) = ∫\d{{}^3 \bm{p}} a^†(\bm{p}) a(\bm{p})$ を**数演算子** the number operation という.

:::

$N$ の固有値 $c$ に属する固有状態を $|ψ_c⟩$ とする:
$$
N|Ψ_c⟩ = c|Ψ_c⟩.
$$
このとき, $a^†(\bm{p})|Ψ_c⟩$ は固有値 $c+1$ に属する固有状態である:
$$
\begin{aligned}
  Na^†(\bm{p})|Ψ_c⟩
    &= ∫\d{{}^3 \bm{p}'} a^†(\bm{p}') a(\bm{p}') a^†(\bm{p}) |Ψ_c⟩ \\
    &= ∫\d{{}^3 \bm{p}'} a^†(\bm{p}') \big\{ a^†(\bm{p}) a(\bm{p}') + δ^3(\bm{p}'-\bm{p}) \big\} |Ψ_c⟩ \\
    &= a^†(\bm{p}) \pqty{ ∫\d{{}^3 \bm{p}'} a^†(\bm{p}') a(\bm{p}') + 1} |Ψ_c⟩ \\
    &= a^†(\bm{p})(N + 1)|Ψ_c⟩ \\
    &= (c + 1)a^†(\bm{p})|Ψ_c⟩.
\end{aligned}
$$
したがって $|Ψ_{c+1}⟩$ は $a^†(\bm{p})|Ψ_c⟩$ を正規化して,
$$
\begin{gathered}
  |Ψ_{c+1}⟩ = \frac{a^†(\bm{p})|Ψ_c⟩}{\sqrt{⟨Ψ_c|a(\bm{p})a^†(\bm{p})|Ψ_c⟩}} = \frac{a^†(\bm{p})|Ψ_c⟩}{\sqrt{⟨Ψ_c|(N + 1)|Ψ_c⟩}} = \frac{a^†(\bm{p})|Ψ_c⟩}{\sqrt{c+1}}. \\
  ∴ a^†(\bm{p})|Ψ_c⟩ = \sqrt{c+1}|Ψ_{c+1}⟩.
\end{gathered}
$$
また, 同様に $a(\bm{p})|Ψ_c⟩$ は固有値 $c-1$ に属する固有状態である:
$$
\begin{aligned}
  Na(\bm{p})|Ψ_c⟩
    &= ∫\d{{}^3 \bm{p}'} a^†(\bm{p}') a(\bm{p}') a(\bm{p})|Ψ_c⟩ \\
    &= ∫\d{{}^3 \bm{p}'} \qty{a(\bm{p}) a^†(\bm{p}')-δ^3(\bm{p}'-\bm{p})} a(\bm{p}')|Ψ_c⟩ \\
    &= a(\bm{p}) \pqty{ ∫\d{{}^3 \bm{p}'}a^†(\bm{p}')a(\bm{p}') - 1} |Ψ_c⟩ \\
    &= a(\bm{p}) (N - 1) |Ψ_c⟩ \\
    &= (c - 1)a(\bm{p})|Ψ_c⟩.
\end{aligned}
$$
したがって $|Ψ_{c-1}⟩$ は $a(\bm{p})|Ψ_c⟩$ を正規化して,
$$
\begin{gathered}
  |Ψ_{c-1}⟩ = \frac{a(\bm{p})|Ψ_c⟩}{\sqrt{⟨Ψ_c|a^†(\bm{p})a(\bm{p})|Ψ_c⟩}} = \frac{a(\bm{p})|Ψ_c⟩}{\sqrt{⟨Ψ_c|N|Ψ_c⟩}} = \frac{a(\bm{p})|Ψ_c⟩}{\sqrt{c}}. \\
  ∴ a(\bm{p})|Ψ_c⟩ = \sqrt{c}|Ψ_{n-1}⟩.
\end{gathered}
$$
特に $c=0$ のときの状態 $|Ψ_0⟩≡|0⟩$ を真空状態といい, $a(\bm{p})|0⟩ = 0$ を満たす: $⟨0| a^†(\bm{p}) a(\bm{p}) |0⟩ ≥ 0$ かつ
$$
∫\d{{}^3 \bm{p}} ⟨0| a^†(\bm{p}) a(\bm{p}) |0⟩ = ⟨0| N |0⟩ = 0.
$$
$c<0$ は許されない: ある固有値 $c<0$ に属する固有状態 $|Ψ_c⟩$ に対し,
$$
c = ⟨Ψ_c|N|Ψ_c⟩ = ∫\d{{}^3 \bm{p}} ⟨Ψ_c|a^†(\bm{p})a(\bm{p})|Ψ_c⟩ = ∫\d{{}^3 \bm{p}} ⟨a(\bm{p})Ψ_c∣a(\bm{p})Ψ_c⟩ ≥ 0.
$$
ただし $|a(\bm{p})Ψ_c⟩ ≡ a(\bm{p})|Ψ_c⟩$. これは $c<0$ に矛盾する. したがって, $c≥0$ である. また, $c$ が正の非整数とすると, 繰り返し $c$ を左右することで $c$ を負にすることができてしまうから, $c$ は非整数ではない. したがって, $c = 0,1,2,…$.

状態 $|\bm{p}⟩ ≡ a^†(\bm{p})|0⟩$ は対応する粒子の運動量が $\bm{p}$ の 1 粒子状態, $|\bm{p},\bm{p}'⟩ ≡ a^†(\bm{p})a^†(\bm{p}')|0⟩$ は運動量 $\bm{p}$, $\bm{p}'$ の 2 粒子状態である. 一般に基底 $\{|\bm{p}_1,\bm{p}_2,…⟩\}$ で張られる Hilbert 空間を Fock 空間という.

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場 $ϕ(x)$ と一般化運動量 $π(x)$ の平面波展開は
$$
\begin{aligned}
  ϕ(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}, \\
  π(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} (-i) p_0 \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}}. \\
\end{aligned}
$$
または $a(\bm{p})$, $a^*(\bm{p})$ について解いて,
$$
\begin{aligned}
  a(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}, \\
  a^{*}(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) - i π(x)} e^{-ipx}. \\
\end{aligned}
$$
これらの量を量子化する. 同時刻交換関係 $[ϕ(t,\bm{x}), π(t,\bm{x}')] = iδ^3(\bm{x}-\bm{x}')$ の下で $[a(\bm{p}), a^†(\bm{p})]$ の括弧積を計算すると,
$$
\begin{aligned}
 &\ [a(\bm{p}), a^†(\bm{p'})] \\
=&\ \bqty{∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \qty{p_0 ϕ(t,\bm{x}) + i π(t,\bm{x})} e^{i(p_0t - \bm{p}⋅\bm{x})}, ∫ \frac{\d{{}^3 \bm{x}'}}{\sqrt{(2π)^3 2p'_0}} \qty{p_0' ϕ(t,\bm{x}') - i π(t,\bm{x}')} e^{-i(p_0't - \bm{p}'⋅\bm{x}')}} \\
=&\ ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{x}'}}{\sqrt{(2π)^3 2p'_0}} \bqty{p_0 ϕ(t,\bm{x}) + i π(t,\bm{x}), p_0' ϕ(t,\bm{x}') - i π(t,\bm{x}')} e^{i(p_0t - \bm{p}⋅\bm{x})} e^{-i(p_0't - \bm{p}'⋅\bm{x}')} \\
=&\ ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{x}'}}{\sqrt{(2π)^3 2p'_0}} e^{i(p_0t - \bm{p}⋅\bm{x})} e^{-i(p_0't - \bm{p}'⋅\bm{x}')} \\
 &\ \qquad \quad × \qty{
        p_0 p_0' \bqty{ϕ(t,\bm{x}), ϕ(t,\bm{x}')}
      - i p_0 \bqty{ϕ(t,\bm{x}),π(t,\bm{x}')}
      + i p_0' \bqty{π(t,\bm{x}), ϕ(t,\bm{x}')}
      + \bqty{π(t,\bm{x}), π(t,\bm{x}')}
    } \\
=&\ ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{x}'}}{\sqrt{(2π)^3 2p'_0}} e^{i(p_0t - \bm{p}⋅\bm{x})} e^{-i(p_0't - \bm{p}'⋅\bm{x}')} \qty{p_0 δ^3(\bm{x} - \bm{x}') + p_0' δ^3(\bm{x} - \bm{x}')} \\
=&\ ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{x}'}}{\sqrt{(2π)^3 2p'_0}} e^{i(p_0t - \bm{p}⋅\bm{x})} e^{-i(p_0't - \bm{p}'⋅\bm{x}')} (p_0 + p_0') δ^3(\bm{x} - \bm{x}') \\
=&\ ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \frac{1}{\sqrt{(2π)^3 2p'_0}} e^{i(p_0t - \bm{p}⋅\bm{x})} e^{-i(p_0't - \bm{p}'⋅\bm{x})} (p_0 + p_0') \\
=&\ \frac{p_0 + p_0'}{\sqrt{4p_0p'_0}} e^{i(p_0 - p_0')t} ∫ \frac{\d{{}^3 \bm{x}}}{(2π)^3} e^{-i(\bm{p} - \bm{p}')⋅\bm{x}}
=   \frac{p_0 + p_0'}{\sqrt{4p_0p'_0}} e^{i(p_0 - p_0')t} δ^3(\bm{p} - \bm{p}') \\
=&\ δ^3(\bm{p} - \bm{p}').
\end{aligned}
$$
したがって $a(\bm{p})$, $a^†(\bm{p})$ の交換関係は,
$$
\begin{gathered}
{}[a(\bm{p}), a^†(\bm{p}')] = δ^3(\bm{p}-\bm{p}'), \\
  [a(\bm{p}), a(\bm{p}')] = [a^†(\bm{p}), a^†(\bm{p}')] = 0.
\end{gathered}
$$
したがって, $a(\bm{p})$, $a^†(\bm{p})$ はそれぞれ消滅・生成演算子である. また, Hermite 演算子
$$
N ≡ ∫ \d{{}^3 \bm{p}} a^†(\bm{p}) a(\bm{p})
$$
は数演算子である.

また, 場 $ϕ(x)$ を消滅演算子で構成される部分 $ϕ^{(+)}(x)$ と消滅演算子で構成される部分 $ϕ^{(-)}(x)$ に分ける:
$$
\begin{gathered}
  ϕ(x) = ϕ^{(+)}(x) + ϕ^{(-)}(x), \\
  ϕ^{(+)}(x) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} a(\bm{p})  e^{-ipx}, \\
  ϕ^{(-)}(x) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} a^†(\bm{p}) e^{ipx}.
\end{gathered}
$$
このとき, 場の積は,
$$
\begin{aligned}
  ϕ(x)ϕ(y)
    &= \qty{ϕ^{(+)}(x) + ϕ^{(-)}(x)}\qty{ϕ^{(+)}(y) + ϕ^{(-)}(y)} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} \\
      &\qquad × \Big\{\ e^{-ipx} a(\bm{p}) e^{-ip'y} a(\bm{p}') + e^{-ipx} a(\bm{p}) e^{ip'y} a^†(\bm{p}') \\
      &\qquad \qquad  + e^{ipx} a^†(\bm{p}) e^{-ip'y} a(\bm{p}') + e^{ipx} a^†(\bm{p}) e^{ip'y} a^†(\bm{p}') \Big\}. \\
\end{aligned}
$$
また, これの真空期待値は,
$$
\begin{aligned}
  ⟨0| ϕ(x)ϕ(y) |0⟩
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} \\
      &\qquad × \Big\{\ ⟨0| e^{-ipx} a(\bm{p}) e^{-ip'y} a(\bm{p}') |0⟩ + ⟨0| e^{-ipx} a(\bm{p}) e^{ip'y} a^†(\bm{p}') |0⟩ \\
      &\qquad \qquad  + ⟨0| e^{ipx} a^†(\bm{p}) e^{-ip'y} a(\bm{p}') |0⟩ + ⟨0| e^{ipx} a^†(\bm{p}) e^{ip'y} a^†(\bm{p}') |0⟩ \Big\}. \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} e^{-ipx} e^{ip'y} ⟨0| a(\bm{p}) a^†(\bm{p}') |0⟩. \\
    & \quad \pqty{∵ a(\bm{p}) |0⟩ = ⟨0| a^†(\bm{p}) = 0} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} e^{-ipx} e^{ip'y} ⟨0| \big\{ a^†(\bm{p}') a(\bm{p}) + δ^3(\bm{p}-\bm{p}') \big\} |0⟩. \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} e^{-ipx} e^{ip'y} δ^3(\bm{p}-\bm{p}'). \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{(2π)^3 2p_0} e^{-ip(x-y)}. \\
\end{aligned}
$$
あるいは, 場の交換積の真空期待値は,
$$
\begin{aligned}
  ⟨0| [ϕ(x), ϕ(y)] |0⟩
    &= ⟨0| ϕ(x)ϕ(y) |0⟩ - ⟨0| ϕ(y)ϕ(x) |0⟩ \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{(2π)^3 2p_0} \pqty{e^{-ip(x-y)} - e^{ip(x-y)}}.
\end{aligned}
$$

### 正規積

:::screen

場の積で与えられる量については, 量子化後に生成演算子が消滅演算子の左側に来るよう, 古典論の段階で並び換えられていることを要請する. この操作を正規順序積と呼ばれる記号 ${:}…{:}$ で表す; 例えば, ${:}a_1 a_2^† a_3 a_4^†{:} = a_2^† a_4^† a_1 a_3$.

:::

正規積の真空期待値はゼロである: 演算子 ${:}A{:} = a^†…a^†a…a$ に対して,
$$
⟨0|{:}A{:}|0⟩ = ⟨0|a^†…a^†a…a|0⟩ = 0.
$$
ただし, $a|0⟩ = ⟨0|a^† = 0$ であることを用いた. 生成演算子, 消滅演算子のみで構成される演算子も同様である.

#### 例: 実 Klein-Gordon 場

実 Klein-Gordon 場
$$
ϕ(x) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}
$$
の場の積は
$$
\begin{aligned}
  ϕ(x)ϕ(y)
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} \\
      &\qquad × \Big\{\ e^{-ipx} a(\bm{p}) e^{-ip'y} a(\bm{p}') + e^{-ipx} a(\bm{p}) e^{ip'y} a^†(\bm{p}') \\
      &\qquad \qquad  + e^{ipx} a^†(\bm{p}) e^{-ip'y} a(\bm{p}') + e^{ipx} a^†(\bm{p}) e^{ip'y} a^†(\bm{p}') \Big\}. \\
\end{aligned}
$$
これに正規積を適用させると,
$$
\begin{aligned}
  {:}ϕ(x)ϕ(y){:}
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} \\
      &\qquad × \Big\{\ {:} e^{-ipx} a(\bm{p}) e^{-ip'y} a(\bm{p}') {:} + {:} e^{-ipx} a(\bm{p}) e^{ip'y} a^†(\bm{p}') {:} \\
      &\qquad \qquad  + {:} e^{ipx} a^†(\bm{p}) e^{-ip'y} a(\bm{p}') {:} + {:} e^{ipx} a^†(\bm{p}) e^{ip'y} a^†(\bm{p}') {:} \Big\}. \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p}'}}{\sqrt{(2π)^3 2p_0'}} \\
      &\qquad × \Big\{\ e^{-ipx} e^{-ip'y} a(\bm{p}) a(\bm{p}') + e^{ip'y} e^{-ipx} a^†(\bm{p}') a(\bm{p}) \\
      &\qquad \qquad  + e^{ipx} e^{-ip'y} a^†(\bm{p}) a(\bm{p}') + e^{ipx} e^{ip'y} a^†(\bm{p}) a^†(\bm{p}') \Big\}. \\
\end{aligned}
$$

また, 実 Klein-Gordon 場の Hamiltonian を $a(\bm{p})$, $a^*(\bm{p})$ で表示すると,
$$
H[ϕ, π] = ∫ \d{{}^3 \bm{p}} p_0 \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
$$
この Hamiltonian を演算子化する: $[a(\bm{p}), a^†(\bm{p}')] = δ^3(\bm{p}-\bm{p}')$ に注意して,
$$
\begin{aligned}
  H &= ∫ \d{{}^3 \bm{p}} p_0 \qty{a^†(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^†(\bm{p})]} \\
    &= ∫ \d{{}^3 \bm{p}} p_0 a^†(\bm{p}) a(\bm{p}) + \frac12 ∫ \d{{}^3 \bm{p}} p_0 δ^3(0).
\end{aligned}
$$
第二項は演算子を含まない無限 c-数であり, 真空状態のエネルギーである: $⟨0|H|0⟩ = \frac12 ∫ \d{{}^3 \bm{p}} p_0 δ^3(0)$. これは正規順序積を用いることで除くことができる: ${:}[a(\bm{p}), a^†(\bm{p})]{:} = 0$ に注意して,
$$
\begin{aligned}
  H &= {:}∫ \d{{}^3 \bm{p}} p_0 \qty{a^†(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^†(\bm{p})]}{:} \\
    &= ∫ \d{{}^3 \bm{p}} p_0 a^†(\bm{p}) a(\bm{p}).
\end{aligned}
$$
あるいは同様にして, 4 元全運動量演算子 $P = (H,\bm{P})$ は,
$$
P_μ = ∫ \d{{}^3 \bm{p}} p_μ a^†(\bm{p}) a(\bm{p}).
$$
さて, 真空状態は $a(\bm{p})|0⟩ = 0$ を満たすが, 真空状態に 4 元全運動量演算子を作用させると,
$$
P_μ|0⟩ = ∫ \d{{}^3 \bm{p}} p_μ a^†(\bm{p}) a(\bm{p}) |0⟩ = 0.
$$
したがって, 真空状態は系全体のエネルギーと運動量が $0$ である状態である. また, 真空状態に生成演算子 $a^†(\bm{p})$ を作用させた状態 $|\bm{p}⟩ = a^†(\bm{p})|0⟩$ について, 4 元全運動量演算子を作用させると
$$
\begin{aligned}
  P_μ|\bm{p}⟩
    &= P_μ a^†(\bm{p})|0⟩ \\
    &= ∫ \d{{}^3 \bm{p'}} p_μ' a^†(\bm{p}') a(\bm{p}') a^†(\bm{p}) |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_μ' a^†(\bm{p}') \bqty{a^†(\bm{p}) a(\bm{p}') + δ^3(\bm{p} - \bm{p}')} |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_μ' a^†(\bm{p}') \bqty{a^†(\bm{p}) a(\bm{p}') + δ^3(\bm{p} - \bm{p}')} |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_μ' \bqty{a^†(\bm{p}) a^†(\bm{p}') a(\bm{p}') + a^†(\bm{p}') δ^3(\bm{p} - \bm{p}')} |0⟩ \\
    &= p_μ a^†(\bm{p}) |0⟩ = p_μ |\bm{p}⟩. \\
\end{aligned}
$$
また, 数演算子を作用させると同様に $N|\bm{p}⟩ = |\bm{p}⟩$. したがって, $|\bm{p}⟩$ は 4 元運動量 $p=(p_0, \bm{p})$ の粒子が $1$ 個存在する状態と解釈ができる. 同様に, $|\bm{p}_1,…,\bm{p}_n⟩ ≡ a^†(\bm{p}_1)⋯a^†(\bm{p}_n)|0⟩$ は 4 元運動量 $p_1,…,p_n$ の $n$ 個の粒子が存在する状態である.

### 伝播関数

:::screen

場 $ϕ(x)$ に対し,
$$
Δ_\mathrm{F}(x-y) ≡ ⟨0|Tϕ(x)ϕ(y)|0⟩
$$
を **Feynman 伝播関数** Feynman propagator という.

:::

#### 例: 実 Klein-Gordon 場

場の積の真空期待値 $\displaystyle ⟨0| ϕ(x)ϕ(y) |0⟩ = ∫ \frac{\d{{}^3 \bm{p}}}{(2π)^3 2p_0} e^{-ip(x-y)}$ より,
$$
\begin{aligned}
   &\ ⟨0| Tϕ(x)ϕ(y) |0⟩ \\
  =&\ θ(x^0-y^0) ⟨0| ϕ(x)ϕ(y) |0⟩ + θ(y^0-x^0) ⟨0| ϕ(y)ϕ(x) |0⟩ \\
  =&\ θ(x^0-y^0) ∫ \frac{\d{{}^3 \bm{p}}}{(2π)^3 2p_0} e^{-ip(x-y)} + θ(y^0-x^0) ∫ \frac{\d{{}^3 \bm{p}}}{(2π)^3 2p_0} e^{ip(x-y)} \\
   &\ \quad \pqty{\text{$\displaystyle θ(x^0-y^0) = \frac{i}{2π} ∫_{-∞}^∞ \d{α} \frac{e^{-iα(x^0-y^0)}}{α+iε'}$, $\displaystyle θ(y^0-x^0) = \frac{-i}{2π} ∫_{-∞}^∞ \d{α} \frac{e^{-iα(x^0-y^0)}}{α-iε'}$ を用いて}} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{α}}}{(2π)^4 2p_0} \frac{e^{-iα(x^0-y^0)}}{α+iε'} e^{-ip(x-y)} - i ∫ \frac{\d{{}^3 \bm{p} \d{α}}}{(2π)^4 2p_0} \frac{e^{-iα(x^0-y^0)}}{α-iε'} e^{ip(x-y)} \\
   &\ \quad \pqty{\text{$p_0 ≡ \sqrt{|\bm{p}|^2 + m^2}$ に注意し, 第一項 $α↦\~p_0+p_0$, 第二項 $α↦\~p_0-p_0$, $\bm{p}↦-\bm{p}$}} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4 2p_0} \frac{e^{-i(\~p_0-p_0)(x^0-y^0)}}{\~p_0-p_0+iε'} e^{-ip_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})}
    \ - i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4 2p_0} \frac{e^{-i(\~p_0+p_0)(x^0-y^0)}}{\~p_0+p_0-iε'} e^{ip_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4 2p_0} \pqty{\frac{1}{\~p_0-p_0+iε'} - \frac{1}{\~p_0+p_0-iε'}} e^{-i\~p_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})} \\
   &\ \quad \pqty{\text{$\displaystyle \frac{p_0-iε}{p_0}=1$ として通分}} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4} \frac{e^{-i\~p_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})}}{\~p_0^2-(p_0-iε')^2} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4} \frac{e^{-i\~p_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})}}{\~p_0^2-p_0^2-ip_0ε'} \\
  =&\ i ∫ \frac{\d{{}^3 \bm{p} \d{\~p_0}}}{(2π)^4} \frac{e^{-i\~p_0(x^0-y^0)} e^{i\bm{p}⋅(\bm{x}-\bm{y})}}{\~p_0^2-|\bm{p}|^2 + m^2-iε'} \\
   &\ \quad \pqty{\text{$ε≡p_0ε'$ として, $\~p_0$ を新たに $p_0$ とすれば}} \\
  =&\ i ∫ \frac{\d{{}^4 p}}{(2π)^4} \frac{e^{-ip(x-y)}}{p^2 + m^2-iε}. \\
\end{aligned}
$$
ただし, このときの $p_0$ は $p_0=\sqrt{|\bm{p}|^2 + m^2}$ とは異なることに注意. したがって,
$$
Δ_\mathrm{F}(x-y) = i ∫ \frac{\d{{}^4 p}}{(2π)^4} \frac{e^{-ip(x-y)}}{p^2 + m^2-iε}.
$$

### Feynman 図形

${ϕ}^4$ モデルの Lagrangian 密度
$$
\begin{gathered}
  ℒ = \frac12 ∂_μ ϕ ∂^μ ϕ - \frac12 m^2 {ϕ}^2 - λ{ϕ}^4.
\end{gathered}
$$

### 参考文献

- 桂 太郎 『新版 演習 場の量子論』 (サイエンス社, 2006)
- 日置 善郎 『場の量子論 -摂動計算の基礎- (第3版)』 (吉岡書店, 2022)
- 日置 善郎, [場の量子論への第一歩](https://web.archive.org/web/20221207095725if_/https://www.phys.chuo-u.ac.jp/labs/inami/seminarfile/2011/Hioki.pdf), 2011.
