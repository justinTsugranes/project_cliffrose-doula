import Head from 'next/head';
import PropTypes from 'prop-types';
import { sanityClient } from '../lib/sanity.client';
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

export async function getStaticProps() {
    const services = getAllItems('services');
    // const serviceQuery = `*[_type == "service"]`;
    // const services = await sanityClient.fetch(serviceQuery);

    const testimonialItems = getAllItems('testimonial');
    // const testimonialQuery = `*[_type == "testimonial"]`;
    // const testimonialItems = await sanityClient.fetch(testimonialQuery);

    const brandItems = getAllItems('brands');
    // const brandQuery = `*[_type == "brand"]`;
    // const brandItems = await sanityClient.fetch(brandQuery);

    const teamItems = getAllItems('teams');
    // const teamItemsQuery = `*[_type == "teamItems"]`;
    // const teamItems = await sanityClient.fetch(teamItemsQuery);

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
