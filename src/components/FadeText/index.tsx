import { Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props{
    isTextOne:boolean
    textOne:string
    textTwo:string
}

export default function FadeText({textOne, textTwo, isTextOne}:Props){

    const [isVisible, setIsVisible] = useState(true)
    const [text, setText] = useState(textOne)

    useEffect(()=>{
        setIsVisible(false)
    },[isTextOne])

    useEffect(()=>{
        setText(isTextOne?textTwo:textOne)
    },[textOne, textTwo])

    const handleExited = async () => {
        setTimeout(()=>{
            setText(isTextOne?textTwo:textOne)
            setIsVisible(true);
        },300)
    };

    return (
        <Fade in={isVisible} onExit={handleExited} timeout={300}>
            <Typography>{text}</Typography>
        </Fade>       
    )
}