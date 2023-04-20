import FadeText from "@/components/FadeText";
import { Box, Grid, Theme, useMediaQuery, useTheme } from "@mui/material";

interface Props{
    title1:string
    title2:string

    text1:string
    text2:string

    isContentOne:boolean
}

export default function ContentColumn({title1,title2,text1,text2,isContentOne}:Props){
    const theme = useTheme()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <Grid item container xs={isDesktop?6:12} alignContent={"start"} flexDirection={"column"} >
            <Box>
                <FadeText textOne={title1} textTwo={title2} isTextOne={isContentOne} variant="h4" fontSize={23}/>
            </Box>
            <Box marginTop={theme.spacing(3)}>
                <FadeText textOne={text1} textTwo={text2} isTextOne={isContentOne} variant="body1" fontSize={16}/>
            </Box>
        </Grid>  
    )
}