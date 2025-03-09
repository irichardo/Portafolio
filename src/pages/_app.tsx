/* eslint-disable react/jsx-props-no-spreading */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/context/contextProvider";
import {
  Alegreya,
  Inconsolata,
  Chakra_Petch,
  Roboto_Serif,
  Montserrat,
} from "next/font/google";
import Navbar from "@/components/navbar/navbar";

/*     FONT       */
const alegraya = Alegreya({ subsets: ["latin"], variable: "--font-alegraya" });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});
const Chakra = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chakra",
});
const robot = Roboto_Serif({
  weight: "100",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const montserrat = Montserrat({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-montserrat",
});
/*               */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${alegraya.variable} ${inconsolata.variable} ${Chakra.variable} ${montserrat.variable} ${robot.className} overflow-x-hidden`}
    >
      <Provider>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
