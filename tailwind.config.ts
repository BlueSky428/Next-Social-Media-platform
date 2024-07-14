import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'custom': '540px',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateY(-130%)',
            opacity: '0'
          },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': {
            transform: 'translateY(-130%)',
            opacity: '1'
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(130%)',
            opacity: '0'
          },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(130%)',
            opacity: '0'
          },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left-in': {
          '0%': {
            transform: 'translateX(-130%)',
            opacity: '0'
          },
          '25%': { opacity: '0.25' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.75' },
          '100%': { transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-in': 'slide-in .8s ease-out',
        'slide-up': 'slide-up .8s ease-out',
        'slide-left-in': 'slide-left-in .5s ease-out',
        'slide-right': 'slide-right .5s ease-out',
        "slideIn": 'slideIn 0.5s ease-in-out',
        "slideOut": 'slideOut 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
