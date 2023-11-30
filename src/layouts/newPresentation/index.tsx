import CustomAppBar from "@/components/customAppBar"
import Divider from "@/components/divider"
import Navbar from "@/components/navbar"
import Presentation from "@/components/presentation"
import useHeight from "@/hooks/useHeight"
import { Grid, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material"

const GridContainer = styled(Grid)(()=>({
    width:"100vw",
    height:"100vh",
}))

export default function NewPresentationSection(){
    const isDesktop = useMediaQuery((theme:Theme)=> theme.breakpoints.up("md"))
    const theme = useTheme()
    const {isSmallHeight} = useHeight()

    return (
        <GridContainer item container flexDirection={"column"} wrap="nowrap" justifyContent="flex-start">
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
                <Grid item container width={isDesktop?"80vw":"100vw"} justifyContent="center">
                    <Typography variant="h2" align="center" fontSize={36}>Arquitetando soluções de software que transformam desafios de negócios em oportunidades!</Typography>
                </Grid>
            </Grid>
        </GridContainer>
    )
}