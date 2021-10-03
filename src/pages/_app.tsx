import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Provider as NextAutoProvider } from "next-auth/client";

import "../../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <NextAutoProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAutoProvider>
  );
}

export default MyApp;
