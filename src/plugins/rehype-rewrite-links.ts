import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

/** extensions for post files */
const extensions = ["ipynb.md", "md", "mdx", "ipynb", "typ"];

/**
 * Remove the extension of the relative link and solve the hierarchy.
 * @param href
 * @param currentPath - Path of the source post file
 * @returns Updated href
 */
const updateHref = (href: string, currentPath: string) => {
  // do nothing for external links or only-hash links
  if (
    href.indexOf("://") > 0 ||
    href.startsWith("//") ||
    href.startsWith("#")
  ) {
    return href;
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

    for (const ext of extensions) {
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
        const isIndexFile = extensions.some((ext) =>
          currentPath.endsWith("index." + ext)
        );
        if (isIndexFile) {
          // "../../path/to/post" -> "./../path/to/post"
          newRelativePath = newRelativePath.replace(/^\.\.\//, "./");
        }

        return newRelativePath + hash + search;
      }
    }
  } catch (e) {
    console.error(`ERROR: resolving link ${href}`);
    return href;
  }
  return href;
};

/** rewrite relative links between md files */
const rehypeRewriteLinks: RehypePlugin = () => (tree, file) =>
  visit(tree, "element", (node) => {
    if (node.tagName === "a" && node.properties && node.properties.href) {
      const href = node.properties.href;
      if (typeof href !== "string") return;

      // it doesn't work for .typ files i.e. @components/Link.astro
      if (file.path && !file.path.endsWith(".typ")) {
        node.properties.href = updateHref(href, file.path);
      }
      return;
    }
  });

export { rehypeRewriteLinks, updateHref };
