import { Grid, GridProps, styled, Typography, TypographyProps, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import ContactButton from "../contactButton";
import SocialMedias from "../socialMedias";
import SwitchLanguage from "../switchLanguage";
import CustomLink from "../customLink";


const NavBarStyle = styled(Grid)<GridProps>(({theme})=>({
    backgroundColor: theme.palette.background.paper
}))

const NavbarText = styled(Typography)<TypographyProps>(({theme})=>({
    color:"black",
    fontSize:20
}))

export default function Navbar(){
    const theme = useTheme()
    const { t } = useTranslation()
    return (
        <NavBarStyle container flexDirection={"row"} justifyContent="space-around" width={"100vw"} alignItems="center" height={theme.spacing(8)}>
            <CustomLink href={"/"}>
                <NavbarText>{t("Start")}</NavbarText>
            </CustomLink>

            <CustomLink href={"/about"}>
                <NavbarText>{t("About")}</NavbarText>
            </CustomLink>

            <CustomLink href={"/workMethodology"}>
                <NavbarText>{t("Work Methodology")}</NavbarText>
            </CustomLink>

            <CustomLink href={"/works"}>
                <NavbarText>{t("Work Experience")}</NavbarText>
            </CustomLink>

            <SocialMedias size="small"/>
            <ContactButton size="small"/>
            <SwitchLanguage isNavbar={true}/>
        </NavBarStyle>
    )
}