/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      "18l":"1800px",
      "14l":"1450px",
      "12l":"1200px",
      "lg":"1024px",
      "md":"550px",
      "tab":"721px"
    },
    extend: {
      colors: {
        white: "#fff",
        purple: {
          "100": "#801464",
          "200": "#7c0d60",
        },
        black: "#000",
        "grey-5": "#adb5bd",
        "text-primary": "#171717",
        "grey-100": "#f9fafb",
        "grey-2": "#e9ecef",
        "text-secoundary": "#637381",
        "secoundary-main": "#c94418",
        "text-primary1": "#050401",
        "primary-main": "#071a53",
        gray: "rgba(255, 255, 255, 0.5)",
        thistle: "rgba(219, 186, 221, 0.24)",
        lavender: {
          "100": "#eddcef",
          "200": "rgba(216, 225, 255, 0.24)",
        },
        blueviolet: "#6618c9",
      },
      spacing: {},
      fontFamily: {
        "subtitle-1": "Manrope",
        body1: "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      base: "16px",
      "45xl": "64px",
      "5xl": "24px",
      "13xl": "32px",
      sm: "14px",
      lg: "18px",
      xs: "12px",
      mini: "15px",
      "3xs": "10px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
