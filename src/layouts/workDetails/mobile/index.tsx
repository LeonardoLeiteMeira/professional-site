import { ProjectTechnologies } from "@/assets/constants"
import CustomAppBar from "@/components/customAppBar"
import TechnologiesRow from "@/components/technologiesRow"
import { Button, Grid, IconButton, Theme, Typography, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import DetailsContent from "./detailsContent"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import DetailsNavigation from "../detailsNavigation"

interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsMobile({project}:Props){
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)

    const theme = useTheme() 

    const [page, setPage] = useState(1);

    const handlePageUp = ()=>{
        if(page>1){
            setPage(value => value-1)
        }
    }

    const handlePageDown = ()=>{
        if(page < 4){
            setPage(value => value+1)
        }
    }

    return (
        <Grid container direction="column" justifyContent={"space-between"} height={"100vh"}>
        
            <Grid item>
                <CustomAppBar title={t("project name")}>
                    <Grid item container direction={"column"} wrap="nowrap" paddingTop={theme.spacing(2)}>
                        <TechnologiesRow technologies={project.technologies}/>
                        <DetailsContent project={project} page={page}/>
                    </Grid>
                </CustomAppBar>
            </Grid>

            <DetailsNavigation
                currentPage={page}
                lastPage={4}
                handlePageDown={handlePageDown}
                handlePageUp={handlePageUp}
            />
        </Grid>
    )
}