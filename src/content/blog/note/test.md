---
title : Syntax test
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : en
draft : true
math : true
---

## Fenced Divs

:::screen

### Schroedinger eq.

The equation that describes the time evolution of state vector $|ψ(t)⟩$ in the Schroedinger picture is
$$
i \hbar \pdv{}{t} |ψ(t)⟩ = H |ψ(t)⟩.
$$

:::

````md
:::screen

### Schroedinger eq.

The equation that describes the time evolution of state vector $|\psi(t)\rangle$ in the Schroedinger picture is
$$
i \hbar \pdv{}{t} |\psi(t)\rangle = H |\psi(t)\rangle.
$$

:::
````

## TikZJax

[TThe TikZ and PGF Packages](https://tikz.dev/)

```tikz
\begin{tikzpicture}
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
\end{tikzpicture}
```

````md
```tikz
\begin{tikzpicture}
\def \n {5}
\def \radius {3cm}
\def \margin {8} % margin in angles, depends on the radius

\foreach \s in {1,...,\n}
{
  \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
  \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
    arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
}
\end{tikzpicture}
```
````

## TikZJax + tikz-cd

[tikzcd: Commutative diagrams with TikZ](https://ctan.math.washington.edu/tex-archive/graphics/pgf/contrib/tikz-cd/tikz-cd-doc.pdf)

```tikz
\begin{tikzcd}[row sep=2.5em]
A' \arrow[rr,"f'"] \arrow[dr,swap,"a"] \arrow[dd,swap,"g'"] &&
B' \arrow[dd,swap,"h'" near start] \arrow[dr,"b"] \\
& A \arrow[rr,crossing over,"f" near start] &&
B \arrow[dd,"h"] \\
C' \arrow[rr,"k'" near end] \arrow[dr,swap,"c"] && D' \arrow[dr,swap,"d"] \\
& C \arrow[rr,"k"] \arrow[uu,<-,crossing over,"g" near end]&& D
\end{tikzcd}
```

````md
```tikz
\begin{tikzcd}[row sep=2.5em]
A' \arrow[rr,"f'"] \arrow[dr,swap,"a"] \arrow[dd,swap,"g'"] &&
B' \arrow[dd,swap,"h'" near start] \arrow[dr,"b"] \\
& A \arrow[rr,crossing over,"f" near start] &&
B \arrow[dd,"h"] \\
C' \arrow[rr,"k'" near end] \arrow[dr,swap,"c"] && D' \arrow[dr,swap,"d"] \\
& C \arrow[rr,"k"] \arrow[uu,<-,crossing over,"g" near end]&& D
\end{tikzcd}
```
````

## TikZJax + tikz-feynhand

[TikZ-FeynHand: Basic User Guide](https://arxiv.org/pdf/1802.00689.pdf)

```tikz
\begin{tikzpicture}
  \begin{feynhand}
    \vertex [particle] (i1) at (-3,4) {$u$};
    \vertex [particle] (i2) at (-3,3.5) {$d$};
    \vertex [particle] (i3) at (-3,3) {$d$};
    \vertex [particle] (f1) at (3,4) {$u$};
    \vertex [particle] (f2) at (3,3.5) {$d$};
    \vertex [particle] (f3) at (3,3) {$u$};
    \vertex (w1) at (0,3);
    \vertex (w2) at (0,2.5);
    \vertex (w3) at (0,2);
    \vertex (w4) at (1.5,1);
    \vertex [particle] (e) at (3,1.5) {$e^{-}$};
    \vertex [particle] (an) at (3,0.5) {$\bar{\nu}_{e}$};
    \propag [fermion] (i1) to (w1);
    \propag [fermion] (i2) to (w2);
    \propag [fermion] (i3) to (w3);
    \propag [fermion] (w1) to (f1);
    \propag [fermion] (w2) to (f2);
    \propag [fermion] (w3) to (f3);
    \propag [charged boson] (w3) to [edge label=$W^{-}$] (w4);
    \propag [fermion] (w4) to (e);
    \propag [anti fermion] (w4) to (an);
  \end{feynhand}
\end{tikzpicture}
```

````md
```tikz
\begin{tikzpicture}
  \begin{feynhand}
    \vertex [particle] (i1) at (-3,4) {$u$};
    \vertex [particle] (i2) at (-3,3.5) {$d$};
    \vertex [particle] (i3) at (-3,3) {$d$};
    \vertex [particle] (f1) at (3,4) {$u$};
    \vertex [particle] (f2) at (3,3.5) {$d$};
    \vertex [particle] (f3) at (3,3) {$u$};
    \vertex (w1) at (0,3);
    \vertex (w2) at (0,2.5);
    \vertex (w3) at (0,2);
    \vertex (w4) at (1.5,1);
    \vertex [particle] (e) at (3,1.5) {$e^{-}$};
    \vertex [particle] (an) at (3,0.5) {$\bar{\nu}_{e}$};
    \propag [fermion] (i1) to (w1);
    \propag [fermion] (i2) to (w2);
    \propag [fermion] (i3) to (w3);
    \propag [fermion] (w1) to (f1);
    \propag [fermion] (w2) to (f2);
    \propag [fermion] (w3) to (f3);
    \propag [charged boson] (w3) to [edge label=$W^{-}$] (w4);
    \propag [fermion] (w4) to (e);
    \propag [anti fermion] (w4) to (an);
  \end{feynhand}
\end{tikzpicture}
```
````
