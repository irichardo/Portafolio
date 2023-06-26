/* eslint-disable react/jsx-props-no-spreading */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";
import {useMemo} from 'react'
import Blog from "./Blog/_app";

export default function App({ Component, pageProps }: AppProps) {
  const Router = useRouter();
  const blogPath = useMemo(()=>{
    return Router.pathname.startsWith('/Blog')},[Router.pathname])
  
  if(blogPath){
    return <Blog Component={Component} pageProps={...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
