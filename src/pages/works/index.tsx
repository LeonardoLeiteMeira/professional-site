import WorksDesktop from "@/layouts/works/desktop";
import WorksMobile from "@/layouts/works/mobile";
import { Theme, styled, useMediaQuery } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Section = styled("section")(({theme})=>({
  backgroundColor:"#61DAFB",
  height:"100%",
  minHeight:"100vh"
}))

export default function Works(){
  const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
      <>
        <Head>
        <title>Leonardo Leite</title>
        <meta name="description" content="Professional Site" />
        <meta name="theme-color" content="#FAF8F6" />
      </Head>
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
