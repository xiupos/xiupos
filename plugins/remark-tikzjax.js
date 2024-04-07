// wip
import { visitParents } from "unist-util-visit-parents";
import nodeTikzjax from 'node-tikzjax';

// @ts-ignore
const tex2svg = nodeTikzjax.default;
const tex2svgOptions = {
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
  if (type == "tikz") return `
    \\begin{document}
      ${body}
    \\end{document}
  `;
  else return body;
}

/**
 * @param {string} type
 * @param {string} tex
 * @returns {Promise<string>}
 */
const tex2html = async (type, tex) => htmlTemplate(await tex2svg(texTemplate(type, tex), tex2svgOptions));

// @ts-ignore
const remarkTikzjax = () => tree => new Promise(async (resolve, reject) => {
  // @ts-ignore
  const instances = [];
  visitParents(tree, [
    { type: "code", lang: "tikz" },
  ],
  // @ts-ignore
  node => {
    // @ts-ignore
    instances.push({node});
  });
  // @ts-ignore
  for (const {node} of instances) {
    try {
      node.type = "html";
      node.value = await tex2html(node.lang, node.value);
    } catch (e) {
      console.log("ERROR", e);
      return reject(e);
    }
  }

  // @ts-ignore
  resolve();
});

export default remarkTikzjax;
