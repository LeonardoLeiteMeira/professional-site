import Icons from "@/assets/icons";
import NavigationLinks from "@/components/navigationLinks";
import SocialMedias from "@/components/socialMedias";
import { Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function AboutContact(){
    const {t} = useTranslation()
    const theme = useTheme()
    const imageProportion = 0.80595
    const imageHeight = 200
    const imageWidth = imageHeight * imageProportion
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            height={isDesktop?"70vh":"85vh"}
            maxWidth={isDesktop?"50vw":"auto"}
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

            {isDesktop?<></>:
                <>
                    <Grid item>
                        <NavigationLinks
                            type="Simple"
                            />
                    </Grid>
                
                    <Grid item > 
                        <SocialMedias align="center"/>
                    </Grid>
                </>
            }

        </Grid>    
    )
}