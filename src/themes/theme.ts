import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Svart bakgrund
    },
    secondary: {
      main: '#FFD700', // Gul-guld färg
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: '#FFD700', // Text och ikonfärg
        },
      },
    },
  },
});

export default theme;