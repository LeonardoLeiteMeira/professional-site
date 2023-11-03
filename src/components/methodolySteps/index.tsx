import { Grid, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import MethodologyCard from "./subcomponents/methodologyCard";

export default function MethodologySteps(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('sm'));
    return(
        <Grid container direction={"row"} width={"100%"} justifyContent={"center"}>
            <MethodologyCard title={"1.Entendimento da necessidade"}/>                
            <MethodologyCard title={"2.Entendimento da necessidade"}/>                
            <MethodologyCard title={"3.Entendimento da necessidade"}/>                
            <MethodologyCard title={"4.Entendimento da necessidade"}/>                
            <MethodologyCard title={"5.Entendimento da necessidade"}/>                 
        </Grid>    
    );
}