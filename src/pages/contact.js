import Head from 'next/head';
import PropTypes from 'prop-types';
import { HeaderTwo, GoogleMap, ContactForm } from '../components';
import { getAllItems } from '../lib';

function ContactPage({ contactItems }) {
  <>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Send us your messages!" />
    </Head>
    <HeaderTwo />
    <GoogleMap />
    <ContactForm contactItems={contactItems} />
  </>;
}

export function getStaticProps() {
  const contactItems = getAllItems('contact');

  return {
    props: {
      contactItems
    }
  };
}

ContactPage.propTypes = {
  contactItems: PropTypes.instanceOf(Object).isRequired
};

export default ContactPage;
