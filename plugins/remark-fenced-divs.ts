// wip
import type { RemarkPlugin } from '@astrojs/markdown-remark';
import { h } from 'hastscript';
import { visit } from 'unist-util-visit';

// @ts-ignore
const remarkFencedDivs: RemarkPlugin<any[]> = () => tree => visit(tree, (node) => {
  // @ts-ignore
  if (node.type === 'containerDirective') {
    // @ts-ignore
    if (node.name === 'screen') {
      // @ts-ignore
      const data = node.data || (node.data = {});
      const tagName = 'div';

      data.hName = tagName;
      data.hProperties = h(tagName, { class: 'screen' }).properties;
    } else {
      return;
    }
  }
});

export default remarkFencedDivs;
