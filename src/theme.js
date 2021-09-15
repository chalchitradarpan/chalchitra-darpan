import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
  typography: {
    fontFamily: [
      'lato',
      'poppins',
      'Manrope',
      'Helvetica Neue',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      '-apple-system',
      'BlinkMacSystemFont',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'sans-serif'
    ].join(',')
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 700,
      lg: 900,
      xl: 1100,
      xxl: 1200
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#ffffff'
    },
    primary: {
      light: '#000000',
      main: '#1b213a'
    },
    secondary: {
      main: '#ffffff',
      dark: '#f62950',
      contrastText: '#000000'
    }
  }
})

export default theme
