import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19D16F",
      light: "#3F4145",
      contrastText: "#fff",
    },
    success: {
      main: "#FB2E86",
      light: "#FB2E86",
      dark: "#FB2E86",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
