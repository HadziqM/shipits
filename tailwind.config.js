module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        res: "15vw",
        s9: "90%",
      },
      width: {
        res: "20vw",
        s9: "45%",
        s8: "30%",
      },
    },
  },
  plugins: [require("daisyui")],
};
