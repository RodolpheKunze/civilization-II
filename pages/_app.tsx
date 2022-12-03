/* eslint-disable react/no-danger */
//import React from 'react';
import Head from 'next/head';
import React from "react";
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { I18NProvider } from 'i18n';

import GlobalStyle from 'styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" type="image/png" href="/favicon.png" />

        <link rel="manifest" href="manifest.json" />
        <title>Civilization - A New Dawn - Auxiliary Solo Mode</title>
      </Head>
      <ChakraProvider>
        <I18NProvider>
          <Component {...pageProps} />
        </I18NProvider>
      </ChakraProvider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
