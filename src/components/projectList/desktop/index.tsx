import { Grid } from "@mui/material";
import SingleProject from "../singleProject";

export default function ProjectListDesktop(){
    return (
        <>
            <Grid container flexDirection={"row"} gap={1} wrap={"nowrap"} alignItems={"center"} width="100%">

                <Grid item container flexDirection={"column"} gap={2}>
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
                </Grid>

                <Grid item container flexDirection={"column"} gap={2}>
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

            </Grid>    
        </>    
    )
}