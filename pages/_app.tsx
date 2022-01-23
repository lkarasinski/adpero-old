import * as React from 'react';
import Layout from 'components/Layout';
import { AuthProvider } from 'context/AuthContext';
import { JourneysProvider } from 'context/JourneysContext';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <JourneysProvider>
                    <AnimatePresence
                        exitBeforeEnter
                        initial={false}
                        onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <Layout isEditModeEnabled={pageProps.isEditModeEnabled}>
                            <Component {...pageProps} />
                        </Layout>
                    </AnimatePresence>
                </JourneysProvider>
            </AuthProvider>
        </>
    );
}

export default MyApp;
