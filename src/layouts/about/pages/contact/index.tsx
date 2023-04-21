import Icons from "@/assets/icons";
import NavigationLinks from "@/components/navigationLinks";
import SocialMedias from "@/components/socialMedias";
import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function AboutContact(){
    const {t} = useTranslation()
    const theme = useTheme()
    const imageProportion = 0.80595
    const imageHeight = 200
    const imageWidth = imageHeight * imageProportion

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            height={"85vh"}
        >

            <Grid item padding={theme.spacing(3)}>
                <Typography fontSize={16} maxWidth={theme.spacing(50)}>
                    {t("I hope to contribute")}
                </Typography>
            </Grid>

            <Grid item>
                <Image
                    src={Icons.Me}
                    alt="My picture"
                    width={imageWidth}
                    height={imageHeight}
                />
            </Grid>

            <Grid item>
                <NavigationLinks
                    type="Simple"
                />
            </Grid>

            <Grid item > 
                <SocialMedias align="center"/>
            </Grid>
        </Grid>    
    )
}