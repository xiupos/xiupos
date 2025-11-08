---
title: デルタ関数と正規分布
author: xiupos
date: \today
pubDate: 2025-11-08T23:30:00+09:00
lang: ja
math: true
preamble: _preamble
---

Dirac のデルタ関数の概形はよく「分散が0の正規分布」と言い表される. 直感的には明らかであるが, ここでは計算によって実際に確かめてみる. 数学的な厳密さは気にしない.

デルタ関数 $δ(x)$ は, 任意の関数 $f(x)$ に対して,
$$
f(x) = ∫ \dd{y}\, f(y) δ(x-y)
$$
が成立する関数 $δ(x)$ として定義される. この式は畳み込み $(f*g)(x)$ $≡ ∫ \dd{y}\, f(y) g(x-y)$ によって
$$
f = f * δ
$$
と簡単に書くことができ, Fourier 変換[^fourier]の畳み込みに関する性質 $\mathcal{F}[f * g] = \mathcal{F}[f] \cdot \mathcal{F}[g]$ から,
$$
\mathcal{F}[f] = \mathcal{F}[f] \cdot \mathcal{F}[δ]
$$
となる. 関数 $f$ は任意だから $\mathcal{F}[δ] = 1$, つまりデルタ関数は恒等的に1を返す関数の Fourier 逆変換 $δ = \mathcal{F}^{-1}[1]$ である. 以上より, 有名な積分による表式
$$
δ(x) = ∫ \frac{\dd{k}}{2π} e^{-ikx}
$$
が得られる.

さて, 平均 $m$, 分散 $s^2$ の正規分布は確率密度関数
$$
f_{m,s^2}(x) ≡ \frac1{\sqrt{2πs^2}} e^{-(x-m)^2/2s^2}
$$
で与えられる. Fourier 変換を実行すると,
$$
\mathcal{F}[f_{0,s^2}](k) = \frac1{\sqrt{2πs^2}} ∫ \dd{x}\, e^{- x^2/2s^2 + ikx} = e^{-s^2k^2/2}
$$
であるから, 逆変換より
$$
f_{0,s^2}(x) = ∫ \frac{\dd{k}}{2π} e^{-s^2k^2/2} e^{-ikx}
$$
となる. したがって,
$$
f_{0,s^2=+0}(x) = ∫ \frac{\dd{k}}{2π} e^{-ikx}
$$
となって, 前述のデルタ関数の表式と等しくなる. 結局
$$
δ(x) = f_{m=0,s^2=+0}(x)
$$
となって, デルタ関数は分散が $0$ の正規分布の確立密度関数と等しいことが確かめられた.

[^fourier]: ここでの Fourier 変換は
    $$
    \begin{aligned}
      \mathcal{F}[f](k) &= ∫ \dd{x}\, f(x) e^{ikx}, \\
      \mathcal{F}^{-1}[\~f](x) &= ∫ \frac{\dd{k}}{2π} \~f(k) e^{-ikx}, \\
    \end{aligned}
    $$
    で定義される.
