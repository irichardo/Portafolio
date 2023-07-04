/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'context/contextProvider'
import { Alegreya, Inconsolata } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
const alegraya = Alegreya({ subsets: ['latin'], variable: '--font-alegraya' })
const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-inconsolata' })

export default function App ({ Component, pageProps }: AppProps) {
  return (
      <main className={`${alegraya.variable} ${inconsolata.variable} font-sans overflow-x-hidden`}>
        <Provider>
        <Navbar />
        <Component {...pageProps} />
        </Provider>
      </main>
  )
}
