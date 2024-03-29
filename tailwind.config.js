module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.3125rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem"
    },
    "fontFamily": {
      "heading": ["Bitter", 'serif'],
      "sans": ["Barlow", 'sans-serif']
    },
    colors:
    {
      white: '#ffffff',
      light:
      {
        '10': '#e9edf0',
        '20': '#d6e0e5',
        '30': '#b4bec4',
        '40': '#93a1a8',
        '50': '#6e7a81',
        '60': '#4e575d',
        '70': '#373e42',
        '80': '#292e32',
        '90': '#131415',
        '00': '#fbfcfc'
      },
      red:
      {
        '10': '#ffe3e8',
        '20': '#ffced6',
        '30': '#ec8f9e',
        '40': '#dc5a6e',
        '50': '#cc233d',
        '60': '#ae1c30',
        '70': '#911624',
        '80': '#720e16',
        '90': '#410002',
        '00': '#fff5f7'
      },
      orange:
      {
        '10': '#ffe5dd',
        '20': '#ffd1c3',
        '30': '#fba48a',
        '40': '#eb8160',
        '50': '#d4552e',
        '60': '#a83615',
        '70': '#81230a',
        '80': '#681603',
        '90': '#330800',
        '00': '#fff7f5'
      },
      yellow:
      {
        '10': '#f9eec4',
        '20': '#f4e29f',
        '30': '#efd679',
        '40': '#eacc56',
        '50': '#e4c030',
        '60': '#b89921',
        '70': '#8d720b',
        '80': '#5b4808',
        '90': '#211802',
        '00': '#fffaeb'
      },
      green:
      {
        '10': '#e4faf1',
        '20': '#cdf4e6',
        '30': '#b8efdb',
        '40': '#69c7a9',
        '50': '#1da07a',
        '60': '#168868',
        '70': '#0f7057',
        '80': '#085644',
        '90': '#013e32',
        '00': '#f5fffb'
      },
      blue:
      {
        '10': '#def1f9',
        '20': '#bee4f3',
        '30': '#9fd6ee',
        '40': '#59b9e1',
        '50': '#189dd4',
        '60': '#1281ae',
        '70': '#0c6487',
        '80': '#06485f',
        '90': '#002b38',
        '00': '#f5fcff'
      },
      teal:
      {
        '10': '#dffcfd',
        '20': '#cdf9fc',
        '30': '#9aeaef',
        '40': '#69dbe3',
        '50': '#31cad5',
        '60': '#14aab5',
        '70': '#0e7b83',
        '80': '#084d53',
        '90': '#012023',
        '00': '#f5ffff'
      },
      purple:
      {
        '10': '#dfdaf6',
        '20': '#c5bcee',
        '30': '#aea0e6',
        '40': '#9381de',
        '50': '#7b65d6',
        '60': '#624da9',
        '70': '#4c3983',
        '80': '#322155',
        '90': '#1e0e31',
        '00': '#f5f5ff'
      },
      pink:
      {
        '10': '#f5d4ed',
        '20': '#ebb1db',
        '30': '#e18eca',
        '40': '#d76bb9',
        '50': '#cb44a4',
        '60': '#a63484',
        '70': '#812464',
        '80': '#5a1242',
        '90': '#340221',
        '00': '#fff5ff'
      },
      ground: {
        '10': '#FBF9F5',
        '30': '#EECFB8',
        '40': '#D39060',
      },
      cdm: {
        '50': '#2D3B87',
        '60': '#0A00BE',
      }
    },
    boxShadow:
    {
      's': '0px 2px 2px 0px rgba(0,0,0,0.1)',
      'm': '0px 2.869058847427368px 17.49970054626465px 0px rgba(0,0,0,0.03), 0px 18px 69px 0px rgba(0,0,0,0.06)',
      'l': '0px 5.054077625274658px 3.604196786880493px 0px rgba(0,0,0,0.02), 0px 16.975595474243164px 13.949833869934082px 0px rgba(0,0,0,0.03), 0px 76px 65px 0px rgba(0,0,0,0.05)',
      'xl': '0px 0.9131946563720703px 2.2138051986694336px 0px rgba(0,0,0,0.01), 0px 2.194533586502075px 5.32008171081543px 0px rgba(0,0,0,0.02), 0px 4.1321120262146px 10.017241477966309px 0px rgba(0,0,0,0.03), 0px 7.3709821701049805px 17.869047164916992px 0px rgba(0,0,0,0.03), 0px 13.786611557006836px 33.422088623046875px 0px rgba(0,0,0,0.04), 0px 33px 80px 0px rgba(0,0,0,0.05)'
    },
  },
  plugins: [],
}
