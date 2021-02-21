import Head from 'next/head';
import React from 'react';

import GlobalStyle from '../components/GlobalStyle';

import profile from '../data/profile.json';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{profile.name}'s Clubhouse</title>
        <meta property="og:title" content={`${profile.name}'s Clubhouse`} />
        <meta property="og:url" content="https://clubhouse.junho.io/" />
        <meta
          property="og:description"
          content={`Come over to ${profile.name}'s Clubhouse`}
        />
        <meta property="og:image" content="/og-image.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
