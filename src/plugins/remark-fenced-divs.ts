// wip
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import type { Properties } from "hast";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

// mdast-util-to-hast augments this, but only when its types happen to be loaded
type HastData = { hName?: string; hProperties?: Properties };

/** rewite "::: ~ :::" to div blocks */
const remarkFencedDivs: RemarkPlugin = () => (tree) =>
  visit(tree, (node) => {
    if (node.type === "containerDirective") {
      // :::screen ~ :::
      if (node.name === "screen") {
        const data: HastData = node.data || (node.data = {});
        const tagName = "div";

        data.hName = tagName;
        data.hProperties = h(tagName, { class: "screen" }).properties;
      }

      // :::adcal ~ :::
      if (node.name === "adcal") {
        const data: HastData = node.data || (node.data = {});
        const tagName = "div";

        data.hName = tagName;
        data.hProperties = h(tagName, { class: "adcal" }).properties;
      }
    }
  });

export default remarkFencedDivs;
