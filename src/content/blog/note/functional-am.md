---
title : 汎関数計算を使った解析力学
author : xiupos
date : \today
pubDate : 2024-07-05T15:35:00+09:00
lang : ja
draft : true
math : true
preamble: "_preamble"
---

[解析力学](./particle-c)において「変分」を用いて導出される諸々を, [汎関数計算](./functional)を用いて書き直してみたい. 飽くまで「試み」なので正確性は保証されない. 近い内容の文献がありましたら教えていただけると嬉しいです.

### 最小作用の原理

:::screen

時間 $t$ に依存する**一般化座標**と呼ばれるパラメータ $q^i(t)$ に対して, **作用** action と呼ばれる汎関数 $S[q^i]$ が存在し, 物理現象において座標 $q^i$ は作用 $S[q^i]$ が最小となるような経路が選ばれる. つまり,
$$
\fdv{S[q^i(t)]}{q^j(t')} = 0. \quad (t_1<t'<t_2)
$$
この古典的原理を**最小作用の原理**という.

:::

変分を用いた最小作用の原理 $δS[q^i] = 0$ は 1 次の冪展開を用いて以下のように書き直される:
$$
δS[q^i] = ∫_{t_1}^{t_2} \dd{t'} \fdv{S[q^i]}{q^j(t')} δq^j(t') = 0.
$$
$δq^i(t')$ は $t_1<t'<t_2$ で任意だから, 変分を用いた最小作用の原理は汎関数微分を用いた上の式と等価である.

### Euler–Lagrange の運動方程式

作用は, 座標と時間に関する **Lagrangian** $L(q^i, \.q^i, t)$ を用いて以下のように表される:
$$
S[q^i] = ∫_{t_1}^{t_2} \dd{t} L(q^i, \.q^i, t).
$$
最小作用の原理に対し, この Lagrangian が満たすべき条件を求めよう. $t_1<t<t_2$ における作用の汎関数微分は
$$
\begin{aligned}
\fdv{S[q^i(t)]}{q^j(t')}
&=  \lim_{h → 0}
    \frac{S[q^i(t) + h δ^i_j δ(t - t')] - S[q^i(t)]}{h} \\
&=  \lim_{h → 0}
    \frac1h
    \bqty{
      ∫_{t_1}^{t_2} \dd{t} L ( q^i(t) + h δ^i_j δ(t - t'), \.q^i(t) + h δ^i_j \.δ(t - t'), t)
      - ∫_{t_1}^{t_2} \dd{t} L (q^i(t), \.q^i(t), t)
    } \\
&=  \lim_{h → 0}
    \frac1h
    ∫_{t_1}^{t_2} \dd{t} \bqty{
      \pdv{L}{q^i(t)} h δ^i_j δ(t - t') + \pdv{L}{\.q^i(t)} h δ^i_j \.δ(t - t')
      + o(ε^2)
    } \\
&=  ∫_{t_1}^{t_2} \dd{t} \bqty{
      \pdv{L}{q^j(t)} δ(t - t') + \pdv{L}{\.q^j(t)} \.δ(t - t')
    } \\
&=  ∫_{t_1}^{t_2} \dd{t} \bqty{\pdv{L}{q^j(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^j(t)}}}δ(t - t') + \bqty{\pdv{L}{\.q^j(t)}δ(t-t')}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
したがって, $t_1<t'<t_2$ において,
$$
\fdv{S[q^i(t)]}{q^i(t')} = \pdv{L}{q^i(t')} - \dv{}{t'} \pqty{\pdv{L}{\.q^i(t')}}.
$$

:::screen

最小作用の原理を満たすとき, Lagrangian $L(q^i,\.q^i,t)$ は以下の **Euler–Lagrange の運動方程式**を満たす:
$$
\pdv{L}{q^i} - \dv{}{t} \pqty{\pdv{L}{\.q^i}} = 0.
$$

:::

または, 冪展開を用いて作用の変分を計算すると,
$$
\begin{aligned}
  δS[q^i(t)]
    &= ∫_{t_1}^{t_2} \dd{t'} \fdv{S[q^i(t)]}{q^j(t')} δq^j(t') \\
    &= ∫_{t_1}^{t_2} \dd{t'} \qty{∫_{t_1}^{t_2} \dd{t} \bqty{\pdv{L}{q^j(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^j(t)}}}δ(t - t') + \bqty{\pdv{L}{\.q^j(t)}δ(t-t')}_{t=t_1}^{t=t_2}} δq^j(t') \\
    &= ∫_{t_1}^{t_2} \dd{t'} ∫_{t_1}^{t_2} \dd{t} δq^j(t') \bqty{\pdv{L}{q^j(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^j(t)}}}δ(t - t') + \bqty{∫_{t_1}^{t_2} \dd{t'} δq^j(t') \pdv{L}{\.q^j(t)}δ(t-t')}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \dd{t} δq^j(t) \bqty{\pdv{L}{q^j(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^j(t)}}} + \bqty{δq^j(t) \pdv{L}{\.q^j(t)}}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
$δq^i(t)$ は $t_1<t<t_2$ で任意だから, 原理 $δS[q^i] = 0$ より, 同じ運動方程式が得られる.

### Noether の定理

Noether の定理は, 時間と座標の微小変換 $t↦t'=t+δt$, $q^i(t)↦q'^i(t')=q^i(t)+δq^i(t)$ に対して保存量が存在することを主張する. これを汎関数微分で導出しよう. 混乱を防ぐため, この節では作用の積分変数を添字で書く. つまり, $S_t[q^i]≡S[q^i(t)]$ である. 変分 $δS_t[q^i]$ を $t$, $q$ に関して1次で冪展開すると[^noether_functional],
$$
δS_t[q^i] = ∫_{t_1}^{t_2} \dd{t_0} \fdv{S_t[q^i]}{q^i(t_0)} δ^Lq^i(t_0) + ∫_{t_1}^{t_2} \dd{t_0} \left.\fdv{S_{τ(t)}[q^i]}{τ(t_0)}\right|_{τ(t)=t} δt(t_0).
$$
それぞれの汎関数微分を計算すると,
$$
\fdv{S_t[q^i]}{q^i(t_0)} = ∫_{t_1}^{t_2} \dd{t} \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t_0) + \bqty{\pdv{L}{\.q^i(t)}δ(t-t_0)}_{t=t_1}^{t=t_2},
$$
$$
\begin{aligned}
  \fdv{S_{τ(t)}[q^i]}{τ(t_0)}
    &= \lim_{h→0} \frac{S_{τ(t)+hδ(t-t_0)}[q^i] - S_{τ(t)}[q^i]}h \\
    &= \lim_{h→0} \frac1h \left\{∫_{τ(t_1)}^{τ(t_2)} \dd{(τ(t)+hδ(t-t_0))} L(q^i(τ(t)+hδ(t-t_0)),\.q^i(τ(t)+hδ(t-t_0)),τ(t)+hδ(t-t_0))\right. \\
    &\qquad\qquad\quad - \left.∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} L(q^i(τ(t)),\.q^i(τ(t)),τ(t))\right\} \\
    &= \lim_{h→0} \frac1h \left\{∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} L(q^i(τ(t)+hδ(t-t_0)),\.q^i(τ(t)+hδ(t-t_0)),τ(t)+hδ(t-t_0))\right. \\
    &\qquad\qquad\quad + ∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} h L(q^i(τ(t)+hδ(t-t_0)),\.q^i(τ(t)+hδ(t-t_0)),τ(t)+hδ(t-t_0)) \dv{δ(t-t_0)}{τ(t)} \\
    &\qquad\qquad\quad - \left.∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} L(q^i(τ(t)),\.q^i(τ(t)),τ(t))\right\} \\
    &= \lim_{h→0} \frac1h \left\{∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} \bqty{\pdv{L}{q^i(τ(t))} \.q^i(τ(t)) hδ(t-t_0) + \pdv{L}{\.q^i(τ(t))} \"q^i(τ(t)) hδ(t-t_0) + \pdv{L}{τ(t)} hδ(t-t_0)}\right. \\
    &\qquad\qquad\quad + \left.∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} h L(q^i(τ(t)),\.q^i(τ(t)),τ(t)) \dv{δ(t-t_0)}{τ(t)} + O(h^2) \right\} \\
    &= ∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} \qty{\bqty{\pdv{L}{q^i(τ(t))} \.q^i(τ(t)) + \pdv{L}{\.q^i(τ(t))} \"q^i(τ(t)) + \pdv{L}{τ(t)}} δ(t-t_0) + L(q^i(τ(t)),\.q^i(τ(t)),τ(t)) \dv{δ(t-t_0)}{τ(t)}} \\
    &= ∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t)} \dv{}{τ(t)} \bqty{L(q^i(τ(t)),\.q^i(τ(t)),τ(t)) δ(t-t_0)} \\
    &= \bqty{L(q^i(τ(t)),\.q^i(τ(t)),τ(t)) δ(t-t_0)}_{τ(t)=τ(t_1)}^{τ(t)=τ(t_2)} \\
\end{aligned}
$$
$$
∴ \left.\fdv{S_{τ(t)}[q^i]}{τ(t_0)}\right|_{τ(t)=t} = \bqty{L(q^i(t),\.q^i(t),t) δ(t-t_0)}_{t=t_1}^{t=t_2}. \\
$$
これらを変分の式に代入すると,
$$
\begin{aligned}
  δS_t[q^i]
    &= ∫_{t_1}^{t_2} \dd{t_0} δ^Lq^i(t_0) \qty{∫_{t_1}^{t_2} \dd{t} \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t_0) + \bqty{\pdv{L}{\.q^i(t)}δ(t-t_0)}_{t=t_1}^{t=t_2}} \\
    &\quad\quad+ ∫_{t_1}^{t_2} \dd{t_0} δt(t_0) \bqty{L(q^i(t),\.q^i(t),t) δ(t-t_0)}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \dd{t_0} ∫_{t_1}^{t_2} \dd{t} δ^Lq^i(t_0) \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}}δ(t - t_0) + \bqty{∫_{t_1}^{t_2} \dd{t_0} δ^Lq^i(t_0) \pdv{L}{\.q^i(t)}δ(t-t_0)}_{t=t_1}^{t=t_2} \\
    &\quad\quad+ \bqty{∫_{t_1}^{t_2} \dd{t_0} δt(t_0) L(q^i(t),\.q^i(t),t) δ(t-t_0)}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \dd{t} δ^Lq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}} + \bqty{δ^Lq^i(t) \pdv{L}{\.q^i(t)} + δt(t) L(q^i(t),\.q^i(t),t)}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \dd{t} δ^Lq^i(t) \bqty{\pdv{L}{q^i(t)} - \dv{}{t} \pqty{\pdv{L}{\.q^i(t)}}} + \bqty{δq^i(t) \pdv{L}{\.q^i(t)} - δt \pqty{\.q^i(t) \pdv{L}{\.q^i(t)} - L(q^i(t),\.q^i(t),t)}}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
ここで, 最後の式の第一項は Euler–Lagrange の運動方程式より消え, 第二項の $t_1$, $t_2$ は任意である. したがって, $δS=0$ であるとすると, 対応する保存量が得られる:

[^noether_functional]: 積分変数を任意の関数 $τ(t)$ にしたときの作用 $S_{τ(t)}[q^i]$ の変分は
    $$
    δS_τ(t)[q^i] = ∫_{τ(t_1)}^{τ(t_2)} \dd{τ(t_0)} \fdv{S_{τ(t)}[q^i]}{q^i(τ(t_0))} δ^Lq^i(τ(t_0)) + ∫_{t_1}^{t_2} \dd{t_0} \fdv{S_{τ(t)}[q^i]}{τ(t_0)} δτ(t_0).
    $$
    で与えられる. このとき $τ(t)=t$, $δτ(t) = δt(t)$ とすれば文中の式が得られる.

:::screen

時間の微小変換 $t↦t'=t+δt$ に対し, 座標が $q^i(t)↦q'^i(t')=q^i(t)+δq^i(t)$ と変換されるとき, 作用が不変であるならば, 量
$$
δQ ≡ δq^i p_i - δt H ≡ δq^i \pdv{L}{\.q^i} - δt \pqty{\pdv{L}{\.q^i} \.q^i - L}
$$
は保存する(**Noether の定理** *Noether's theorem*):
$$
\dv{δQ}{t} = 0.
$$

:::

### Hamilton の運動方程式

Hamiltonian $H$ は
$$
H\pqty{q^i,\pdv{L}{\.q^i},t} = \.q^i\pdv{L}{\.q^i} - L
$$
で定義される. Lagrangian の場合と同様に, 最小作用の原理に対し Hamiltonian が満たす条件を求めよう. 作用を Hamiltonian $\displaystyle H\pqty{q^i,\pdv{L}{\.q^i},t} = \.q^i\pdv{L}{\.q^i} - L$ で書き直すと,
$$
S[q^i(t)] = ∫_{t_1}^{t_2}\dd{t} \bqty{\.q^i(t) \pdv{L}{\.q^i(t)} - H\pqty{q^i(t),\pdv{L}{\.q^i(t)},t}}.
$$
これを汎関数微分して,
$$
\begin{aligned}
  \fdv{S[q^i(t)]}{q^j(t')}
    &= \lim_{h→0} \frac1h \left\{∫_{t_1}^{t_2}\dd{t} \bqty{(\.q^i(t)+hδ^i_j\.δ(t-t')) \pdv{L}{(\.q^i(t)+hδ^i_j\.δ(t-t'))} - H\pqty{q^i(t)+hδ^i_jδ(t-t'),\pdv{L}{(\.q^i(t)+hδ^i_j\.δ(t-t'))},t}}\right. \\
    &\qquad\qquad \left. - ∫_{t_1}^{t_2}\dd{t} \bqty{\.q^i(t) \pdv{L}{\.q^i(t)} - H\pqty{q^i(t),\pdv{L}{\.q^i(t)},t}}\right\} \\
    &\quad \pqty{\begin{aligned}
      p_i(t) ≡ \pdv{L}{\.q^i(t)}, \quad
      \pdv{L}{(\.q^i(t)+hδ^i_j\.δ(t-t'))}
        &= \pdv{L}{\.q^i(t)} + \pdv{}{\.q^{k}(t)}\pqty{\pdv{L}{\.q^{i}(t)}} hδ^k_j\.δ(t-t') \\
        &= p_i(t)+\pdv{p_i}{\.q^{j}(t)} h\.δ(t-t')
    \end{aligned}} \\
    &= \lim_{h→0} \frac1h \left\{∫_{t_1}^{t_2}\dd{t} \bqty{(\.q^i(t)+hδ^i_j\.δ(t-t')) \pqty{p_i(t)+\pdv{p_i}{\.q^{j}(t)} h\.δ(t-t')} - H\pqty{q^i(t)+hδ^i_jδ(t-t'),p_i(t)+\pdv{p_i}{\.q^{j}(t)} h\.δ(t-t'),t}}\right. \\
    &\qquad\qquad \left. - ∫_{t_1}^{t_2}\dd{t} \bqty{\.q^i(t) \pdv{L}{\.q^i(t)} - H\pqty{q^i(t),\pdv{L}{\.q^i(t)},t}}\right\} \\
    &= \lim_{h→0} \frac1h ∫_{t_1}^{t_2}\dd{t} \bqty{\.q^i(t) \pdv{p_i}{\.q^{j}(t)} h\.δ(t-t') + p_j(t) h\.δ(t-t') - \pdv{H}{q^j(t)} hδ(t-t') - \pdv{H}{p_i(t)} \pdv{p_i}{\.q^{j}(t)} h\.δ(t-t') + O(h^2)} \\
    &= ∫_{t_1}^{t_2}\dd{t} \bqty{\.q^i(t) \pdv{p_i}{\.q^{j}(t)} \.δ(t-t') + p_j(t) \.δ(t-t') - \pdv{H}{q^j(t)} δ(t-t') - \pdv{H}{p_i(t)} \pdv{p_i}{\.q^{j}(t)} \.δ(t-t') } \\
    &= ∫_{t_1}^{t_2}\dd{t} \bqty{- \dv{}{t} \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}}} - \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} δ(t-t') \\
    &\quad + \bqty{\qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} + p_j(t)} δ(t-t')}_{t=t_1}^{t=t_2}.
\end{aligned}
$$
したがって, 作用の変分は,
$$
\begin{aligned}
  δS[q^i(t)]
    &= ∫_{t_1}^{t_2} \dd{t'} \fdv{S[q^i(t)]}{q^j(t')} δq^j(t') \\
    &= ∫_{t_1}^{t_2} \dd{t'} δq^j(t') ∫_{t_1}^{t_2}\dd{t} \bqty{- \dv{}{t} \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}}} - \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} δ(t-t') \\
    &\quad + ∫_{t_1}^{t_2}  \dd{t'} δq^j(t') \bqty{\qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} + p_j(t)} δ(t-t')}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2} \dd{t'} ∫_{t_1}^{t_2}\dd{t} δq^j(t') \bqty{- \dv{}{t} \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}}} - \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} δ(t-t') \\
    &\quad + \bqty{∫_{t_1}^{t_2} \dd{t'} δq^j(t') \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} + p_j(t)} δ(t-t')}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2}\dd{t} δq^j(t) \bqty{- \dv{}{t} \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}}} - \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} \\
    &\quad + \bqty{δq^j(t) \qty{\pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} + p_j(t)}}_{t=t_1}^{t=t_2} \\
    &= ∫_{t_1}^{t_2}\dd{t} \bqty{δ\.q^j(t) \pdv{p_i}{\.q^{j}(t)} \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} - δq^j(t) \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} + \bqty{δq^j(t) p_j(t)}_{t=t_1}^{t=t_2} \\
    &\quad \pqty{δp_i(t) ≡ δ\.q^j(t) \pdv{p_i}{\.q^{j}(t)}} \\
    &= ∫_{t_1}^{t_2}\dd{t} \bqty{δp_i(t) \pqty{\.q^i(t) - \pdv{H}{p_i(t)}} - δq^j(t) \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}} + \bqty{δq^j(t) p_j(t)}_{t=t_1}^{t=t_2}. \\
\end{aligned}
$$
ここで, 第2項は両端固定の境界条件 $δq^j(t_1)=δq^j(t_2)=0$ より消え, 第1項の被積分関数の1項目は Hamiltonian の定義から $∂H/∂p_i(t) = \.q^i(t)$ となって消えるから, 結局
$$
δS[q^i(t)] = ∫_{t_1}^{t_2}\dd{t} δq^j(t) \pqty{\.p_j(t) + \pdv{H}{q^j(t)}}
$$
となる. $δq^j(t)$ は任意であるから, 条件 $δS[q^i] = 0$ より, $t_1<t<t_2$ で次の運動方程式が得られる:

:::screen

最小作用の原理を満たすとき, Hamiltonian は以下の **Hamilton の運動方程式**あるいは**正準方程式** canonical equation を満たす:
$$
\.p_i = - \pdv{H}{q^i}, \quad \.q^i = \pdv{H}{p_i}.
$$

:::
