import { ProjectTechnologies } from "@/assets/constants"
import CustomAppBar from "@/components/customAppBar"
import TechnologiesRow from "@/components/technologiesRow"
import { Button, Grid, Theme, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import DetailsContent from "./detailsContent"

interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsMobile({project}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)

    const theme = useTheme() 

    const [page, setPage] = useState(1);

    const handlePageChange = ()=>{
        setPage(value => value+1>4?1:value+1)
    }

    return (
        <>
            <CustomAppBar title={t("project name")}>
                <Grid item container direction={"column"} wrap="nowrap" paddingTop={theme.spacing(2)}>
                    <TechnologiesRow technologies={project.technologies}/>
                    <DetailsContent project={project} page={page}/>
                </Grid>
                <Button onClick={handlePageChange}>Change</Button>
            </CustomAppBar>
        </>
    )
}