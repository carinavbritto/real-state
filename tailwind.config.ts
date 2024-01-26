import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        primary: '8px'
      }
    },
    colors: () => ({
      black: '#000',
      purple: {
        '60': '#703BF7',
        '65': '#8254F8',
        '70': '#946CF9',
        '75': '#A685FA',
        '90': '#DBCEFD',
        '95': '#EDE7FE',
        '97': '#F4F0FE',
        '99': '#FBFAFF'
      },
      gray: {
        '08': '#141414',
        '10': '#1A1A1A',
        '15': '#262626',
        '20': '#333333',
        '30': '#4D4D4D',
        '40': '#666666',
        '50': '#808080',
        '60': '#999999'
      },
      white: {
        '0': '#FFFFFF',
        '90': '#E4E4E7',
        '95': '#F1F1F3',
        '97': '#F7F7F8',
        '99': '#FCFCFD'
      },
      shadow: {
        500: 'rgba(112, 144, 176, 0.08)'
      }
    })
  },
  plugins: []
};
export default config;
