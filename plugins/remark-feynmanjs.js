// wip
import { visitParents } from "unist-util-visit-parents";

/**
 * @param {string} body
 * @returns {string}
 */
const htmlTemplate = (body) => `<div class="responsive"><div class="feynmanjs">${body}</div></div>`;

/**
 * @param {string} tex
 * @returns {{ width: number, height: number, diagram: string[] }}
 */
const tex2object = (tex) => {
  const array = tex.match(
    /\\begin\{fmfgraph\*\}\(([0-9]*),([0-9]*)\)([\s\S]*)\\end\{fmfgraph\*\}/m
  );
  if (array && array[3]) {
    return {
      width: Number(array[1]),
      height: Number(array[2]),
      diagram: array[3].split("\n").filter(Boolean).map(s=>s.trim()),
    };
  } else {
    return { width: 0, height: 0, diagram: [] };
  }
};

/**
 * @param {{ width: number, height: number, diagram: string[] }} json
 * @returns {string}
 */
const object2html = (json) => htmlTemplate(JSON.stringify(json));

// @ts-ignore
const remarkFeynmanJS = () => tree => new Promise(async (resolve, reject) => {
  // @ts-ignore
  const instances = [];
  visitParents(tree, [{ type: "code", lang: "feynmf" }],
  // @ts-ignore
  node => {
    // @ts-ignore
    instances.push({node});
  });
  // @ts-ignore
  for (const {node} of instances) {
    try {
      node.type = "html";
      node.value = object2html(tex2object(node.value));
    } catch (e) {
      console.error("ERROR", e);
      return reject(e);
    }
  }

  // @ts-ignore
  resolve();
});

export default remarkFeynmanJS;
