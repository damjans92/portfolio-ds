/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(100%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideinX: {
          from: {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        grow1: {
          '0%': {
            width: '15%',
          },
          '50%': {
            width: '20%',
          },
          '100%': {
            width: '15%',
          },
        },
        grow2: {
          '0%': {
            width: '40%',
          },
          '50%': {
            width: '45%',
          },
          '100%': {
            width: '40%',
          },
        },
        grow3: {
          '0%': {
            width: '80%',
          },
          '50%': {
            width: '90%',
          },
          '100%': {
            width: '80%',
          },
        },
        growOnce: {
          '0%': {
            width: '0%',
          },

          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        slidein0: 'slidein 1s ease 0ms forwards',
        slidein100: 'slidein 1s ease 100ms forwards',
        slidein200: 'slidein 1s ease 200ms forwards',
        slidein300: 'slidein 1s ease 300ms forwards',
        slidein400: 'slidein 1s ease 400ms forwards',
        slideinX: 'slideinX 3s ease 0ms forwards',
        grow1: 'grow1 5s ease 0ms infinite',
        grow2: 'grow2 6s ease 0ms infinite',
        grow3: 'grow3 7s ease 0ms infinite',
        growOnce: 'growOnce 3s ease 0ms forwards',
      },
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
