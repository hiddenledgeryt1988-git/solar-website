/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1477A8',
          dark: '#0B4568',
          light: '#258ec2',
        },
        sky: {
          DEFAULT: '#DCEFF7',
          light: '#EDF7FB',
        },
        lime: {
          DEFAULT: '#D5F36A',
          dark: '#AFCF3E',
          light: '#E6F996',
        },
        forest: {
          DEFAULT: '#2E6847',
          dark: '#1E4730',
        },
        ink: {
          DEFAULT: '#172126',
          soft: '#2C3A40',
        },
        muted: {
          DEFAULT: '#66747A',
          light: '#8C9A9F',
        },
        surface: '#FFFFFF',
        soft: '#F5F7F5',
        border: '#E5EAE7',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      maxWidth: {
        'container': '1380px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 40px rgba(11, 69, 104, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
