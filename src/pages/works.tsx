import Navbar from "@/components/navbar";
import { styled } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Section = styled("section")(({theme})=>({
  backgroundColor:"#61DAFB",
  with:"100vw",
  height:"100vh"
}))

export default function Works(){
    return (
        <Section>
            <Navbar/>
            <h1>My Works</h1>
        </Section>
    )
}


export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})
