import Head from 'next/head';
import PropTypes from 'prop-types';
import { Layout } from '../components';
import { ScrollToTop } from '../components/scroll';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="../favicon.png" />
    </Head>
    <Component {...pageProps} />
    <ScrollToTop />
  </Layout>;
}

MyApp.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired
};

export default MyApp;
