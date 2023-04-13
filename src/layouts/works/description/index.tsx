import { Theme, Typography, TypographyProps, styled, useMediaQuery } from "@mui/material"
import { useTranslation } from "next-i18next";

const BodyText = styled(Typography)<TypographyProps>(({theme})=>({
    marginLeft:theme.spacing(4),
    marginRight:theme.spacing(4),
}))

export default function Description(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const {t} = useTranslation("common")
    return (
        <>
            <BodyText variant="body1" align="justify">
                {t("Work Experience Description1")}
            </BodyText>
            <br/>
            <BodyText variant="body1" align="justify">
                {t("Work Experience Description2")}
                {t(isDesktop?"Click to see details:":"Touch to see details:")}
            </BodyText>
            <br/>  
        </>
    )
}