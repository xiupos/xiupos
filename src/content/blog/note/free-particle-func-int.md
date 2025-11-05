---
title : 自由粒子の経路積分の計算
author : xiupos
date : \today
pubDate : 2025-11-05T17:45:00+09:00
lang : ja
math : true
draft: true
preamble: "_preamble"
---

自由粒子の伝播関数
$$
K(x_f,t_f;x_i,t_i) = ∫_{x_i}^{x_f} \mathcal{D}x \ \exp \qty{\frac{i}{\hbar} ∫_{t_i}^{t_f} \dd{t} \frac{m}2 \.x^2}
$$
を計算する. 指数関数の中は離散表現
$$
\frac{i}{\hbar} ∫_{t_i}^{t_f} \dd{t} \frac{m}2 \.x^2 = \lim_{N→∞} \frac{i}{\hbar} \left. ∑_{n=1}^N Δt × \frac{m}{2} \pqty{\frac{x_n - x_{n-1}}{Δt}}^2 \right|_{x_0 = x_i}^{x_N=x_f}, \quad Δt ≡ \frac{t_f-t_i}2
$$
となるから, 経路積分は
$$
\begin{aligned}
  K(x_f,t_f;x_i,t_i)
    &= \lim_{N→∞} \frac1{θ(N)} ∫\dd{x_1} \cdots ∫\dd{x_{N-1}} \exp \bqty{\frac{i}{\hbar} ∑_{n=1}^N Δt × \frac{m}{2} \pqty{\frac{x_n - x_{n-1}}{Δt}}^2}_{x_0 = x_i}^{x_N=x_f} \\
    &= \lim_{N→∞} \frac1{θ(N)} ∫\dd{x_1} \cdots ∫\dd{x_{N-1}} \exp \bqty{\frac{im}{2\hbarΔt} ∑_{n=1}^N (x_n - x_{n-1})^2}_{x_0 = x_i}^{x_N=x_f} \\
\end{aligned}
$$
と書ける. この積分の計算方法は2通りある.

1. 逐次積分法:  
    $$
    \begin{aligned}
      I &= ∫\dd{x_1} \cdots ∫\dd{x_{N-1}} \exp \bqty{\frac{im}{2\hbarΔt} ∑_{n=1}^N (x_n - x_{n-1})^2}_{x_0 = x_i}^{x_N=x_f} \\
        &= ∫\dd{x_1} \cdots ∫\dd{x_{N-1}} \exp \qty{\frac{im}{2\hbarΔt} \bqty{(x_N - x_{N-1})^2 + ∑_{n=1}^{N-1} (x_n - x_{n-1})^2}}_{x_0 = x_i}^{x_N=x_f}
    \end{aligned}
    $$
    ここで $x_{N-k}$ の積分について考えると,
    $$
    \begin{aligned}
       &\ ∫ \dd{x_{N-k}} \exp \qty{\frac{im}{2\hbarΔt} \bqty{\frac1k (x_N - x_{N-k})^2 + (x_{N-k} - x_{N-(k+1)})^2}} \\
      =&\ ∫ \dd{x_{N-k}} \exp \bqty{\frac{im}{2\hbarΔt} \frac{k+1}k x_{N-k}^2 - \frac{im}{2\hbarΔt} 2 \pqty{\frac1k x_N + x_{N-(k+1)}} x_{N-k} + \frac{im}{2\hbarΔt} \pqty{\frac1k x^2 + x_{N-(k+1)}^2}}  \\
       &\ \quad \pqty{∫ \dd{x} \exp \pqty{-iax^2+ibx} = \sqrt{\frac{π}{ia}} \exp \pqty{\frac{ib^2}{4a}} } \\
      =&\ \sqrt{\frac{k}{k+1}} \sqrt{\frac{2πi\hbarΔt}{m}} \exp \bqty{- \frac{im}{2\hbarΔt} \frac{k}{k+1} (x_N + x_{N-(k+1)})^2 + \frac{im}{2\hbarΔt} \pqty{\frac1k x^2 + x_{N-(k+1)}^2}} \\
      =&\ \sqrt{\frac{k}{k+1}} \sqrt{\frac{2πi\hbarΔt}{m}} \exp \bqty{\frac{im}{2\hbarΔt} \frac1{k+1} \pqty{x_N - x_{N-(k+1)}}^2}
    \end{aligned}
    $$
    だから, $k=1,…,N-1$ で順に積分することで,
    $$
    \begin{aligned}
      I &= \sqrt{\frac12} \sqrt{\frac23} ⋯ \sqrt{\frac{N-1}{N}} \pqty{\sqrt{\frac{2πi\hbarΔt}{m}}}^{N-1} \exp \bqty{\frac{im}{2{\hbar}NΔt} \pqty{x_f - x_i}^2} \\
        &= \frac1{\sqrt{N}} \pqty{\frac{2πi\hbarΔt}{m}}^{(N-1)/2} \exp \bqty{\frac{im}{2{\hbar}NΔt} \pqty{x_f - x_i}^2}.
    \end{aligned}
    $$

2. デルタ関数を使った積分: 変数変換 $y_n ≡ x_n-x_{n-1}$ ($n=1,\ldots,N-1$) で
    $$
    \begin{aligned}
      I &= ∫\dd{x_1} \cdots ∫\dd{x_{N-1}} \exp \bqty{\frac{im}{2\hbarΔt} ∑_{n=1}^N (x_n - x_{n-1})^2}_{x_0 = x_i}^{x_N=x_f} \\
        &= ∫\dd{y_1} \cdots ∫\dd{y_{N-1}} \exp \qty{\frac{im}{2\hbarΔt} \bqty{\pqty{x_f - x_i + ∑_{n=1}^{N-1}y_n}^2 + ∑_{n=1}^{N-1} y_n^2}} \\
        &= ∫\dd{y_1} \cdots ∫\dd{y_N} δ\pqty{x_f - x_i + ∑_{n=1}^{N}y_n} \exp \pqty{\frac{im}{2\hbarΔt} ∑_{n=1}^N y_n^2} \\
        &= ∫\dd{y_1} \cdots ∫\dd{y_N} ∫\frac{\dd{k}}{2π} \exp \bqty{ik\pqty{x_f - x_i + ∑_{n=1}^{N}y_n}} \exp \pqty{\frac{im}{2\hbarΔt} ∑_{n=1}^N y_n^2} \\
        &= ∫\frac{\dd{k}}{2π} e^{ik(x_f - x_i)} \qty{∫\dd{y} \exp \pqty{\frac{im}{2\hbarΔt} y^2 + iky}}^N \\
       &\ \quad \pqty{∫ \dd{x} \exp \pqty{-iax^2+ibx} = \sqrt{\frac{π}{ia}} \exp \pqty{\frac{ib^2}{4a}} } \\
    \end{aligned}
    $$
