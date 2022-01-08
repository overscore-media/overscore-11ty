module.exports = {
    content: [ "./src/_includes/**/*.njk", "./src/*.html" ],
    darkMode: 'media',
    theme: {
      extend: {
        colors: {
          overdark: '#262626',
          dargrey: '#989EB9',
          magentish: '#CF5986',
          greenwich: '#59CFA2',
          bluesh: '#008DD5',
        },
        fontFamily: {
          'aldrich': ['Aldrich', 'sans-serif'],
          'heading': ['Staatliches', 'monospace'],
        },

        minHeight: (theme) => ({
          ...theme('spacing')
        }),
      },
    },
    variants: {
      extend: {
        textColor: ['focus-visible'],
        ringColor: ['focus-visible'],
        ringWidth: ['focus-visible']
      },
    },
    plugins: [
      require('daisyui'),
      require('@tailwindcss/typography')
    ],
  }