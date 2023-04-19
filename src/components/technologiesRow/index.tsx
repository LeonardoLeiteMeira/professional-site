import { Technology } from "@/assets/constants"
import Icons from "@/assets/icons";
import { Grid, GridProps, Theme, styled, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const GridIconsStyled  = styled(Grid)<GridProps>(()=>({
    alignContent:"center",
    height:"60%"
}))

interface Props{
    technologies:Array<Technology>
}

export default function TechnologiesRow({technologies}:Props){
    const theme = useTheme()
    const iconSize = 30
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    
    return (
        <GridIconsStyled item container flexDirection={"row"} maxWidth={isDesktop?"40vw":"auto"} gap={3} justifySelf={"center"} justifyContent={"center"} wrap="nowrap">
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
    )
}