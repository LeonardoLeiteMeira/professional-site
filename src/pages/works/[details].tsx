import { GetStaticPaths, GetStaticProps } from "next"
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
            {t("name")}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('public/locales/en')
  const projectFiles = files.filter((value)=>value!=="common.json")

  projectFiles.forEach((item, index)=>{
    projectFiles[index] = item.split(".")[0]
  })
  
  const paths = projectFiles.map((project) => ({ params: { details: project } }))
  
  return { paths, fallback: false }
}