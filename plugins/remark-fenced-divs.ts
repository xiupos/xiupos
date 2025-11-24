// wip
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

/** rewite "::: ~ :::" to div blocks */
const remarkFencedDivs: RemarkPlugin = () => (tree) =>
  visit(tree, (node) => {
    if (node.type === "containerDirective") {
      // :::screen ~ :::
      if (node.name === "screen") {
        const data = node.data || (node.data = {});
        const tagName = "div";

        data.hName = tagName;
        data.hProperties = h(tagName, { class: "screen" }).properties;
      }
    }
  });

export default remarkFencedDivs;
