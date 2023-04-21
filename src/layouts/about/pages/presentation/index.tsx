import Icons from "@/assets/icons";
import Image from "next/image";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function AboutPresentation(){
    const {t} = useTranslation()
    const theme = useTheme()

    const imageProportion = 1.0597
    const imageWidth = 200
    const imageHeight = imageWidth * imageProportion

    return (
        <Grid 
            container
            direction="column"
            justifyContent="start"
            alignItems="center"
            height={"85vh"}
        >
            <Typography fontSize={16} maxWidth={theme.spacing(50)} padding={theme.spacing(3)}>
                {t("Hi! My name is Leonardo Leite, I work with software engineering")}
            </Typography>
            <Image
                src={Icons.Commit}
                alt="Me with junior company flag"
                width={imageWidth}
                height={imageHeight}
            />
        </Grid>      
    )
}