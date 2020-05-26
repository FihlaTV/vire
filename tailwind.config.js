module.exports = {
  purge: [],
  theme: {
    extend: {
        colors: {
            'blue': {
            100: '#E8F1FD',
            200: '#C6DCF9',
            300: '#A3C7F6',
            400: '#5F9DEF',
            500: '#1A73E8',
            600: '#1768D1',
            700: '#10458B',
            800: '#0C3468',
            900: '#082346',
        },
        }
    },

    spinner: (theme) => ({
      default: {
        color: '#ffffff',
        size: '0.7em',
        border: '1px',
        speed: '500ms',
      },
    }),
  },
  variants: {
    spinner: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-spinner')(),
  ],
}
