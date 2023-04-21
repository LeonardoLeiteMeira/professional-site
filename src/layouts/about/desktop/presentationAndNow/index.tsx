import Icons from "@/assets/icons";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function AboutPresentationAndNow(){
    const theme = useTheme()
    const {t} = useTranslation()
    
    const athenasImageProportion = 1.3323
    const athenasImageWidth = 146.36
    const athenasImageHeight = athenasImageWidth * athenasImageProportion

    const commitImageProportion = 1.0597
    const commitImageWidth = 200
    const commitImageHeight = commitImageWidth * commitImageProportion

    return(
        <Grid container direction="row">
            <Grid item container direction="column" maxWidth="50vw" justifyContent="center" alignItems="center">
                <Typography fontSize={16} padding={theme.spacing(3)}>
                    {t("Hi! My name is Leonardo Leite, I work with software engineering")}
                </Typography>

                <Image
                    src={Icons.Commit}
                    alt="Me with junior company flag"
                    width={commitImageWidth}
                    height={commitImageHeight}
                />
            </Grid>

            <Grid item container direction="column" maxWidth="50vw" justifyContent="center" alignItems="center">
                <Image
                    src={Icons.Athenas}
                    alt="Me with junior company flag"
                    height={athenasImageHeight}
                    width={athenasImageWidth}
                />
                <Typography fontSize={16} padding={theme.spacing(3)}>
                    {t("Currently, I am living in Bragança, Portugal")}
                </Typography>

            </Grid>
        </Grid>
    )
}