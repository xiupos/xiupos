---
title: "HugoでTikZを使う"
tags : [
  "computer",
  "hugo",
]
date: 2020-04-14T18:10:05+09:00
toc : true
math: true
tikz: true
---

Hugoは$\KaTeX{}$で数式表記できるように[設定できる](https://katex.org/docs/autorender.html).
それで遊んでいたときに,
TikZによる作図もできると便利だなと思って調べてみたら
[TikZJax](http://tikzjax.com/)なるものを見つけたので,
これのショートコードを作成した.
<!--more-->

{{< tikz "TikZによるドーナツ(Torus)" >}}
\begin{tikzpicture}[scale=2,transform shape]
  \draw (-1,0) to[bend left] (1,0);
  \draw (-1.2,.1) to[bend right] (1.2,.1);
  \draw[rotate=0] (0,0) ellipse (100pt and 50pt);
\end{tikzpicture}
{{< /tikz >}}

## TikZとは

>TikZ and PGF are TeX packages for creating graphics programmatically.

[TikZ and PGF | TeXample.net](http://www.texample.net/tikz/)

画像を$\TeX{}$で書ける便利なツール.
ここでは文法などの説明は割愛するので,
詳しいことは以下のQiita記事がわかりやすい.

[PGF/TikZをオススメする記事 - Qiita](https://qiita.com/seekworser/items/0ef417ab788e0786d59a)

結構メジャーなので日本語文献も多い.

### TikZJax

[kisonecat/tikzjax: TikZJax is TikZ running under WebAssembly in the browser](https://github.com/kisonecat/tikzjax)

TikZをブラウザ上で描画してしまうという恐しいツール.
日本語文献は限りなく無いが,
`README.md`によると
[kisonecat/web2js](https://github.com/kisonecat/web2js)なるものを使って,
WebAssemblyにコンパイルしているらしい.
更に恐しい. 使ってみたい.

## Hugoで使う

[README.md](https://github.com/kisonecat/tikzjax/blob/master/README.md)の通りにやればできると思ったが,
途中のWebAssemblyをfetchする時に[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)で引っ掛かる.
なので, あまり上品ではないが, スクリプトとWebAssemblyを手元に落とすことにする.

まず問題のスクリプトを引っ張ってくる.

```bash
wget -O static/script/tikzjax.js http://tikzjax.com/v1/tikzjax.js
```

このスクリプトの**21864~21866行目**を以下のように変更.

```js
let tex = await fetch(urlRoot + '/wasm/tikzjax.wasm');
code = await tex.arrayBuffer();
let response = await fetch_readablestream__WEBPACK_IMPORTED_MODULE_5___default()(urlRoot + '/gzip/tikzjax.gz');
```

そしてWebAssembly達を引っ張ってくる.
セキュリティが心配な場合は`git clone`して手元でビルドする.

```bash
wget -O static/wasm/tikzjax.wasm http://tikzjax.com/ef253ef29e2f057334f77ead7f06ed8f22607d38.wasm
wget -O static/gzip/tikzjax.gz http://tikzjax.com/7620f557a41f2bf40820e76ba1fd4d89a484859d.gz
```

そして`layouts/partials/tikzjax.html`を作成.

```html
<link rel="stylesheet" type="text/css" href="http://tikzjax.com/v1/fonts.css">
<script src="/script/tikzjax.js"></script>
```

1行目は数式用のフォントを定義しているが,
BaKoMaフォントというものらしい.
[CTANにある](https://ctan.org/tex-archive/fonts/cm/ps-type1/bakoma/)ので
`static/font/`などに配置してもいいかもしれない.

あとは, レイアウトのhead部分に

```html
{{ if or .Params.tikz .Site.Params.tikz }}
  {{ partial "tikzjax.html" . }}
{{ end }}
```

などと追加する.
これだと記事ファイルの冒頭部分に`tikz: true`とすることで
スクリプトが読み込まれる. ここら辺は好みであろう.

###  ショートコード

`layouts/shortcodes/tikz.html`を作成する.
これも好みだと思うが, 私は`{{ figure }}`風に登録している.

```html
<figure>
  <script type="text/tikz">
    {{ .Inner }}
  </script>
  {{ with .Get "title" }}
  <figcaption>
    <h4>{{ . }}</h4>
  </figcaption>
  {{ end }}
</figure>
```

これ以外に`<style>`~`</style>`でテーマに合うようにデザインを調整している.

## サンプル

[TEXample](http://www.texample.net/)にサンプルがあるのでいくつか書かせてみる.

### A simple cycle

[A simple cycle | TikZ example](http://www.texample.net/tikz/examples/cycle/)

{{< tikz "A simple cycle" >}}
\begin{tikzpicture}[scale=1.5,transform shape]
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
{{< /tikz >}}

```tex
{{</* tikz "A simple cycle" */>}}
\begin{tikzpicture}[scale=1.5,transform shape]
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
{{</* /tikz */>}}
```

### Intersecting lines

[Intersecting lines | TikZ example](http://www.texample.net/tikz/examples/intersecting-lines/)

{{< tikz "Intersecting lines" >}}
\begin{tikzpicture}[scale=2.5,transform shape]
  % Draw axes
  \draw [<->,thick] (0,2) node (yaxis) [above] {$y$}
      |- (3,0) node (xaxis) [right] {$x$};
  % Draw two intersecting lines
  \draw (0,0) coordinate (a_1) -- (2,1.8) coordinate (a_2);
  \draw (0,1.5) coordinate (b_1) -- (2.5,0) coordinate (b_2);
  % Calculate the intersection of the lines a_1 -- a_2 and b_1 -- b_2
  % and store the coordinate in c.
  \coordinate (c) at (intersection of a_1--a_2 and b_1--b_2);
  % Draw lines indicating intersection with y and x axis. Here we use
  % the perpendicular coordinate system
  \draw[dashed] (yaxis |- c) node[left] {$y'$}
      -| (xaxis -| c) node[below] {$x'$};
  % Draw a dot to indicate intersection point
  \fill[red] (c) circle (2pt);
\end{tikzpicture}
{{< /tikz >}}

テーマと合わせるために`filter: invert()`で色を反転させているので,
丸が水色になっている.

```tex
{{</* tikz "Intersecting lines" */>}}
\begin{tikzpicture}[scale=2.5,transform shape]
  % Draw axes
  \draw [<->,thick] (0,2) node (yaxis) [above] {$y$}
      |- (3,0) node (xaxis) [right] {$x$};
  % Draw two intersecting lines
  \draw (0,0) coordinate (a_1) -- (2,1.8) coordinate (a_2);
  \draw (0,1.5) coordinate (b_1) -- (2.5,0) coordinate (b_2);
  % Calculate the intersection of the lines a_1 -- a_2 and b_1 -- b_2
  % and store the coordinate in c.
  \coordinate (c) at (intersection of a_1--a_2 and b_1--b_2);
  % Draw lines indicating intersection with y and x axis. Here we use
  % the perpendicular coordinate system
  \draw[dashed] (yaxis |- c) node[left] {$y'$}
      -| (xaxis -| c) node[below] {$x'$};
  % Draw a dot to indicate intersection point
  \fill[red] (c) circle (2pt);
\end{tikzpicture}
{{</* /tikz */>}}
```

### SWAN wave model
[SWAN wave model | TikZ example](http://www.texample.net/tikz/examples/swan-wave-model/)

{{< tikz "SWAN wave model" >}}
\usetikzlibrary{positioning}
\\begin *{document}
\begin{tikzpicture}[scale=.9,every node/.style={minimum size=1cm}]
  %slanting: production of a set of n 'laminae' to be piled up. N=number of grids.
  \begin{scope}[
          yshift=-83,every node/.append style={
          yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
          ]
      % opacity to prevent graphical interference
      \fill[white,fill opacity=0.9] (0,0) rectangle (5,5);
      \draw[step=4mm, black] (0,0) grid (5,5); %defining grids
      \draw[step=1mm, red!50,thin] (3,1) grid (4,2);  %Nested Grid
      \draw[black,very thick] (0,0) rectangle (5,5);%marking borders
      \fill[red] (0.05,0.05) rectangle (0.35,0.35);
      %Idem as above, for the n-th grid:
  \end{scope}
    
  \begin{scope}[
    yshift=0,every node/.append style={
        yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                  ]
      \fill[white,fill opacity=.9] (0,0) rectangle (5,5);
      \draw[black,very thick] (0,0) rectangle (5,5);
      \draw[step=5mm, black] (0,0) grid (5,5);
  \end{scope}
    
  \begin{scope}[
    yshift=90,every node/.append style={
    yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                  ]
    \fill[white,fill opacity=.9] (0,0) rectangle (5,5);
    \draw[step=10mm, black] (1,1) grid (4,4);
    \draw[black,very thick] (1,1) rectangle (4,4);
    \draw[black,dashed] (0,0) rectangle (5,5);
  \end{scope}
    
  \begin{scope}[
    yshift=170,every node/.append style={
        yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
      ]
      \fill[white,fill opacity=0.6] (0,0) rectangle (5,5);
      \draw[step=10mm, black] (2,2) grid (5,5);
      \draw[step=2mm, green] (2,2) grid (3,3);
      \draw[black,very thick] (2,2) rectangle (5,5);
      \draw[black,dashed] (0,0) rectangle (5,5);
  \end{scope}
    
  \begin{scope}[
      yshift=-170,every node/.append style={
      yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                ]
      %marking border
      \draw[black,very thick] (0,0) rectangle (5,5);

      %drawing corners (P1,P2, P3): only 3 points needed to define a plane.
      \draw [fill=lime](0,0) circle (.1) ;
      \draw [fill=lime](0,5) circle (.1);
      \draw [fill=lime](5,0) circle (.1);
      \draw [fill=lime](5,5) circle (.1);

      %drawing bathymetric hypotetic countours on the bottom grid:    	
      \draw [ultra thick](0,1) parabola bend (2,2) (5,1)  ;
      \draw [dashed] (0,1.5) parabola bend (2.5,2.5) (5,1.5) ;
      \draw [dashed] (0,2) parabola bend (2.7,2.7) (5,2)  ;
      \draw [dashed] (0,2.5) parabola bend (3.5,3.5) (5,2.5)  ;
      \draw [dashed] (0,3.5)  parabola bend (2.75,4.5) (5,3.5);
      \draw [dashed] (0,4)  parabola bend (2.75,4.8) (5,4);
      \draw [dashed] (0,3)  parabola bend (2.75,3.8) (5,3);
      \draw[-latex,thick](2.8,1)node[right]{$\mathsf{Shoreline}$}
                to[out=180,in=270] (2,1.99);
  \end{scope} %end of drawing grids

  %putting arrows and labels:
  \draw[-latex,thick] (6.2,2) node[right]{$\mathsf{Bathymetry}$}
        to[out=180,in=90] (4,2);

  \draw[-latex,thick](5.8,-.3)node[right]{$\mathsf{Comp.\ G.}$}
      to[out=180,in=90] (3.9,-1);

  \draw[-latex,thick](5.9,5)node[right]{$\mathsf{Wind\ G.}$}
      to[out=180,in=90] (3.6,5);

  \draw[-latex,thick](5.9,8.4)node[right]{$\mathsf{Friction\ G.}$}
      to[out=180,in=90] (3.2,8);

  \draw[-latex,thick,red](5.3,-4.2)node[right]{$\mathsf{G. Cell}$}
      to[out=180,in=90] (0,-2.5);

  \draw[-latex,thick,red](4.3,-1.9)node[right]{$\mathsf{Nested\ G.}$}
      to[out=180,in=90] (2,-.5);

  \draw[-latex,thick](4,-6)node[right]{$\mathsf{Batymetry}$}
      to[out=180,in=90] (2,-5);	
  %drawing points on grid's conrners.
  \fill[black,font=\footnotesize]
      (-5,-4.3) node [above] {$P_{1}$}
      (-.3,-5.6) node [below] {$P_{2}$}
      (5.5,-4) node [above] {$P_{3}$};
\end{tikzpicture}
{{< /tikz >}}

`positioning`ライブラリが必要.
反転して色が変だが, すごい.

```tex
{{</* tikz "SWAN wave model" */>}}
\usetikzlibrary{positioning}
\\begin *{document}
\begin{tikzpicture}[scale=.9 every node/.style={minimum size=1cm}]
  %slanting: production of a set of n 'laminae' to be piled up. N=number of grids.
  \begin{scope}[
          yshift=-83,every node/.append style={
          yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
          ]
      % opacity to prevent graphical interference
      \fill[white,fill opacity=0.9] (0,0) rectangle (5,5);
      \draw[step=4mm, black] (0,0) grid (5,5); %defining grids
      \draw[step=1mm, red!50,thin] (3,1) grid (4,2);  %Nested Grid
      \draw[black,very thick] (0,0) rectangle (5,5);%marking borders
      \fill[red] (0.05,0.05) rectangle (0.35,0.35);
      %Idem as above, for the n-th grid:
  \end{scope}
    
  \begin{scope}[
    yshift=0,every node/.append style={
        yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                  ]
      \fill[white,fill opacity=.9] (0,0) rectangle (5,5);
      \draw[black,very thick] (0,0) rectangle (5,5);
      \draw[step=5mm, black] (0,0) grid (5,5);
  \end{scope}
    
  \begin{scope}[
    yshift=90,every node/.append style={
    yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                  ]
    \fill[white,fill opacity=.9] (0,0) rectangle (5,5);
    \draw[step=10mm, black] (1,1) grid (4,4);
    \draw[black,very thick] (1,1) rectangle (4,4);
    \draw[black,dashed] (0,0) rectangle (5,5);
  \end{scope}
    
  \begin{scope}[
    yshift=170,every node/.append style={
        yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
      ]
      \fill[white,fill opacity=0.6] (0,0) rectangle (5,5);
      \draw[step=10mm, black] (2,2) grid (5,5);
      \draw[step=2mm, green] (2,2) grid (3,3);
      \draw[black,very thick] (2,2) rectangle (5,5);
      \draw[black,dashed] (0,0) rectangle (5,5);
  \end{scope}
    
  \begin{scope}[
      yshift=-170,every node/.append style={
      yslant=0.5,xslant=-1},yslant=0.5,xslant=-1
                ]
      %marking border
      \draw[black,very thick] (0,0) rectangle (5,5);

      %drawing corners (P1,P2, P3): only 3 points needed to define a plane.
      \draw [fill=lime](0,0) circle (.1) ;
      \draw [fill=lime](0,5) circle (.1);
      \draw [fill=lime](5,0) circle (.1);
      \draw [fill=lime](5,5) circle (.1);

      %drawing bathymetric hypotetic countours on the bottom grid:    	
      \draw [ultra thick](0,1) parabola bend (2,2) (5,1)  ;
      \draw [dashed] (0,1.5) parabola bend (2.5,2.5) (5,1.5) ;
      \draw [dashed] (0,2) parabola bend (2.7,2.7) (5,2)  ;
      \draw [dashed] (0,2.5) parabola bend (3.5,3.5) (5,2.5)  ;
      \draw [dashed] (0,3.5)  parabola bend (2.75,4.5) (5,3.5);
      \draw [dashed] (0,4)  parabola bend (2.75,4.8) (5,4);
      \draw [dashed] (0,3)  parabola bend (2.75,3.8) (5,3);
      \draw[-latex,thick](2.8,1)node[right]{$\mathsf{Shoreline}$}
                to[out=180,in=270] (2,1.99);
  \end{scope} %end of drawing grids

  %putting arrows and labels:
  \draw[-latex,thick] (6.2,2) node[right]{$\mathsf{Bathymetry}$}
        to[out=180,in=90] (4,2);

  \draw[-latex,thick](5.8,-.3)node[right]{$\mathsf{Comp.\ G.}$}
      to[out=180,in=90] (3.9,-1);

  \draw[-latex,thick](5.9,5)node[right]{$\mathsf{Wind\ G.}$}
      to[out=180,in=90] (3.6,5);

  \draw[-latex,thick](5.9,8.4)node[right]{$\mathsf{Friction\ G.}$}
      to[out=180,in=90] (3.2,8);

  \draw[-latex,thick,red](5.3,-4.2)node[right]{$\mathsf{G. Cell}$}
      to[out=180,in=90] (0,-2.5);

  \draw[-latex,thick,red](4.3,-1.9)node[right]{$\mathsf{Nested\ G.}$}
      to[out=180,in=90] (2,-.5);

  \draw[-latex,thick](4,-6)node[right]{$\mathsf{Batymetry}$}
      to[out=180,in=90] (2,-5);	
  %drawing points on grid's conrners.
  \fill[black,font=\footnotesize]
      (-5,-4.3) node [above] {$P_{1}$}
      (-.3,-5.6) node [below] {$P_{2}$}
      (5.5,-4) node [above] {$P_{3}$};
\end{tikzpicture}
{{</* /tikz */>}}
```
