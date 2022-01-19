module.exports = {
    content: [ "./src/**/*.njk", "./src/**/*.html" ],
    darkMode: 'media',
    daisyui: {
      // Modify at https://daisyui.com/core/colors
      themes: [
        {
          'overscore-default': {
            'primary': '#570df8',
            'primary-focus': '#4506cb',
            'primary-content': '#ffffff',
            'secondary': '#f000b8',
            'secondary-focus': '#bd0091',
            'secondary-content': '#ffffff',
            'accent': '#37cdbe',
            'accent-focus': '#2aa79b',
            'accent-content': '#ffffff',
            'neutral': '#3d4451',
            'neutral-focus': '#2a2e37',
            'neutral-content': '#ffffff',
            'base-100': '#ffffff',
            'base-200': '#f9fafb',
            'base-300': '#d1d5db',
            'base-content': '#1f2937',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
      ],
    },
    theme: {
      extend: {
        colors: {
          bluesh: '#008DD5',
          overdark: '#262626',
          dargrey: '#989EB9',
          magentish: '#CF5986',
          greenwich: '#59CFA2',
          darkish: '#313235'
        },
        height: {
          portcard: '20vh',
          postimg: '30vh',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              maxWidth: '100vh',
  
              // ...
            },
          },
        }),
        fontFamily: {
          'aldrich': ['Aldrich', 'sans-serif'],
          'heading': ['Staatliches', 'monospace'],
        },

        minHeight: (theme) => ({
          ...theme('spacing')
        }),
        
        maxHeight: (theme) => ({
          ...theme('spacing'),
          'postimg': '20vh'
        })
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