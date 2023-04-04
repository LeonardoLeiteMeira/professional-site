import { Grid, GridProps, styled, Typography, TypographyProps, useTheme } from "@mui/material";
import ContactButton from "../contactButton";
import SocialMedias from "../socialMedias";
import SwitchLanguage from "../switchLanguage";


const NavBarStyle = styled(Grid)<GridProps>(({theme})=>({
    color: "#FAF8F6"
}))

const NavbarText = styled(Typography)<TypographyProps>(({theme})=>({
    color:"black"
}))

export default function Navbar(){
    const theme = useTheme()
    return (
        <NavBarStyle container flexDirection={"row"} justifyContent="space-around" width={"100vw"} alignItems="center" height={theme.spacing(8)}>
            <NavbarText>Inicio</NavbarText>
            <NavbarText>Sobre min</NavbarText>
            <NavbarText>Como Trabalho</NavbarText>
            <NavbarText>Trabalhos realizados</NavbarText>
            <SocialMedias
                size="small"
            />
            <ContactButton
                size="small"
            />
            <SwitchLanguage isNavbar={true}/>
        </NavBarStyle>
    )
}