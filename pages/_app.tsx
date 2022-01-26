import * as React from "react";
import Layout from "components/Layout";
import { AuthProvider } from "context/AuthContext";
import { JourneysProvider } from "context/JourneysContext";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
    const materialTheme = createTheme({
        typography: {
            allVariants: {
                fontFamily: "Nunito",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 700,
            },
        },
    });
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={materialTheme}>
                    <AuthProvider>
                        <JourneysProvider>
                            <AnimatePresence
                                exitBeforeEnter
                                initial={false}
                                onExitComplete={() => window.scrollTo(0, 0)}
                            >
                                <Layout
                                    isEditModeEnabled={
                                        pageProps.isEditModeEnabled
                                    }
                                >
                                    <Component {...pageProps} />
                                </Layout>
                            </AnimatePresence>
                        </JourneysProvider>
                    </AuthProvider>
                </ThemeProvider>
            </LocalizationProvider>
        </>
    );
}

export default MyApp;
