import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import ContentColumn from "../contentColumn";
import { useTranslation } from "next-i18next";
import { ProjectTechnologies } from "@/assets/constants";

interface Props{
    project:ProjectTechnologies
    isPageOne:boolean
}

export default function DetailsContent({project,isPageOne}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    return (
        <Grid item container flex={1} direction={isDesktop?undefined:"column"} padding={theme.spacing(3)} gap={isDesktop?"auto":5}>
            <ContentColumn
                isContentOne={isPageOne}
                title1={tc("Product/Business Description")}
                title2={tc("Work Methodoly")}

                text1={t("business description")} 
                text2={t("work methodology")}
            />
            <ContentColumn
                isContentOne={isPageOne}
                title1={tc("Technical Description")}
                title2={tc("My Learning")}

                text1={t("technical description")}
                text2={t("my learnings")}
            />
        </Grid>
    )
}