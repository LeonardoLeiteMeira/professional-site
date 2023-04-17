import projectTechnologies from "./projectsTechnologies"

type Technology =  
    "Flutter"|
    "React"|
    "Python"|
    "C#"|
    "Node"|
    "MongoDB"|
    "Azure"|
    "Figma"|
    "AWS-S3"|
    "SQL"

interface PageLink{
  name:string
  link:string
}

const links:Array<PageLink> = [
  {
    name:"Work Experience",
    link:"/works"
  },
  {
    name:"Work Methodoly",
    link:"/workMethodology"
  },
  {
    name:"About",
    link:"/about"
  },
]

export {links, projectTechnologies}
export type { Technology, PageLink }