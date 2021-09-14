import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400
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
