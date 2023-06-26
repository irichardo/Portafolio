import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { QueryClientProvider, QueryClient } from "react-query";
import {useMemo} from 'react'
import { useRouter } from "next/router";

interface PropsDashboardApp {
    Component: NextComponentType<NextPageContext, any, any>;
    pageProps: any;
  }
  
export default function Blog({ Component, pageProps }: PropsDashboardApp) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client} >
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
