import Head from 'next/head'
import Presentation from '@/components/presentation'
import ContactButton from '@/components/contactButton'
import NavigationLinks from '@/components/navigationLinks'
import SocialMedias from '@/components/socialMedias'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'

const Main = styled("main")`
  overflow: hidden;
  background: 
        linear-gradient(to bottom right, #FFFFFF, #87E6E6);
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Leonardo Leite</title>
        <meta name="description" content="Professional Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Main>
        <Grid display="flex" flexDirection="column" gap={2}>
          <Grid item>
            <Presentation/>
            <ContactButton/>
          </Grid>

          <Grid item display="flex" flexDirection="column" alignItems={'center'} gap={8}>
            <NavigationLinks/>
            <Grid item>
              <SocialMedias/>
            </Grid>
          </Grid>
        </Grid>
      </Main>
    </>
  )
}
