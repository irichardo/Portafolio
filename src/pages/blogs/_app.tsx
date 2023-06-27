import { NextComponentType, NextPageContext } from "next";

interface PropsDashboardApp {
    Component: NextComponentType<NextPageContext, any, any>;
    pageProps: any;
  }
  
export default function Blog({ Component, pageProps }: PropsDashboardApp) {
  return (
      <Component {...pageProps} />
  );
}
