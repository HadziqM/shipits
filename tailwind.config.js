module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        res: "15vw",
        res2: "30vw",
        s9: "90%",
        f9: "95%",
      },
      width: {
        res: "20vw",
        res2: "60vw",
        s9: "45%",
        s8: "30%",
        f9: "95%",
      },
    },
  },
  plugins: [require("daisyui")],
};
