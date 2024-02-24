import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          card: {
            value: "hsl(0 0% 100%)",
          },
          cardForeground: {
            value: "hsl(222.2 47.4% 11.2%)",
          },
          mutedForeground: {
            value: "hsl(215.4 16.3% 46.9%)",
          },
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
