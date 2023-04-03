import { useTheme } from '@mui/material/styles';
import { Grid, Theme, useMediaQuery } from "@mui/material";
import SocialMediaIcon from "./socialMediaIcon";

export default function SocialMedias(){
    const theme:Theme = useTheme()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return(
        <Grid container flexDirection="row" justifyContent="space-around" width={theme.spacing(40)} marginBottom={isDesktop?theme.spacing(4):0}>
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