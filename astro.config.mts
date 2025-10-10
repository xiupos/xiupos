import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import remarkFencedDivs from "./plugins/remark-fenced-divs.ts";
import rehypeMathML from "@daiji256/rehype-mathml";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// @ts-ignore
import rehypeWrapAll from "rehype-wrap-all";
import { typst } from "astro-typst";

import icon from "astro-icon";

/**
 * options for rehypeWrapAll
 * - add wrappers for responsive design
 */
const rehypeWrapAllOptions = [
  { selector: "table", wrapper: "div.responsive" },
  // {selector: 'img', wrapper: 'div.responsive'},
  // {selector: 'video', wrapper: 'div.responsive'},
  { selector: 'math[display="block"]', wrapper: "div.math-wrapper" },
];

const mathMacros = {
  "\\quantity": "{\\left\\{ #1 \\right\\}}",
  "\\qty": "{\\left\\{ #1 \\right\\}}",
  "\\pqty": "{\\left( #1 \\right)}",
  "\\bqty": "{\\left[ #1 \\right]}",
  "\\vqty": "{\\left\\vert #1 \\right\\vert}",
  "\\Bqty": "{\\left\\{ #1 \\right\\}}",
  "\\mqty": "{\\begin{array}{c} #1 \\end{array}}",
  "\\pmqty": "{\\left( \\begin{array}{c} #1 \\end{array} \\right)}",
  "\\bmqty": "{\\left[ \\begin{array}{c} #1 \\end{array} \\right]}",
  "\\vmqty": "{\\left\\vert \\begin{array}{c} #1 \\end{array} \\right\\vert}",
  "\\mdet": "{\\left| \\begin{array}{c} #1 \\end{array} \\right|}",
  "\\absolutevalue": "{\\left\\vert #1 \\right\\vert}",
  "\\abs": "{\\left\\vert #1 \\right\\vert}",
  "\\norm": "{\\left\\Vert #1 \\right\\Vert}",
  "\\evaluated": "{#1 \\vert}",
  "\\eval": "{#1 \\vert}",
  "\\order": "{\\mathcal{O} \\left( #1 \\right)}",
  "\\commutator": "{\\left[ #1 , #2 \\right]}",
  "\\comm": "{\\left[ #1 , #2 \\right]}",
  "\\anticommutator": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\acomm": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\poissonbracket": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\pb": "{\\left\\{ #1 , #2 \\right\\}}",
  "\\vectorbold": "{\\boldsymbol{ #1 }}",
  "\\vb": "{\\boldsymbol{ #1 }}",
  "\\vectorarrow": "{\\vec{\\boldsymbol{ #1 }}}",
  "\\va": "{\\vec{\\boldsymbol{ #1 }}}",
  "\\vectorunit": "{{\\boldsymbol{\\hat{ #1 }}}}",
  "\\vu": "{{\\boldsymbol{\\hat{ #1 }}}}",
  "\\dotproduct": "{\\boldsymbol\\cdot}",
  "\\vdot": "{\\boldsymbol\\cdot}",
  "\\crossproduct": "{\\boldsymbol\\times}",
  "\\cross": "{\\boldsymbol\\times}",
  "\\cp": "{\\boldsymbol\\times}",
  "\\gradient": "{\\boldsymbol\\nabla}",
  "\\grad": "{\\boldsymbol\\nabla}",
  "\\divergence": "{\\grad\\vdot}",
  "\\div": "{\\grad\\vdot}",
  "\\curl": "{\\grad\\cross}",
  "\\laplacian": "{\\nabla^2}",
  "\\tr": "{\\operatorname{tr}}",
  "\\Tr": "{\\operatorname{Tr}}",
  "\\rank": "{\\operatorname{rank}}",
  "\\erf": "{\\operatorname{erf}}",
  "\\Res": "{\\operatorname{Res}}",
  "\\principalvalue": "{\\mathcal{P}}",
  "\\pv": "{\\mathcal{P}}",
  "\\PV": "{\\operatorname{P.V.}}",
  "\\Re": "{\\operatorname{Re} \\left\\{ #1 \\right\\}}",
  "\\Im": "{\\operatorname{Im} \\left\\{ #1 \\right\\}}",
  "\\qqtext": "{\\quad\\text{ #1 }\\quad}",
  "\\qq": "{\\quad\\text{ #1 }\\quad}",
  "\\qcomma": "{\\text{,}\\quad}",
  "\\qc": "{\\text{,}\\quad}",
  "\\qcc": "{\\quad\\text{c.c.}\\quad}",
  "\\qif": "{\\quad\\text{if}\\quad}",
  "\\qthen": "{\\quad\\text{then}\\quad}",
  "\\qelse": "{\\quad\\text{else}\\quad}",
  "\\qotherwise": "{\\quad\\text{otherwise}\\quad}",
  "\\qunless": "{\\quad\\text{unless}\\quad}",
  "\\qgiven": "{\\quad\\text{given}\\quad}",
  "\\qusing": "{\\quad\\text{using}\\quad}",
  "\\qassume": "{\\quad\\text{assume}\\quad}",
  "\\qsince": "{\\quad\\text{since}\\quad}",
  "\\qlet": "{\\quad\\text{let}\\quad}",
  "\\qfor": "{\\quad\\text{for}\\quad}",
  "\\qall": "{\\quad\\text{all}\\quad}",
  "\\qeven": "{\\quad\\text{even}\\quad}",
  "\\qodd": "{\\quad\\text{odd}\\quad}",
  "\\qinteger": "{\\quad\\text{integer}\\quad}",
  "\\qand": "{\\quad\\text{and}\\quad}",
  "\\qor": "{\\quad\\text{or}\\quad}",
  "\\qas": "{\\quad\\text{as}\\quad}",
  "\\qin": "{\\quad\\text{in}\\quad}",
  "\\differential": "{\\text{d}}",
  "\\dd": "{\\text{d}}",
  "\\d": "{\\text{d}}",
  "\\derivative": "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}",
  "\\dv": "{\\frac{\\text{d}{ #1 }}{\\text{d}{ #2 }}}",
  "\\partialderivative": "{\\frac{\\partial{ #1 }}{\\partial{ #2 }}}",
  "\\pdv": "{\\frac{\\partial{ #1 }}{\\partial{ #2 }}}",
  "\\variation": "{\\delta}",
  "\\var": "{\\delta}",
  "\\functionalderivative": "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}",
  "\\fdv": "{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}",
  "\\ket": "{\\left\\vert { #1 } \\right\\rangle}",
  "\\bra": "{\\left\\langle { #1} \\right\\vert}",
  "\\innerproduct": "{\\left\\langle {#1} \\mid { #2} \\right\\rangle}",
  "\\braket": "{\\left\\langle {#1} \\mid { #2} \\right\\rangle}",
  "\\outerproduct":
    "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}",
  "\\dyad":
    "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}",
  "\\ketbra":
    "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}",
  "\\op":
    "{\\left\\vert { #1 } \\right\\rangle\\left\\langle { #2} \\right\\vert}",
  "\\expectationvalue": "{\\left\\langle {#1 } \\right\\rangle}",
  "\\expval": "{\\left\\langle {#1 } \\right\\rangle}",
  "\\ev": "{\\left\\langle {#1 } \\right\\rangle}",
  "\\matrixelement":
    "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}",
  "\\matrixel":
    "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}",
  "\\mel":
    "{\\left\\langle{ #1 }\\right\\vert{ #2 }\\left\\vert{#3}\\right\\rangle}",
  "\\slashed": "{{{ #1 } \\!\\!\\! / }}",
  "\\ce": "{\\mathrm{ #1 }}",
  "\\si": "{\\textrm{ #1 }}",
  "\\SI": "{{ #1 } \\textrm{ #2 }}",
  "\\micro": "{μ}",
  "\\ohm": "{Ω}",
  "\\num": "{ #1 }",
};

// https://astro.build/config
export default defineConfig({
  site: "https://xiupos.net",
  integrations: [
    mdx(),
    sitemap(),
    typst({
      target: () => {
        return "html";
      },
    }),
    icon(),
  ],
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkFencedDivs],
    rehypePlugins: [
      [rehypeMathML, { macros: mathMacros }],
      [rehypeWrapAll, rehypeWrapAllOptions],
      rehypeHeadingIds,
    ],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
