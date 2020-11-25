import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Modal from 'react-modal';

import withAnalytics from 'hocs/withAnalytics';

import GlobalStyle from 'styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <title>Civilization - A New Dawn - Automated Player</title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default withAnalytics(MyApp);
