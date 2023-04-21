import Icons from "@/assets/icons";
import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function AboutNow(){
    const {t} = useTranslation()
    const theme = useTheme()

    const imageProportion = 1.3323
    const imageWidth = 146.36
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
                {t("Currently, I am living in Bragança, Portugal")}
            </Typography>
            <Image
                src={Icons.Athenas}
                alt="Me in Athenas"
                width={imageWidth}
                height={imageHeight}
            />
        </Grid>      
    )
}

