import { Theme, styled, useMediaQuery } from "@mui/material";
import WorkMethodologyDesktop from "./desktop";
import WorkMethodologyMobile from "./mobile";

const StyledSection = styled("section")(()=>({
  backgroundColor:"#B5F0F0",
  height: "100vh",
  width: "100vw"
}))

export default function WorkMethodology() {
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
        <StyledSection>
          {isDesktop?<WorkMethodologyDesktop/>:<WorkMethodologyMobile/>}
       </StyledSection>  
    )
}