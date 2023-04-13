import Navbar from "@/components/navbar";
import ProjectList from "@/components/projectList";
import { Grid, Typography, styled, useTheme } from "@mui/material";
import Description from "../description";
import { useTranslation } from "next-i18next";

const Section = styled("section")(({theme})=>({
  with:"100vw",
  height:"100vh",
}))

export default function WorksDesktop(){
    const theme = useTheme()
    const {t} = useTranslation("common")
    return(
        <Section>
            <Navbar/>
            <Grid container height={"80vh"} alignContent={"center"} gap={10}>
                <Typography variant="h3" marginLeft={theme.spacing(4)} marginRight={theme.spacing(4)} >
                    {t("Work Experience")}
                </Typography>

                <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"} marginRight={theme.spacing(4)}>
                    <Grid item maxWidth="50%" display="flex" flexDirection={"column"} alignItems={"start"} height="100%">
                        <Description/>
                    </Grid>

                    <Grid item width="50%">
                        <ProjectList/>
                    </Grid>
                </Grid>
            </Grid>
        </Section>
    )
}