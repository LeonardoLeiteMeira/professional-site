import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette:{
        primary:{
            main:"#313EB5",
        },
        secondary:{
            main:"#2F88D6",
        },
    },
    typography:{
        h1:{
            letterSpacing:"-2%",
            fontFamily:"Text me one",
            fontWeight:"lighter"
        },
        h2:{
            letterSpacing:"-2%",
            fontFamily:"Text me one", 
        },
        button:{
            letterSpacing:"-2%",
            fontFamily:"Text me one",
        },
        h3:{
            fontFamily:"Montserrat Extra Light",
            letterSpacing:"-2%",
            fontWeight:"lighter"
        }
    }
})
