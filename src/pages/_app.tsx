import '@/styles/globals.css'
import { lightTheme } from '@/themes/Light';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <main >
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}


export default appWithTranslation(App)