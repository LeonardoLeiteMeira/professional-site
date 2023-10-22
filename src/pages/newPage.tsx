import ContactButton from "@/components/contactButton";
import ContactList from "@/components/contactList";
import Navbar from "@/components/navbar";
import NavigationLinks from "@/components/navigationLinks";
import Presentation from "@/components/presentation";
import ProjectList from "@/components/projectList";
import SocialMedias from "@/components/socialMedias";
import SwitchLanguage from "@/components/switchLanguage";
import Description from "@/layouts/works/description";

import { Box, Divider, Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Section = styled("section")(({theme})=>({
  with:"100vw",
  height:"100vh",
}))

const GridItem = styled(Grid)(()=>({
    scrollSnapAlign:"start",
    width:"100vw",
    height:"100vh",
}))

export default function NewPage(){
    const theme = useTheme()
    const {t} = useTranslation()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
       <>
            <Grid container width={"100vw"} height={"100vh"} overflow={"auto"} sx={{scrollSnapType:"y mandatory"}}>
                <GridItem item container flexDirection={"row"} >
                    <Navbar/>
                    <Grid item container flexDirection={"column"} width={"50vw"} height={"100vh"} alignItems={"center"} justifyContent="space-around">
                        <Presentation/>
                        <Divider/>
                        {/* <ContactButton/> */}
                    </Grid>


                    <Grid item container  height={"50vh"} width={"50vw"} alignContent={"center"} justifyContent={"end"}>
                        {/* <SwitchLanguage/> */}
                        {/* <NavigationLinks type="Large"/> */}
                        <Typography align="center">Entregando solucoes de software que geram resultados</Typography>
                        {/* <Box marginBottom={theme.spacing(4)}>
                            <SocialMedias/>
                        </Box> */}
                    </Grid>
                </GridItem>
                {/* ============== */}
                <GridItem item container direction={"column"}>
                        <Typography>Explicar sobre a metodologia - imagem </Typography>
                        <Typography>Entendimento do problema</Typography>
                        <Typography>Especificacao da solucao</Typography>
                        <Typography>Design e validacoes</Typography>
                        <Typography>Desenvolvimento</Typography>
                        <Typography>Publicacao</Typography>
                        <Typography>Suporte</Typography>
                </GridItem>
                {/* ============== */}
                <GridItem item container direction={"column"}>
                        <Typography>Explicar sobre a tecnologia Flutter</Typography>
                        <Typography>Imagem logo do Flutter</Typography>
                        <Typography>Grande suporte da Google e usado internamente em projetos como Google Earth</Typography>
                        <Typography>Empresas que usam</Typography>
                </GridItem>
                {/* ============== */}
                <GridItem item container>
                    <Section>
                        <Grid item container height={"80vh"} alignContent={"center"} gap={10}>
                            <Typography variant="h4" marginLeft={theme.spacing(4)} marginRight={theme.spacing(4)} >
                                {t("Work Experience")}
                            </Typography>
                            <Grid item container display={"flex"} flexDirection={"row"} alignItems={"center"} marginRight={theme.spacing(4)}>
                                <Grid item maxWidth="50%" display="flex" flexDirection={"column"} alignItems={"start"} height="100%">
                                    <Description/>
                                    <Typography>Colocar tambem sobre como a interdiciplinariade contribuiu com desenvolvimento</Typography>
                                </Grid>

                                <Grid item width="50%">
                                    <ProjectList/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Section>
                </GridItem>
                {/* ============== */}
                {/* TODO Remover a foto e colocar um formulario que envia para algum lugar */}
                <GridItem item container >
                    <Grid item container width={"50%"} height={"90vh"}>
                        <Presentation hasDivider={true}/>
                    </Grid>

                    <Grid item container width={"50%"} flexDirection={"column"} justifyContent={"center"}>
                        <Grid item container flexDirection={"column"}gap={5}> 
                            <Typography variant="body1" fontSize={24}>
                                {t("You can get in contact")}
                            </Typography>
                            <ContactList/>
                            {/* <NavigationLinks type="Simple"/> */}
                        </Grid>
                    </Grid>
                </GridItem>
            </Grid>
       </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})