import { Theme, styled, useMediaQuery } from "@mui/material";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from "next";
import ContactDesktop from "@/layouts/contact/desktop";
import ContactMobile from "@/layouts/contact/mobile";

const StyledSection = styled("section")(({theme})=>({
    height:"100vh",
    width:"100vw",
    background: 
        "linear-gradient(to bottom right, #87E6E6, #FFFFFF)"
}))

export default function Contact(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    
    return (
        <StyledSection>
            {isDesktop?<ContactDesktop/>:<ContactMobile/>}
        </StyledSection>  
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})