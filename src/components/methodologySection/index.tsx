import Icons from "@/assets/icons"
import { Grid, Typography, styled } from "@mui/material"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import MethodologySteps from "../methodolySteps"


const GridItem = styled(Grid)(()=>({
    scrollSnapAlign:"start",
    width:"100vw",
    height:"100vh",
    padding:"8vh"
}))

const Container = styled(Grid)(()=>({
    width:"100%",
    height:"50%",
}))

export default function MethodologySection() {
    const {t} = useTranslation()
    return (
        <GridItem item container direction={"column"} wrap="nowrap">
            <Grid item container>
                <Typography variant="h4">Transforme Seu Negócio com Software Feito Sob Medida! 🚀</Typography>
            </Grid>

            <Grid item container direction={"column"} height={"100%"}>
                <Container item container direction={"column"} justifyContent={"center"}>
                    {/* <Typography paddingTop={"2vh"}>{t("How I work 3")}</Typography> */}
                    <Typography>
                        Quer saber como tornamos suas ideias em soluções digitais incríveis, passo a passo? Descubra nossa metodologia única que coloca VOCÊ no centro do desenvolvimento.
                    </Typography>
                </Container>

                <Container item container direction={"column"} alignContent={"center"} justifyContent={"center"}>
                    {/* <Image
                        alt="Agile Methodology Image"
                        src={Icons.Cicle}
                    /> */}
                    <MethodologySteps/>
                </Container>

            </Grid>
        </GridItem>
    )
}