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
        infinite_logo: " infinite_logo 1s infinite",
        background: "background 5s infinite",
        dofus: "dofus linear 0.3s 1",
        discord_loop: "discord_loop 1s ease 0s 1 normal forwards",
        flag: "scale 1s ",
      },
      keyframes: {

        flag: {
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
        },

        discord_loop: {
          "0%": {
            transform: "rotate(0)"
          },
        
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        infinite_logo: {
          "0%":{
            transform: "translateX(0)"
          },
          "100%":{
            transform: "translateX(calc(-250px*6))"
          },
        },
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
