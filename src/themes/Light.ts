import { createTheme, makeStyles, Theme, useMediaQuery } from "@mui/material";

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
        // fontFamily:[
        //     "Text me one",
        //     "Montserrat-VariableFont_wght"
        // ].join(","),
        h1:{
            letterSpacing:"-2%",
            fontFamily:"Text me one",

        },
        h2:{
            letterSpacing:"-2%",
            fontFamily:"Text me one", 
            fontWeight:"lighter"
        },
    }
})
