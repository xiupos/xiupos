---
title : 一般相対論
author : xiupos
date : \today
pubDate : 2024-04-02T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 平行移動

$N$ 次元の平らな空間の基底を $\bm{e}_n$, 計量を $h_{nm} ≡ \bm{e}_n ⋅ \bm{e}_m$ とする. 任意のベクトルは $\bm{A} = A^n \bm{e}_n$ と書ける. 微小ベクトル $\d{\bm{z}} = \d{z^n} \bm{e}_n$ の長さ $\d{s} ≡ |\d{\bm{z}}|$ は,
$$
\d{s} = (\d{z^n} \bm{e}_n) ⋅ (\d{z^m} \bm{e}_m) = h_{nm} \d{z^n} \d{z^m}.
$$
また, $\d{z_n} ≡ h_{nm} \d{z^m}$ とすれば,
$$
\d{s} = \d{z_n} \d{z^n}.
$$

$N$ 次元空間内の $4$ 次元部分空間を考える. $4$ 次元のパラメータ $x^μ$ を用いて, $4$ 次元部分空間の各点は $\bm{y}(x) = y^n(x) \bm{e}_n$. これを各 $x^μ$, $x_μ$ で偏微分したものをそれぞれ $\bm{e}_μ$, $\bm{e}^μ$ とおく:
$$
\begin{aligned}
  \bm{e}_μ(x) &≡ ∂_μ\bm{y}(x) = ∂_μy^n(x) \bm{e}_n, \\
  \bm{e}^μ(x) &≡ ∂^μ\bm{y}(x) = ∂^μy_n(x) \bm{e}^n.
\end{aligned}
$$
このとき, $N$ 次元空間に沿った微小ベクトル $\d{\bm{x}} = \d{x^n} \bm{e}_n = \d{x^μ} \bm{e}_μ = ∂_μy^n \d{x^μ} \bm{e}_n$ より $\d{x^n} = ∂_μy^n \d{x^μ}$. 同様に, $\d{x_n} = ∂^μy_n \d{x_μ}$. また, 微小ベクトルの長さ $\d{s}$ は,
$$
\d{s} ≡ h_{nm} \d{z^n} \d{z^m} = h_{nm} ∂_μy^n ∂_νy^m \d{x^μ} \d{x^ν}.
$$
ここで $g_{μν}(x) ≡ \bm{e}_μ(x) ⋅ \bm{e}_ν(x)$ とおけば,
$$
g_{μν}(x) = h_{nm} ∂_μy^n(x) ∂_νy^m(x) = ∂_μy^n(x) ∂_νy_n(x)
$$
$$
\d{s} = g_{μν} \d{x^μ} \d{x^ν}.
$$
同様に $g^{μν}(x) ≡ \bm{e}^μ(x) ⋅ \bm{e}^ν(x)$ とおけば,
$$
\begin{gathered}
  g^{μν}(x) = h^{nm} ∂^μy_n(x) ∂^νy_m(x) = ∂^μy^n(x) ∂^νy_n(x), \\
  \d{s} = g^{μν} \d{x_μ} \d{x_ν}.
\end{gathered}
$$
$4$ 次元部分空間に沿った任意のベクトル $\bm{A} = A^μ \bm{e}_μ = A_μ \bm{e}^μ$ についても同様に
$$
A^n = ∂_μy^n A^μ, \quad A_n = ∂^μy_n A_μ.
$$

$4$ 次元部分空間上の点 $x$ で接するベクトル $\bm{A} = A^n \bm{e}_n = A^μ \bm{e}_μ(x)$ について, $x \mapsto x+\d{x}$ の平行移動を考える. $x+\d{x}$ 上において, $\bm{A}$ を $4$ 次元部分空間に平行なベクトル $\bm{A}_{\mathsf{tan}}$ と垂直なベクトル $\bm{A}_{\mathsf{nor}}$ に分解する:
$$
\bm{A} = \bm{A}_{\mathsf{tan}} + \bm{A}_{\mathsf{nor}}.
$$
$\bm{A}_{\mathsf{tan}}$ について, 定義から $\bm{e}_μ(x+\d{x})$ で展開することができる:
$$
\begin{aligned}
  \bm{A}_{\mathsf{tan}}
    &= A^n_{\mathsf{tan}} \bm{e}_n = A^μ_{\mathsf{tan}} \bm{e}_μ(x+\d{x}) \\
    &= A^μ(x+\d{x}) \bm{e}_μ(x+\d{x}) \\
    &= A^μ(x+\d{x}) ∂_μy^n(x+\d{x}) \bm{e}_n.
\end{aligned}
$$
$$
∴ A^n_{\mathsf{tan}} = A^μ(x+\d{x}) ∂_μy^n(x+\d{x}).
$$
また, $\bm{A}_{\mathsf{nor}}$ について, 定義から $\bm{e}_μ(x+\d{x})$ と垂直である:
$$
\bm{A}_{\mathsf{nor}} ⋅ \bm{e}_μ(x+\d{x}) = (A^n_{\mathsf{nor}} \bm{e}_n) ⋅ (∂_μy^m(x) \bm{e}_m) = 0.
$$
$$
∴ A^n_{\mathsf{nor}} ∂_μy_n(x) = 0.
$$
したがって, $\bm{A}$ と $\bm{e}_μ(x+\d{x})$ の内積を計算すると,
$$
\begin{aligned}
  \bm{A} ⋅ \bm{e}_μ(x+\d{x})
    &= (A^n \bm{e}_n) ⋅ (∂_μy^m(x+\d{x}) \bm{e}_m) \\
    &= A^n ∂_μy_n(x+\d{x}),
\end{aligned}
$$
あるいは $\bm{A}_{\mathsf{tan}}$ と $\bm{A}_{\mathsf{nor}}$ に分解して,
$$
\begin{aligned}
  \bm{A} ⋅ \bm{e}_μ(x+\d{x})
    &= (\bm{A}_{\mathsf{tan}} + \bm{A}_{\mathsf{nor}}) ⋅ \bm{e}_μ(x+\d{x}) \\
    &= A^ν(x+\d{x}) \bm{e}_ν(x+\d{x}) ⋅ \bm{e}_μ(x+\d{x}) \\
    &= g_{μν}(x+\d{x}) A^ν(x+\d{x}) \\
    &= A_ν(x+\d{x}).
\end{aligned}
$$
したがって,
$$
\begin{aligned}
  A_ν(x+\d{x})
    &= A^n ∂_μy_n(x+\d{x}).
\end{aligned}
$$
または 1 次で展開して,
$$
\begin{aligned}
  A_ν(x+\d{x})
    &= A^n ∂_νy_n(x+\d{x}) \\
    &= ∂_μy^n(x) A^μ(x) [∂_νy_n(x) + ∂_σ∂_νy_n(x) \d{x^σ}] \\
    &= A^μ(x) ∂_μy^n(x) ∂_νy_n(x) + A^μ ∂_σ∂_νy_n(x) ∂_μy^n(x) \d{x^σ} \\
    &= A^μ(x) g_{μν}(x) + A^μ ∂_σ∂_νy_n(x) ∂_μy^n(x) \d{x^σ} \\
    &= A_ν(x) + A^μ ∂_σ∂_νy_n(x) ∂_μy^n(x) \d{x^σ}. \\
\end{aligned}
$$
ここで $\d{A_ν}(x) ≡ A_ν(x+\d{x}) - A_ν(x)$ とすれば,
$$
\d{A_ν}(x) = A^μ ∂_μy^n(x) ∂_σ∂_νy_n(x) \d{x^σ}.
$$
同様に,
$$
\d{A^ν}(x) = A^μ ∂_μy^n(x) ∂_σ∂^νy_n(x) \d{x^σ} = A^μ g^{νλ} [∂_μy^n(x) ∂_σ∂_λy_n(x)] \d{x^σ}.
$$

### Christoffel 記号

$g_{μν} = ∂_μy^n ∂_νy_n$ より,
$$
\begin{aligned}
  \pdv{g_{μν}}{x^σ}
    &= ∂_σ∂_μy^n ∂_νy_n + ∂_μy^n ∂_σ∂_νy_n \\
    &= ∂_σ∂_μy_n ∂_νy^n + ∂_σ∂_νy_n ∂_μy^n.
\end{aligned}
$$
添字を適当に入れ替えることで, $∂_σ∂_νy_n ∂_μy^n$ について解くことができる:
$$
\begin{aligned}
  &\ \frac12 \pqty{\pdv{g_{μν}}{x^σ} + \pdv{g_{μσ}}{x^ν} - \pdv{g_{νσ}}{x^μ}} \\
    =&\ \frac12 \bqty{
      \pqty{∂_σ∂_μy_n ∂_νy^n + ∂_σ∂_νy_n ∂_μy^n}
      +
      \pqty{∂_ν∂_μy_n ∂_σy^n + ∂_ν∂_σy_n ∂_μy^n}
      -
      \pqty{∂_μ∂_νy_n ∂_σy^n + ∂_μ∂_σy_n ∂_νy^n}
    } \\
    =&\ \frac12 \pqty{∂_σ∂_νy_n ∂_μy^n + ∂_ν∂_σy_n ∂_μy^n} \\
    =&\ ∂_σ∂_νy_n ∂_μy^n \\
\end{aligned}
$$
であるから, これを $Γ_{μνσ}$ とおき, :
$$
Γ_{μνσ}
≡ \frac12 \pqty{\pdv{g_{μν}}{x^σ} + \pdv{g_{μσ}}{x^ν} - \pdv{g_{νσ}}{x^μ}}
= ∂_σ∂_νy_n ∂_μy^n.
$$
$Γ_{μνσ}$
