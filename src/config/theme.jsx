import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            main: indigo[900],
            normal: indigo['A700'],
        },
        secondary: {
            main: indigo[50]
        },
        neutral: {
            light: indigo[50],
            medium: indigo[200],
            normal: indigo[700],
            main: indigo[900]
        }
    }
})

theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem'
            },
            fontWeight: 500,
            color: theme.palette.primary.normal,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontSize: '1rem'
        },
        h7: {
            fontSize: '0.8rem'
        },
        h8: {
            fontSize: '0.7rem'
        },
    }
})

export default theme;