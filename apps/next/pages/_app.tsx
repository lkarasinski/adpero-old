import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";
import { AuthProvider, JourneysProvider } from "@adpero/contexts";
import { dashboardTheme } from "@adpero/themes";
import Layout from "../components/Layout";

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Adpero - Dashboard</title>
            </Head>
            <ThemeProvider theme={dashboardTheme}>
                <AuthProvider>
                    <JourneysProvider>
                        <Layout isEditModeEnabled={pageProps.isEditModeEnabled}>
                            <Component {...pageProps} />
                        </Layout>
                    </JourneysProvider>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default CustomApp;
