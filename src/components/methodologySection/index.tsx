import Icons from "@/assets/icons"
import { Grid, Theme, Typography, styled, useMediaQuery } from "@mui/material"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import MethodologySteps from "../methodolySteps"


const Container = styled(Grid)(({theme})=>({
    width:"100vw",
    padding:theme.spacing(3),
}))

const Item = styled(Grid)(({theme})=>({
    width:"100%",
    [theme.breakpoints.down('md')]: {
        marginTop:theme.spacing(1),
        marginBottom:theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
        marginTop:theme.spacing(6),
        marginBottom:theme.spacing(6),
    },
}))

export default function MethodologySection() {
    const {t} = useTranslation()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
        <Container item container direction={"column"} wrap="nowrap">
            <Grid item container>
                <Typography variant={isDesktop?"h2":"h4"} >Transforme Seu Negócio com Software Feito Sob Medida! 🚀</Typography>
            </Grid>

            <Grid item container direction={"column"} height={"100%"} wrap="nowrap">
                <Item item container direction={"column"} justifyContent={"center"}>
                    {/* <Typography paddingTop={"2vh"}>{t("How I work 3")}</Typography> */}
                    <Typography fontSize={isDesktop?24:18}>
                        Quer saber como tornamos suas ideias em soluções digitais incríveis, passo a passo? Descubra nossa metodologia que coloca VOCÊ no centro do desenvolvimento.
                    </Typography>
                </Item>

                <Item item container direction={"column"} alignContent={"center"} justifyContent={"center"}>
                    {/* <Image
                        alt="Agile Methodology Image"
                        src={Icons.Cicle}
                    /> */}
                    <MethodologySteps/>
                </Item>

            </Grid>
        </Container>
    )
}