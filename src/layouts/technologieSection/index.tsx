import { Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"
import FlutterCompanies from "./flutterCompanies";

const Container = styled(Grid)(({theme})=>({
    padding:theme.spacing(3),
}))


export default function TechnologiesSection() {
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    return (
        <Container item container direction={"column"} width="100vw">
            <Grid item container direction="column" justifyContent={"center"}>
                <Typography variant={"h3"} fontWeight={"semi-bold"} maxWidth={"100vw"} paddingBottom={theme.spacing(6)}>
                    O que uso para entregar as soluções digitais para os clientes!
                </Typography>

                <Typography fontSize={isDesktop?24:18} maxWidth={"100vw"} paddingBottom={theme.spacing(4)}>
                    A combinação certa de tecnologia avançada e metodologia estratégica é crucial para criar soluções digitais excepcionais. Escolhi <strong>especializar-me em Flutter</strong>, uma ferramenta versátil e robusta da Google, que me permite construir aplicações de alta qualidade e desempenho em múltiplas plataformas. Com Flutter, posso garantir que suas necessidades específicas sejam atendidas com eficiência, fornecendo um produto final que está à frente da curva em inovação e usabilidade.
                </Typography>

                <Typography fontSize={isDesktop?24:18} maxWidth={"100vw"}>
                    Além do Flutter, as soluções podem contar também com o uso de tecnologias como <strong>NodeTS</strong>, <strong>Python</strong>, <strong>Docker</strong> e <strong>Bancos de Dados</strong> relacionais e não relacionais. Tudo para garantir que o produto final seja o melhor possível!
                </Typography>
            </Grid>

            <FlutterCompanies/>
           
        </Container>

    )
}