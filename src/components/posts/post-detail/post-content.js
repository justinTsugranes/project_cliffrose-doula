import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';
import PostBanner from './post-banner';
import PostSidebar from '../post-sidebar';

function PostContent({ post, categories, tags }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const BlockQuoteIcon = FaIcons[post.icon];

    return (
        <article>
            <PostBanner title={post.title} image={imagePath} date={post.date} />
            <div className="post-area pt-155">
                <div className="container">
                    <div className="gap-x-[30px] lg:grid lg:grid-cols-12 xl:gap-x-[50px]">
                        <div className="lg:col-span-8">
                            <h2 className="mb-[20px] max-w-[710px] text-[24px] font-bold leading-[36px]">
                                {post.postTitle}
                            </h2>
                            <p className="mb-[15px] leading-[27px] text-secondary">
                                {post.postDesc}
                            </p>
                            <p className="max-w-[680px] leading-[27px] text-secondary">
                                {post.postAdditionalDesc}
                            </p>
                            <div className="single-item pt-[50px]">
                                <div className="image">
                                    <Image
                                        src={`/images/posts/${post.slug}/${post.descriptionImg}`}
                                        alt={post.alt}
                                        width={1170}
                                        height={610}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="content pt-[45px]">
                                    <h2 className="mb-[15px] text-[24px] font-bold leading-[38px]">
                                        {post.singlePostTitle}
                                    </h2>
                                    <p className="leading-[27px] text-secondary">
                                        {post.singlePostDesc}
                                    </p>
                                </div>
                            </div>
                            <blockquote className="flex fixed-xs:pt-[30px] sm:pt-[75px] sm:pl-[85px]">
                                <span className="quote mr-[5px]">
                                    <BlockQuoteIcon />
                                </span>
                                <p className="max-w-[530px] text-[24px] leading-9">
                                    {post.blockquoteText}
                                </p>
                            </blockquote>
                            <p className="pt-[70px] leading-[27px] text-secondary">
                                {post.postExcerpt}
                            </p>
                            <ul className="post-share-tags pt-[65px]">
                                {post.postTags.map((item) => (
                                    <li key={item}>
                                        <Link href="#" legacyBehavior>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="max-md:pt-[50px] lg:col-span-4">
                            <PostSidebar categories={categories} tags={tags} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

PostContent.propTypes = {
    post: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default PostContent;
