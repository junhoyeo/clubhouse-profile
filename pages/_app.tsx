import React from 'react';

import GlobalStyle from '../components/GlobalStyle';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600&display=swap"
        rel="stylesheet"
      />
      <meta property="og:title" content="Junho's Clubhouse" />
      <meta property="og:url" content="https://clubhouse.junho.io/" />
      <meta
        property="og:description"
        content="Come over to Junho's Clubhouse"
      />
      <meta property="og:image" content="/og-image.png" />
      <Component {...pageProps} />
    </>
  );
}

export default App;
