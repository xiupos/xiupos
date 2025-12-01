---
title: "Juliaで順伝播型ニューラルネットワーク"
pubDate: 2025-11-16T13:00:00+09:00
toc : true
math : true
lang : ja
---

最近は自然科学的な用途で [Julia](https://julialang.org/) の需要が高まっている. 隣の研究室でも実際に研究で使っていると聞いた. 入門がてら, 5年前に [Nim で扱った題材](nim-dl.md)を Julia で書いてみる.

## 実装するもの

[Wikipediaの元記事](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A9%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF#%E5%AE%9F%E8%A3%85%E4%BE%8B)でも, [前回の Nim による記事](nim-dl.md#モデルの概要)でも解説されているが, あらためて扱う題材をまとめておく. ここでは 3層順伝播型ニューラルネットワークで回帰を実装する. 活性化関数は ReLU を使い, 学習では確率的勾配降下法で誤差逆伝播法を行う.

まず順方向での計算を考える. 入力ベクトルを $\bm{x} ∈ ℝ^{D×1}$, 出力を $\bm{y} ∈ ℝ^{K×1}$ として, モデルによる予想値を $\^{\bm{y}}$ とする.  また, 活性化関数 $\phi(x) = \max(x,0)$ は ReLU である. 隠れ層のノード数を $M$ とし, 重み行列を $\mathbf{W}^{(1)} ∈ ℝ^{M×D}$, $\mathbf{W}^{(2)} ∈ ℝ^{K×M}$, バイアスベクトルを $\bm{b}^{(1)} ∈ ℝ^{M×1}$, $b^{(2)} ∈ ℝ^{K×1}$ とする. これらを使うと, 3層順伝播型ニューラルネットワークは
$$
\^{\bm{y}} = \mathbf{W}^{(2)} \phi(\mathbf{W}^{(1)} \bm{x} + \bm{b}^{(1)}) + \bm{b}^{(2)}
$$
と書ける.

次に逆方向での計算(=学習)を考える. 訓練データを $\{(\bm{x}_n, \bm{y}_n)\}$ $(n = 1, ..., N)$ とすると, 今回扱うのは回帰問題であるから, 誤差関数は二乗和誤差
$$
E = \frac12 ∑^{N}_{n=1} \| \^{\bm{y}}_n - \bm{y}_n \|^2
$$
で与えられる. 誤差関数を各パラメータで微分すると,
$$
\begin{aligned}
  \pdv{E}{\mathbf{W}^{(1)}} &= ∑^{N}_{n=1} \bqty{\qty{(\^{\bm{y}}_n - \bm{y}_n)^⊤ \mathbf{W}^{(2)}}^⊤ ⊙ \phi'(\mathbf{W}^{(1)} \bm{x}_n + \bm{b}^{(1)})} \bm{x}_n^⊤, \\
  \pdv{E}{\bm{b}^{(1)}} &= ∑^{N}_{n=1} \qty{(\^{\bm{y}}_n - \bm{y}_n)^⊤ \mathbf{W}^{(2)}}^⊤ ⊙ \phi'(\mathbf{W}^{(1)} \bm{x}_n + \bm{b}^{(1)}), \\
  \pdv{E}{\mathbf{W}^{(2)}} &= ∑^{N}_{n=1} (\^{\bm{y}}_n - \bm{y}_n) \phi(\mathbf{W}^{(1)} \bm{x}_n + \bm{b}^{(1)})^⊤, \\
  \pdv{E}{\bm{b}^{(2)}} &= ∑^{N}_{n=1} (\^{\bm{y}}_n - \bm{y}_n) \\
\end{aligned}
$$
となる[^batch]. ただし, ここではスカラー量 $E$ の行列 $\mathbf{A} = (A_{ij})$ による微分は $(∂E/∂\mathbf{A})_{ij} = ∂E/∂A_{ij}$ で定義した. また, Hadamard 積 $⊙$ は要素ごとの積 $(\mathbf{A} ⊙ \mathbf{B})_{ij} = A_{ij} B_{ij}$ で定義される. この導関数を使って, 誤差逆伝播は次のように行う: あるパラメータ $\mathbf{a}$ に対する伝播は, 学習率を $\alpha$ として,
$$
\mathbf{a}_\mathrm{new} = \mathbf{a}_\mathrm{old} - α \left. \pdv{E}{\mathbf{a}} \right|_{\mathbf{a}=\mathbf{a}_\mathrm{old}}
$$
を繰り返し計算すれば良い.

実際に扱う回帰の問題は $y = 2x^2 - 1$ であり, ここでは入力 $\bm{x}$ と出力 $\bm{y}$ はどちらもスカラー量である.

## Juliaの導入

Julia の詳しいことは[公式ドキュメント](https://docs.julialang.org/en/)を参照されたい. Julia 自体のインストールはバージョン管理の [Juliaup](https://github.com/JuliaLang/juliaup) 経由がいいと聞いた.

```bash
# arch/manjaro
yay -S juliaup

# other distributions
curl -fsSL https://install.julialang.org | sh
```

### Hello, world!

`hello.jl` で以下を保存.

```julia
println("Hello, world!")
```

実行は,

```bash
julia hello.jl
# Hello, world!
```

あるいは REPL を起動して,

```julia
include("hello.jl")
# Hello, world!
```

## 実装

前回の記事同様, [Wikipediaの実装例](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A9%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF#%E5%AE%9F%E8%A3%85%E4%BE%8B)に対応させて書いた. Nim や Python と違って, Julia はライブラリ無しに行列を扱うことができるため, 同じコードでもかなりすっきり書くことができる. それが良いことなのかどうかは人によるとは思うが, 自然科学用途で好んで使われる理由の一つはそこだろう.

ちなみに [Google Colabolatory](https://colab.research.google.com/) は今年の3月頃から公式に Julia に対応した. 以下のコードの挙動を [Colab で確かめることもできる](https://colab.research.google.com/gist/xiupos/5efda554741db085da694f1735b4f226/julia-dl.ipynb).

```julia
using Random

dim_in::Int64 = 1            # 入力は1次元
dim_out::Int64 = 1           # 出力は1次元
hidden_count::Int64 = 1024   # 隠れ層のノードは1024個
learn_rate::Float64 = 0.005  # 学習率

# 訓練データは x は -1 ~ 1, y は 2 * x ^ 2 - 1
train_count::Int64 = 64      # 訓練データ数
train_x::Matrix{Float64} = reshape(-1:(2/(train_count-1)):1, (dim_in, train_count))
train_y::Matrix{Float64} = reshape((@. 2 * train_x^2 - 1), (dim_out, train_count))

# 重みパラメータ. -0.5 〜 0.5 でランダムに初期化. この行列の値を学習する.
w1::Matrix{Float64} = rand(Float64, (hidden_count, dim_in)) .- 0.5
w2::Matrix{Float64} = rand(Float64, (dim_out, hidden_count)) .- 0.5
b1::Matrix{Float64} = rand(Float64, (hidden_count, 1)) .- 0.5
b2::Matrix{Float64} = rand(Float64, (dim_out, 1)) .- 0.5

# 活性化関数は ReLU
activation(x) = max(0, x)

# 活性化関数の微分
activation_dash(x) = (sign(x) + 1) / 2

# 順方向. 学習結果の利用.
forward(x) = w2 * activation.(w1 * x .+ b1) .+ b2

# 逆方向. 学習.
function backward(x, diff)
  global w1, w2, b1, b2
  v1 = (diff' * w2)' .* activation_dash.(w1 * x + b1)
  v2 = activation.(w1 * x .+ b1)

  w1 = w1 - learn_rate * v1 * x'
  b1 = b1 - learn_rate * v1
  w2 = w2 - learn_rate * diff * v2'
  b2 = b2 - learn_rate * diff
end

# メイン処理
idxes::UnitRange{Int64} = 1:train_count   # idxes は 1～64
for epoc in 1:1000                        # 1000エポック
  global idxes
  error = 0                               # 二乗和誤差
  for idx in shuffle(idxes)               # 確率的勾配降下法のため, エポックごとにランダムにシャッフルする
    y = forward(train_x[:, idx])          # 順方向で x から y を計算する
    diff = y - train_y[:, idx]            # 訓練データとの誤差
    error += only(diff' * diff)           # 二乗和誤差に蓄積
    backward(train_x[:, idx], diff)       # 誤差を学習
  end
  println(error)                          # エポックごとに二乗和誤差を出力
end
```

## 速度比較

Wikipedia にある Python コードとの比較をしてみる.

```bash
time python example.py
# 2.50 s

time julia example.jl
# 3.32 s
```

この結果からは Julia は Python より遅いように見える. しかし, これは呼び出し直後のコンパイルの時間があるためであり, 実行自体は Julia の方が早い. 試しに エポック数を 10000 にして実行すると, 以下のように10秒弱の差が開いた.

```bash
time python example.py
# 23.76 s

time julia example.jl
# 15.55 s
```

## 感想

動的型付けなのもあり, よく考えて書かないと行列の積などでサイズが合わず苦労する. まあそれは Julia に限った話ではない. むしろ, 数式をかなりそのままコードにすることができ, それが Julia の良さの一つなのだと思う[^unicode].

[ここら辺](https://docs.julialang.org/en/v1/manual/performance-tips/)を読めばさらに高速化できるだろうが, 初めて Julia を書いたのでまだよくわからない. これから書く機会は増えるだろうから, ぼちぼち「Julia らしい」コーディングに慣れたい.

(追記) アドバイス[^advice]をいただき, 型注釈を加えるなど少しコードを修正した. また, 全体を関数で囲み, REPL 環境で `include` するなどした方が良いらしい. 今回は元の Python コードとの対照を目的としているために global 変数を多用したが, 実用する場面ではそういったことにも気をかけていきたいところである.

## 参考

- [Julia Documentation · The Julia Language](https://docs.julialang.org/en/) (公式ドキュメント)
- [The Fast Track to Julia](https://cheatsheet.juliadocs.org/ja/) (チートシート)

[^batch]: ここでは和を $n = 1, ..., N$ で計算しているが, 実際には学習データ全体ではなく一部(バッチ)に対して和を計算することが多い. そのバッチを確率的に選ぶのが**確率的**勾配降下法の一つである. 実装でも, 大きさ1のバッチに対して和を取っていると見做すことができる.

[^unicode]: ちなみに, 元記事と対応させるために変数名を揃えたが, Julia では変数名などに Unicode を使うことができる. 例えば `activation(x)` を `φ(x)` など. こう書いてしまえば, ほぼ完全に元の数式のままのコードになる. 数式と実装の乖離が小さいのは, 個人的にはかなり嬉しい.

[^advice]: https://misskey.qwjyh.net/notes/af4tczxb6f
