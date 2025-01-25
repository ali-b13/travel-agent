import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
      colors: {
        primary: "#00aaff",
        secondary:"#005f99",
        accent:"#ff7f50",
        whiteDark:"#f5f5f5",
        dark:"#396A85"
      },
     fontFamily:{
      amiri:['Amiri', 'cursive']
     },
     
     
    },
    keyframes: {
      'spin-dot': {
        '0%': {
          transform: 'rotate(0deg) translateX(90px)', // Start at the top of the circle
        },
        '25%': {
          transform: 'rotate(90deg) translateX(90px)', // Move to the right
        },
        '50%': {
          transform: 'rotate(180deg) translateX(100px)', // Move to the bottom
        },
        '75%': {
          transform: 'rotate(270deg) translateX(90px)', // Move to the left
        },
        '100%': {
          transform: 'rotate(360deg) translateX(90px)', // Complete the circle
        },

      },
    },
    animation: {
      'spin-dot': 'spin-dot 1.5s linear infinite', // Customize duration if needed
    },
    backgroundImage: {
      'hero-pattern': "url('../public/assests/background-2.jpeg')",
      'gradient-radial': "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)",
      // Add more custom background images here
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
} satisfies Config;
