import { ProjectTechnologies } from "@/assets/constants"
import CustomAppBar from "@/components/customAppBar"
import TechnologiesRow from "@/components/technologiesRow"
import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import ContentColumn from "../contentColumn"
import { useState } from "react"
import DetailsContent from "../detailsContent"

interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsMobile({project}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)

    const theme = useTheme() 

    const [isPageOne, setIsPageOne] = useState(false);

    // const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <>
            <CustomAppBar title={t("project name")}>
         
                <Grid item container direction={"column"} wrap="nowrap">
                    <TechnologiesRow technologies={project.technologies}/>
                    <DetailsContent project={project} isPageOne={isPageOne}/>
                </Grid>

            </CustomAppBar>
        </>
    )
}