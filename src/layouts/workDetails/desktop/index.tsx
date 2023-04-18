import Navbar from "@/components/navbar"
import { Box, Grid, Typography, Fade, useTheme } from "@mui/material"
import {ProjectTechnologies} from "@/assets/constants"
import { useTranslation } from "next-i18next"
import TechnologiesRow from "@/components/technologiesRow"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useState } from "react"
import ContentColumn from "./contentColumn"


interface Props{
    project:ProjectTechnologies
}

export default function ProjectDetailsDesktop({project}:Props){
    const theme = useTheme()
    const {t:tc} = useTranslation("common")
    const {t} = useTranslation(project.name)

    const marginToButtons = theme.spacing(8)

    const [isTextOne, setIsTextOne] = useState(true);


    return (
        <>
            <Navbar/>
            <Grid item container gap={10} margin={theme.spacing(3)} alignItems={"center"} justifyItems={"center"} maxWidth={"80vw"}>
                <Typography variant="h1" fontSize={26} maxWidth={"30vw"}>{t("project name")}</Typography> 
                <TechnologiesRow technologies={project.technologies}/>
            </Grid>

            <Grid container flex={1} padding={theme.spacing(3)}>
                <ContentColumn
                    isContentOne={isTextOne}
                    title1={tc("Product/Business Description")}
                    title2={tc("Work Methodoly")}

                    text1={t("business description")} 
                    text2={t("work methodology")}
                />
                <ContentColumn
                    isContentOne={isTextOne}
                    title1={tc("Technical Description")}
                    title2={tc("My Learning")}

                    text1={t("technical description")}
                    text2={t("my learnings")}
                />

            </Grid>

            <Grid container display={"flex"} flexDirection={"column"} gap={2} maxWidth={"27vw"} alignSelf={"end"} marginBottom={marginToButtons} paddingRight={marginToButtons} >
                <Grid onClick={()=>setIsTextOne(true)} item container flexDirection={"row"}  justifyContent={"space-between"} alignItems={"center"}>
                    <Typography>{tc("Work Experience")}</Typography>
                    <Box sx={{ transform: 'rotate(180deg)' }} >
                        <ExpandCircleDownIcon />
                    </Box>
                </Grid>

                <Grid onClick={()=>setIsTextOne(false)} item container flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
                    <Typography>{tc("Work Methodoly")}</Typography>
                    <Box>
                        <ExpandCircleDownIcon />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}