import Icons from "@/assets/icons";
import SocialMedias from "../socialMedias";
import Link from "next/link"
import { Grid } from "@mui/material";
import ContactWithIcon from "./contactWithIcon";

export default function ContactList(){
    return (
        <>
            <Grid container flexDirection={"column"} gap={5} alignItems={"start"}>
                <SocialMedias align={"start"} size="small" />
                <Grid item container flexDirection={"column"} alignItems={"start"} gap={5}>
                    <Link href={"https://wa.me/351931921806"} target="_blank" rel="noopener noreferrer">
                        <ContactWithIcon
                            contact="+351 931921806"
                            icon={Icons.WhatsApp}
                            iconName="WhatsApp Icon"
                        />
                    </Link>

                    <Link href="mailto:leonardo.leitemeira10@gmail.com" target="_blank" rel="noopener noreferrer">
                        <ContactWithIcon
                            contact="leonardo.leitemeira10@gmail.com"
                            icon={Icons.Email}
                            iconName="Email Icon"
                        />
                    </Link>
                    
                </Grid>
            </Grid>
        </>
    )
}