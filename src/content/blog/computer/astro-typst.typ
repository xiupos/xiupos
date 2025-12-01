#import "/src/templates/blog.typ": *

#show: post.with(
  title: "Astroの記事をTypstで書く",
  author: "xiupos",
  date: "2025-11-23T23:00:00+09:00",
  lang: "ja",
  draft: true,
)

#link("https://astro.build/")[Astro] で構築された本ブログの記事を #link("https://typst.app/")[Typst] で書くためにしたことの備忘録. ちなみにこの記事も Typst で書かれている.

= 導入

#link("https://github.com/ahxt/academic-homepage-typst")[ahxt/academic-homepage-typst] を参考に導入する.

本ブログは Astro を用いて構築されていて, 記事執筆には主に Markdown (数式は TeX 記法) を使っている. それと共存する形で Typst を導入するために, まず #link("https://github.com/OverflowCat/astro-typst")[OverflowCat/astro-typst] を追加する.

```sh
npm install astro-typst
```

= 数式表示

#image("ipad-mini-6/image.jpg", width: 70%)

== 数式フォント問題

= 参考サイト

#link("../note/quotient.typ")

#link("../note/ca.md")
