import { Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"
import MethodologySteps from "../../components/methodolySteps"
import { colors } from "@/assets/constants"


const Container = styled(Grid)(({theme})=>({
    width:"100vw",
    padding:theme.spacing(3),
    backgroundColor:colors[4],
    borderRadius:theme.spacing(3),
}))

const CustomText = styled(Typography)(({theme})=>({
    color:colors[5],
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
    const theme = useTheme()
    return (
        <Container item container direction={"column"} wrap="nowrap">
            <Grid item container>
                <CustomText variant={"h3"} fontWeight={"semi-bold"}>
                    Transforme Seu Negócio com uma Solução Sob Medida!
                </CustomText>
            </Grid>

            <Grid item container direction={"column"} height={"100%"} wrap="nowrap">
                <Item item container direction={"column"} justifyContent={"center"}>
                    {/* <Typography paddingTop={"2vh"}>{t("How I work 3")}</Typography> */}
                    <CustomText fontSize={isDesktop?24:18} paddingBottom={theme.spacing(2)}>
                        Combinando conhecimento técnico avançado e metodologia comprovada, desenvolvo sistemas web e mobile personalizados que impulsionam resultados e enriquecem a experiência do usuário.
                    </CustomText>
                    <CustomText fontSize={isDesktop?24:18}>
                        Quer saber como torno suas ideias em soluções digitais incríveis, passo a passo? Tenho metodologia que coloca <strong>seu negócio</strong> no centro do desenvolvimento. Entre em contato!
                    </CustomText>
                </Item>

                <Item item container direction={"column"} alignContent={"center"} justifyContent={"center"}>
                    <MethodologySteps/>
                </Item>

            </Grid>
        </Container>
    )
}