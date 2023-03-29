import { styled, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import Logo from "../../../../public/Logo.png"

const LogoStyle = styled("img")`
    border-radius: 50%;
`;

const LogoContainer = styled("div")(({theme})=>({
    "padding-top": theme.spacing(6),
    "padding-bottom": theme.spacing(2)
}));

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