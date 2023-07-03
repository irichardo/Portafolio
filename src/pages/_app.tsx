/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import { Alegreya } from 'next/font/google'
const alegraya = Alegreya({ subsets: ['latin'], variable: '--font-alegraya', preload: true })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${alegraya.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
