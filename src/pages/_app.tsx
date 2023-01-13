import '@/styles/globals.css'
import '@fontsource/public-sans';
import { CssVarsProvider } from '@mui/joy';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider>
      <Component {...pageProps} />
    </CssVarsProvider>
  )
}
