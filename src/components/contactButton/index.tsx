import { Button, Typography, styled, ButtonProps, useTheme, useMediaQuery, Theme } from "@mui/material";
import { TypographyProps } from "@mui/system";

const ButtonStyle = styled(Button)<ButtonProps>(({theme})=>({
    width:"90vw",
    maxWidth:theme.spacing(40),
    borderRadius:"25px",
    [theme.breakpoints.up("md")]:{
        fontSize:36,  
        borderRadius:"40px",
    }
}))

const ButtonTypographyStyle = styled(Typography)<TypographyProps>(({theme})=>({
    fontSize:28,
    textTransform:"none",
    [theme.breakpoints.up("md")]:{
        fontSize:44,  
    }
}))

export default function ContactButton(){
    return (
        <ButtonStyle color="primary" variant="contained">
             <ButtonTypographyStyle variant="button">Contato</ButtonTypographyStyle>            
        </ButtonStyle>
    )
}