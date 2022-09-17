import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import './styles.css';
import { AppHeader } from '../core/app-header/app-header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to game-client!</title>
      </Head>
      <CssBaseline>
        <UserProvider>
          <AppHeader />

          <main className="app">
            <Component {...pageProps} />
          </main>
        </UserProvider>
      </CssBaseline>
    </>
  );
}

export default CustomApp;
