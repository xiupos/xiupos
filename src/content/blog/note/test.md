---
title : 記法テスト
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

## ファインマン・ダイアグラム

```feynmf
\begin{fmfgraph*}(400,300)
  \fmfleftn{4}
  \fmfrightn{4}
  \fmf{antifermion}{i1,v1*,v2*,v3*,o1}
  \fmf{gluon,left=4,label=$g$}{v2*,v4}
  \fmf{photon,left=2.1,tension=0,labelx=-15,labely=-10,label=$\overline{u},\overline{c},\overline{t}$}{v1*,v3*}
  \fmf{antifermion}{o2,v4,o3}
  \fmf{fermion}{i4,o4}
  \fmfdot{v1*,v2*,v3*,v4}
  \fmflabel{i4}{$d$}
  \fmflabel{o4}{$d$}
  \fmflabel{o2}{$u$}
  \fmflabel{o3}{$\overline{u}$}
  \fmflabel{i1}{$\overline{b}$}
  \fmflabel{o1}{$\overline{s}$}
\end{fmfgraph*}
```

````md
```feynmf
\begin{fmfgraph*}(400,300)
  \fmfleftn{4}
  \fmfrightn{4}
  \fmf{antifermion}{i1,v1*,v2*,v3*,o1}
  \fmf{gluon,left=4,label=$g$}{v2*,v4}
  \fmf{photon,left=2.1,tension=0,labelx=-15,labely=-10,label=$\overline{u},\overline{c},\overline{t}$}{v1*,v3*}
  \fmf{antifermion}{o2,v4,o3}
  \fmf{fermion}{i4,o4}
  \fmfdot{v1*,v2*,v3*,v4}
  \fmflabel{i4}{$d$}
  \fmflabel{o4}{$d$}
  \fmflabel{o2}{$u$}
  \fmflabel{o3}{$\overline{u}$}
  \fmflabel{i1}{$\overline{b}$}
  \fmflabel{o1}{$\overline{s}$}
\end{fmfgraph*}
```
````

## TikZ

```tikz
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
```

````md
```tikz
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
```
````
