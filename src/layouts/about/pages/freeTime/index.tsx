import Icons from "@/assets/icons";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function AboutFreeTime(){
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
                {t("In my leisure time")}
            </Typography>
            <Image
                src={Icons.CampNou}
                alt="Me on Barcelona Stadium"
                width={imageWidth}
                height={imageHeight}
            />
        </Grid>      
    )
}