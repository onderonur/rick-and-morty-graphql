import { createMuiTheme } from "@material-ui/core";
import { teal, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600],
      contrastText: "#fff"
    },
    secondary: {
      main: orange[700],
      contrastText: "#fff"
    }
  }
});

export default theme;
