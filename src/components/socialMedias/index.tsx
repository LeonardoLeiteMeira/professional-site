import { useTheme } from '@mui/material/styles';
import { Grid, Theme } from "@mui/material";
import SocialMediaIcon from "./socialMediaIcon";

type Props = {
    size?:"small"|"large"
}

export default function SocialMedias({size}:Props){
    const theme:Theme = useTheme()
    const iconSize = size==="small"?30:45
    const spacing = size==="small"?20:40
    return(
        <Grid container flexDirection="row" justifyContent="space-around" width={theme.spacing(spacing)}>
            <SocialMediaIcon
                socialMedia="GitHub"
                iconSize={iconSize}
            />
            <SocialMediaIcon
                socialMedia="Linkedin"
                iconSize={iconSize}
            />
            <SocialMediaIcon
                socialMedia="Instagram"
                iconSize={iconSize}
            /> 
        </Grid>
    )
}