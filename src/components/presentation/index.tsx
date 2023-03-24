import { Divider, styled, Theme, Typography,  TypographyProps} from "@mui/material";
import { css } from "@emotion/css";


import LogoComponent from "./logoComponent";
import { useTheme } from "@emotion/react";

const TypographyTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 60,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 45,
    },
}));

const TypographySubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
    [theme.breakpoints.up("md")]:{
        fontSize: 45,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 30,
    },
}));


export default function Presentation(){
    const theme:any = useTheme();
    const dividerStyle = css`
        width: 90vw;
        height: 2px;
        background-color: ${theme.palette.primary.main};
        align-self: center;
    `;
    return (
        <>
            <LogoComponent/>
            <TypographyTitle variant="h1">Leonardo Leite</TypographyTitle>
            <TypographySubtitle variant="h2">Software Engineer</TypographySubtitle>
            <div className={dividerStyle}/>
            {/* <Divider variant="middle"/> */}
        </>     
    )
}
