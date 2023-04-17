import { Technology } from "."

interface ProjectTechnologies{
    title:string
    name:string
    technologies:Array<Technology>
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
        technologies:["React", "Node", "SQL", "AWS-S3"]
    },
    {
        title:"Document management App",
        name:"documentManagementApp",
        technologies:["Flutter","Figma"]
    },
    {
        title:"Data collection system",
        name:"dataCollectionSystem",
        technologies:["React", "Flutter", "C#","SQL","Azure"]
    },
    {
        title:"This portfolio",
        name:"portfolio",
        technologies:["React", "Figma"]
    }
]

export default projectTechnologies














