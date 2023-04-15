import Icons from "@/assets/icons";
import SocialMedias from "../socialMedias";
import Image from "next/image";
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import ContactWithIcon from "./contactWithIcon";

export default function ContactList(){
    return (
        <>
            <Grid container flexDirection={"column"} gap={5} alignItems={"start"}>
                <SocialMedias align={"start"} size="small" />
                <Grid item container flexDirection={"column"} alignItems={"start"} gap={5}>

                    <ContactWithIcon
                        contact="+351 931921806"
                        icon={Icons.WhatsApp}
                        iconName="WhatsApp Icon"
                    />

                    <ContactWithIcon
                        contact="leonardo.leitemeira10@gmail.com"
                        icon={Icons.Email}
                        iconName="Email Icon"
                    />
                    
                </Grid>
            </Grid>
        </>
    )
}