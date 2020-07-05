import 'sanitize.css';
import 'src/styles/global.scss';
import 'src/styles/tailwind.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from 'src/layouts';

export default ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Next Template Tailwind</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);
