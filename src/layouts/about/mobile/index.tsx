import CustomAppBar from "@/components/customAppBar";
import NavigationArrow from "@/components/navigationArrow";
import { Box, Fade, Grid, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FC, useEffect, useState } from "react";
import AboutPresentation from "../pages/presentation";
import AboutNow from "../pages/now";
import AboutContact from "../pages/contact";
import React from "react";
import AboutDiscipline from "../pages/discipline";
import AboutFreeTime from "../pages/freeTime";

export default function AboutMobile(){
    const fadeTime = 300
    const {t} = useTranslation()
    const theme = useTheme()
    const totalPages = 5
    const [initFade, setInitFade] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    
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
        1: AboutPresentation,
        2: AboutNow,
        3: AboutFreeTime,
        4: AboutDiscipline,
        5: AboutContact,
    };

    const PageToRender = pageComponents[pageNumber];

    return (
            <CustomAppBar title={t("About me")}>

                <Grid 
                    container
                    direction="column" 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Fade in={initFade} onExit={handleExited}>
                        <Grid container width={"100vw"} height={"100vh"}>
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
                            arrowOrientation="up"
                            show={true}
                            text={t("Next")}
                        />
                    </Box>
                </Grid>

            </CustomAppBar> 
    )
}