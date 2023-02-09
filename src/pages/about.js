import Head from 'next/head';
import PropTypes from 'prop-types';
import {
    HeaderOne,
    Services,
    About,
    Testimonial,
    Brand,
    PageBanner,
    Team,
} from '../components';
import { getAllItems } from '../lib/items-util';

function AboutPage({ services, testimonialItems, brandItems, teamItems }) {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <HeaderOne />
            <PageBanner />
            <About />
            <Services services={services} />
            <Testimonial testimonialItems={testimonialItems} />
            <Brand brandItems={brandItems} />
            <Team teamItems={teamItems} />
        </>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');

    return {
        props: {
            services,
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

AboutPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
