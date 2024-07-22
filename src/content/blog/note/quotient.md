---
title : 商の微分
author : xiupos
date : \today
pubDate : 2024-07-22T09:00:00+09:00
lang : ja
# draft : true
math : true
---

恥ずかしながら, 商の微分公式をよく忘れる:
$$
\pqty{\frac{f}{g}}' = \frac{f'g-fg'}{g^2}.
$$
これを覚えるための備忘録. はじめて習ったときに用いたであろう連鎖律の証明より, 対数微分法を用いた方が直感的である: $h(\ln h)'=h'$ に注意して,
$$
\begin{aligned}
  \pqty{\frac{f}{g}}'
    &= \frac{f}{g} \pqty{\ln \frac{f}{g}}' \\
    &= \frac{f}{g} \pqty{\ln f - \ln g}' \\
    &= \frac{f}{g} \pqty{\frac{f'}{f} - \frac{g'}{g}} \\
    &= \frac{f'g-fg'}{g^2}.
\end{aligned}
$$
積の微分と比較すると覚えやすいかもしれない:
$$
\begin{aligned}
  (fg)'
    &= fg (\ln fg)' \\
    &= fg (\ln f + \ln g)' \\
    &= fg \pqty{\frac{f'}{f} + \frac{g'}{g}} \\
    &= f'g + fg'. \\
\end{aligned}
$$
