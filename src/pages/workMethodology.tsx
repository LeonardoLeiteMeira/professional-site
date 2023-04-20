import WorkMethodologyDesktop from "@/layouts/workMethodology/desktop";
import WorkMethodologyMobile from "@/layouts/workMethodology/mobile";
import { Theme, styled, useMediaQuery } from "@mui/material";
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const StyledSection = styled("section")(()=>({
  backgroundColor:"#B5F0F0",
  height: "100vh",
  width: "100vw"
}))

export default function WorkMethodology(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
       <StyledSection>
          {isDesktop?<WorkMethodologyDesktop/>:<WorkMethodologyMobile/>}
       </StyledSection>  
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})