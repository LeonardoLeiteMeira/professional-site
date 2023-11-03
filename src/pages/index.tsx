import Head from 'next/head'
import { styled,useMediaQuery } from '@mui/material'
import IndexMobile from '@/layouts/index/mobile'
import IndexDesktop from '@/layouts/index/desktop'
import { Theme } from '@mui/system'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from "next";

const Main = styled("main")`
  overflow: hidden;
  background: 
        linear-gradient(to bottom right, #FFFFFF, #87E6E6);
  text-align: center;
  width: 100vw;
  height: 100vh;
`;



export default function Home() {
  const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
  return (
    <>
      <Head>
        <title>Software Engineer - Leonardo Leite</title>
        <meta name="description" content="Solving business problems and creating solutions with technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {isDesktop?<IndexDesktop/>:<IndexMobile/>}
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})
