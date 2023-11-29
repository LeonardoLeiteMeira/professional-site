import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import SingleProject from "./singleProject";
import { projectTechnologies } from "@/assets/constants";

export default function ProjectList(){
    const theme = useTheme()

    return (
        <Grid container 
            alignItems={"center"} 
            justifyContent={"center"} 
            marginBottom={theme.spacing(4)} 
            columns={2}
            direction={"row"}  
        >
            {projectTechnologies.map((project)=>(
                <SingleProject
                    title={project.title}
                    technologies={project.technologies}
                    name={project.name}

                    key={project.name}
                />
            ))}
        </Grid>    
    )
}