import { Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

interface Props{
    icon:any
    contact:string
    iconName:string
}

export default function ContactWithIcon({icon, contact, iconName}:Props){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const isSmallScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    const iconSize = isSmallScreen?23:30

    const contactFont = isDesktop?18: (isSmallScreen?12:14)
    
    return (
        <Grid item container flexDirection={"row"} justifyContent={"start"} gap={1.5} alignItems={"center"}>
            <Grid item>
                <Image 
                    src={icon} 
                    alt={iconName}
                    width={iconSize} 
                    height={iconSize}
                />
            </Grid>

            <Grid item>
                <Typography variant={"body2"} fontSize={contactFont}>
                    {contact}
                </Typography> 
            </Grid>
        </Grid>
    )
}