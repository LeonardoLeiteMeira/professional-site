import Head from 'next/head'
import Presentation from '@/components/presentation'
import ContactButton from '@/components/contactButton'
import NavigationLinks from '@/components/navigationLinks'
import SocialMedias from '@/components/socialMedias'
import { Box, Grid, styled,useTheme } from '@mui/material'
import SwitchLanguage from '@/components/switchLanguage'

const Main = styled("main")`
  overflow: hidden;
  background: 
        linear-gradient(to bottom right, #FFFFFF, #87E6E6);
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

const Divider = styled("div")(({ theme }) => ({
    width: "90vw",
    maxWidth:theme.spacing(40),
    height: theme.spacing(0.25),
    backgroundColor: `${theme.palette.secondary.main}`    
}));

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Leonardo Leite</title>
        <meta name="description" content="Professional Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Main>
        <Grid display="flex" height={"100vh"} flexDirection="column" justifyContent="space-around">
          <Grid item>
            <Box width={"100vw"}>
              <SwitchLanguage onChange={(language)=>console.log(language)} selectedLanguage='Portuguese'/>
            </Box>
            <Presentation/>
          </Grid>

          <Grid item display="flex" flexDirection="column" alignItems={'center'}>
            <Divider/>
          </Grid>

          <Grid item>
            <ContactButton/>
          </Grid>

          <Grid item display="flex" flexDirection="column" alignItems={'center'} gap={8}>
            <NavigationLinks/>
          </Grid>

          <Grid item display="flex" flexDirection="column" alignItems={'center'}>
            <SocialMedias/>
          </Grid>

        </Grid>
      </Main>
    </>
  )
}
