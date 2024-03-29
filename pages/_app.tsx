import FooterComponent from "@/components/global/footer";
import HeaderComponent from "@/components/global/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import { ToastContextProvider } from "@/components/context/toast-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ToastContextProvider>
        <Head>
          <title>Icetea Software</title>
        </Head>
        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </ToastContextProvider>
    </div>
  );
}
