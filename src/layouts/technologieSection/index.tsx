import Icons from "@/assets/icons";
import { Box, Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"

const Container = styled(Grid)(({theme})=>({
    padding:theme.spacing(3),
}))


export default function TechnologiesSection() {
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()
    const iconSize = 200
    const iconSmallSize = iconSize/2

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

            <Grid item container direction="row" padding={theme.spacing(6)} justifyContent={"center"} gap={6}>
                <Grid item container maxWidth={"40vw"} direction={"column"} alignItems="center" gap={2}>
                    <Image 
                        src={Icons.Flutter} 
                        alt={"Flutter Ions"}
                        width={iconSize} 
                        height={iconSize}
                    />
                    <Typography variant={"caption"}>Flutter - Google Framework</Typography>
                </Grid>
                <Grid item container direction="column" width={2*iconSize}>
                    <Grid item container direction="row" maxWidth="40vw" alignContent="center" gap={2}>
                        <Grid item container direction={"column"} width={iconSmallSize}>
                            <Grid item container>
                                <Image 
                                    src={Icons.BMW} 
                                    alt={"BMW Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                            <Grid item container>
                                <Image 
                                    src={Icons.HSBC} 
                                    alt={"HSBC Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"} width={iconSmallSize} gap={0}>
                            <Grid item container>
                                <Image 
                                    src={Icons.Revolut} 
                                    alt={"Revolut Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                            <Grid item container>
                                <Image 
                                    src={Icons.Nubank} 
                                    alt={"Nubank Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography variant={"caption"}>Algumas empresas que adotam o Flutter</Typography>
                </Grid>
            </Grid>
        </Container>

    )
}