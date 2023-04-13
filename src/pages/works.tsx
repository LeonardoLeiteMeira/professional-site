import WorksDesktop from "@/layouts/works/desktop";
import WorksMobile from "@/layouts/works/mobile";
import { Theme, styled, useMediaQuery } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Section = styled("section")(({theme})=>({
  backgroundColor:"#61DAFB",
  height:"100%",
  minHeight:"100vh"
}))

export default function Works(){
  const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
      <>
        <Section>
          {isDesktop?<WorksDesktop/>:<WorksMobile/>}
        </Section>
      </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})
