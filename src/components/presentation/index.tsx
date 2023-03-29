import {Grid, styled, Typography,  TypographyProps} from "@mui/material";

import LogoComponent from "./logoComponent";

const TypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 60,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 45,
    },
    color:theme.palette.primary.main,
    "paddingBottom": theme.spacing(2)
}));

const TypographySubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 45,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 30,
    },
    color:theme.palette.primary.main,
    "paddingBottom": theme.spacing(3)
}));

const Divider = styled("div")(({ theme }) => ({
    width: "90vw",
    maxWidth:theme.spacing(40),
    height: theme.spacing(0.25),
    backgroundColor: `${theme.palette.secondary.main}`    
}));


export default function Presentation(){
    return (
        <>
            <Grid container flexDirection={"column"} alignItems="center">
                <LogoComponent/>
                <TypographyTitle variant="h1">Leonardo Leite</TypographyTitle>
                <TypographySubtitle variant="h2">Software Engineer</TypographySubtitle>
                <Divider/>
            </Grid>
        </>     
    )
}
