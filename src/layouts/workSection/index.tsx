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

    return (
        <Container item container xs={12}>

            <Grid item container xs={12}>
                <Typography variant="h4" marginLeft={theme.spacing(4)} marginRight={theme.spacing(4)} >
                    {t("Work Experience")}
                </Typography>
            </Grid>

            <Grid item container xs={12}>
                <Grid item container md={6} xs={12}>
                    <Description/> Interdiciplinariadade
                </Grid>

                <Grid item container md={6} xs={12}>
                    <ProjectList/>
                </Grid>
            </Grid>
        </Container>
    )
}