import { createTheme } from '@material-ui/core';
import { common } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f0e14a',
      contrastText: common.white,
    },
    secondary: {
      main: '#97ce4c',
      contrastText: common.white,
    },
    background: {
      default: '#243447',
      paper: '#141d26',
    },
  },
});

export default theme;
