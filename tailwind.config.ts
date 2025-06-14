import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./pages/**/*.{vue,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif']
      }

    }
  },
  plugins: []
}
export default config
