import { Grid, Typography } from "@mui/material"
import ContactButton from "../contactButton"
import NavigationLinks from "../navigationLinks"
import Icons from "@/assets/icons"
import Image from "next/image"
import { useTranslation } from "next-i18next"

interface Props{
    fontSize:number
    iconSize:number
}

export default function ContactArea({fontSize, iconSize}:Props){
    const {t} = useTranslation()
    return (
        <>  
            <Grid item>
                <Image
                    alt="Memoji"
                    src={Icons.EmojiPC}
                    width={iconSize}
                    height={iconSize}
                />
            </Grid>

            <Grid item>
                <Typography variant="body2" fontSize={fontSize}>{t("Are you interested in my work? Get in touch:")}</Typography>
            </Grid>
            
            <Grid item>
                <ContactButton size="small"/>
            </Grid>
            
            <Grid item>
                <NavigationLinks type="Simple"/>
            </Grid>
        </>    
    )
}