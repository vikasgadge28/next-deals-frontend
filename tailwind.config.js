const withMT = require("@material-tailwind/react/utils/withMT");
 


/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      "primary":"#F4F4F4",
      'secondary':"#0055F1",
      "accent":"#FFC003",
      "secondaryBlue": "#EAF1FF"

    },
    fontFamily: {
      sans:['outfit']
    },
    
    extend: {
      
    },
  },
  plugins: [],
})

