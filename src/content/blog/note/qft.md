---
title : 場の量子論
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 正準量子化

### 実スカラー場の量子化

実スカラー場
$$
ℒ(ϕ, ∂_μ ϕ) = \frac12 ∂_μ ϕ ∂^μ ϕ - \frac12 m^2 {ϕ}^2
$$
の運動方程式は
$$
(□ + m^2) ϕ = 0,
$$
また, 一般化運動量 $π ≡ ∂ℒ/∂ϕ$ は
$$
π = \.{ϕ}.
$$
また, Hamiltonian は
$$
H[ϕ, π] = ∫ \d{{}^3 \bm{x}} \bqty{\frac12 π^2 + \frac12 |\grad ϕ_α|^2 + \frac12 m^2 ϕ^2}.
$$

実スカラー場 $ϕ(t,\bm{x})$ を 3 次元 Fourier 級数展開して,
$$
ϕ(t,\bm{x}) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i \bm{p}⋅\bm{x}}.
$$
ただし, $q(t, \bm{p})$ は展開係数で,
運動方程式に代入すると,
$$
\begin{aligned}
 &\ (□ + m^2) ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ \pdv{{}^2}{t^2} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} - ∇^2 ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + m^2 ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \"q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} |\bm{p}|^2 q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} + ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} m^2 q(t, \bm{p}) e^{i\bm{p}⋅\bm{x}} \\
=&\ ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{\"q_{\bm{p}} + (\bm{p}^2 + m^2) q_{\bm{p}}} e^{i\bm{p}⋅\bm{x}} = 0.
\end{aligned}
$$
したがって, $p_0 ≡ \sqrt{|\bm{p}|^2 + m^2} > 0$ として $\"q(t, \bm{p}) + (p_0)^2 q(t, \bm{p}) = 0$ だから, $q(t, \bm{p})$ の一般解は
$$
q(t, \bm{p}) = q_1(\bm{p}) e^{-ip_0t} + q_2(\bm{p}) e^{ip_0t}.
$$
$ϕ(t,\bm{x})$ の展開を $q_1(\bm{p})$, $q_2(\bm{p})$ で書き直して,
$$
\begin{aligned}
  ϕ(t,\bm{x})
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i p_0t} + q_2(\bm{p}) e^{i p_0t}} e^{i \bm{p}⋅\bm{x}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i (p_0t - \bm{p}⋅\bm{x})} + q_2(\bm{p}) e^{i (p_0t + \bm{p}⋅\bm{x})}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-i (p_0t - \bm{p}⋅\bm{x})} + q_2(-\bm{p}) e^{i (p_0t - \bm{p}⋅\bm{x})}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1(\bm{p}) e^{-ipx} + q_2(-\bm{p}) e^{ipx}}.
    \quad (px ≡ p_μx^μ = p_0t - \bm{p}⋅\bm{x})
\end{aligned}
$$
ここで, $ϕ(x)$ が実スカラー場であることから $ϕ(x) = ϕ^*(x)$.
$$
\begin{aligned}
  ϕ^*(x)
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \bqty{q_1^*(\bm{p}) e^{ipx} + q_2^*(-\bm{p}) e^{-ipx}}
\end{aligned}
$$
であるから,
$$
\begin{aligned}
  \frac{a(\bm{p})}{\sqrt{2p_0}} ≡ \frac{q_1(\bm{p}) + q_2^*(-\bm{p})}{2}, \quad
  \frac{a^*(\bm{p})}{\sqrt{2p_0}} ≡ \frac{q_1^*(\bm{p}) + q_2(-\bm{p})}{2}
\end{aligned}
$$
とすれば, 実スカラー場 $ϕ(x)$ は $a(\bm{p})$, $a^*(\bm{p})$ によって以下のように展開できる:
$$
ϕ(x) = ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}.
$$
また, 一般化運動量 $π(x) = \.ϕ(x)$ は,
$$
\begin{aligned}
  π(x)
    &= \pdv{}{t} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{-ip_0 a(\bm{p}) e^{-ipx} + ip_0 a^*(\bm{p}) e^{ipx}}.
\end{aligned}
$$
$ϕ(x)$ の展開と比較して,
$$
\begin{aligned}
  p_0 ϕ(x) + i π(x)
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} 2p_0 a(\bm{p}) e^{-ipx} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3}} \sqrt{2p_0} a(\bm{p}) e^{-ip_0t} e^{i\bm{p}⋅\bm{x}}. \\
\end{aligned}
$$
$$
∴ \sqrt{2p_0} a(\bm{p}) e^{-ip_0t} = ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3}} \bqty{p_0 ϕ(x) + i π(x)} e^{-i\bm{p}⋅\bm{x}}
$$
したがって $a(\bm{p})$ の表式が得られる:
$$
a(\bm{p}) = ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}.
$$
Hamiltonian を $a(\bm{p})$, $a^*(\bm{p})$ で表記することを考える. $\grad ϕ(x)$ を計算すると,
$$
\begin{aligned}
  \grad ϕ(x)
    &= \grad ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}} \\
    &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} i\bm{p} \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}} \\
\end{aligned}
$$
したがって,
$$
\begin{aligned}
  H &= ∫ \d{{}^3 \bm{x}} \bqty{\frac12 π^2 + \frac12 |\grad ϕ|^2 + \frac12 m^2 ϕ^2} \\
    &= \frac12 ∫ \d{{}^3 \bm{x}} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p'}}}{\sqrt{(2π)^3 2p_0'}} \\
    & \qquad\qquad × \Big[\ \ (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a  (\bm{p}') e^{-i(p+p')x} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a^*(\bm{p}') e^{-i(p-p')x} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a  (\bm{p}') e^{ i(p-p')x} \\
    & \qquad\qquad \quad    + (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a^*(\bm{p}') e^{ i(p+p')x} \Big] \\
    &= \frac12 \sqrt{(2π)^3} ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} ∫ \frac{\d{{}^3 \bm{p'}}}{\sqrt{(2π)^3 2p_0'}} \\
    & \qquad\qquad × \Big[\ \ (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a  (\bm{p}') δ^3(\bm{p}+\bm{p}') e^{-i(p_0+p_0')t} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a  (\bm{p}) a^*(\bm{p}') δ^3(\bm{p}-\bm{p}') e^{-i(p_0-p_0')t} \\
    & \qquad\qquad \quad    + (+ p_0p_0' + \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a  (\bm{p}') δ^3(\bm{p}-\bm{p}') e^{ i(p_0-p_0')t} \\
    & \qquad\qquad \quad    + (- p_0p_0' - \bm{p}⋅\bm{p}' + m^2) a^*(\bm{p}) a^*(\bm{p}') δ^3(\bm{p}+\bm{p}') e^{ i(p_0+p_0')t} \Big] \\
    &= \frac12 ∫ \frac{\d{{}^3 \bm{p}}}{2p_0} \\
    & \qquad\qquad × \Big[\ \ (- p_0^2 + |\bm{p}|^2 + m^2) a  (\bm{p}) a  (-\bm{p}) e^{-2ip_0t} \\
    & \qquad\qquad \quad    + (+ p_0^2 + |\bm{p}|^2 + m^2) a  (\bm{p}) a^*( \bm{p}) \\
    & \qquad\qquad \quad    + (+ p_0^2 + |\bm{p}|^2 + m^2) a^*(\bm{p}) a  ( \bm{p}) \\
    & \qquad\qquad \quad    + (- p_0^2 + |\bm{p}|^2 + m^2) a^*(\bm{p}) a^*(-\bm{p}) e^{ 2ip_0t} \Big] \\
    & \quad \pqty{\text{$p_0^2 = |\bm{p}|^2 + m^2$ に注意する}} \\
    &= \frac12 ∫ \frac{\d{{}^3 \bm{p}}}{2p_0}
       \bqty{2p_0^2 a(\bm{p}) a^*(\bm{p}) + 2p_0^2 a^*(\bm{p}) a(\bm{p})} \\
    &= \frac12 ∫ \d{{}^3 \bm{p}} p_0
       \qty{a(\bm{p}) a^*(\bm{p}) + a^*(\bm{p}) a(\bm{p})} \\
    &= ∫ \d{{}^3 \bm{p}} p_0
       \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
\end{aligned}
$$
ただし $[a(\bm{p}), a^*(\bm{p})] ≡ a(\bm{p}) a^*(\bm{p}) - a^*(\bm{p}) a(\bm{p})$ とした. 式変形で $a(\bm{p})$, $a^*(\bm{p})$ の順序を並び換えしていないことに注意.
まとめると,
$$
\begin{aligned}
  ϕ(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}, \\
  π(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} (-i) p_0 \bqty{a(\bm{p}) e^{-ipx} - a^*(\bm{p}) e^{ipx}}, \\
  a(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}, \\
  a^{*}(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) - i π(x)} e^{-ipx}, \\
  H[ϕ, π] &= ∫ \d{{}^3 \bm{p}} p_0 \qty{a^*(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^*(\bm{p})]}.
\end{aligned}
$$

実スカラー場を正準量子化する. $ϕ(x)$, $π(x)$ について以下の同時刻交換関係を要請する:
$$
\begin{gathered}
{}[ϕ(t,\bm{x}), π(t,\bm{x}')] = iδ^3(\bm{x}-\bm{x}'), \\
  [ϕ(t,\bm{x}), ϕ(t,\bm{x}')] = [π(t,\bm{x}), π(t,\bm{x}')] = 0.
\end{gathered}
$$
また, この同時刻交換関係の下で $[a(\bm{p}), a^†(\bm{p})]$ の括弧積を計算すると,
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
は数演算子である. Hamiltonian を演算子化すると,
$$
\begin{aligned}
  H &= ∫ \d{{}^3 \bm{p}} p_0 \qty{a^†(\bm{p}) a(\bm{p}) + \frac12 [a(\bm{p}), a^†(\bm{p})]} \\
    &= ∫ \d{{}^3 \bm{p}} p_0 a^†(\bm{p}) a(\bm{p}) + \frac12 ∫ \d{{}^3 \bm{p}} p_0 δ^3(0).
\end{aligned}
$$
第二項は演算子を含まない無限 c-数である. これは次の要請を加えることで取り除くことができる: 場の積で与えられる量については, 量子化後に生成演算子が消滅演算子の左側に来るよう, 古典論の段階で並び換えておく. この操作を正規順序積と呼ばれる記号 ${:}…{:}$ で表す; 例えば, ${:}a_1 a_2^† a_3 a_4^†{:} = a_2^† a_4^† a_1 a_3$. 正規順序積を用いると Hamiltonian は,
$$
\begin{aligned}
  H &= {:}∫ \d{{}^3 \bm{x}} \bqty{\frac12 π^2 + \frac12 |\grad ϕ|^2 + \frac12 m^2 ϕ^2}{:} \\
    &= \frac12 ∫ \d{{}^3 \bm{p}} p_0 {:} \qty{a(\bm{p}) a^†(\bm{p}) + a^†(\bm{p}) a(\bm{p})} {:} \\
    &= ∫ \d{{}^3 \bm{p}} p_0 a^†(\bm{p}) a(\bm{p}).
\end{aligned}
$$
さて, 真空状態は $a(\bm{p})|0⟩ = 0$ を満たすが, 真空状態に Hamiltonian を作用させると,
$$
H|0⟩ = ∫ \d{{}^3 \bm{p}} p_0 a^†(\bm{p}) a(\bm{p}) |0⟩ = 0.
$$
したがって, 真空状態はエネルギーが $0$ である状態である. また, 真空状態に生成演算子 $a^†(\bm{p})$ を作用させた状態 $|\bm{p}⟩ = a^†(\bm{p})|0⟩$ について, Hamiltonian を作用させると
$$
\begin{aligned}
  H|\bm{p}⟩
    &= H a^†(\bm{p})|0⟩ \\
    &= ∫ \d{{}^3 \bm{p'}} p_0' a^†(\bm{p}') a(\bm{p}') a^†(\bm{p}) |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_0' a^†(\bm{p}') \bqty{a^†(\bm{p}) a(\bm{p}') + δ^3(\bm{p} - \bm{p}')} |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_0' a^†(\bm{p}') \bqty{a^†(\bm{p}) a(\bm{p}') + δ^3(\bm{p} - \bm{p}')} |0⟩. \\
    &= ∫ \d{{}^3 \bm{p'}} p_0' \bqty{a^†(\bm{p}) a^†(\bm{p}') a(\bm{p}') + a^†(\bm{p}') δ^3(\bm{p} - \bm{p}')} |0⟩ \\
    &= p_0 a^†(\bm{p}) |0⟩ = p_0 |\bm{p}⟩. \\
\end{aligned}
$$
また, 数演算子を作用させると同様に $N|\bm{p}⟩ = |\bm{p}⟩$. したがって, $|\bm{p}⟩$ はエネルギー $p_0$ の粒子が $1$ 個存在する状態と解釈ができる. 同様に, $|\bm{p}_1,…,\bm{p}_n⟩ ≡ a^†(\bm{p}_1)⋯a^†(\bm{p}_n)|0⟩$ はエネルギー $(p_1)_0,…,(p_n)_0$ の $n$ 個の粒子が存在する状態である.

<!-- TODO: 正規積の真空期待値は0 -->
<!-- TODO: Fock空間 -->

### 参考文献

- 桂 太郎 『新版 演習 場の量子論』 (サイエンス社, 2006)
- 日置 善郎 『場の量子論 -摂動計算の基礎- (第3版)』 (吉岡書店, 2022)
- 日置 善郎, [場の量子論への第一歩](https://www.phys.chuo-u.ac.jp/labs/inami/seminarfile/2011/Hioki.pdf), 2011.
