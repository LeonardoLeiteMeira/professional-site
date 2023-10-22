import { Technology } from "."

interface ProjectTechnologies{
    title:string
    technologies:Array<Technology>

    //needs to be the same name of translaction file
    name:string
}

const projectTechnologies:Array<ProjectTechnologies> = [
    {
        title:"Data lake - Predictive maintenance",
        name:"datalake",
        technologies:["React", "Figma", "Python", "MongoDB"]
    },
    {
        title:"Financial Management App",
        name:"financialWithNotion",
        technologies:["Flutter", "Notion","Figma"]
    },
    {
        title:"JobPet - Professional's App",
        name:"jobPetApp",
        technologies:["Flutter", "Node", "Figma", "MongoDB"]
    },
    {
        title:"Resource optimization App",
        name:"resourceOptimizationApp",
        technologies:["Flutter", "Azure"]
    },
    {
        title:"Customer service system",
        name:"customerServiceSystem",
        technologies:["Flutter", "React", "Node", "SQL", "AWS-S3"]
    },
    {
        title:"Document management App",
        name:"documentManagementApp",
        technologies:["Flutter","Figma"]
    },
    {
        title:"Data collection system",
        name:"dataCollectionSystem",
        technologies:["Flutter", "React", "C#","SQL","Azure"]
    },
    {
        title:"This portfolio",
        name:"portfolio",
        technologies:["React", "Figma"]
    }
]

export default projectTechnologies
export type {ProjectTechnologies}

