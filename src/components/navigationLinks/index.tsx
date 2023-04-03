import { Typography, styled, useMediaQuery, Theme, Grid } from "@mui/material";
import { TypographyProps } from "@mui/system";

const LinkStyled = styled(Typography)<TypographyProps>(({theme})=>({
  fontSize:26,
  padding:theme.spacing(1),
  [theme.breakpoints.up("md")]:{
    fontSize:38,
    '&:hover': {
      fontSize: 46,
      color:"white",
    },
    marginRight:theme.spacing(6)
  }
}))

export default function NavigationLinks(){
  const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
  
    return (
    <Grid item container display={"flex"} flexDirection="column" alignItems={isDesktop?"end":"center"} gap={isDesktop?8:0}>
        <LinkStyled variant="h3">Sobre mim</LinkStyled>
        <LinkStyled variant="h3">Como Trabalho</LinkStyled>
        <LinkStyled variant="h3">Trabalhos realizados</LinkStyled>
      </Grid>   
    )
}