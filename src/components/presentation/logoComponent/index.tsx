import { css, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import Logo from "../../../../public/Logo.png"
import styled from '@emotion/styled'

const LogoStyle = styled("img")`
    border-radius: 50%;
`;

const LogoContainer = styled("div")`
    padding-top: 50px;
`;

export default function LogoComponent(){
     const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const logoSize = useMemo(()=>{
        if(matches){
            return 300
        }else{
            return 165
        }
    },[matches])


    return (
        <LogoContainer>
            <LogoStyle src={Logo.src} alt="Foto" width={logoSize} height={logoSize}/>
        </LogoContainer>
    )
}