---
title: "Nimで順伝播型ニューラルネットワーク"
date: 2020-04-28T15:01:17+09:00
tags : [
  "computer"
]
toc : true
math : true
---

プログラミング言語[Nim](https://nim-lang.org)は
静的型付け型推論なのにPython風の文法を持つ言語.
ポストPythonを狙うべく, 入門がてら
Nimで順伝播型ニューラルネットワークをやらせてみる.

題材は[ニューラルネットワークのWikipedia](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A9%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF#%E5%AE%9F%E8%A3%85%E4%BE%8B)にある
Pythonの実装例を使うが,
Wikipediaの表現に気になるところがあるので
少し改変を加えつつ実装する.

### 目次

1. [理論の概説](#理論の概説) :
実装するモデルの数学的定義
1. [Nimの導入](#nimの導入) :
Nimのインストール・実行方法
1. [実装の準備](#実装の準備) :
実装に必要なプロシージャ等
1. [実装](#実装)
1. [速度比較](#速度比較) :
Python版との比較
1. [感想](#感想)
1. [参考](#参考)

$\KaTeX{}$ が書けるようになったことに調子乗っていたら,
本記事は長くなった.
目次の代わりを貼っておく.

最終的な[ソースコードはこれ](https://gist.github.com/xiupos/dc7972a9b9fae1c53a02d4bfa41cb441).

## 理論の概説

Wikipediaの内容を踏襲しつつ,
慣れている形に改変する.
私は訓練データ全体を行列とは見ない派($\sum$ でまとめたい派)である.

### モデルの概要

ここでは,
3層順伝播型ニューラルネットワークで回帰を実装する.
$x = [-1, 1]$ において,
$y = 2x^2 - 1$ を学習する.
活性化関数は[ReLU](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%8C%96%E7%B7%9A%E5%BD%A2%E9%96%A2%E6%95%B0)を使用.
学習は, 確率的勾配降下法で誤差逆伝播法を行う.

### 予想モデル

予想モデルは以下.
ただし, $x$ は入力, $y$ は出力
($\hat{y}$ は予想値).
$\phi$ は活性化関数.
隠れ層のノード数を $h$ とし,
$\mathbf{w}^{(1)} \in \mathbb{R}^{h \times 1}$,
$\mathbf{w}^{(2)} \in \mathbb{R}^{1 \times h}$ を
重みパラメータ,
$\mathbf{b}^{(1)} \in \mathbb{R}^{h \times 1}$,
$b^{(2)} \in \mathbb{R}^{1 \times 1}$ を
定数パラメータとする.

$$
\hat{y} = \mathbf{w}^{(2)}
  \phi \left(
    \mathbf{w}^{(1)} x + \mathbf{b}^{(1)}
  \right) + b^{(2)}.
$$

### 誤差関数

誤差関数は以下.
ただし, $n$ を訓練データ数とし,
$\\{x_k, y_k\\}$ $(k \in \mathbb{Z}, 0 \leq k \leq n-1)$ は
訓練データである.

$$
E = \frac{1}{2}
\sum^{n-1}_{k=0}
\left(
  y_k - \hat{y}_k
\right)^2.
$$

### 誤差関数の微分

誤差関数 $E$ をパラメータで偏微分した数式は以下.
ただし, $\mathbf{A}^\mathsf{T}$ は $\mathbf{A}$ の転置行列,
$\mathbf{A} \odot \mathbf{B}$ は
$\mathbf{A}$ と
$\mathbf{B}$ のアダマール積.

$$
\begin{aligned}
  \frac{\partial E}{\partial \mathbf{w}^{(1)}} &= 
    - \sum^{n-1}\_{k=0}
    \left(
      \left(
        y_k - \hat{y}_k
      \right)
      \mathbf{w}^{(2)\mathsf{T}}
      \odot
      \phi' \left(
        \mathbf{w}^{(1)} x_k + \mathbf{b}^{(1)}
      \right)
    \right)x_k,
  \\\\ 
  \frac{\partial E}{\partial \mathbf{b}^{(1)}} &= 
    - \sum^{n-1}\_{k=0}
    \left(
      \left(
        y_k - \hat{y}_k
      \right)
      \mathbf{w}^{(2)\mathsf{T}}
      \odot
      \phi' \left(
        \mathbf{w}^{(1)} x_k + \mathbf{b}^{(1)}
      \right)
    \right),
  \\\\ 
  \frac{\partial E}{\partial \mathbf{w}^{(2)}} &= 
    - \sum^{n-1}\_{k=0}
    \left(
      y_k - \hat{y}_k
    \right)
    \phi \left(
      \mathbf{w}^{(1)} x_k + \mathbf{b}^{(1)}
    \right)^\mathsf{T},
  \\\\ 
  \frac{\partial E}{\partial b^{(2)}} &=
    - \sum^{n-1}\_{k=0}
    \left(
      y_k - \hat{y}_k
    \right).
\end{aligned}
$$

$x$ も $y$ もスカラーであるから連鎖律で簡潔に解ける.
なお,
アダマール積になる理由は
ReLU $\phi$ が要素ごとに適用される関数だから.
また,
$\frac{\partial f}{\partial \mathbf{x}}$ という表現は,
[英語版Wikipedia](https://en.wikipedia.org/wiki/Matrix_calculus#Derivatives_with_matrices)にあった.
堂々と使おう.


### 学習

誤差逆伝播は次のように行う.
あるパラメータ $\mathbf{a}$ に対する伝播は,
学習率を $\alpha$ として,

$$
\mathbf{a}\_\mathrm{new} =
  \mathbf{a}\_\mathrm{old} -
  \alpha
  \left.
    \frac{\partial E}{\partial \mathbf{a}}
  \right|\_{\mathbf{a}=\mathbf{a}_\mathrm{old}}
$$

を繰り返し計算すれば良い.

## Nimの導入

GitHub - [nim-lang/nim](https://github.com/nim-lang/Nim)

`gcc`等のCコンパイラが必須.

```bash
cd ~
git clone https://github.com/nim-lang/Nim.git
cd Nim
chmod 777 *
sh ./build_all.sh
export PATH=$PATH:$HOME/Nim/bin
# echo "export PATH=$PATH:$HOME/Nim/bin" >> ~/.bashrc
```

### Hello, world!

`hello.nim`で以下を保存.

```nim
echo "Hello, world!"
```

`.nim`のコンパイル・実行は,

```bash
nim c -r hello.nim
#-> Hello, world!
ls
#-> hello.nim hello
```

コンパイルのみを行う場合は,

```bash
nim c -d:release hello.nim
```

## 実装の準備

以上の計算をするために必要なプロシージャを作る.

### 行列

今回のモデルはベクトル積を使っても計算できるが,
将来的な拡張性を考えて行列として扱う.

Nimで行列演算ができる[Neo](https://github.com/unicredit/neo)というライブラリもあるが,
つまらないので今回は使わない.
[Nim by Example](https://nim-by-example.github.io/arrays/)というサイトの`array[]`の項目にMatrix型を作る例があるのでこれを利用する.

#### Matrix型の定義

```nim
type
  Matrix[T; M, N: static[int]] = array[1..M, array[1..N, T]]
```

`type`で独自の型を作ることができる.
モダンな言語らしくて楽しい.

#### 行列と定数の演算

$$
\begin{aligned}
  \mathbf{A} + b &&
  \mathbf{A} - b &&
  \mathbf{A}b
\end{aligned}
$$

```nim
# 加法
proc `+`[T, I, J](a: Matrix[T, I, J], b: T): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
        c[i][j] = a[i][j] + b
  result = c

# 減法
proc `-`[T, I, J](a: Matrix[T, I, J], b: T): Matrix[T, I, J] =
  result = a + (-b)

# 乗法
proc `*`[T, I, J](a: Matrix[T, I, J], b: T): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
      c[i][j] = a[i][j] * b
  result = c
```

Nimでは独自の演算子を定義することができる.
ただ,
(定数, 行列) (行列, 定数)のどちらにも適応する方法がわからず,
必要であれば以下のように定義する.

```nim
# 加法
proc `+`[T, I, J](a: T, b: Matrix[T, I, J]): Matrix[T, I, J] =
  result = b + a

# 減法
proc `-`[T, I, J](a: T, b: Matrix[T, I, J]): Matrix[T, I, J] =
  result = b - a

# 乗法
proc `*`[T, I, J](a: T, b: Matrix[T, I, J]): Matrix[T, I, J] =
  result = b * a
```

#### 行列と行列の演算

$$
\begin{aligned}
  \mathbf{A} + \mathbf{B} &&
  \mathbf{A} - \mathbf{B} &&
  \mathbf{A} \mathbf{B} &&
  \mathbf{A} \odot \mathbf{B}
\end{aligned}
$$

```nim
# 加法
proc `+`[T, I, J](a, b: Matrix[T, I, J]): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
        c[i][j] = a[i][j] + b[i][j]
  result = c

# 減法
proc `-`[T, I, J](a, b: Matrix[T, I, J]): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
        c[i][j] = a[i][j] - b[i][j]
  result = c

# 行列の乗法
proc `*`[T, I, K, J](a: Matrix[T, I, K], b: Matrix[T, K, J]):
    Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
      for k in 1..K:
        c[i][j] += a[i][k] * b[k][j]
  result = c

# アダマール積
proc `|*|`[T, I, J](a, b: Matrix[T, I, J]): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
      c[i][j] = a[i][j] * b[i][j]
  result = c
```

#### 転置

$$
\mathbf{A}^\mathsf{T}
$$

```nim
proc t[T, I, J](a: Matrix[T, I, J]): Matrix[T, J, I] =
  var c: Matrix[T, J, I]
  for i in 1..I:
    for j in 1..J:
      c[j][i] = a[i][j]
  result = c
```

行と列をいれかえるだけ.
使い方は`A.t`.
その他の行列式などは今回使わないので定義しない.

### 乱数の行列

パラメータの初期化に必要.
与えられた行列を乱数(`min` $\leq x \leq$ `max`)にして返す.

```nim
import random
randomize()

proc toRandom[T, I, J](a: var Matrix[T, I, J], min: T = 0, max: T = 1):
    Matrix[T, I, J] {.discardable.} =
  for i in 1..I:
    for j in 1..J:
      a[i][j] = rand(max - min) + min

# 例
var mat: Matrix[float, 2, 2]
mat.toRandom(-1, 1)
echo mat
#-> [[0.5010605918633901, -0.08190786365339608], [-0.6507648825937791, 0.855403391145154]]
```

やはりPythonに似てる.

## 実装

以上のプロシージャを使って, 順伝播型ニューラルネットワークを組む.
基本的には[Wikipediaの実装例](https://ja.wikipedia.org/wiki/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A9%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF#%E5%AE%9F%E8%A3%85%E4%BE%8B)に対応させて書いた.

```nim
import math, random, sugar

# Matrixのproc等は省略

const
  dim_in = 1            # 入力は1次元
  dim_out = 1           # 出力は1次元
  hidden_count = 1024   # 隠れ層のノードは1024個
  learn_rate = 0.005    # 学習率

# 訓練データは x は -1 ~ 1, y は 2 * x ^ 2 - 1
const train_count = 64  # 訓練データ数
let
  train_x = collect(newSeq):
    for i in 0..<train_count: 2 * i / (train_count - 1) - 1
  train_y = collect(newSeq):
    for x in train_x: 2 * x ^ 2 - 1

# 重みパラメータ. この行列の値を学習する.
var
  w1: Matrix[float, hidden_count, dim_in]
  w2: Matrix[float, dim_out, hidden_count]
  b1: Matrix[float, hidden_count, 1]
  b2: Matrix[float, dim_out, 1]

# -0.5 ~ 0.5 でランダムに初期化.
w1.toRandom(-0.5, 0.5)
w2.toRandom(-0.5, 0.5)
b1.toRandom(-0.5, 0.5)
b2.toRandom(-0.5, 0.5)

# 活性化関数は ReLU
proc activation[T](x: T): T =
  x.max(0)

proc activation[T, I, J](x: Matrix[T, I, J]): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
      c[i][j] = x[i][j].activation
  result = c

# 活性化関数の微分
proc activation_dash[T](x: T): T =
  (x.abs / x + 1) / 2

proc activation_dash[T, I, J](x: Matrix[T, I, J]): Matrix[T, I, J] =
  var c: Matrix[T, I, J]
  for i in 1..I:
    for j in 1..J:
      c[i][j] = x[i][j].activation_dash
  result = c

# 順方向. 学習結果の利用.
proc forward(x: float): float =
  (b2 + w2 * activation(w1 * x + b1))[1][1]

# 逆方向. 学習.
proc backward(x: float, diff: float) {.discardable.} =
  let
    v1 = (w2.t * diff) |*| activation_dash(w1 * x + b1)
    v2 = activation(w1 * x + b1)

  w1 = w1 - v1 * x * learn_rate
  b1 = b1 - v1 * learn_rate
  w2 = w2 - v2.t * diff * learn_rate
  b2 = b2 - diff * learn_rate

# メイン処理
var 
  idxes = collect(newSeq):
    for i in 0..<train_count: i     # idxes は 0 ~ 63
  error, y, diff: float
for epoc in 1..1000:                # 1000 エポック
  idxes.shuffle                     # 確率的勾配降下法のため, エポックごとにランダムにシャッフルする
  error = 0                         # 二乗和誤差
  for idx in idxes:
    y = forward(train_x[idx])       # 順方向で x から y を計算する
    diff = y - train_y[idx]         # 訓練データとの誤差
    error += diff ^ 2               # 二乗和誤差に蓄積
    backward(train_x[idx], diff)    # 誤差を学習
  echo error                        # エポックごとに二乗和誤差を出力
```

ソースコード全体は[Gistに貼った](https://gist.github.com/xiupos/dc7972a9b9fae1c53a02d4bfa41cb441)のでそちらも参照されたい.

## 速度比較

WikipediaにあるPythonのコードとの比較.

### Python

```bash
time -p python example.py
# real 9.00
# user 8.95
# sys 0.26
```

時間: **9秒**

### Nim

```bash
time -p nim c -d:release --opt:speed --hints:off example.nim
# real 2.53
# user 3.02
# sys 0.23

time -p ./example
# real 2.59
# user 2.55
# sys 0.01
```

時間: **5秒**  
実行ファイルだけなら **2.5秒** !!

## 感想

**疲れた.**

初めて書いたNimにしては,
ちょっと複雑すぎた気もする.
行列演算にNeoを使えばもっと手軽に実装できるだろうが,
自分で書くことで
`type`とGenericsのいい練習になった.

あとこの題材は入門にもってこいである.
最初に機械学習を書く,
これはモダンな言語にふさわしい入門かもしれない.  
しばらくは行列演算はライブラリを使いたいが.

## 参考

### Nim関連

偉大なる先人達のおかげで日本語でもNimを学ぶ環境がある程度整っている.

- [Nim Tutorial Part Iを日本語訳してみた（前編） - Qiita](https://qiita.com/KTakahiro1729/items/f4776f3a072c01f9086b)

- [Nim Tutorial Part Iを日本語訳してみた（後編） - Qiita](https://qiita.com/KTakahiro1729/items/3f18811267bf4f8075d5)

- [Nim Tutorial Part IIを日本語訳してみた - Qiita](https://qiita.com/kawadumax/items/a1b807c477dcbf40efa5)

- [Nim Tutorial(Part III) 日本語訳](https://qiita.com/Mafty/items/fac3c02dd8bf4259e071)

公式のドキュメント系

- [Nim Manual - 公式マニュアル](https://nim-lang.org/docs/manual.html)

- [random - 公式マニュアル](https://nim-lang.org/docs/random.html)

- [Nim for Python Programmers - GitHub Wiki](https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers)

行列演算プロシージャの例

- [Arrays - Nim by Example](https://nim-by-example.github.io/arrays/)

### 機械学習

- 須山敦志(2019).『[ベイズ深層学習](https://bookclub.kodansha.co.jp/product?item=0000276036)』. 講談社. (2章)

表記方法等もこの本にある程度倣った.
ただし, 予測値を $\hat{y}$ とする表現は

- 持橋大地, 大羽成征(2019). 『[ガウス過程と機械学習](https://bookclub.kodansha.co.jp/product?item=0000147677)』. 講談社. (1章)

を真似している.
