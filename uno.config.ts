import { defineConfig } from "unocss";
import { presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
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
