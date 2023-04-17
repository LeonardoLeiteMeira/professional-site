import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import SingleProject from "./singleProject";

export default function ProjectList(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    return (
        <Grid container 
            alignItems={"center"} 
            justifyContent={"center"} 
            marginBottom={theme.spacing(4)} 
            width={isDesktop?"50vw":"100vw"}

            columns={2}
            direction={"row"}  
        >
            <SingleProject
                title="Project Title 1"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 2"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 3"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 4"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 5"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 6"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 7"
                technologies={["Flutter","AWS-S3","Figma"]}
            />

            <SingleProject
                title="Project Title 8"
                technologies={["Flutter","AWS-S3","Figma"]}
            />
        </Grid>    
    )
}