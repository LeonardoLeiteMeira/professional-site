import { styled } from "@mui/material";
import Logo from "../../../assets/images/Logo.png"
import Image, { ImageProps } from 'next/image'

const LogoStyle = styled(Image)<ImageProps>(({theme})=>({
    borderRadius: "50%",
    width: 165,
    height: 165,
    [theme.breakpoints.up("md")]:{
        width: 300,
        height: 300,
    },
}))

const LogoContainer = styled("div")(({theme})=>({
    "paddingTop": theme.spacing(6),
    "paddingBottom": theme.spacing(2)
}));

export default function LogoComponent(){
    return (
        <LogoContainer>
            <LogoStyle src={Logo} alt="Foto" />
        </LogoContainer>
    )
}