import linkedin from "../../../assets/svg/linkedinDefault.svg"
import linkedinSelected from "../../../assets/svg/linkedingSelected.svg"
import gitHub from "../../../assets/svg/githubDefault.svg"
import gitHubSelected from "../../../assets/svg/githubSelected.svg"
import instagram from "../../../assets/svg/instagramDefault.svg"
import instagramSelected from "../../../assets/svg/instagramSelected.svg"

import { useState } from "react"
import Image from "next/image";

type Props = {
    socialMedia:"Linkedin"|"GitHub"|"Instagram"
}

export default function SocialMediaIcon({socialMedia}:Props){
    const getInitialIcon = ()=>{
        switch (socialMedia) {
            case "Linkedin":
                return linkedin;
            case "GitHub":
                return gitHub;
            case "Instagram":
                return instagram;
        }
    }

    const changeIconHandle = ()=>{
        switch (socialMedia) {
            case "Linkedin":
                setIcon(icon===linkedin?linkedinSelected:linkedin)
                break;
                
            case "GitHub":
                setIcon(icon===gitHub?gitHubSelected:gitHub)
                break;    

            case "Instagram":
                setIcon(icon===instagram?instagramSelected:instagram)
                break;   
        }
    }

    const [icon, setIcon] = useState(getInitialIcon())
    const logoSize = 45;

    return (
        <Image 
            src={icon} 
            alt={`${socialMedia.toString()} icon`}
            width={logoSize} 
            height={logoSize} 
            
            onMouseEnter={()=>changeIconHandle()}
            onMouseLeave={()=>changeIconHandle()}
        />    
    )
}