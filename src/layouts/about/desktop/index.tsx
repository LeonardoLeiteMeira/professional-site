import Navbar from "@/components/navbar";
import { Box, Fade, Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import AboutContactDesktop from "../pages/contact/desktop";
import AboutPresentationAndNow from "./presentationAndNow";
import NavigationArrow from "@/components/navigationArrow";
import FreeTimeAndDiscipline from "./freeTimeAndDiscipline";
import { FC, useState } from "react";

export default function AboutDesktop(){
    const theme = useTheme()
    const {t} = useTranslation()
    const fadeTime = 300
    const [pageNumber, setPageNumber] = useState(1)
    const totalPages = 3
    const [initFade, setInitFade] = useState(true)

    const handleExited = async () => {
        setTimeout(()=>{
            setInitFade(true);
        },fadeTime)
    };

    const changePage = (newPageNum:number)=>{
        setInitFade(false);
        setTimeout(()=>{
            setPageNumber(newPageNum)  
            setInitFade(true);
        },fadeTime)
    }

    const handlePageChange = (type:"up"|"down") => {
        if(type === "up" && pageNumber < totalPages){
            changePage(pageNumber+1)
        }else if(type==="down" && pageNumber>1){
            changePage(pageNumber-1)
        }
    }

    const pageComponents:Record<number, FC>  = {
        1: AboutPresentationAndNow,
        2: FreeTimeAndDiscipline,
        3: AboutContactDesktop,
    };

    const PageToRender = pageComponents[pageNumber];

    return (
       <>
            <Navbar/>
            <Grid container direction="column" >
                <Grid item paddingLeft={theme.spacing(3)} paddingTop={theme.spacing(6)}>
                    <Typography variant="h3">{t("About me")}</Typography>
                </Grid>

                <Fade in={initFade} onExit={handleExited}>
                    <Grid container width={"100vw"} height={"50vh"}>
                        <PageToRender />
                    </Grid>
                </Fade>
            
                <Box 
                    position="fixed"
                    bottom={theme.spacing(3)}
                    right={theme.spacing(3)}
                >
                    <NavigationArrow
                            onClick={()=>handlePageChange("down")}
                            arrowOrientation="up"
                            show={true}
                            text={t("Previous")}
                        />
                        <NavigationArrow
                            onClick={()=>handlePageChange("up")}
                            arrowOrientation="down"
                            show={true}
                            text={t("Next")}
                        />
                </Box>
            </Grid>
       </> 
    )
}