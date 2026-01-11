#let post(
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
      title: title,
      author: author,
    )

    // math rules
    show math.equation: set text(weight: 500, size: 15pt)
    show math.equation: html.frame
    show math.equation.where(block: false): box

    // Footnotes
    show: it => {
      show footnote: it => context {
        let num = counter(footnote).get().at(0)
        link(label("footnote-" + str(num)), super(str(num)))
      }
      it
    }

    // Main body.
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
