import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../scss/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="The scale of the challenges facing our planet can seem daunting, but we can all do something."
                />
                <title>Rootz</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
