import { Typography, styled } from "@mui/material";
import { TypographyProps } from "@mui/system";

const LinkStyled = styled(Typography)<TypographyProps>(({theme})=>({
  fontSize:26,
  padding:theme.spacing(1)
}))

export default function NavigationLinks(){
    return (
    <section>
        <LinkStyled variant="h3">Sobre mim</LinkStyled>
        <LinkStyled variant="h3">Como Trabalho</LinkStyled>
        <LinkStyled variant="h3">Trabalhos realizados</LinkStyled>
      </section>   
    )
}