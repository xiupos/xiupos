import { visitParents } from "unist-util-visit-parents";
import nodeTikzjax from 'node-tikzjax';

/**
 * @typedef {import('mdast').Node} Node
 * @typedef {import('mdast').Code} Code
 */

// @ts-ignore
const tex2svg = nodeTikzjax.default;
const tex2svgOption = {
  embedFontCss: true,
  fontCssUrl: 'https://cdn.jsdelivr.net/npm/node-tikzjax@latest/css/fonts.css',
}

/**
 * @param {string} body
 * @returns {string}
 */
const htmlTemplate = (body) => `<div class="responsive" style="zoom:1.4;">${body}</div>`;

/**
 * @param {string} type
 * @param {string} body
 * @returns {string}
 */
const texTemplate = (type, body) => {
  if (type == "tikzcd") return `
    \\usetikzlibrary{cd}
    \\begin{document}
      \\begin{tikzcd}
        ${body}
      \\end{tikzcd}
    \\end{document}
  `;
  else if (type == "tikzpicture") return `
    \\begin{document}
      \\begin{tikzpicture}
        ${body}
      \\end{tikzpicture}
    \\end{document}
  `;
  else return body;
}

// @ts-ignore
const remarkTikzjax = () => tree => new Promise(async (resolve, reject) => {
  /** @type {Code[]} */
  const instances = [];
  visitParents(tree, [
    { type: "code", lang: "tikz" },
    { type: "code", lang: "tikzcd" },
    { type: "code", lang: "tikzpicture" },
  ],
  node => {
    // @ts-ignore
    instances.push({node});
  });
  // @ts-ignore
  for (const {node} of instances) {
    try {
      node.type = "html";
      node.value = htmlTemplate(await tex2svg(texTemplate(node.lang, node.value), tex2svgOption));
    } catch (e) {
      console.log("ERROR", e);
      return reject(e);
    }
  }

  // @ts-ignore
  resolve();
});

export default remarkTikzjax;
