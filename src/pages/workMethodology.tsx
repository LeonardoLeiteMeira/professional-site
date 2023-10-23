import WorkMethodology from "@/layouts/workMethodology";
import { GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function WorkMethodologyPage(){
    return (
       <WorkMethodology/>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})