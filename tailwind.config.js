export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#baddfd',
          300: '#84c4fb',
          400: '#49a3f7',
          500: '#2186ef',
          600: '#0f68e3',
          700: '#0d52c9',
          800: '#1145a4',
          900: '#143c82',
          950: '#0f2652'
        },
        secondary: {
          50: '#f2f9fd',
          100: '#e6f2fb',
          200: '#c6e5f6',
          300: '#95d0ed',
          400: '#5bb4e0',
          500: '#359ad1',
          600: '#247cb3',
          700: '#1f6491',
          800: '#1e5478',
          900: '#1d4764',
          950: '#132e43'
        },
        accent: {
          50: '#fff3f0',
          100: '#ffe4dd',
          200: '#ffcbbd',
          300: '#ffa691',
          400: '#ff7a5c',
          500: '#ff4a2b',
          600: '#fc2603',
          700: '#d51a05',
          800: '#ae1b0b',
          900: '#8e1c0d',
          950: '#4d0c03'
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 5px 15px rgba(0, 0, 0, 0.05)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.08)',
        hard: '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
        'thunder': 'thunder 5s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        thunder: {
          '0%, 100%': { opacity: '0' },
          '10%': { opacity: '0.8' },
          '12%': { opacity: '0' },
          '20%': { opacity: '0.5' },
          '22%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
