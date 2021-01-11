const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      colors,
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#111113",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      fill: (theme) => theme("colors"),
      stroke: (theme) => theme("colors"),
      cursor: {
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        crosshair: "crosshair",
        grab: "grab",
        grabbing: "grabbing",
        "col-resize": "col-resize",
      },
      spacing: {
        2.5: "0.625rem",
        4.5: "1.125rem",
        18: "4.5rem",
        88: "22rem",
        120: "30rem",
        160: "40rem",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        65: "0.65",
      },
      minHeight: {
        10: "2.5rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.400"),
            a: {
              color: theme("colors.gray.200"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
            },
            h1: {
              color: theme("colors.gray.200"),
            },
            h2: {
              color: theme("colors.gray.200"),
            },
            h3: {
              color: theme("colors.gray.200"),
            },
            h4: {
              color: theme("colors.gray.200"),
            },
            h5: {
              color: theme("colors.gray.200"),
            },
            h6: {
              color: theme("colors.gray.200"),
            },
            strong: {
              color: theme("colors.gray.300"),
            },
            code: {
              color: theme("colors.gray.300"),
            },
            figcaption: {
              color: theme("colors.gray.500"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ["dark", "first", "last"],
      padding: ["dark", "first", "last"],
      display: ["hover", "focus", "group-focus", "group-hover", "dark"],
      borderColor: ["focus-visible", "focus-within", "dark", "checked"],
      borderRadius: ["first", "last"],
      borderWidth: ["group-hover", "dark"],
      boxShadow: ["focus-visible", "dark"],
      ringColor: ["focus-visible", "dark"],
      opacity: ["group-hover", "group-focus", "dark"],
      backgroundColor: ["checked", "dark"],
      backgroundOpacity: ["dark"],
      borderOpacity: ["dark"],
      textOpacity: ["dark"],
      fill: ["group-hover", "group-focus", "dark"],
      stroke: ["group-hover", "group-focus", "dark"],
      zIndex: ["focus-within"],
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    interFontFace,
    fontAwesomeFontFace,
    overflowMask,
    checkboxFix,
    darkMode,
  ],
}

function interFontFace({ addBase }) {
  addBase([
    {
      "@font-face": {
        fontFamily: "Inter var",
        fontWeight: "100 900",
        fontStyle: "normal",
        fontNamedInstance: "Regular",
        fontDisplay: "swap",
        src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
      },
    },
    {
      "@font-face": {
        fontFamily: "Inter var",
        fontWeight: "100 900",
        fontStyle: "italic",
        fontNamedInstance: "Italic",
        fontDisplay: "swap",
        src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
      },
    },
  ])
}

function fontAwesomeFontFace({ addBase }) {
  addBase([
    {
      "@font-face": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 300,
        fontStyle: "normal",
        fontNamedInstance: "Light",
        fontDisplay: "block",
        src: 'url("/fonts/fa-light-300.woff2") format("woff2")',
      },
      ".fal": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 300,
      },
    },
    {
      "@font-face": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 400,
        fontStyle: "normal",
        fontNamedInstance: "Regular",
        fontDisplay: "block",
        src: 'url("/fonts/fa-regular-400.woff2") format("woff2")',
      },
      ".far": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 400,
      },
    },
    {
      "@font-face": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 900,
        fontStyle: "normal",
        fontNamedInstance: "Solid",
        fontDisplay: "block",
        src: 'url("/fonts/fa-solid-900.woff2") format("woff2")',
      },
      ".fa,.fas": {
        fontFamily: `"Font Awesome 5 Pro"`,
        fontWeight: 900,
      },
    },
    {
      "@font-face": {
        fontFamily: `"Font Awesome 5 Brands"`,
        fontWeight: 400,
        fontStyle: "normal",
        fontNamedInstance: "Brands",
        fontDisplay: "block",
        src: 'url("/fonts/fa-brands-400.woff2") format("woff2")',
      },
      ".fab": {
        fontFamily: `"Font Awesome 5 Brands"`,
        fontWeight: 400,
      },
    },
    {
      "@font-face": {
        fontFamily: `"Font Awesome 5 Duotone"`,
        fontWeight: 900,
        fontStyle: "normal",
        fontNamedInstance: "Brands",
        fontDisplay: "block",
        src: 'url("/fonts/fa-duotone-900.woff2") format("woff2")',
      },
      ".fad": {
        fontFamily: `"Font Awesome 5 Duotone"`,
        fontWeight: 900,
      },
    },
  ])
}

function overflowMask({ addBase }) {
  addBase([
    {
      ".overflow-mask-y": {
        "--mask-image-top": "rgb(255, 255, 255) 0%, rgb(255, 255, 255) 62px",
        "--mask-image-bottom":
          "rgb(255, 255, 255) calc(100% - 62px), rgb(255, 255, 255) 100%",
        "-webkit-mask-image":
          "linear-gradient(var(--mask-image-top), var(--mask-image-bottom))",
        "mask-image":
          "linear-gradient(var(--mask-image-top), var(--mask-image-bottom))",
      },
      ".overflow-mask-x": {
        "--mask-image-left": "rgb(255, 255, 255) 0%, rgb(255, 255, 255) 62px",
        "--mask-image-right":
          "rgb(255, 255, 255) calc(100% - 62px), rgb(255, 255, 255) 100%",
        "-webkit-mask-image":
          "linear-gradient(to right, var(--mask-image-left), var(--mask-image-right))",
        "mask-image":
          "linear-gradient(to right, var(--mask-image-left), var(--mask-image-right))",
      },
      ".overflow-mask-top": {
        "--mask-image-top":
          "rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 62px",
      },

      ".overflow-mask-bottom": {
        "--mask-image-bottom":
          "rgb(255, 255, 255) calc(100% - 62px), rgba(255, 255, 255, 0) 100%",
      },

      ".overflow-mask-left": {
        "--mask-image-left":
          "rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 62px",
      },

      ".overflow-mask-right": {
        "--mask-image-right":
          "rgb(255, 255, 255) calc(100% - 62px), rgba(255, 255, 255, 0) 100%",
      },
    },
  ])
}

function checkboxFix({ addBase }) {
  addBase([
    {
      ".form-checkbox:indeterminate": {
        "background-image": `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 8a1 1 0 01-1 1H5a1 1 0 010-2h6a1 1 0 011 1z'/%3e%3c/svg%3e")`,
        "border-color": "transparent",
        "background-color": "theme(colors.gray.500)",
        "background-size": "100% 100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
      },
    },
  ])
}

function darkMode({ addBase, addComponents, theme }) {
  addBase([
    {
      "::selection": {
        background: theme("colors.primary.300"),
      },
      ".dark ::selection": {
        background: theme("colors.primary.500"),
      },
    },
  ])
}
