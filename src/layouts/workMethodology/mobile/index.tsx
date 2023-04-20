import Icons from "@/assets/icons";
import FadeImage from "@/components/FadeImage";
import FadeText from "@/components/FadeText";
import ContactArea from "@/components/contactArea";
import CustomAppBar from "@/components/customAppBar";
import NavigationArrow from "@/components/navigationArrow";
import { Box, Grid, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function WorkMethodologyMobile(){
    const {t} = useTranslation()
    const theme = useTheme()
    const [page, setPage] = useState(1)
    
    const fontSize = 16
    const imageSize = 120

    const handleChangePage = (type:"up"|"down")=>{
        if(type==="up" && page<4){
            setPage(value=>value+1)
        }else if(type==="down" && page>1){
            setPage(value=>value-1)
        }
    }

    const page1and2 = (
        <Grid item container direction="column" xs={12} alignItems="center" gap={4} padding={theme.spacing(3)}>
            <FadeText textOne={t("How I work 2")} textTwo={t("How I work 1")} isTextOne={page===1} fontSize={fontSize}/>
            <FadeImage alt="test" size={imageSize} isImageOne={page===1} imageOne={Icons.IdeiaEmoji} imageTwo={Icons.ThinkingEmoji}/>
        </Grid>
    )

    const page3and4 = (
        <Grid item container direction="column" xs={12} alignItems="center" gap={4} padding={theme.spacing(3)}>
            {page===3?
                <>
                    <FadeText textOne="" textTwo={t("How I work 3")} isTextOne={page===3} fontSize={fontSize}/>
                    <FadeImage alt="test" size={imageSize} isImageOne={page===3} imageOne={Icons.Flutter} imageTwo={Icons.Cicle}/>
                </>:
                <Grid item container direction="column" xs={12} justifyContent={"space-around"} alignContent={"center"} alignItems={"center"} gap={4}>
                    <ContactArea fontSize={fontSize} iconSize={imageSize}/>
                </Grid>
            }
            
        </Grid>
    )

    return (
        <>
            <CustomAppBar title={t("How I work")}>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    height={"90vh"}
                    maxHeight={"85h"}
                >
                    <Grid item container flexGrow={1}>
                        {(page===1||page===2)?page1and2:page3and4}
                    </Grid>

                    <Box 
                        position="fixed"
                        bottom={theme.spacing(3)}
                        right={theme.spacing(3)}
                    >
                        <NavigationArrow
                            show={page!==1}
                            arrowOrientation="up"
                            onClick={()=>handleChangePage("down")}
                            text={t("Previous")}
                        />

                        <NavigationArrow
                            show={page!==4}
                            arrowOrientation="down"
                            onClick={()=>handleChangePage("up")}
                            text={t("Next")}
                        />
                    </Box>
                </Grid>
            </CustomAppBar>
        </>    
    )
}