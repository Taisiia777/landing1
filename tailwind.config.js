module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "../src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      extend: {
        colors: {
          blue_gray: { 400: "#888888", "400_e5": "#888888e5" },
          gray: { 200: "#ebebed", 900: "#212121", "600_19": "#887d7d19", "900_66": "#21212166" },
          green: { a700: "#17c36d" },
          orange: { 50: "#fff5d8" },
          red: { 900: "#b42926", "900_01": "#b52926", "900_e5": "#b42926e5" },
          ui: { gray_60: "#a6a6aa" },
          white: { a700: "#ffffff", a700_e5: "#ffffffe5" },
        },
        boxShadow: { xs: "0 4px 9px 0 #887d7d19" },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'], // Добавлен шрифт Roboto
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };