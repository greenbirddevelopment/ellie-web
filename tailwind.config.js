/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          darker: "rgb(var(--color-primary-darker))",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary))",
          darker: "rgb(var(--color-secondary-darker))",
        },

        dark: {
          DEFAULT: "rgb(var(--color-dark))",
        },

        black: {
          DEFAULT: "rgb(var(--color-black))",
        },

        linear: {
          from: {
            DEFAULT: "rgb(var(--color-linear-gradient-from))",
            darker: "rgb(45, 48, 85)",
          },

          to: {
            DEFAULT: "rgb(var(--color-linear-gradient-to))",
            darker: "rgb(15, 13, 25)",
          },
        },
      },

      borderRadius: {
        DEFAULT: ".7rem",
      },

      transitionDuration: {
        DEFAULT: ".3s",
      },

      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
