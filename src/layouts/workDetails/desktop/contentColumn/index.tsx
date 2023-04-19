import FadeText from "@/components/FadeText";
import { Box, Grid, useTheme } from "@mui/material";

interface Props{
    title1:string
    title2:string

    text1:string
    text2:string

    isContentOne:boolean
}

export default function ContentColumn({title1,title2,text1,text2,isContentOne}:Props){
    const theme = useTheme()

    return (
        <Grid item container xs={6} flexDirection={"column"}>
            <Box>
                <FadeText textOne={title1} textTwo={title2} isTextOne={isContentOne} variant="h4"/>
            </Box>
            <Box marginTop={theme.spacing(5)}>
                <FadeText textOne={text1} textTwo={text2} isTextOne={isContentOne} variant="body1" fontSize={18}/>
            </Box>
        </Grid>  
    )
}