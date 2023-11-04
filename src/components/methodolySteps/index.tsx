import { Grid, Theme, Typography, styled, useMediaQuery } from "@mui/material";
import MethodologyCard from "./subcomponents/methodologyCard";
import { colors } from "@/assets/constants";

export default function MethodologySteps(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('sm'));
    return(
        <Grid container direction={"row"} width={"100%"} justifyContent={"center"}>
            <MethodologyCard title={"1.Entendimento da necessidade"} color={colors[0]}/>                
            <MethodologyCard title={"2.Proposta de Solução"} color={colors[1]}/>                
            <MethodologyCard title={"3.Protótipo e testes"} color={colors[2]}/>                
            <MethodologyCard title={"4.Desenvolvimento Ágil"} color={colors[3]}/>                
            <MethodologyCard title={"5.Validação e Suporte"} color={colors[4]}/>                 
        </Grid>    
    );
}