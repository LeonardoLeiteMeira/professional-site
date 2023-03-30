import { Grid } from "@mui/material";
import SocialMediaIcon from "./socialMediaIcon";

export default function SocialMedias(){

    return(
        <Grid container flexDirection="row" justifyContent="space-around" >
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