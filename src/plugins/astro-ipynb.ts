// wip
import type { AstroIntegration } from "astro";
import path from "path";
import glob from "fast-glob";
import { execSync } from "child_process";
import fs from "fs";

const nbconvertCmd = "uv run jupyter nbconvert";
const template = "src/templates/ipynb";

const ipynb = (): AstroIntegration => {
  return {
    name: "ipynb",
    hooks: {
      "astro:config:setup": async ({ addWatchFile, logger }) => {
        const ipynbFiles = await glob("src/content/**/*.ipynb");

        for (const file of ipynbFiles) {
          const ipynbPath = path.resolve(file);
          const dir = path.dirname(ipynbPath);
          const ipynbFilename = path.basename(ipynbPath);

          addWatchFile(ipynbPath);

          const mdFilename = ipynbFilename + ".md";
          const mdPath = path.join(dir, mdFilename);

          // TODO: set the path name without "ipynb" to `slug` in frontmatter

          try {
            const cmd = `${nbconvertCmd} --to markdown --template "${template}" --stdout "${ipynbPath}"`;
            const mdBody = execSync(cmd, { encoding: "utf-8" });

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
  };
};

export { ipynb };
