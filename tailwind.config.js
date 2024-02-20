/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', 'Menlo', 'Monaco'],
      'mono': ['ui-monospace', 'SFMono-Regular','ui-serif', 'Georgia',' Cambria', "Times New Roman", 'Times', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

