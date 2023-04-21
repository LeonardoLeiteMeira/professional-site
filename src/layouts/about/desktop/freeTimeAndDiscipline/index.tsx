import Icons from "@/assets/icons";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function FreeTimeAndDiscipline(){
 const theme = useTheme()
    const {t} = useTranslation()
    
    const campNouImageProportion = 0.7520
    const campNouImageWidth = 200
    const campNouImageHeight = campNouImageWidth * campNouImageProportion

    const presentationImageProportion = 0.7520
    const presentationImageWidth = 200
    const presentationImageHeight = presentationImageWidth * presentationImageProportion

    return(
        <Grid container direction="row">

            <Grid item container direction="column" maxWidth="50vw" justifyContent="center" alignItems="center">
                <Typography fontSize={16} padding={theme.spacing(3)}>
                    {t("In my leisure time")}
                </Typography>

                <Image
                    src={Icons.CampNou}
                    alt="Me on Barcelona Stadium"
                    width={campNouImageWidth}
                    height={campNouImageHeight}
                />
            </Grid>

            <Grid item container direction="column" maxWidth="50vw" justifyContent="center" alignItems="center">
                <Image
                    alt="Project presentation on IPB"
                    src={Icons.PresentationIPB}
                    height={presentationImageHeight}
                    width={presentationImageWidth}
                />
                <Typography fontSize={16} padding={theme.spacing(3)}>
                    {t("I always seek to develop my discipline")}
                </Typography>

            </Grid>
        </Grid>
    )
}