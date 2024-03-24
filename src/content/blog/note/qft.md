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
また一般化運動量 $π ≡ ∂ℒ/∂ϕ$ は
$$
π = \.{ϕ}.
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
まとめると,
$$
\begin{aligned}
  ϕ(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{a(\bm{p}) e^{-ipx} + a^*(\bm{p}) e^{ipx}}, \\
  π(x) &= ∫ \frac{\d{{}^3 \bm{p}}}{\sqrt{(2π)^3 2p_0}} \bqty{-ip_0 a(\bm{p}) e^{-ipx} + ip_0 a^*(\bm{p}) e^{ipx}}, \\
  a(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) + i π(x)} e^{ipx}, \\
  a^{*}(\bm{p}) &= ∫ \frac{\d{{}^3 \bm{x}}}{\sqrt{(2π)^3 2p_0}} \bqty{p_0 ϕ(x) - i π(x)} e^{-ipx}.
\end{aligned}
$$

実スカラー場の正準量子化をする. $ϕ(x)$, $π(x)$ について以下の同時刻交換関係を要請する:
$$
\begin{gathered}
  [ϕ(t,\bm{x}), π(t,\bm{x}')] = iδ^3(\bm{x}-\bm{x}'), \\
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
 &\ \qquad \qty{
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
  [a(\bm{p}), a^†(\bm{p}')] = δ^3(\bm{p}-\bm{p}'), \\
  [a(\bm{p}), a(\bm{p}')] = [a^†(\bm{p}), a^†(\bm{p}')] = 0.
\end{gathered}
$$

### 参考文献

- 桂 太郎 『新版 演習 場の量子論』 (サイエンス社, 2006)
- 日置 善郎 『場の量子論 -摂動計算の基礎- (第3版)』 (吉岡書店, 2022)
- 日置 善郎, [場の量子論への第一歩](https://www.phys.chuo-u.ac.jp/labs/inami/seminarfile/2011/Hioki.pdf), 2011.
