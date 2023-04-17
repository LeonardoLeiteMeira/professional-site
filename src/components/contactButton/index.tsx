import { Button, Typography, styled, ButtonProps, useTheme} from "@mui/material";
import { TypographyProps } from "@mui/system";
import { useTranslation } from "next-i18next";
import CustomLink from "../customLink";

const ButtonStyle = styled(Button)<ButtonProps>(({theme, size})=>({
    width:"90vw",
    maxWidth:theme.spacing(size==="small"?15:40),
    borderRadius:"25px",
    backgroundColor:theme.palette.primary.main,
    color:"white",
    [theme.breakpoints.up("md")]:{
        borderRadius:size==="small"?"14px":"40px",
    }
}))

const ButtonTypographyStyle = styled(Typography)<TypographyProps>(({theme, fontSize})=>({
    fontSize:28,
    textTransform:"none",
    [theme.breakpoints.up("md")]:{
        fontSize:fontSize,
    }
}))

type Props = {
    size?:"small"|"large"
}

export default function ContactButton({size}:Props){
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <CustomLink href="/contact" >
            <ButtonStyle size={size}>
                <ButtonTypographyStyle variant="button" fontSize={size==="small"?18:44}>
                    {t("Contact")}
                </ButtonTypographyStyle>            
            </ButtonStyle>
        </CustomLink>
    )
}