/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,tsx,ts}"],

  theme: {
    extend: {
      screens :{
        "sm" : {min :"0px" , max:"768px" }
      }
    },
  },
  plugins: [],
}

