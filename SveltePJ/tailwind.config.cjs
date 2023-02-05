/** @type {import('tailwindcss').Config} */
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: [ 'style-loader', 'postcss-loader' ]
        }
      ]
    }
  },
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      fontSize: {
      },
      fontFamily: {
        heading: ['montserrat', 'sans-serif'],
        sans: ['mulish','sans-serif']
      },
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#006AFF',
        'black': "#141516"
      }
    }
  },
  plugins: [],

}