import { colors, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f0e14a',
      contrastText: colors.blueGrey[900],
    },
    secondary: {
      main: '#97ce4c',
      contrastText: colors.blueGrey[900],
    },
    background: {
      default: '#243447',
      paper: '#141d26',
    },
  },
});

export default theme;
