import type { Config } from "tailwindcss";

const white = "#FFFFFF";
const black = "#000000";

const brand = {
  primary: "#9333EA",
  citrus: "#F8DC3A",
  berry: "#E54A6B",
  toast: "#412107",
  blue: "#2694D4",
  orange: "#F28042",
  green: "#21B259",
  gold: "#B3955B",
};

const royalBlue = {
  darker: "#244881",
  dark: "#2653A3",
  medium: "#2765CE",
  light: "#4597E7",
  lighter: "#DDEDFB",
};

const gray = {
  darker: "#232323",
  dark: "#5A709D",
  medium: "#AEB6CB",
  soft: "#DEE6FF",
  light: "#F2F5FF",
  lighter: "#F6F8FF",
};

const green = {
  darker: "#167F44",
  dark: "#17A153",
  medium: "#21B259",
  light: "#DCFCE9",
  lighter: "#F0FDF5",
};

const yellow = {
  darker: "#E5B336",
  dark: "#F4CC41",
  medium: "#F8DC3A",
  light: "#FDF9C8",
  lighter: "#FDFCEB",
};

const red = {
  darker: "#B01E4A",
  dark: "#D12B59",
  medium: "#E54A6B",
  light: "#FDE6E9",
  lighter: "#FEF2F3",
};

const error = {
  100: "#FEE4E2",
};

const textcolor = {
  primary: gray.darker,
  secondary: gray.dark,
  tertiary: white,
  action: royalBlue.medium,
  "action-hover": royalBlue.dark,
  disabled: gray.medium,
  success: green.medium,
  warning: yellow.darker,
  error: red.darker,
};

const surfacecolor = {
  page: gray.lighter,
  primary: white,
  secondary: gray.lighter,
  tertiary: gray.soft,
  action: royalBlue.medium,
  "action-hover": royalBlue.dark,
  "action-error": red.dark,
  disabled: gray.medium,
  success: green.lighter,
  warning: yellow.lighter,
  error: red.lighter,
  information: white,
  highlight: green.dark,
  "highlight-hover": green.darker,
  modal: royalBlue.darker,
};

const bordercolor = {
  primary: gray.soft,
  secondary: gray.light,
  tertiary: white,
  action: royalBlue.medium,
  "action-hover": royalBlue.dark,
  disabled: gray.medium,
  success: green.light,
  warning: yellow.light,
  error: red.light,
  information: gray.soft,
  highlight: green.dark,
};

const iconcolor = {
  primary: gray.darker,
  secondary: gray.medium,
  tertiary: white,
  action: royalBlue.medium,
  "action-hover": royalBlue.dark,
  "action-error": red.dark,
  success: green.darker,
  warning: yellow.darker,
  error: red.darker,
  information: gray.medium,
};

const focuscolor = {
  primary: royalBlue.light,
  highlight: green.medium,
};

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "modal-md": "360px",
        "modal-lg": "438px",
        "modal-xl": "600px",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      gridRow: {
        "span-max": "span 9999",
      },
      strokeWidth: {
        normal: "1.6",
        bold: "1.8",
      },
      screens: {
        xs: "360px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        "2lg": "1280px",
        xl: "1440px",
        "2xl": "1920px",
      },
      colors: {
        current: "currentColor",
        white,
        black,
        brand,
        "royal-blue": royalBlue,
        "gray-blue": gray,
        green,
        yellow,
        red,
        textcolor,
        surfacecolor,
        bordercolor,
        iconcolor,
        focuscolor,
        error,
      },
      borderRadius: {
        circle: "50%",
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      borderWidth: {
        none: "0",
        sm: "1px",
        md: "2px",
        lg: "4px",
      },
      spacing: {
        xxxs: "0.125rem", // 2px
        xxs: "0.25rem", // 4px
        xs: "0.5rem", // 8px
        sm: "1rem", // 16px
        md: "1.5rem", // 24px
        lg: "2rem", // 32px
        xl: "2.5rem", // 40px
        xxl: "4rem", // 64px
        xxxl: "5rem", // 80px
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(38, 37, 113, 0.04)",
        sm: "0px 1px 2px 0px rgba(64, 72, 99, 0.08), 0px 2px 4px 0px rgba(64, 72, 99, 0.04)",
        md: "0px 4px 4px -4px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        lg: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 16px 16px -8px rgba(16, 24, 40, 0.06), 0px 40px 48px -16px rgba(16, 24, 40, 0.16)",
      },
      dropShadow: {
        xs: "0px 0px 0px #F4EBFF, 0px 1px 2px rgba(16, 24, 40, 0.05)",
      },
      fontFamily: {
        indivisible: ["Indivisible", "sans-serif"],
      },
      fontSize: {
        xxxs: ["0.5rem", { lineHeight: "0.875rem" }], // 8px, 14px.
        xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px, 12px.
        xs: ["0.75rem", { lineHeight: "1.125rem" }], // 12px, 18px.
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px, 20px.
        md: ["1rem", { lineHeight: "1.5rem" }], // 16px, 24px.
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px, 28px.
        xl: ["1.25rem", { lineHeight: "2rem" }], // 20px, 32px.
        xxl: ["2.75rem", { lineHeight: "2.75rem" }], // 44px, 44px.
        xxxl: ["5.438rem", { lineHeight: "6.563rem" }], // 87px, 104px.
      },
      animation: {
        "toast-timeout-xs": "horizontal-slide-in-fade 4s ease-in-out",
        "toast-timeout-sm": "horizontal-slide-in-fade 8s ease-in-out",
        "toast-timeout-md": "horizontal-slide-in-fade 12s ease-in-out",
        "navbar-slide-in": "horizontal-slide-in 120ms ease-in-out",
        "fade-in": "fade-in 120ms ease-in-out",
      },
      flex: {
        "1-0-0": "1 0 0",
      },
    },
  },
  plugins: [],
};

export default config;
