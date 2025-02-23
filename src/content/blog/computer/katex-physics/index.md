---
title: "KaTeXマクロでphysics"
pubDate: 2022-12-14T09:33:00+09:00
tags : [
  "computer"
]
toc : false
math: true
tikz: false
lang : ja
---

レポートを pandoc 経由で md で書いている.
レポート側の LaTeX で [physics](https://ctan.org/pkg/physics) パッケージを使っているが,
エディタ側 (vscode) の [md プレビュー](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) で KaTeX が使われているため一部のコマンドの結果が見れない.
MathJax の v3 以降なら [physics 拡張](https://docs.mathjax.org/en/v3.2-latest/input/tex/extensions/physics.html) があるが,
KaTeX にはそういった拡張は無い.
一応, MathJax v2[^1] にも third party な [physics 拡張](https://github.com/mathjax/MathJax-third-party-extensions/blob/master/legacy/physics/) があり,
この拡張は単純なマクロの集合であるから,
加工することで KaTeX マクロとしても使うことができる.

[^1]: MathJax v2 が使われている vscode の [md プレビュー](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) もある.

注意だが,
引数の数で表示できないコマンドがある.
例えば, `\braket` は引数2個のときは以下のように表示される:
```tex
\braket{\psi}{\psi'}
```
$$
\braket{\psi}{\psi'}
$$

しかし, 引数1個のとき,
KaTeX では表示されない.
LaTeX の physics パッケージや
MathJax v3 の physics パッケージでは以下のように表示される:
```tex
\braket{\psi}
```
$$
\braket{\psi}{\psi}
$$

KaTeX のマクロで多重定義ができれば解決できるが,
とりあえずはそういった記法を避ければ平和だろう.
困ったらその時考える.

以下は [mathjax/MathJax-third-party-extensions](https://github.com/mathjax/MathJax-third-party-extensions/blob/master/legacy/physics/physics.js)
の physics 拡張の加工例.
[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) であれば setting.json で `markdown.extension.katex.macros` に以下を設定すれば良い.

```json
{
  "\\quantity": "{\\left\\{ #1 \\right\\}}",
  "\\qty": "{\\left\\{ #1 \\right\\}}",
  "\\pqty": "{\\left( #1 \\right)}",
  "\\bqty": "{\\left[ #1 \\right]}",
  "\\vqty": "{\\left\\vert #1 \\right\\vert}",
  "\\Bqty": "{\\left\\{ #1 \\right\\}}",
  "\\absolutevalue": "{\\left\\vert #1 \\right\\vert}",
  "\\abs": "{\\left\\vert #1 \\right\\vert}",
  "\\norm": "{\\left\\Vert #1 \\right\\Vert}",
  "\\evaluated": "{ #1 \\vert}",
  "\\eval": "{ #1 \\vert}",
  "\\order": "{\\mathcal{O} \\left( #1 \\right)}",
  "\\commutator": "{\\left[ #1 , #2 \\right]}",
  "\\comm": "{\\left[ #1 , #2 \\right]}",
  "\\anticommutator": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\acomm": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\poissonbracket": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\pb": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\vectorbold": "{\\boldsymbol{ #1 }}",
  "\\vb": "{\\boldsymbol{ #1 }}",
  "\\vectorarrow": "{\\vec{\\boldsymbol{ #1 }}}",
  "\\va": "{\\vec{\\boldsymbol{ #1 }}}",
  "\\vectorunit": "{{\\boldsymbol{\\hat{ #1 }}}}",
  "\\vu": "{{\\boldsymbol{\\hat{ #1 }}}}",
  "\\dotproduct": "{\\boldsymbol\\cdot}",
  "\\vdot": "{\\boldsymbol\\cdot}",
  "\\crossproduct": "{\\boldsymbol\\times}",
  "\\cross": "{\\boldsymbol\\times}",
  "\\cp": "{\\boldsymbol\\times}",
  "\\gradient": "{\\boldsymbol\\nabla}",
  "\\grad": "{\\boldsymbol\\nabla}",
  "\\divergence": "{\\grad\\vdot}",
  "\\div": "{\\grad\\vdot}",
  "\\curl": "{\\grad\\cross}",
  "\\laplacian": "{\\nabla^2 }",
  "\\tr": "{\\operatorname{tr}}",
  "\\Tr": "{\\operatorname{Tr}}",
  "\\rank": "{\\operatorname{rank}}",
  "\\erf": "{\\operatorname{erf}}",
  "\\Res": "{\\operatorname{Res}}",
  "\\principalvalue": "{\\mathcal{P}}",
  "\\pv": "{\\mathcal{P}}",
  "\\PV": "{\\operatorname{P.V.}}",
  "\\Re": "{\\operatorname{Re} \\left\\{ #1 \\right\\}}",
  "\\Im": "{\\operatorname{Im} \\left\\{ #1 \\right\\}}",
  "\\qqtext": "{\\quad\\text{ #1 }\\quad}",
  "\\qq": "{\\quad\\text{ #1 }\\quad}",
  "\\qcomma": "{\\text{,}\\quad}",
  "\\qc": "{\\text{,}\\quad}",
  "\\qcc": "{\\quad\\text{c.c.}\\quad}",
  "\\qif": "{\\quad\\text{if}\\quad}",
  "\\qthen": "{\\quad\\text{then}\\quad}",
  "\\qelse": "{\\quad\\text{else}\\quad}",
  "\\qotherwise": "{\\quad\\text{otherwise}\\quad}",
  "\\qunless": "{\\quad\\text{unless}\\quad}",
  "\\qgiven": "{\\quad\\text{given}\\quad}",
  "\\qusing": "{\\quad\\text{using}\\quad}",
  "\\qassume": "{\\quad\\text{assume}\\quad}",
  "\\qsince": "{\\quad\\text{since}\\quad}",
  "\\qlet": "{\\quad\\text{let}\\quad}",
  "\\qfor": "{\\quad\\text{for}\\quad}",
  "\\qall": "{\\quad\\text{all}\\quad}",
  "\\qeven": "{\\quad\\text{even}\\quad}",
  "\\qodd": "{\\quad\\text{odd}\\quad}",
  "\\qinteger": "{\\quad\\text{integer}\\quad}",
  "\\qand": "{\\quad\\text{and}\\quad}",
  "\\qor": "{\\quad\\text{or}\\quad}",
  "\\qas": "{\\quad\\text{as}\\quad}",
  "\\qin": "{\\quad\\text{in}\\quad}",
  "\\differential": "{\\text{d}}",
  "\\d": "{\\text{d}}",
  "\\derivative": "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}",
  "\\dv": "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}",
  "\\partialderivative": "{\\frac{\\partial{ #1 }}{\\partial{ #2 }}}",
  "\\pdv": "{\\frac{\\partial{ #1 }}{\\partial{ #2 }}}",
  "\\variation": "{\\delta}",
  "\\var": "{\\delta}",
  "\\functionalderivative": "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}",
  "\\fdv": "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}",
  "\\ket": "{\\left\\vert { #1 } \\right\\rangle}",
  "\\bra": "{\\left\\langle { #1 } \\right\\vert}",
  "\\innerproduct": "{\\left\\langle { #1 } \\mid { #2 } \\right\\rangle}",
  "\\braket": "{\\left\\langle { #1 } \\mid { #2 } \\right\\rangle}",
  "\\outerproduct": "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2 } \\right\\vert}",
  "\\dyad": "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2 } \\right\\vert}",
  "\\ketbra": "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2 } \\right\\vert}",
  "\\op": "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2 } \\right\\vert}",
  "\\expectationvalue": "{\\left\\langle { #1 } \\right\\rangle}",
  "\\expval": "{\\left\\langle { #1 } \\right\\rangle}",
  "\\ev": "{\\left\\langle { #1 } \\right\\rangle}",
  "\\matrixelement": "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{ #3 }\\right\\rangle}",
  "\\matrixel": "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{ #3 }\\right\\rangle}",
  "\\mel": "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{ #3 }\\right\\rangle}",
}
```
