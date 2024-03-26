/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        primary: '#1e1f22',
        secondary: '#313338',
        sidebarDark: '#313338',
        brightGreen: '#23a559',
        discordBlue: '#5865f2',
        highlightLightGrey: '#3d3e45'
      },
      fontFamily: {
        ggSans: ['ggSans', 'sans'],
        ggSansl: ['ggSansl', 'sans'],
        ggSansxl: ['ggSansxl', 'sans'],
      },
      scale: {
        102: '1.02'
      },
      borderRadius: {
        'large': '10rem',
      },
      boxShadow: {
        borderShadow: '0 1px 0 hsl( 0 calc( 1 * 0%) 0.8% / 0.2), 0 1.5px 0 hsl( 240 calc( 1 * 7.7%) 2.5% / 0.05), 0 2px 0 hsl( 0 calc( 1 * 0%) 0.8% / 0.05)',
      }
    }
  },
  plugins: [],
}

