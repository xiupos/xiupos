// wip
import { visitParents } from "unist-util-visit-parents";
import * as nodeTikzjax from "node-tikzjax";
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import type { Code, Root } from "mdast";

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
  if (type === "tikz")
    return `
    \\begin{document}
      ${body}
    \\end{document}
  `;
  else return body;
};

const tex2html = async (type: string, tex: string): Promise<string> =>
  htmlTemplate(await tex2svg(texTemplate(type, tex), tex2svgOptions));

const remarkTikzjax: RemarkPlugin<any[]> = () => (tree: Root) =>
  new Promise(async (resolve, reject) => {
    const instances: Code[] = [];
    visitParents(
      tree,
      [{ type: "code", lang: "tikz" }],
      (node: Code) => {
        instances.push(node);
      }
    );
    for (const node of instances) {
      try {
        const mutableNode = node as Omit<Code, "type"> & { type: string };
        mutableNode.type = "html";
        let svg = await tex2html("tikz", node.value);

        // for dark mode;
        svg = svg
          .replaceAll(/("#000"|"black")/g, `"currentColor"`)
          .replaceAll(
            /stroke="currentColor"/g,
            `stroke="currentColor" fill="currentColor"`
          )
          .replaceAll(/("#fff"|"white")/g, `"var(--back)"`);

        mutableNode.value = svg;
      } catch (e) {
        console.error("ERROR: ", e);
        return reject(e);
      }
    }

    resolve();
  });

export default remarkTikzjax;
