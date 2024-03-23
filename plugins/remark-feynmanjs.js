// wip
import { visitParents } from "unist-util-visit-parents";

/**
 * @param {string} tex
 * @returns {string}
 */
const tex2html = (tex) => {
  const array = tex.match(
    /\\begin\{fmfgraph\*\}\(([0-9]*),([0-9]*)\)([\s\S]*)\\end\{fmfgraph\*\}/m
  );
  const width = array ? Number(array[1]) : 0;
  const height = array ? Number(array[2]) : 0;
  const diagram = (array && array[3]) ? array[3].split("\n").filter(Boolean).map(s=>s.trim()) : [];
  const object = {
    width: width,
    height: height,
    diagram: diagram,
  };
  return `
    <div class="responsive">
      <div class="feynmanjs" style="--fig-width: ${width}px; --fig-height: ${height}px;">
        ${JSON.stringify(object)}
      </div>
    </div>
  `;
};

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
      node.value = tex2html(node.value);
    } catch (e) {
      console.error("ERROR", e);
      return reject(e);
    }
  }

  // @ts-ignore
  resolve();
});

export default remarkFeynmanJS;
