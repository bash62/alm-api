module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      'bg': "url('./assets/bg.png')",
    
    },
      animation: {
        background: "background 5s infinite",
        dofus: "dofus linear 0.3s 1",
      },
      keyframes: {
        dofus: {
          "0%": {
            transform: "translate(0,-300px)"
          },
          "33%": {
            transform: "translate(0,-250px)"
          },
          "66%": {
            transform: "translate(0,-125px)"
          },
          "100%": {
            transform: "translate(0,0)"
          },
        },
        background : {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.2)"
          },
          "66%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          },

        }
      }
    },
  },
  plugins: [],
}
