/* eslint-disable no-use-before-define */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import Modal from 'react-modal';

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

        <link rel="manifest" href="manifest.json" />
        <title>Civilization - A New Dawn - Automated Player</title>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5BDMKCQ31"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-C5BDMKCQ31');
                </script>
              `,
          }}
        />
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default MyApp;
