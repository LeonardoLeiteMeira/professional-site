import { Theme, useMediaQuery } from "@mui/material";
import ProjectDetailsDesktop from "./desktop";
import ProjectDetailsMobile from "./mobile";

interface Props{
    project:string
}

export default function ProjectDetails({project}:Props){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <>
            <h1>Detalhes</h1>
            {isDesktop?
                <ProjectDetailsDesktop project={project}/>
                :<ProjectDetailsMobile project={project}/>}
        </>
    )
}