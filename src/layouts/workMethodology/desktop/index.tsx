import FadeImage from "@/components/FadeImage";
import Navbar from "@/components/navbar";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Icons from "@/assets/icons";
import { useMemo, useState } from "react";
import FadeText from "@/components/FadeText";
import ContactArea from "@/components/contactArea";
import { useTranslation } from "next-i18next";
import NavigationArrow from "@/components/navigationArrow";

export default function WorkMethodologyDesktop(){
    const theme = useTheme()
    const {t} = useTranslation()

    const pageHeight = useMemo(()=>{
        let pageHeight = window.innerHeight
        return pageHeight
    },[])

    const [isPageOne, setIsPageOne] = useState(true)

    const handlePageChange = () =>{
        setIsPageOne(value=>!value)
    }

    const fontSize = pageHeight>750?18:14
    const imageSize = pageHeight>650?150:70

    const column2 = (
        <>
            {isPageOne?
                
                <Grid item container direction="column" xs={5} alignItems="center" gap={3}>
                    <FadeImage alt="test" size={imageSize} isImageOne={isPageOne} imageOne={Icons.Email} imageTwo={Icons.IdeiaEmoji}/>
                    <FadeText textOne="Text 1" textTwo={t("How I work 2")} isTextOne={isPageOne} fontSize={fontSize}/>
                </Grid>
                :<Grid item container direction="column" xs={5} justifyContent={"space-around"} alignContent={"center"}alignItems={"center"}>
                    <ContactArea fontSize={fontSize} iconSize={imageSize}/>
                </Grid>
            }
        </>
    )

    return (
        <>
            <Navbar/>
            <Grid container direction="column" height={"90vh"} xs={12} paddingLeft={theme.spacing(6)} paddingRight={theme.spacing(6)} paddingTop={theme.spacing(6)}>
                <Grid item container paddingBottom={theme.spacing(3)}>
                    <Typography variant="h3">{t("How I work")}</Typography>
                </Grid>

                <Grid item container
                    justifyContent="space-between"
                    flexGrow={1}
                    gap={1}
                >
                    <Grid item container direction="column" xs={5} alignItems="center" gap={3}> 
                        <FadeText textOne={t("How I work 3")+t("How I work 4")} textTwo={t("How I work 1")} isTextOne={isPageOne} fontSize={fontSize}/>
                        <FadeImage alt="test" size={imageSize} isImageOne={isPageOne} imageOne={Icons.Cicle} imageTwo={Icons.ThinkingEmoji}/>
                    </Grid>

                    {column2}
                </Grid>    

                <Box 
                    position="fixed"
                    bottom={theme.spacing(3)}
                    right={theme.spacing(3)}
                >
                    <NavigationArrow
                        show={true}
                        onClick={handlePageChange}
                        text={isPageOne?t("Next"):t("Previous")}
                        arrowOrientation={isPageOne?"down":"up"}
                    />
                </Box>
            </Grid>
        </>
    )
}