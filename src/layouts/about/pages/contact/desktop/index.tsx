import NavigationLinks from "@/components/navigationLinks";
import { Grid, Typography, useTheme } from "@mui/material";
import { t } from "i18next";
import AboutContact from "../mobile";
import { useTranslation } from "next-i18next";

export default function AboutContactDesktop(){
    const theme = useTheme()
    const {t} = useTranslation()
    return(
       
        <Grid item container direction="row" xs={12} alignItems="stretch" justifyContent="space-between">
            <Grid item maxWidth="50vw">
                <AboutContact/>
            </Grid>

            <Grid item container maxWidth="50vw" justifyContent={"flex-end"}>
                <NavigationLinks type="Large"/>
            </Grid>
            
        </Grid>

    )
}