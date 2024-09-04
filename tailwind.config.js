/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        right: "5px 0 10px #F3F0F2 ",
      },
      fontFamily: {
        pacifico: ["pacifico"],
      },
      fontFamily: {
        Trebuchet: ["Trebuchet Ms"],
      },
      textShadow: {
        bottom: "0 2px 4px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "up-down": "upDown 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-bottom": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        },
      });
    },
  ],
};
