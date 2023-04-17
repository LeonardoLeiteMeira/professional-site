import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import fs from 'fs'

export default function WorkDetails(){
    const router = useRouter()
    const { details:project } = router.query
    const {t} = useTranslation(project)
    
    return (
        <>
            <h1>WorkDetails</h1>    
            {project}
            <br/>
            {t("project name")}
            <br/>
            {t("my learnings")}
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common','project'])),
    }
  }
}

interface Path {
    params: {
        details: string;
    };
    locale: string;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }: GetStaticPathsContext) => {
  const files = fs.readdirSync('public/locales/en')
  const projectFiles = files.filter((value)=>value!=="common.json")

  projectFiles.forEach((item, index)=>{
    projectFiles[index] = item.split(".")[0]
  })
  
  const paths:Array<Path> = []

  locales?.forEach((locale)=>{
    const localePath = projectFiles.map((project) => ({ params: { details: project }, locale: locale}))
    paths.push(...localePath)
    
  })

  return { paths, fallback: false }
}