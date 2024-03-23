// wip
import { visitParents } from "unist-util-visit-parents";

/**
 * @param {string} body
 * @returns {string}
 */
const htmlTemplate = (body) => `<div class="responsive"><div class="feynmanjs">${body}</div></div>`;

/**
 * @param {string} code
 * @returns {string}
 */
const code2html = (code) => htmlTemplate(code);

// @ts-ignore
const remarkFeynmanJS = () => tree => new Promise(async (resolve, reject) => {
  // @ts-ignore
  const instances = [];
  visitParents(tree, [{ type: "code", lang: "feynmanjs" }],
  // @ts-ignore
  node => {
    // @ts-ignore
    instances.push({node});
  });
  // @ts-ignore
  for (const {node} of instances) {
    try {
      node.type = "html";
      node.value = code2html(node.value);
    } catch (e) {
      console.error("ERROR", e);
      return reject(e);
    }
  }

  // @ts-ignore
  resolve();
});

export default remarkFeynmanJS;
