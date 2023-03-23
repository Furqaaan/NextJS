import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            {/* This will act as the fallback metadata for pages which doesnt have their own Head tag */}
            <Head>
                <title>NextJS | Furqan Hameed</title>
                <meta name="description" content="NextJS | Furqan Hameed" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
