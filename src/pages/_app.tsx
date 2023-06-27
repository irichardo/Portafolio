/* eslint-disable react/jsx-props-no-spreading */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
