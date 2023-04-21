import AboutDesktop from "@/layouts/about/desktop";
import AboutMobile from "@/layouts/about/mobile";
import { Theme, styled, useMediaQuery } from "@mui/material"
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const StyledSection = styled("section")(()=>({
  backgroundColor:"#DBF8F8",
  height: "100vh",
  width: "100vw"
}))

export default function About(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return(
        <StyledSection>
            {isDesktop?<AboutDesktop/>:<AboutMobile/>} 
        </StyledSection>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})