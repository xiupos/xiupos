---
title: 環上の加群
author: xiupos
date: \today
pubDate: 2024-01-06T22:40:00+09:00
lang: ja
draft: true
math: true
preamble: "!preamble"
---

### 環上の加群

$k$-代数 $R$ に対し, Abel 群 $M$ の加法 $+$ と写像 $λ:R×M→M$ が $a,b∈R$, $m,m'∈M$ に対し以下の条件を満たすとき, 組 $(M,+,λ)$ または単に $M$ を $R$ 上の**左加群** *left module over $R$* または**左 $R$-加群** *left $R$-module*, 単に **$R$-加群** *$R$-module* という.

1. **Abel 群の加法に対するスカラー作用の分配律**: $λ(a,m+m')=λ(a,m)+λ(a,m')$,
2. **環の加法に対するスカラー作用の分配則**: $λ(a+b,m)=λ(a,m)+λ(b,m)$,
3. **環の乗法とスカラー作用の両立条件**: $λ(ab,m)=λ(a,λ(b,m))$,
4. **スカラー作用の単位元の存在**: $λ(1,m)=m$.

$R$ 上の右加群または右 $R$-加群も同様に定義される. Abel 群は $\mathbb{Z}$-加群である. 実際, Abel 群 $G$ の要素 $g$ に対して
$$
n \cdot g := \underbrace{g+g+\cdots+g}_n, \quad (-1) \cdot g:=-g, \quad 0 \cdot g:=0
$$
と定義すれば, 加法 $+$ と写像 $\cdot : \mathbb{Z}×G→G$ について $G$ は左 $\mathbb{Z}$ の定義を満たす.

### 部分加群と剰余類

$R$-加群 $M$ の部分集合 $N$ について, $N$ がまた $R$-加群であるとき, $N$ を $M$ の**部分 $R$-加群** *submodule* という.

$R$-加群 $M$ の部分加群 $N$ に対し, 和に対する左剰余類の全体 $M/N:=\{m+N \mid m∈M\}$ を考える. $R$-加群の元 $m,m'∈M$ と $x∈R$ に対して $M/N$ 上の演算を
$$
\begin{gathered}
  (m+N)+(m'+N):=(m+m')+N, \\
  x(m+N):=xm+N
\end{gathered}
$$
と定義すると, $M/N$ は $R$-加群となる. これを**商加群** *quotient $R$-module* という. また, 商加群 $M/N$ の元(左剰余類)を $[m]:=m+N$ と書く. これはちょうど, $m,n∈M$ に対して同値関係を $m∼n:⇔m-n∈N$ と定義したときの同値類 $[m]=\{m∈M \mid m∼n\}$ に等しい.

### $R$-準同型

$R$-加群 $M$, $M'$ について, 写像 $f:M→M'$ が $a,b∈R$ と $m,n ∈ M$ に対し
$$
f(am+bn)=af(m)+bf(n)
$$
を満たすとき, $f$ を $M$ から $M'$ への **$R$-準同型写像** *$R$-homomorphism*, あるいは単に **$R$-準同型** *$R$-hommomorohic* という. $M$ から $M'$ への $R$-準同型全体を $\operatorname*{Hom}_R(M,M')$ と書く. また, 環 $M$, $M'$ に対し, $R$-加群の図式
$$
\begin{CD}
M @>{f}>> M' \\
@| \circlearrowleft @| \\
M @<<{f'}< M'
\end{CD}
$$
が可換になるような $R$-準同型 $f:M→M'$, $f':M'→M$ が存在するとき, $f$ を **$R$-同型写像** *$R$-isomorphism* という. このとき, $M$, $M'$ は **$R$-同型** *$R$-isomorphic* といい, $M ≃ M'$ と書く.

### 参考文献

- 堀田 良之 『代数入門 －群と加群－』 (数学シリーズ, 裳華房, 1987)
- 清水 勇二 『圏と加群』 (現代基礎数学 16, 朝倉書店, 2018)
