import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import {
    HeaderOne,
    Hero,
    Services,
    About,
    PricingTab,
    Testimonial,
    Brand,
    FeaturedPost,
    LatestProject,
} from '../components';

function HomePage({
    heroItems,
    services,
    projects,
    pricingItems,
    testimonialItems,
    brandItems,
    posts,
}) {
    return (
        <>
            <Head>
                <title>Cliffrose Doula Care | All Births Are Natural</title>
                <meta
                    name="description"
                    content="description of the business"
                />
            </Head>
            <HeaderOne />
            <Hero heroItems={heroItems} />
            <Services services={services} />
            <LatestProject projects={projects} />
            <About />
            <PricingTab pricingItems={pricingItems} />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialTitle="+1,250 Happy Clients"
            />
            <Brand brandItems={brandItems} />
            <FeaturedPost posts={posts} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const posts = getAllItems('posts');
    const projects = getAllItems('projects');
    const services = getAllItems('services');
    const pricingItems = getAllItems('pricing');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const LatestProject = getFeaturedItems(projects);
    const FeaturedPost = getFeaturedItems(posts);

    return {
        props: {
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    pricingItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
