import { Technology } from "@/assets/constants";
import CustomLink from "@/components/customLink";
import TechnologiesRow from "@/components/technologiesRow";
import { Grid, GridProps, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material";

const GridStyled = styled(Grid)<GridProps>(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    height:theme.spacing(10),
    borderRadius:theme.spacing(1.5),
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)",
    maxWidth:"90vw",
}))

const TitleStyled  = styled(Grid)<GridProps>(()=>({
    alignContent:"center",
    height:"40%",
}))


interface Props{
    title:string
    technologies:Array<Technology>
    name:string
}

export default function SingleProject({title, technologies, name}:Props){
    const isUpSm = useMediaQuery((theme:Theme) => theme.breakpoints.up('sm'));
    const isUpMd = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    const getCardWidth = ()=>{
        let cardWidth = ""
        if(isUpMd){
            cardWidth = "45vw"
        }else if(isUpSm){
            cardWidth = "90vw"
        }else{
            cardWidth = "100vw"
        }
        return cardWidth
    }


    return (
        <Grid item container sm={6} md={6} direction="column" justifyContent="center" alignItems="center" width={"100%"}>
            <CustomLink href={`/works/${name}`}>
                <GridStyled item container 
                    xs={12} sm={6}
                    justifyContent={"center"}
                    alignContent={"center"}
                    width={getCardWidth()}
                    margin={theme.spacing(1)}
                >
                    <TitleStyled item container justifyContent={"center"} marginBottom={theme.spacing(1)}>
                        <Typography variant="subtitle2" fontSize={12}>{title}</Typography>
                    </TitleStyled>
                    <TechnologiesRow technologies={technologies}/>
                </GridStyled>
            </CustomLink>
        </Grid>
    )
} 