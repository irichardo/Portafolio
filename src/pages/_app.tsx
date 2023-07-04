/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import { Alegreya, Inconsolata } from 'next/font/google'
const alegraya = Alegreya({ subsets: ['latin'], variable: '--font-alegraya' })
const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-inconsolata' })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${alegraya.variable} ${inconsolata.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
