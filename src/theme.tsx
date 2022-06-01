import { responsiveFontSizes } from "@mui/material";
import { createTheme,PaletteColorOptions } from '@mui/material/styles';
import { TypographyOptions } from "@mui/material/styles/createTypography";
const defaultTheme = createTheme();
declare module '@mui/material/styles' {
  interface Palette {
    greyscale: PaletteColorOptions;
    textcolor:PaletteColorOptions;
    backgroundcolor:PaletteColorOptions
  }
  interface PaletteOptions {
    greyscale: PaletteColorOptions;
    textcolor:PaletteColorOptions;
    backgroundcolor:PaletteColorOptions
  }
  interface PaletteColorOptions {
    light?:React.CSSProperties['color'],
    lighter?:React.CSSProperties['color'],
    main?:React.CSSProperties['color'],
    dark?:React.CSSProperties['color'],
    darker?: React.CSSProperties['color']
    }
    interface TypographyVariants {
      betabody1: React.CSSProperties;
      betasubtitle1:React.CSSProperties;
    }
    interface TypographyVariantsOptions {
      betabody1?: React.CSSProperties;
      betasubtitle1:React.CSSProperties;
      subtitle5:React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    betabody1: true;
    betasubtitle1:true;
    subtitle5:true;
  }
}
export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
      dark:'#20BA68',
      lighter:'#E9FAF1',
      light:'#2CE080',
    },
    secondary: {
      light:'#DFE8F6',
      main: "#0365F2",
    },
    greyscale:{
      light:'#BAC9CF',
      main:"#6C787F",
      dark:"#3A4649",
      darker:'#042330'
    },
    textcolor:{
      light:'#6D787E',
      main:'#747575',
      dark:'#03314B',
      darker:'#042330'
    },
    backgroundcolor:{
      light:'#F7F7F7',
      main:'#F1F6F4'
    }
  },
  typography: {
    fontFamily:"Cera Pro",
      h1:{
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 2,
        textAlign: 'left',
        fontFamily:'inherit'
      },
      h3:{
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: 3,
        fontFamily:'inherit',
      },
      subtitle1:{
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: 3,
        letterSpacing: '0em',
        fontFamily:'inherit'
      },
      subtitle2:{
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: 3,
        letterSpacing: '0em',
        fontFamily:'inherit'
      },
      body1:{
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 2.5,
        letterSpacing: '0em',
        fontFamily:'inherit'
      },
      body2:{
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 2,
        letterSpacing: '0em',
        fontFamily:'inherit'
      },
      caption:{
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: '0em',
        fontFamily:'inherit'
      },
      overline:{
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 2,
        letterSpacing: '0px',
        fontFamily:'inherit'
      },
      betabody1:{
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: 2,
        fontFamily:'inherit'
      },
      betasubtitle1:{
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: 1.5,
        fontFamily:'inherit'
      },
      subtitle5:{
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: 2.5,
        fontFamily:'inherit'
      }
  },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);
export default responsiveFontTheme;