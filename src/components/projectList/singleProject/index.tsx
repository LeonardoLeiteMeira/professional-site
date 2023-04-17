import { Technology } from "@/assets/constants";
import Icons from "@/assets/icons";
import CustomLink from "@/components/customLink";
import { Grid, GridProps, Theme, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

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
}

export default function SingleProject({title, technologies}:Props){
    const iconSize = 30
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()
    
    const xsValue = isDesktop?6:12

    return (
        <Grid item xs={xsValue} container direction="column" justifyContent="center" alignItems="center" >
            <CustomLink href={"/works/project"}>
                <GridStyled item container width={isDesktop?"auto":"100vw"}  margin={theme.spacing(1)}>
                    <TitleStyled item container justifyContent={"center"}>
                        <Typography variant="subtitle2">{title}</Typography>
                    </TitleStyled>

                    <GridIconsStyled item container display={"flex"} flexDirection={"row"} gap={3} justifyContent={"center"}>
                        {technologies.map((item)=>(
                            <Image 
                                src={Icons[item]} 
                                alt={`${item} icon`}
                                width={iconSize} 
                                height={iconSize}

                                key={item}
                            /> 
                        ))}
                    </GridIconsStyled>
                </GridStyled>
            </CustomLink>
        </Grid>
    )
} 