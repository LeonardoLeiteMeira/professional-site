import ProjectList from "@/components/projectList";
import { styled } from "@mui/material";
import CustomAppBar from "@/components/customAppBar";
import Description from "../description";

const Section = styled("section")(({theme})=>({
  with:"100vw",
  height:"100%",
  paddingTop:theme.spacing(2)
}))

export default function WorksMobile(){

    return (
        <CustomAppBar title="My Works">
            <Section >
                <Description/>
                <ProjectList/>
            </Section>
        </CustomAppBar>
    )
}