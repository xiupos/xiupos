import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

/** extentions for post files */
const extentions = ["md", "mdx", "typ"];

/** rewrite relative links between md files */
const rehypeRewriteLinks: RehypePlugin = () => (tree, file) =>
  visit(tree, "element", (node) => {
    if (node.tagName === "a" && node.properties && node.properties.href) {
      const href = node.properties.href;
      if (typeof href !== "string") return;

      // do nothing for external links or only-hash links
      if (
        href.indexOf("://") > 0 ||
        href.startsWith("//") ||
        href.startsWith("#")
      ) {
        return;
      }

      try {
        const urlObj = new URL(href, "https://example.com/");

        // "#header1"
        const hash = urlObj.hash;
        // "?search=query"
        const search = urlObj.search;
        // "../path/to/post.md"
        const relativePath = href.substring(
          0,
          href.length - hash.length - search.length
        );

        for (const ext of extentions) {
          if (relativePath.endsWith("." + ext)) {
            let newRelativePath = relativePath;

            if (newRelativePath.endsWith("/index." + ext)) {
              // "./path/to/post/index.md" -> "./path/to/post"
              newRelativePath = newRelativePath.replace(
                new RegExp(`/index\.${ext}$`),
                ""
              );
            } else {
              // "./path/to/post.md" -> "./path/to/post"
              newRelativePath = newRelativePath.replace(
                new RegExp(`\.${ext}$`),
                ""
              );
            }

            // is the link source a index file like "~/index.md"
            const isIndexFile =
              file.path &&
              extentions.some((ext) => file.path.endsWith("index." + ext));
            if (isIndexFile) {
              // "../../path/to/post" -> "./../path/to/post"
              newRelativePath = newRelativePath.replace(/^\.\.\//, "./");
            }

            node.properties.href = newRelativePath + hash + search;
            return;
          }
        }
      } catch (e) {
        return;
      }
    }
  });

export default rehypeRewriteLinks;
