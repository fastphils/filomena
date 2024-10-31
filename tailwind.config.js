import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [typography, daisyui],
};