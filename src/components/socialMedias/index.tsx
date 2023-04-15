import { useTheme } from '@mui/material/styles';
import { Grid, Theme, useMediaQuery } from "@mui/material";
import SocialMediaIcon from "./socialMediaIcon";

type Props = {
    size?:"small"|"large"
    align?:"center"|"start"|"end"
}

export default function SocialMedias({size, align="center"}:Props){
    const theme:Theme = useTheme()
    const isSmallScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    const smallIconSize = isSmallScreen?23:30
    const iconSize = size==="small"?smallIconSize:45
    const spacing = size==="small"?20:40

    return(
        <Grid container flexDirection="row" justifyContent={align} width={theme.spacing(spacing)} gap={4}>
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