#import "/src/layouts/blog.typ": *

#show: main.with(
  title: "商の微分(typst)",
  author: "xiupos",
  date: "2024-07-22T09:00:00+09:00",
  lang: "ja",
  draft: true,
)

恥ずかしながら, 商の微分公式をよく忘れる:
$ (f/g)' = (f' g - f g') / g^2. $
これをすぐに思い出すための備忘録. はじめて習ったときに用いたであろう冪の微分公式による証明より, 対数微分法を用いた方が直感的である: $h(ln h)' = h'$ に注意して,
$
  (f/g)' & = f/g (ln f/g)' \
         & = f/g (ln f - ln g)' \
         & = f/g (f'/f - g'/g) \
         & = (f' g - f g') / g^2.
$
積の微分と比較すると覚えやすいかもしれない:
$
  (f g)' & = f g (ln f g)' \
         & = f g (ln f + ln g)' \
         & = f g (f'/f + g'/g) \
         & = f' g + f g'.
$
