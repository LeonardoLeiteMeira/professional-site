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

const GridIconsStyled  = styled(Grid)<GridProps>(()=>({
    alignContent:"center",
    height:"60%"
}))

interface Props{
    title:string
    technologies:Array<Technology>
    name:string
}

export default function SingleProject({title, technologies, name}:Props){
    
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()

    const xsValue = isDesktop?6:12

    return (
        <Grid item container xs={xsValue} direction="column" justifyContent="center" alignItems="center" width={"100%"}>
            <CustomLink href={`/works/${name}`}>
                <GridStyled item container width={isDesktop?"23vw":"100vw"} margin={theme.spacing(1)}>
                    <TitleStyled item container justifyContent={"center"}>
                        <Typography variant="subtitle2">{title}</Typography>
                    </TitleStyled>
                    <TechnologiesRow technologies={technologies}/>
                </GridStyled>
            </CustomLink>
        </Grid>
    )
} 