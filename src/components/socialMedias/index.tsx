import { useTheme } from '@mui/material/styles';
import { Grid, Theme } from "@mui/material";
import SocialMediaIcon from "./socialMediaIcon";

export default function SocialMedias(){
    const theme:Theme = useTheme()

    return(
        <Grid container flexDirection="row" justifyContent="space-around" width={theme.spacing(40)}>
            
            <SocialMediaIcon
                socialMedia="GitHub"
            />
            <SocialMediaIcon
                socialMedia="Linkedin"
            />
            <SocialMediaIcon
                socialMedia="Instagram"
            /> 
        </Grid>
    )
}