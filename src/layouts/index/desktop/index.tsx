import ContactButton from "@/components/contactButton";
import Divider from "@/components/divider";
import NavigationLinks from "@/components/navigationLinks";
import Presentation from "@/components/presentation";
import SocialMedias from "@/components/socialMedias";
import SwitchLanguage from "@/components/switchLanguage";
import { Box, Grid, useTheme } from "@mui/material";
import { Theme } from "@mui/system";


export default function IndextDesktop(){
    const theme:Theme = useTheme()

    return (
    <Grid container flexDirection={"row"} width={"100vw"} height={"100vh"}>
        <Grid item container flexDirection={"column"} width={"50vw"} height={"100vh"} alignItems={"center"} justifyContent="space-around">
            <Presentation/>
            <Divider/>
            <ContactButton/>
        </Grid>


        <Grid item container  height={"100vh"} width={"50vw"} alignContent={"space-between"} justifyContent={"end"}>
            <SwitchLanguage/>
            <NavigationLinks type="Large"/>
            <Box marginBottom={theme.spacing(4)}>
                <SocialMedias/>
            </Box>
        </Grid>
        
    </Grid>
    )
}