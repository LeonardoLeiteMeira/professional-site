import Navbar from "@/components/navbar"
import { Box, Grid, Typography, Fade, useTheme } from "@mui/material"
import {ProjectTechnologies} from "@/assets/constants"
import { useTranslation } from "next-i18next"
import TechnologiesRow from "@/components/technologiesRow"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useState } from "react"
import ContentColumn from "../contentColumn"
import CustomLink from "@/components/customLink"
import DetailsContent from "../detailsContent"


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

            <Grid container flexDirection={"column"} alignSelf={"end"} marginBottom={marginToButtons} paddingRight={marginToButtons} alignContent={"end"}>
                <CustomLink href="#" underline>
                    <Grid onClick={handlePageChange} item container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
                        <Typography>{isPageOne?tc("Business and Technical Description"):tc("Methodoly and Learnings")}</Typography>
                        <Box marginLeft={theme.spacing(2)}>
                            <ExpandCircleDownIcon sx={{ transform: isPageOne?'rotate(180deg)':"" }} />
                        </Box>
                    </Grid>
                </CustomLink>
            </Grid>
        </>
    )
}