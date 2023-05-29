import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import MainMenu from '../components/common/MainMenu';
import { initializeStore } from '../store';
import { RootStoreContext } from '../hooks/useStores';

const theme: DefaultTheme = {
    colors: {
        primary: '#111',
        secondary: '#0070f3',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    const [store, setStore] = useState(undefined);

    useEffect(() => {
        let active = true;
        load();
        return () => {
            active = false;
        };

        async function load() {
            setStore(undefined);
            const res = await initializeStore();

            if (!active) {
                return;
            }
            setStore(res);
        }
    }, []);

    return (
        <RootStoreContext.Provider value={store} {...pageProps}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainMenu>
                    <Component {...pageProps} />
                </MainMenu>
            </ThemeProvider>
        </RootStoreContext.Provider>
    );
}
