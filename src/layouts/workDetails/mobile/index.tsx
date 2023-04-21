import { ProjectTechnologies } from "@/assets/constants"
import CustomAppBar from "@/components/customAppBar"
import TechnologiesRow from "@/components/technologiesRow"
import { Box, Grid, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import DetailsContent from "./detailsContent"
import DetailsNavigation from "../../../components/detailsNavigation"

interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsMobile({project}:Props){
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

            <Box
                position="fixed"
                bottom={theme.spacing(3)}
                right={theme.spacing(3)}
            >
                <DetailsNavigation
                    currentPage={page}
                    lastPage={4}
                    handlePageDown={handlePageDown}
                    handlePageUp={handlePageUp}
                />
            </Box>
        </Grid>
    )
}