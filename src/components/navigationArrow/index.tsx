import { Grid, IconButton, Theme, Typography, useMediaQuery } from "@mui/material"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useEffect, useState } from "react";

interface Props{
    show:boolean
    text:string
    arrowOrientation:"up"|"down"
    onClick:() => void
}

export default function NavigationArrow({show, text, arrowOrientation, onClick}:Props){
    const [textState, setTextState] = useState(text)

    useEffect(()=>{
        setTextState(text)
    },[text])

    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    const isArrowUp = arrowOrientation==="up"

    return (
        <Grid item container direction={"row"} wrap="nowrap" width={"100%"} justifyContent={"end"} alignItems={"center"}>
            {show?<></>:
                <>
                    <Typography variant={isDesktop?"body1":"body2"}>{textState}</Typography>
                    <IconButton size="large" onClick={onClick}>
                        <ExpandCircleDownIcon sx={{transform:isArrowUp?'rotate(180deg)':"rotate(0deg)"}}/>
                    </IconButton>
                </>
            }
        </Grid>    
    )
}