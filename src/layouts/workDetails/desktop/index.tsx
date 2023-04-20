import Navbar from "@/components/navbar"
import { Box, Grid, Typography, Fade, useTheme } from "@mui/material"
import {ProjectTechnologies} from "@/assets/constants"
import { useTranslation } from "next-i18next"
import TechnologiesRow from "@/components/technologiesRow"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useState } from "react"
import ContentColumn from "../../../components/contentColumn"
import CustomLink from "@/components/customLink"
import DetailsContent from "./detailsContent"
import DetailsNavigation from "../../../components/detailsNavigation"


interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsDesktop({project}:Props){
    const theme = useTheme()
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)

    const marginToButtons = theme.spacing(8)

    const [isPageOne, setIsPageOne] = useState(false);

    const handlePageChange = () => {
        setIsPageOne(value=>!value)
    }

    return (
        <>
            <Navbar/>
            <Grid item container gap={10} margin={theme.spacing(3)} alignItems={"center"} justifyItems={"center"} maxWidth={"80vw"}>
                <Typography variant="h1" fontSize={26} maxWidth={"30vw"}>{t("project name")}</Typography> 
                <TechnologiesRow technologies={project.technologies}/>
            </Grid>

            <DetailsContent project={project} isPageOne={isPageOne}/>

            <DetailsNavigation
                currentPage={isPageOne?1:2}
                lastPage={2}
                handlePageDown={handlePageChange}
                handlePageUp={handlePageChange}
            />
        </>
    )
}