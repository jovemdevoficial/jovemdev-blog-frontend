import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import 'highlight.js/styles/an-old-hope.css';

import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
