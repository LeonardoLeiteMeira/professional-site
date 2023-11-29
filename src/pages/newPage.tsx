import MethodologySection from "@/layouts/methodologySection";
import NavigationBar from "@/layouts/navigationBar";
import NewPresentationSection from "@/layouts/newPresentation";
import { Grid, Theme, styled, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import TechnologiesSection from "@/layouts/technologieSection";
import WorkSection from "@/layouts/workSection";
import ContactForm from "@/layouts/contactForm";

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


export default function NewPage(){
    const theme = useTheme()
    
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
                    <Section>
                        <ContactForm/>
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