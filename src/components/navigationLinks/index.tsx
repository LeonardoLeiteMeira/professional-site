import { Typography, styled, useMediaQuery, Theme, Grid } from "@mui/material";
import { TypographyProps } from "@mui/system";
import Link, { LinkProps } from "next/link";
import { useTranslation } from "next-i18next";
import CustomLink from "../customLink";

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
        <CustomLink href={"/works"}>
          <LinkText variant="h3">{t("Work Experience")}</LinkText>
        </CustomLink>
        
        <CustomLink href={"/workMethodology"}>
          <LinkText variant="h3">{t("Work Methodoly")}</LinkText>
        </CustomLink>

        <CustomLink href={"/about"}>
          <LinkText variant="h3">{t("About")}</LinkText>
        </CustomLink>
      </Grid>   
    )
}