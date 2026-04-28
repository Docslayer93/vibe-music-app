import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;