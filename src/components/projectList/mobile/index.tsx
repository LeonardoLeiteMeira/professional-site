import { Box, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import SingleProject from "../singleProject";

export default function ProjectListMobile(){
    const theme = useTheme()
    return (
        <Box>
            <Grid container flexDirection={"column"} gap={2}  alignItems={"center"} marginBottom={theme.spacing(2)}>
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

        </Box>
    )
}