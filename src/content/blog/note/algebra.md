---
title : 代数学
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
---

### 群

集合 $G$ と写像 $μ : G × G → G$ に対して, 以下の3条件を考える.

1. **結合律**: $μ(μ(x, y), z) = μ(x, μ(y, z))$,
2. **単位元の存在**: $∃ e ∈ G$, $μ(x, e) = μ(e, x) = x$,
3. **逆元の存在**: $∃ x' ∈ G$, $μ(x, x') = μ(x', x) = e$,
4. **可換律**: $μ(x, y) = μ(y, x)$.

組 $(G, μ)$ あるいは単に $G$ について, 条件1を満たすものを**半群** semi-group, 条件1,2を満たすものを**モノイド** monoid, 条件1,2,3を満たすものを**群** group, 条件1,2,3,4を満たすものを**可換群** commutative group あるいは **Abel 群** abelian group という. $μ(x, y) =: x ⋅ y =: xy$, $e =: 1$, $x' =: x^{-1}$ などと表記される. また, 可換群において, $μ(x, y) =: x + y$, $e =: 0$, $x' =: -x$ などと表記される.

群 $G$ が有限集合であるとき, $G$ を**有限群** finite group という. このとき, $G$ の濃度を $G$ の**位数** order といい, $|G|$ と書く. 群 $G$ が有限群でないとき, $G$ を**無限群** infinite group という.

群 $G$ の元 $g$ に対して, $g^n = e$ となる $n ∈ ℕ$ が存在するとき, $g$ は有限位数であるといい, またこれを満たす最小の $n$ を $g$ の位数といい, $\mathrm{ord}(g)$ と書く. 位数 $n$ の $g$ の羃乗で作られる群を**巡回群**という.

集合 $X$ から $X$ への全単射の全体は, 写像の合成に関して群をなし, これを $X$ の**自己同型群**といい, $\mathrm{Aut}(X)$ と書く.

### 部分群と剰余類

群 $G$ について, 部分集合 $H⊂G$ が群の元 $x,y∈H$ に対して $xy^{-1}∈H$ を満たすとき, $H$ を $G$ の**部分群**という. また, 部分集合 $S ⊂ G$ に対して, $S$ を含む最小の部分群を **$S$ が生成する部分群** subgroup generated by $S$ といい, $⟨S⟩$ と書く. 特に $G = ⟨S⟩$ であるとき, $S$ を $G$ の**生成系** system of generators という.

群 $G$ の部分群 $H$ について, $gH := \{ gh ∣ h ∈ H \} ⊂ G$ を**左剰余類** left conset という. 左剰余類の全体を $G/H$ と書く. 同様に右剰余類 $Hg$ とその全体 $H \backslash G$ が定まる.

群 $G$ の部分群 $H$ について, 群の元 $g ∈ G$ に対し $gHg^{-1} = H$ を満たす $H$ を $G$ の**正規部分群** normal subgroup といい, $H \triangleleft G$ と書く. 群の元 $g, g' ∈ G$ に対して, $G/H$ 上の演算 $(gH)(g'H) := (gg')H$ によって $G/H$ は群となる. この群を**商群** quotient group という.

### 準同型写像

群 $G$, $G'$ について, 写像 $f : G → G'$ が群の元 $x, y ∈ G$ に対し $f(xy) = f(x) f(y)$ を満たすとき, $f$ を $G$ から $G'$ への**準同型写像** homomorphism, あるいは単に**準同型** hommomorohic という. また, 準同型 $f$ が全単射であるとき, $f$ を**同型写像** isomorphism, あるいは単に**同型** isomorphic といい, $G ≃ G'$ と書く.

準同型写像 $f : G → G'$ に対して, 部分群 $\Im f := \{ f(x) ∈ G' ∣ x ∈ G \}$ を $f$ の**像**, 部分群 $\mathrm{Ker} f := \{ x ∈ G ∣ f(x) = e' ∈ G' \}$ を $f$ の**核**という. また, $\mathrm{Ker} f$ は $G$ の正規部分群である: $\mathrm{Ker} f \triangleleft G$. また, $\mathrm{Coker} f := G' / \Im f$ を**余核** cokernel, $\mathrm{Coim} f := G' / \mathrm{Ker} f$ を**余像** coimage という.

### 群の作用

群 $G$ と集合 $X$ について, 準同型 $ρ : G → \mathrm{Aut} (X)$ が与えられたとき, **群 $G$ が集合 $X$ に左作用する** $G$ acts on $X$ あるいは単に**作用する**といい, $g ⋅ x = gx := ρ(g) (x)$ と書く. このとき, $g, h ∈ G$, $x ∈ X$ に対し, $g (hx) = (gh) x$, $ex = x$ を満たす. また, この $X$ を**左 $G$-集合** left $G$-set あるいは単に **$G$-集合** $G$-set という. 同様に右作用と右 $G$-集合も $x ⋅ g = xg := ρ(g) (x)$ によって定義される.

群 $G$ の $X$ への作用 $G × X → X$ に対して, $Gx := \{ gx ∣ g ∈ G \}$ を $x$ の**軌道** orbit という. また, $G_x := \{ g ∈ G ∣ gx = x \}$ を**固定化部分群** stabilizer という. このとき, $G$ の $G_x$ による商群と軌道 $Gx$ は同型である: $G / G_x ≃ Gx$.

左 $G$-集合 $X$ について, $x ∈ X$ に対して $Gx = X$ となる作用は**推移的** transitive であるという. また, $G_x = \{ e \}$ であるとき, この作用は**単一推移的** simply transitive という.

### 環・体

集合 $R$ に対して, 加法 $+$ について Abel 群, 乗法 $⋅$ について半群で, $x, y, z ∈ R$ に対して**分配法則** $x (y + z) = x y + x z$, $(x + y) z = x z + y z$ を満たすとき, 組 $(R, +, ⋅)$ あるいは単に $R$ を**環** ring という.

乗法について可換である環を**可換環** commutative ring という. 乗法について群である環を**斜体** skew field または**可除環** division ring という. 乗法について可換群である環, つまり可換環かつ斜体である環を**可換体** commutative ring または単に**体** field という.

環 $R$ が任意の元 $x, y ∈ R$ について $x, y ≠ 0$ ならば $xy ≠ 0$ であるとき, $R$ を整環 domain という. **聖域**である可換環を特に**整域** integral domain という.

### 部分環

環 $R$ の加法に関する部分群 $S$ について, $S$ が $R$ の乗法で閉じている, つまり任意の $S$ の元 $x, y ∈ S$ について $xy ∈ S$ であるとき, $S$ を $R$ の**部分環** subring という.

環 $R$ 部分環 $\{ x∈R ∣ ∀y∈R, xy=yx \}$ を $R$ の中心といい, $Z(R)$ と書く.

### 環準同型

環 $G$, $G'$ について, 写像 $φ : R → R'$ が環の元 $x, y ∈ R$ に対し $fφ(x + y) = φ(x) + φ(y)$, $φ(xy) = φ(x) φ(y)$ を満たすとき, $φ$ を $R$ から $R'$ への**環準同型写像** ring homomorphism, あるいは単に**環準同型** ring hommomorohic という.

### 代数

環 $R$ に対し, 環 $S$ および環準同型 $ρ : R → Z(S)$ の組 $(R, ρ)$ または単に $S$ を $R$ 上の**代数** algebra または **$R$ 代数**という.

体 $K$ 上の代数 $S$ について, $S$ の $K$ 上の基底 $\{ e_μ \}$ に対し
$$
e_μ e_ν = {a^λ}_{μν} e_λ
$$
を満たす ${a^λ}_{μν} ∈ K$ を $S$ の**構造定数** structure constant という.

### 環上の加群

環 $R$ に対し, Abel 群 $M$ の加法 $+$ と写像 $λ : R × M → M$ が $a, b ∈ R$, $m, m' ∈ R$ に対し以下の条件を満たすとき, 組 $(M, +, λ)$ または単に $M$ を $R$ 上の**左加群** left module over $R$ または単に**左 $R$ 加群** left $R$-module, **$R$ 加群** $R$-module という:

1. **Abel 群の加法に対するスカラー作用の分配律**: $λ(a, m + m') = λ(a, m) + λ(a, m')$,
2. **環の加法に対するスカラー作用の分配則**: $λ(a + b, m) = λ(a, m) + λ(a, m')$,
3. **環の乗法とスカラー作用の両立条件**: $λ(ab, m) = λ(a, λ(b, m))$,
4. **スカラー作用の単位元の存在**: $λ(1, m) = m$.

$R$ 上の右加群または右 $R$-加群も同様に定義される.

### 参考文献

- 清水 勇二 『圏と加群』 (現代基礎数学 16, 朝倉書店, 2018)