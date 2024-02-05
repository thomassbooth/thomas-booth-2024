import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'title': ['11cqw', {
          'letterSpacing': '-.3rem',
          'lineHeight': '1'
        }],
        'subtitle': ['5.5cqw', {
          'letterSpacing': '-.3rem',
          'lineHeight': '1'
        }],
        'heading': ['2.2rem', {
          'lineHeight': '1'
        }],
        'text': ['2.8rem', {
          'lineHeight': '1'
        }],
      },
      colors: {
        common: {
          gray: '#333',
          background: {
            cream: '#f8fafc',
            gray: '#222'
          }
        },
        palette: {
          green: {
            light: '#BECAC4',
            dark: '#1D3630',
            base: '#6E807A'
          },
          tan: '#E1DFDA',
          'off-white': '#F7F4EE'
        },
      }
    },
  },
  plugins: [],
};
export default config;
