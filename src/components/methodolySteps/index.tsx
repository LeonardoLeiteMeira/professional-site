import { Grid, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import MethodologyCard from "./subcomponents/methodologyCard";

export default function MethodologySteps(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('sm'));
    return(
        <Grid container direction={"row"} width={"100%"} justifyContent={"center"}>
            <MethodologyCard title={"1.Entendimento da necessidade"}/>                
            <MethodologyCard title={"2.Proposta de Solução"}/>                
            <MethodologyCard title={"3.Protótipo e testes"}/>                
            <MethodologyCard title={"4.Desenvolvimento Ágil"}/>                
            <MethodologyCard title={"5.Validação e Suporte"}/>                 
        </Grid>    
    );
}