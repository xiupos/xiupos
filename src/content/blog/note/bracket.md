---
title : ブラケット記法の濫用サーベイ
author : xiupos
date : \today
pubDate : 2024-01-06T22:40:00+09:00
lang : ja
draft : true
math : true
preamble: "_preamble"
---

ブラケット記法は便利である. 便利であるから, 便利に使われすぎていると思う. ブラケット記法に限らないが, 物理学においては場当たりに記号の定義・使用をする印象がある. その生産性の高さも相俟って, ブラケット記法は特に「濫用」が著しい. ブラケット記法の厳密な定義をしたいわけではなく, また「この使い方は間違っている!」と主張したいわけでもない. けれど, 初学では混乱するであろう事柄をまとめることには意義があると思うので, 私が見つけた事例をいくつか挙げてみる.

量子力学の知識を前提にしている. したがって, ブラとケットの定義も既知とする. ただ, ここでは基本に立ち返って基本から見ていこう.

### ブラケット記法の基本

ブラケット記法は 2 つの記号**ブラ** $⟨\ |$ と**ケット** $|\ ⟩$ を用いる. 次で詳しく議論するが, この記号の中にはラベルが入る. さしあたり $ϕ$, $ψ$ を入れて説明しよう. つまり,
$$
⟨ϕ|, \quad ⟨ψ|, \quad |ϕ⟩, \quad |ψ⟩
$$
などである. これらの意味は, 物理的には「考えている系のある状態」であり, 数学的には「ある Hilbert 空間 (完備な内積空間) のベクトル」である.

厳密な議論は避けるが, 量子力学では, 状態の全体を Hilbert 空間で記述する. 多くの人ははじめに**波動関数** ($ϕ(x)$, $ψ(x)$ など) を習っただろうが, 波動関数も Hilbert 空間のベクトルであり, 内積は積分
$$
∫ϕ^*(x)ψ(x)\d{x}
$$
で定義される. この波動関数の意味は言うまでもないが, 位置 $x$ における確率を与える. つまり, 1粒子の波動関数 $ψ(x)$ が正規化されていれば, 量
$$
|ψ(x)|^2 \d{x}
$$
は $x$ から $x+\d{x}$ の微小区間に粒子が見出される確率である. これは比較的イメージしやすい概念であろう. 比較的というのは, ブラとケットは抽象的であるからである. 2つのケット $|ϕ⟩$, $|ψ⟩$ の内積は
$$
⟨ϕ∣ψ⟩
$$
と書く. 定義であるが, 記号の約束でもある. 初学は既に混乱していそうである.

そろそろ事例を挙げていこう. まずはケットのみに注目する.

### ケット $|\ ⟩$ の中に入れるもの

前述の通り, 記号 $|\ ⟩$ の中に入れるものはラベルである. このラベルは状態を区別するためのものであるが, 本当に様々なものが入る. それぞれ見ていこう.

#### $ϕ$, $ψ$, $ξ$ などのギリシア文字

$$
|ϕ⟩, \quad |ψ⟩, \quad |ξ⟩
$$
など, これらは「一般の状態」を表すために使われる. 以降で紹介されるケットは特定の状態を意味するためにラベルをいれるが, これらのギリシア文字は特段意味を為していない. ただし, それぞれのギリシア文字は区別される. つまり, 一般に $|ϕ⟩=|ψ⟩$ とは限らない.

#### $n$, $l$, $m$ などの添字

$$
|n⟩,
$$
と書かれる場合, これは**量子数** $n$ で添字付けられるケット列があることを意味してる. エネルギー固有値 $E_n$ に属するケットが代表的だろう. つまり,
$$
\^H |n⟩ = E_n |n⟩
$$
であ

### ケットは数ベクトルか？

ケットを数ベクトルとイコールで結ぶのはよく見られる記述である. 例えば,
$$
|ψ⟩ = \pmqty{ψ_1 \\ ψ_2}
$$
