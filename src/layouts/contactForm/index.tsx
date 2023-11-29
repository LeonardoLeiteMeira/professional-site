import ContactList from "@/components/contactList";
import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function ContactForm(){
    const {t} = useTranslation()
    const theme = useTheme()
    return (
        <Grid item container xs={12} padding={theme.spacing(5)}>
            <Grid item container xs={12}>
                <Typography>{t("Contact")}</Typography>
                <Typography>Menssagem simples incentivando a entrar em contato</Typography>
            </Grid>
 
            <Grid item container xs={12} gap={2}>
                <Grid item xs={12} md={5.6}>
                    <TextField
                        fullWidth 
                        id="name"
                        label="Name"
                        variant="outlined"
                        
                    />
                </Grid>
                <Grid item xs={12} md={5.6}>
                    <TextField
                        fullWidth 
                        id="contact"
                        label="Contact (Phone, email, etc)" 
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        id="message" 
                        label="Your Message" 
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="message" 
                        label="1+1=" 
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary"  
                    >
                        Enviar    
                    </Button>
                </Grid>
            </Grid>
        </Grid>    
    )
}



/* <Typography variant="body1" fontSize={24}>
    {t("You can get in contact")}
</Typography> */