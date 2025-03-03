/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#064235',
        secondary: '#03071280',
        placeholder: '#0307120D',
        neutral: '#6B7280',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        background: '#FFFFFF',
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          light: '#9CA3AF',
        },
      },
    },
  },
  plugins: [],
};
