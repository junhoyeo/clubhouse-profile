import React from 'react';

import GlobalStyle from '../components/GlobalStyle';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
