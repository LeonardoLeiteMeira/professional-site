import { Grid, GridProps, styled, Typography, TypographyProps, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import ContactButton from "../contactButton";
import SocialMedias from "../socialMedias";
import SwitchLanguage from "../switchLanguage";


const NavBarStyle = styled(Grid)<GridProps>(({theme})=>({
    backgroundColor: theme.palette.background.paper
}))

const NavbarText = styled(Typography)<TypographyProps>(({theme})=>({
    color:"black"
}))

export default function Navbar(){
    const theme = useTheme()
    const { t } = useTranslation()
    return (
        <NavBarStyle container flexDirection={"row"} justifyContent="space-around" width={"100vw"} alignItems="center" height={theme.spacing(8)}>
            <NavbarText>{t("Start")}</NavbarText>
            <NavbarText>{t("About")}</NavbarText>
            <NavbarText>{t("Work Methodoly")}</NavbarText>
            <NavbarText>{t("Work Experience")}</NavbarText>
            <SocialMedias size="small"/>
            <ContactButton size="small"/>
            <SwitchLanguage isNavbar={true}/>
        </NavBarStyle>
    )
}