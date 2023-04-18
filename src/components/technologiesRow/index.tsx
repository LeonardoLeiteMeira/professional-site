import { Technology } from "@/assets/constants"
import Icons from "@/assets/icons";
import { Grid, GridProps, styled, useTheme } from "@mui/material";
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
    
    return (
        <GridIconsStyled item container flexDirection={"row"} gap={3} justifyContent={"center"} padding={theme.spacing(3)} maxWidth={"40vw"}>
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