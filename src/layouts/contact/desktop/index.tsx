import ContactList from "@/components/contactList";
import Navbar from "@/components/navbar";
import NavigationLinks from "@/components/navigationLinks";
import Presentation from "@/components/presentation";
import { Grid, Typography, styled } from "@mui/material";
import { useTranslation } from "next-i18next";



export default function ContactDesktop(){
    const {t} = useTranslation()
    
    return (
        <>
            <Navbar/>
            <Grid container display={"flex"} flexDirection={"row"} height={"90vh"} wrap="nowrap">
                <Grid item container width={"50%"} height={"90vh"}>
                    <Presentation hasDivider={true}/>
                </Grid>

                <Grid item container width={"50%"} flexDirection={"column"} justifyContent={"center"}>
                    <Grid item container flexDirection={"column"}gap={5}> 
                        <Typography variant="body1" fontSize={24}>
                            {t("You can get in contact")}
                        </Typography>
                        <ContactList/>
                        <NavigationLinks type="Simple"/>
                    </Grid>
                </Grid>
            </Grid>
        </>     
    )
}