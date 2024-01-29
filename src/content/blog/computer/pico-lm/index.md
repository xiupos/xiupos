---
title : pico-lm
author : xiupos
date : \today
pubDate : 2024-01-28T16:00:00+09:00
lang : ja
draft : true
math : true
toc : true
---

### ニューラルネットワーク (NN)

$$
\begin{CD}
  \boxed{X} @>{\displaystyle \operatorname{NN}[f](W,B)}>> \boxed{Y} \\
\end{CD}
$$
これは以下と等価である:
$$
\begin{CD}
  \boxed{X} @>{\displaystyle W}>> \boxed{WX + B} @>{\displaystyle f}>> \boxed{f(WX+B)} @= \boxed{Y} \\
  @. @AAA \\
  @. \boxed{B}
\end{CD}
$$

### 順伝播型ニューラルネットワーク (FNN)

$$
\begin{CD}
  \boxed{X} @>{\displaystyle \operatorname{FNN}_N[f](\{W\},\{B\})}>> \boxed{Y} \\
\end{CD}
$$
これは以下と等価である:
$$
\begin{CD}
  \boxed{X} @= \boxed{X^{(0)}} @>>> ⋯ @>>> \boxed{X^{(l-1)}} @>{\displaystyle \operatorname{NN}[f](W^{(l)},B^{(l)})}>> \boxed{X^{(l)}} @>>> ⋯ @>>> \boxed{X^{(N)}} @= \boxed{Y} \\
\end{CD}
$$
