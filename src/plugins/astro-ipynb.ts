// wip
import type { AstroIntegration } from "astro";
import path from "path";
import glob from "fast-glob";
import { execSync } from "child_process";
import fs from "fs";
import YAML from "yaml";

type AstroIpynbConfig = {
  nbconvert: {
    cmd?: string;
    template?: string;
  };
};

const ipynb = (config: AstroIpynbConfig): AstroIntegration => ({
  name: "ipynb",
  hooks: {
    "astro:config:setup": async ({ addWatchFile, logger }) => {
      const ipynbFiles = await glob("src/content/**/*.ipynb");
      const contentDir = path.resolve("src/content");

      for (const file of ipynbFiles) {
        const ipynbPath = path.resolve(file);
        addWatchFile(ipynbPath);
        const ipynbDir = path.dirname(ipynbPath);
        const ipynbFilename = path.basename(ipynbPath);
        const ipynbUrlDir = path
          .relative(contentDir, ipynbDir)
          .split("/")
          .slice(1)
          .join("/");
        const ipynbBasename = path.basename(ipynbPath, ".ipynb");
        const ipynbUrl =
          ipynbBasename === "index"
            ? ipynbUrlDir
            : path.join(ipynbUrlDir, ipynbBasename);

        const ipynbBody = fs.readFileSync(ipynbPath, { encoding: "utf-8" });
        const ipynbObj = JSON.parse(ipynbBody);

        const mdFilename = ipynbFilename + ".md";
        const mdPath = path.join(ipynbDir, mdFilename);

        if (ipynbObj.cells?.length == 0) {
          logger.warn(`${ipynbPath} is empty; Skip.`);
          return;
        }
        const ipynbFirstCellText = [...ipynbObj.cells[0].source].join("");

        if (
          !ipynbFirstCellText.startsWith("```yaml") ||
          !ipynbFirstCellText.endsWith("```")
        ) {
          logger.warn(
            `First cell must be a yaml code block only in ${ipynbPath}; Skip.`
          );
          return;
        }
        const frontmatterText = ipynbFirstCellText
          .replace(/^```yaml\n/, "")
          .replace(/\n```$/, "");

        // get frontmatter from first cell of ipynb
        let frontmatterObj: any = {};
        try {
          frontmatterObj = YAML.parse(frontmatterText);
        } catch (e) {
          logger.warn(`Failed to parse frontmatter in ${ipynbPath}`);
          console.warn(e);
        }

        // set the path name without "ipynb" to `slug` in frontmatter
        if (!frontmatterObj.slug) frontmatterObj.slug = ipynbUrl;

        // add colab link
        if (!frontmatterObj.links || frontmatterObj.links.length == 0)
          frontmatterObj.links = [];
        frontmatterObj.links.push({
          text: "colab",
          href:
            "https://colab.research.google.com/github/xiupos/xiupos/blob/main/src/content/" +
            path.relative(contentDir, ipynbPath),
        });

        // reconstruct frontmatter
        ipynbObj.cells[0].source = [
          "---\n",
          ...YAML.stringify(frontmatterObj).split(/(?<=\n)/),
          "---",
        ];

        // run nbconvert and save to ".ipynb.md" file
        try {
          const cmd = /*sh*/ [
            config.nbconvert.cmd || "jupyter-nbconvert",
            "--to markdown",
            config.nbconvert.template
              ? `--template "${config.nbconvert.template}"`
              : "",
            "--stdin",
            "--stdout",
          ].join(" ");
          const mdBody = execSync(cmd, {
            input: JSON.stringify(ipynbObj),
            encoding: "utf-8",
          });

          if (
            !fs.existsSync(mdPath) ||
            fs.readFileSync(mdPath, { encoding: "utf-8" }) !== mdBody
          ) {
            fs.writeFileSync(mdPath, mdBody);
            logger.info(`Generated: ${mdFilename}`);
          }
        } catch (e) {
          logger.error(`nbconvert cannot convert ${ipynbPath}`);
          console.error(e);
        }
      }
    },
  },
});

export { ipynb, type AstroIpynbConfig };
