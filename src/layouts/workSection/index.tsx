import ProjectList from "@/components/projectList"
import { Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import Description from "../works/description"

const Container = styled(Grid)(()=>({
    maxWidth:"100%",
}))

export default function WorkSection(){
    const theme = useTheme()
    const {t} = useTranslation()
    const isDesktop = useMediaQuery((theme:Theme)=>theme.breakpoints.up("md"))// theme.breakpoints.up("md")

    return (
        <Container item container direction="column">

            <Grid item container>
                <Typography variant="h4" marginLeft={theme.spacing(4)} marginRight={theme.spacing(4)} >
                    {t("Work Experience")}
                </Typography>
            </Grid>

            <Grid item container direction={isDesktop?"row":"column"}>
                <Grid item container maxWidth={isDesktop?"50vw":"100vw"}>
                    <Description/>
                    <Typography>Colocar tambem sobre como a interdiciplinariade contribuiu com desenvolvimento</Typography>
                </Grid>

                <Grid item container maxWidth={isDesktop?"50vw":"100vw"}>
                    <ProjectList/>
                </Grid>
            </Grid>
        </Container>
    )
}