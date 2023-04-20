import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props{
    isImageOne:boolean
    alt:string
    imageOne:string
    imageTwo:string
    size:number
}

export default function FadeImage({isImageOne, alt, imageOne, imageTwo, size}:Props){

    const [isVisible, setIsVisible] = useState(true)
    const [imagem, setImage] = useState(imageOne)

    useEffect(()=>{
        setIsVisible(false)
    },[isImageOne])

    useEffect(()=>{
        setImage(isImageOne?imageTwo:imageOne)
    },[imageOne, imageTwo])

    const handleExited = async () => {
        setTimeout(()=>{
            setImage(isImageOne?imageTwo:imageOne)
            setIsVisible(true);
        },300)
    };

    return (
        <Fade in={isVisible} onExit={handleExited} timeout={300}>
                <Image 
                    src={imagem} 
                    alt={alt}
                    width={size} 
                    height={size}
                />
        </Fade>       
    )
}