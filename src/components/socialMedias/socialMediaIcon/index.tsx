import { useState } from "react"
import Image from "next/image";
import Link from "next/link"
import Icons from "@/assets/icons";

type Props = {
    socialMedia:"Linkedin"|"GitHub"|"Instagram"
    iconSize:23|30|45
}

export default function SocialMediaIcon({socialMedia, iconSize}:Props){
    const getInitialIcon = ()=>{
        switch (socialMedia) {
            case "Linkedin":
                return Icons.Linkedin;
            case "GitHub":
                return Icons.GitHub;
            case "Instagram":
                return Icons.Instagram;
        }
    }

    const changeIconHandle = ()=>{
        switch (socialMedia) {
            case "Linkedin":
                setIcon(icon===Icons.Linkedin?Icons.LinkedinSelected:Icons.Linkedin)
                break;
                
            case "GitHub":
                setIcon(icon===Icons.GitHub?Icons.GitHubSelected:Icons.GitHub)
                break;    

            case "Instagram":
                setIcon(icon===Icons.Instagram?Icons.InstagramSelected:Icons.Instagram)
                break;   
        }
    }

    const getLink = ()=>{
        switch (socialMedia) {
            case "Linkedin":
                return "https://www.linkedin.com/in/leonardoleitedigital/"
                
            case "GitHub":
                return "https://github.com/LeonardoLeiteMeira"  

            case "Instagram":
                return "https://www.instagram.com/leo.leite_m/" 
        }
    }

    const [icon, setIcon] = useState(getInitialIcon())
    const logoSize = iconSize;

    return (
        <Link href={getLink()} target="_blank" rel="noopener noreferrer">
            <Image 
                src={icon} 
                alt={`${socialMedia.toString()} icon`}
                width={logoSize} 
                height={logoSize} 
                
                onMouseEnter={()=>changeIconHandle()}
                onMouseLeave={()=>changeIconHandle()}
            />    
        </Link>
    )
}