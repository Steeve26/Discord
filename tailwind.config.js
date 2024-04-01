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
        primaryLight: '#232428',
        secondary: '#313338',
        secondaryDark: '#2b2d31',
        highlightLightGrey: '#3d3e45',
        secondHighlightGrey: '#43444b',
        textGrey: '#949ba4',
        textOffWhite: '#f2f3f5',
        iconLightGrey: '#b5bac1',
        indicatorBg: '#393c41',
        inputGrey: '#383a40',
        indicatorGrey: '#7d818b',
        indicatorYellow: '#f0b232',
        brightGreen: '#23a559',
        discordBlue: '#5865f2',
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
      },
      screens: {
        mdlg: {'max': '1020px'},
        'sm-max': {'max': '640px'},
      },
    }
  },
  plugins: [],
}

