import {Grid, styled, Typography,  TypographyProps} from "@mui/material";

import LogoComponent from "./logoComponent";

const TypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 60,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 40,
    },
    color:theme.palette.primary.main,
}));

const TypographySubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 45,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 28,
    },
    color:theme.palette.primary.main,
}));


export default function Presentation(){
    return (
        <>
            <Grid container flexDirection={"column"} alignItems="center">
                <LogoComponent/>
                <TypographyTitle variant="h1">Leonardo Leite</TypographyTitle>
                <TypographySubtitle variant="h2">Software Engineer</TypographySubtitle>
            </Grid>
        </>     
    )
}
