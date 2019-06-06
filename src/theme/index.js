import { createMuiTheme } from "@material-ui/core";
import { teal, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600]
    },
    secondary: {
      main: orange[500]
    }
  }
});

export default theme;
