---
title : 経路積分の記法揺れ
author : xiupos
date : \today
pubDate : 2025-01-02T21:22:00+09:00
lang : ja
math : true
---

[経路積分](./functional.md#汎関数積分) (汎関数積分) の記法は文献によって若干の揺れがある. 例として, 経路積分
$$
∫_{φ_0}^φ \mathcal{D}φ(x) \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
$$
の有名な教科書による記法を比べよう[^int]:

[^int]: 通常の積分 $∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))$ に関しても教科書ごとに若干の揺れがあるが, ここでは記法を統一した.

- R. P. Feynman and A. R. Hibbs (1965). _Quantum Mechanics and Path Integrals_:
    $$
    ∫_{\mathrm{A}}^{\mathrm{B}} \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))} \mathcal{D}φ(x)
    $$

- J. J. Sakurai, and J. Napolitano (2021). _Modern Quantum Mechanics_, 3rd edn:
    $$
    ∫_{φ_0}^φ \mathcal{D}[φ(x)] \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

- 杉田 勝実, 岡本 良夫, 関根 松夫 (1998).『経路積分と量子電磁力学』:
    $$
    ∫_{(x_\mathrm{A},φ_0)}^{(x_\mathrm{B},φ)} \mathfrak{D}φ \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

- 九後 汰一郎 (1989).『ゲージ場の量子論 I, II』:
    $$
    ∫_{φ(x_\mathrm{A})=φ_0}^{φ(x_\mathrm{B})=φ} \mathcal{D}φ \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

- J. Polchinski (1998). _String Theory_:
    $$
    ∫ [dφ]_{φ_0,x_\mathrm{A}}^{φ,x_\mathrm{B}} \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

また, 以下は経路積分の範囲 $(φ_0, φ)$ を省略している:

- M. E. Peskin, and D. V. Schroeder (1995). _An Introduction to Quantum Field Theory_ や, L. H. Rider (1996). _Quantum Field Theory_, 2nd edn など多数:
    $$
    ∫ \mathcal{D}φ \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

- V. P. Nair (2005). _Quantum Field Theory: A Moderun Perspective_ や, M. Dine (2007). _Supersymmetry and String Theory: Beyond the Standard Model_ など多数:
    $$
    ∫ [dφ] \exp \bqty{i ∫_{x_\mathrm{A}}^{x_\mathrm{B}} \dd{x} f(φ(x))}
    $$

こう並べてみると, 次のような違いに気付く:

1.  経路積分の範囲 $(φ_0, φ)$ の明記の仕方は大きく揺れる,
1.  経路積分の測度は, 大文字を使う $\mathcal{D}[φ(x)]$, $\mathcal{D}φ$ 派と, 小文字を角括弧で挟む $[dφ]$ 派がいる.

当然であるが, これらの違いは経路積分の本質に全く影響しない. これらをまとめているような記述を見かけなかったので, 記事にしてみた次第である.
