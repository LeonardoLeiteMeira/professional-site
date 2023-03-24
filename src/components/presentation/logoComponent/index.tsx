import { useMediaQuery, useTheme } from "@mui/material";
import { useMemo } from "react";
import Logo from "../../../assets/Logo.png";
import { css } from '@emotion/css';

const logoStyle = css`
    border-radius: 50%;
`;

const logoContainer = css`
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
        <div className={logoContainer}>
            <img className={logoStyle} src={Logo} alt="Foto" width={logoSize} height={logoSize}/>
        </div>
    )
}