import { Grid, useTheme } from "@mui/material";
import ContentColumn from "../../../../components/contentColumn";
import { useTranslation } from "next-i18next";
import { ProjectTechnologies } from "@/assets/constants";

interface Props{
    project:ProjectTechnologies
    page:number
}

export default function DetailsContent({project,page}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)
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
        <Grid item container flex={1} direction={"column"} padding={theme.spacing(3)} gap={5}>
            {page===1||page===2?pageOneAndTwo:pageThreeAndFour}
        </Grid>
    )
}