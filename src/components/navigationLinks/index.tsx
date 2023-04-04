import { Typography, styled, useMediaQuery, Theme, Grid } from "@mui/material";
import { TypographyProps } from "@mui/system";
import Link, { LinkProps } from "next/link";
import { useTranslation } from "next-i18next";

const LinkStyled = styled(Link)<LinkProps>(()=>({
  textDecoration: "none",
  color: "inherit",
}))

const LinkText = styled(Typography)<TypographyProps>(({theme})=>({
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
  const { t } = useTranslation()
  
    return (
    <Grid item container display={"flex"} flexDirection="column" alignItems={isDesktop?"end":"center"} gap={isDesktop?8:0}>
        <LinkStyled href={"/works"}>
          <LinkText variant="h3">{t("Work Experience")}</LinkText>
        </LinkStyled>
        
        <LinkStyled href={"/workMethodology"}>
          <LinkText variant="h3">{t("Work Methodoly")}</LinkText>
        </LinkStyled>

        <LinkStyled href={"/about"}>
          <LinkText variant="h3">{t("About")}</LinkText>
        </LinkStyled>
      </Grid>   
    )
}