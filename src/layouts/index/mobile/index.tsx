import ContactButton from "@/components/contactButton";
import Divider from "@/components/divider";
import NavigationLinks from "@/components/navigationLinks";
import Presentation from "@/components/presentation";
import SocialMedias from "@/components/socialMedias";
import SwitchLanguage from "@/components/switchLanguage";
import { Box, Grid } from "@mui/material";


export default function IndexMobile(){
    return (
         <Grid display="flex" height={"100vh"} flexDirection="column" justifyContent="space-around">
          <Grid item>
            <Box width={"100vw"}>
              <SwitchLanguage/>
            </Box>
          </Grid>
          <Grid item container flexDirection={"column"} justifyContent={"center"} gap={5}>
            <Grid item>
              <Presentation/>
            </Grid>

            <Grid item display="flex" justifyContent={'center'}>
              <Divider/>
            </Grid>

            <Grid item>
              <ContactButton/>
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" gap={5}>
            <Grid item display="flex" justifyContent={'center'}>
              <NavigationLinks/>
            </Grid>

            <Grid item display="flex" justifyContent={'center'}>
              <SocialMedias/>
            </Grid>
            
          </Grid>
        </Grid>
    )
}