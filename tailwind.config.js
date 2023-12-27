/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'jakarta':['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        'greey':'#353f4f',
      },
      backgroundColor:{
        'gr':"#f4f4f9",
      },
      backgroundImage:{
        "linear":"linear-gradient(180deg, rgba(244, 244, 249, .8) 50%, rgba(244, 244, 249, .05) 100%)",
      },
    },
  },
  plugins: [],
}

