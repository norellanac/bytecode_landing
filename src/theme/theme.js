import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#010101',
    },
    primary: {
      main: '#DDF247',
    },
  },
  typography: {
    fontFamily: 'Aeonik, Source Code Pro, Arial, sans-serif',
    button: {
      fontFamily: 'Aeonik, sans-serif',
    },
  },
});

export default theme;
