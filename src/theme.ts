import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    },
    palette: {
      primary: {
        main: '#03D69D',
        light: '#f5fcf9',
      },
      secondary: {
        main: '#133A6F',
      },
      grey: {
        [200]: '#e5e5e5',
        [400]: '#B2B2B2',
        [800]: '#4D4D4D',
      }
    }
  })