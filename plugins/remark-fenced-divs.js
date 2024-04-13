// wip
import { h } from 'hastscript';
import { visit } from 'unist-util-visit';

// @ts-ignore
const remarkFencedDivs = () => tree => visit(tree, (node) => {
  if (node.type === 'containerDirective') {
    if (node.name === 'screen') {
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
