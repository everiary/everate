import { defineConfig } from "unocss";
import { presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  // ...UnoCSS options
  rules: [
    ["Yahei", { "font-family": '"Microsoft Yahei"' }],
    ["mask", { "background-color": "rgba(0,0,0,0.6)" }],
    ["InputPadding", { padding: `0 1vw` }],
  ],
  shortcuts: {
    of: "overflow-hidden",
    flexCenter: "flex items-center justify-center",
    white: "bg-#fff bg-no-repeat",
  },
});

/**
 *  ["Yahei", {font-family: "Microsoft Yahei"}],
 *   rules: [
    [/^mth-([\.\d]+)$/, ([_, num]) => ({ marginTop: `${num}vh` })],
    [/^mtw-([\.\d]+)$/, ([_, num]) => ({ marginTop: `${num}vw` })],
    [/^mlh-([\.\d]+)$/, ([_, num]) => ({ marginLeft: `${num}vh` })],
    [/^mlw-([\.\d]+)$/, ([_, num]) => ({ marginLeft: `${num}vw` })],
    ['vw-1', { margin: '1vw' }],
    ['vh-1', { margin: '1vh' }]
  ]
 */
