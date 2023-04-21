import Icons from "@/assets/icons";
import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function AboutDiscipline(){
    const {t} = useTranslation()
    const theme = useTheme()

    const imageProportion = 0.7520
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
                {t("I always seek to develop my discipline")}
            </Typography>
            <Image
                src={Icons.PresentationIPB}
                alt="Project presentation on IPB"
                width={imageWidth}
                height={imageHeight}
            />
        </Grid>      
    )
}