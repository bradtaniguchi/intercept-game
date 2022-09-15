import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../core/header/header';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to game-client!</title>
      </Head>
      <Header />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
