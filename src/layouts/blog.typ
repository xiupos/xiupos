#import "/plugins/mathyml/src/lib.typ": *
#import prelude: *

#let main(
  title: "Untitled",
  date: "2025-10-11T12:00:00+09:00",
  lang: "en",
  author: "xiupos",
  draft: false,
  body,
) = {
  show: it => {
    // Generate metadata for Astro content collections
    [
      #metadata((
        title: title,
        pubDate: date,
        draft: draft,
        lang: lang,
      )) <frontmatter>
    ]

    // set basic document metadata
    set document(
      author: author,
      title: title,
    )

    // math rules
    show math.equation: set text(weight: 500)
    // show math.equation: to-mathml
    show math.equation: try-to-mathml

    // Footnotes
    show: it => {
      show footnote: it => context {
        let num = counter(footnote).get().at(0)
        link(label("footnote-" + str(num)), super(str(num)))
      }
      it
    }

    // Main body.
    outline(title: "", indent: auto)
    set par(justify: true)
    it
  }

  body

  context {
    query(footnote)
      .enumerate()
      .map(((idx, it)) => {
        enum.item[
          #html.elem(
            "div",
            attrs: ("data-typst-label": "footnote-" + str(idx + 1)),
            it.body,
          )
        ]
      })
      .join()
  }
}
