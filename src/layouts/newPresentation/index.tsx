import CustomAppBar from "@/components/customAppBar"
import Divider from "@/components/divider"
import Navbar from "@/components/navbar"
import Presentation from "@/components/presentation"
import useHeight from "@/hooks/useHeight"
import { Box, Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"
import { use, useEffect, useState } from "react"

const GridContainer = styled(Grid)(()=>({
    width:"100vw",
    height:"100%",
}))

export default function NewPresentationSection(){
    const isDesktop = useMediaQuery((theme:Theme)=> theme.breakpoints.up("md"))
    const theme = useTheme()
    const {isSmallHeight} = useHeight()

    return (
        <GridContainer item container flexDirection={"column"} wrap="nowrap" justifyContent="flex-start">
            {isDesktop?<Navbar/>:<CustomAppBar children={undefined} title={"Leonardo Leite - Software Engineer"}/>}
            <Grid item container 
                direction={"column"} 
                width={"100vw"} 
                alignItems={"center"} justifyContent="center"
                gap={isSmallHeight?4:10}
            >
                <Grid item container width={isDesktop?"50vw":"100vw"}> 
                    <Presentation/>
                </Grid>
                
                <Divider/>
                <Grid item container width={isDesktop?"50vw":"100vw"} maxWidth={theme.spacing(50)} justifyContent="center">
                    <Typography variant="h2" align="center" fontSize={36}>Entregando solucoes de software que geram resultados</Typography>
                </Grid>
            </Grid>
        </GridContainer>
    )
}