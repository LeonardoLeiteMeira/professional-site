import { styled } from "@mui/material";
import Logo from "../../../assets/images/Logo.png"
import Image, { ImageProps } from 'next/image'

const imgSize = 145

const LogoStyle = styled(Image)<ImageProps>(()=>({
    borderRadius: "50%",
    width: imgSize,
    height: imgSize,
}))

const LogoContainer = styled("div")(({theme})=>({
    "paddingTop": theme.spacing(2),
    "paddingBottom": theme.spacing(2)
}));

export default function LogoComponent(){
    return (
        <LogoContainer>
            <LogoStyle src={Logo} alt="Foto" />
        </LogoContainer>
    )
}