import { Grid, GridProps, Theme, styled, useMediaQuery } from "@mui/material"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import ProjectDetailsDesktop from "@/layouts/workDetails/desktop"
import ProjectDetailsMobile from "@/layouts/workDetails/mobile"
import { projectTechnologies } from "@/assets/constants"
import { useRouter } from "next/router"
import fs from 'fs'

const StyledGrid = styled(Grid)<GridProps>(()=>({
  backgroundColor:"#91E8E8",
  width:"100vw",
  height:"100vh"
}))

interface Path {
    params: {
        details: string;
    };
    locale: string;
}

export default function WorkDetails(){
    const router = useRouter()
    const { details:projectName } = router.query
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const project = projectTechnologies.find((project)=> project.name===projectName)!

    return (
        <StyledGrid container flexDirection={"column"} width={"100vw"} height={"100vh"}>
            {isDesktop?
                <ProjectDetailsDesktop project={project}/>
                :<ProjectDetailsMobile project={project}/>}
        </StyledGrid>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const files = fs.readdirSync('public/locales/en')

  files.forEach((item, index)=>{
    files[index] = item.split(".")[0]
  })
  
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', files)),
    }
  }
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