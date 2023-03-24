import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import Logo from "../../assets/Logo.png";

export default function Presentation(){
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
        <>
            <img src={Logo} alt="Foto" width={logoSize} height={logoSize}/>
            <h1>Leonardo Leite Site</h1>
            <p>Softaware Engineer</p>
            <Divider variant="middle"/>
        </>    
    )
}