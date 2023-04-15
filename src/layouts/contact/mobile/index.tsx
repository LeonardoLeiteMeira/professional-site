import ContactList from "@/components/contactList";
import NavigationLinks from "@/components/navigationLinks";
import Presentation from "@/components/presentation";
import SwitchLanguage from "@/components/switchLanguage";
import { Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function ContactMobile(){
    const {t} = useTranslation()
    const theme = useTheme()
    const isSmallScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));

    return (
        <Grid container justifyContent={"center"}>
            <Grid item container flexDirection={"column"} justifyContent={"center"}  gap={3} padding={theme.spacing(4)} maxWidth={theme.spacing(52)}>
                <Grid item container maxWidth={theme.spacing(40)} alignSelf={"center"}flexDirection={"column"} wrap="nowrap">
                    <Grid item container display={"flex"} justifyContent={"end"}>
                        <SwitchLanguage isNavbar={true}/>
                    </Grid>
                    <Grid item >
                        <Presentation textPosition="beside" hasDivider={true}/>
                    </Grid>
                </Grid>
                <Typography variant="body2" maxWidth={"100%"} align={"left"} fontSize={isSmallScreen?16:18}>
                    {t("You can get in contact")}
                </Typography>
                <ContactList/>
                <Grid item container justifyContent={"start"}>
                    <NavigationLinks type="Simple"/>
                </Grid>
            </Grid>
        </Grid>
    )
}