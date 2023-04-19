import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import ContentColumn from "../../contentColumn";
import { useTranslation } from "next-i18next";
import { ProjectTechnologies } from "@/assets/constants";
import { useState } from "react";

interface Props{
    project:ProjectTechnologies
    page:number
}

export default function DetailsContent({project,page}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    const pageOneAndTwo = (
        <ContentColumn
                isContentOne={page!==1}
                title1={tc("Product/Business Description")}
                text1={t("business description")} 

                title2={tc("Work Methodoly")}
                text2={t("work methodology")}
            />    
    )
    const pageThreeAndFour = (
        <ContentColumn
            isContentOne={page!==3}
            title1={tc("Technical Description")}
            text1={t("technical description")}
            
            title2={tc("My Learning")}
            text2={t("my learnings")}
        />
    )

    return (
        <Grid item container flex={1} direction={isDesktop?undefined:"column"} padding={theme.spacing(3)} gap={isDesktop?"auto":5}>
            {page===1||page===2?pageOneAndTwo:pageThreeAndFour}
        </Grid>
    )
}