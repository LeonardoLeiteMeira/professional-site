import { useMediaQuery, Theme } from "@mui/material";
import ProjectListMobile from "./mobile";
import ProjectListDesktop from "./desktop";

export default function ProjectList(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
    <>
        {isDesktop?<ProjectListDesktop/>:<ProjectListMobile/>}
    </>    
    )
}