import Navbar from "@/components/navbar";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Works(){
    return (
        <>
            <Navbar/>
            <h1>My Works</h1>
        </>
    )
}


export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})
