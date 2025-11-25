// wip
import { visitParents } from "unist-util-visit-parents";
import nodeTikzjax from "node-tikzjax";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

// @ts-ignore
const tex2svg = nodeTikzjax.default;
const tex2svgOptions = {
  embedFontCss: true,
  texPackages: {
    "tikz-cd": "",
    "tikz-feynhand": "",
  },
};

const htmlTemplate = (body: string): string =>
  `<div class="responsive" style="zoom:1.4;">${body}</div>`;

const texTemplate = (type: string, body: string): string => {
  if (type == "tikz")
    return `
    \\begin{document}
      ${body}
    \\end{document}
  `;
  else return body;
};

const tex2html = async (type: string, tex: string): Promise<string> =>
  htmlTemplate(await tex2svg(texTemplate(type, tex), tex2svgOptions));

// @ts-ignore
const remarkTikzjax: RemarkPlugin<any[]> = () => (tree) =>
  new Promise(async (resolve, reject) => {
    // @ts-ignore
    const instances = [];
    visitParents(
      tree,
      [{ type: "code", lang: "tikz" }],
      // @ts-ignore
      (node) => {
        // @ts-ignore
        instances.push({ node });
      }
    );
    // @ts-ignore
    for (const { node } of instances) {
      try {
        node.type = "html";
        let svg = await tex2html(node.lang, node.value);

        // for dark mode;
        svg = svg
          // .replaceAll(/stroke="none"/g, `storoke="var(--color)"`)
          .replaceAll(/("#000"|"black")/g, `"currentColor"`)
          .replaceAll(
            /stroke="currentColor"/g,
            `stroke="currentColor" fill="currentColor"`
          )
          .replaceAll(/("#fff"|"white")/g, `"var(--back)"`);

        node.value = svg;
      } catch (e) {
        console.log("ERROR", e);
        return reject(e);
      }
    }

    // @ts-ignore
    resolve();
  });

export default remarkTikzjax;
