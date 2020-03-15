import { createMuiTheme } from "@material-ui/core";
import { teal, orange, common } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600],
      contrastText: common.white,
    },
    secondary: {
      main: orange[700],
      contrastText: common.white,
    },
    type: "dark",
  },
});

export default theme;
