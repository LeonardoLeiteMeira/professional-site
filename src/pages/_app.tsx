import '@/styles/globals.css'
import { lightTheme } from '@/themes/Light';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main >
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}


