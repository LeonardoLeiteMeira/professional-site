import { Grid, styled, Typography,  TypographyProps } from "@mui/material";
import LogoComponent from "./logoComponent";
import { useTranslation } from 'next-i18next'
import Divider from "../divider";

const TypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 60,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 26,
    },
    color:theme.palette.primary.main,
}));

const TypographySubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 45,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 20,
    },
    color:theme.palette.primary.main,
}));

interface Props {
    hasDivider?:boolean
    textPosition?: "beside" | "below"
}


export default function Presentation({hasDivider=false, textPosition="below"}:Props){
    const {t} = useTranslation("common")
    
    return (
        <Grid container flexDirection={textPosition==="below"?"column":"row"} justifyContent={"center"} alignItems="center" wrap="nowrap">
            <Grid item >
                <LogoComponent/>
            </Grid>
            <Grid item container flexDirection={"column"} alignItems="center">
                {hasDivider&&textPosition==="below"?<Divider/>:<></>}

                <TypographyTitle variant="h1">Leonardo Leite</TypographyTitle>
                <TypographySubtitle variant="h2"align={"center"}>{t("Software Engineer")}</TypographySubtitle>

                {hasDivider&&textPosition==="beside"?<Divider/>:<></>}
            </Grid>
        </Grid>    
    )
}