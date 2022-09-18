import { UserProvider } from '@auth0/nextjs-auth0';
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppHeader } from '../core/app-header/app-header';
import './styles.css';

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
