import ContactList from "@/components/contactList";
import MethodologySection from "@/layouts/methodologySection";
import Presentation from "@/components/presentation";
import NavigationBar from "@/layouts/navigationBar";
import NewPresentationSection from "@/layouts/newPresentation";
import { Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import TechnologiesSection from "@/layouts/technologieSection";
import WorkSection from "@/layouts/workSection";

const Main = styled("main")`
  overflow: hidden;
  background: 
        linear-gradient(to bottom right, #FFFFFF, #53ebeb);
        /* linear-gradient(to bottom right, #FFFFFF, #87E6E6); */
        /* linear-gradient(to bottom right, #FFFFFF, #003366); */
`;

const Section = styled("section")(({theme})=>({
    marginBottom: theme.spacing(10),
}))

const GridItem = styled(Grid)(()=>({
    width:"100vw",
}))

export default function NewPage(){
    const theme = useTheme()
    const {t} = useTranslation()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
        <Main>
            <NavigationBar> 
                <Grid container  overflow={"auto"}>
                    <Section>
                        <NewPresentationSection/>
                    </Section>

                    <Section>
                        <MethodologySection/>
                    </Section>

                    <Section>
                        <TechnologiesSection/>
                    </Section>

                    <Section>
                        <WorkSection/>
                    </Section>
                    {/* TODO Remover a foto e colocar um formulario que envia para algum lugar */}
                    <Section>
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
                    </Section>
                </Grid>
            </NavigationBar>
        </Main>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})