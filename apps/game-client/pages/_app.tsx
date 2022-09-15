import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../core/header/header';
import { UserProvider } from '@auth0/nextjs-auth0';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to game-client!</title>
      </Head>
      <CssBaseline>
        <UserProvider>
          <Header>
            <h1>intercept-game</h1>
          </Header>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UserProvider>
      </CssBaseline>
    </>
  );
}

export default CustomApp;
