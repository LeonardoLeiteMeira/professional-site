import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette:{
        primary:{
            main:"#313EB5",
        },
        secondary:{
            main:"#2F88D6",
        },
        background:{
            paper:"#FAF8F6",
        }
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
        h3:{
            letterSpacing:"-2%",
            fontFamily:"Text me one", 
        },
        h4:{
            fontFamily:"Montserrat Extra Light",
            letterSpacing:"-2%",
            fontWeight:"lighter"
        },
        button:{
            letterSpacing:"-2%",
            fontFamily:"Text me one",
        },
        subtitle1:{
            letterSpacing:"-2%",
            fontFamily:"Text me one",
            fontSize:28
        },
        subtitle2:{
            fontFamily:"Montserrat Extra Light",
            fontSize:16
        },
        body1:{
            color:"black",
            fontFamily:"Montserrat Extra Light",
            letterSpacing:"-2%",
            fontSize:24
        },
        body2:{
            color:"black",
            fontFamily:"Montserrat Extra Light",
            letterSpacing:"-2%",
        },
    } 
})
