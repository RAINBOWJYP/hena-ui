/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#ffe5ed",
        100: "#ffbcd3",
        200: "#ff90b5",
        300: "#ff6297",
        400: "#ff3b7f",
        500: "#ff0267",
        600: "#ed0065",
        700: "#d70060",
        800: "#c2005d",
        900: "#9e0057",
      },
      secondary: {
        50: "#ece7ff",
        100: "#cdc4fe",
        200: "#aa9cfe",
        300: "#8173ff",
        400: "#5954ff",
        500: "#0335ff",
        600: "#0032f8",
        700: "#002bf0",
        800: "#0026eb",
        900: "#001be6",
      },
      tertiary: {
        50: "#fffee6",
        100: "#fefac0",
        200: "#fdf795",
        300: "#fcf267",
        400: "#f9ee3f",
        500: "#f6e900",
        600: "#ffdd03",
        700: "#ffc400",
        800: "#ffab00",
        900: "#ff7f00",
      },
      netural: {
        100: "#e6e1e2",
        200: "#c9c6c5",
        300: "#adaaaa",
        400: "#939090",
        500: "#797676",
        600: "#605e5e",
        700: "#484646",
        800: "#313030",
        900: "#1c1b1c",
      },
      error: "#B3261E",
      "on-error": "#ffffff",
      black: "#000000",
      white: "#ffffff",
    },
    fontSize: {
      "2xs": "0.6875rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.375rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "2.8125rem",
      "6xl": "3.5625rem",
    },
    extend: {
      boxShadow: {
        "el-1":
          "0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
        "el-2":
          "0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)",
        "el-3":
          "0px 1px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
        "el-4":
          "0px 2px 3px 0px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
        "el-5":
          "0px 4px 4px 0px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.25rem",
        "rounded-2": "0.3125rem",
        "rounded-3": "1rem",
        "rounded-4": "62.4375rem",
      },
    },
  },
  plugins: [],
};
