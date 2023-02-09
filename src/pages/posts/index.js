import Head from 'next/head';
import PropTypes from 'prop-types';
import { Breadcrumb, HeaderTwo, AllItems } from '../../components';
import { getPostCategories } from '../../lib/getPostCategories';
import { getPostTags } from '../../lib/getPostTags';
import { getAllItems } from '../../lib/items-util';

function allItemsPage({ posts, categories, tags }) {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="Rustic posts!" />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Posts" pageTitle="Our Posts" />
            <AllItems posts={posts} categories={categories} tags={tags} />
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('posts');
    const categories = getPostCategories();
    const tags = getPostTags();

    return {
        props: {
            posts: allItems,
            categories,
            tags,
        },
    };
}

allItemsPage.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default allItemsPage;
