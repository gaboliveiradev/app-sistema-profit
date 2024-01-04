module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color-purple': '#5A1A92',
        'secondary-color-purple': '#6343AF',
        'primary-color-green': '#46BC9C',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}