import { Grid, useTheme } from "@mui/material";
import ContentColumn from "../../../../components/contentColumn";
import { useTranslation } from "next-i18next";
import { ProjectTechnologies } from "@/assets/constants";

interface Props{
    project:ProjectTechnologies
    isPageOne:boolean
}

export default function DetailsContent({project,isPageOne}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)
    const theme = useTheme()

    return (
        <Grid item container flex={1} padding={theme.spacing(3)} gap={2} wrap="nowrap">
            <ContentColumn
                isContentOne={isPageOne}
                title1={tc("Product/Business Description")}
                text1={t("business description")} 

                title2={tc("Work Methodology")}
                text2={t("Work Methodology")}

                />
            <ContentColumn
                isContentOne={isPageOne}
                title1={tc("Technical Description")}
                text1={t("technical description")}
                
                title2={tc("My Learning")}
                text2={t("my learnings")}
            />
        </Grid>
    )
}