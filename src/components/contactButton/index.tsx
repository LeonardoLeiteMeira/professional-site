import { Button, Typography, styled, ButtonProps, useTheme } from "@mui/material";
import { TypographyProps } from "@mui/system";

const ButtonStyle = styled(Button)<ButtonProps>(({theme})=>({
    width:"90vw",
    maxWidth:theme.spacing(40),
    borderRadius:"25px",
}))

const ButtonTypographyStyle = styled(Typography)<TypographyProps>(()=>({
    fontSize:28,
    textTransform:"none",
}))

export default function ContactButton(){
    return (
        <ButtonStyle color="primary" variant="contained">
             <ButtonTypographyStyle variant="button">Contato</ButtonTypographyStyle>            
        </ButtonStyle>
    )
}