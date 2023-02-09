import Link from 'next/link';
import PropTypes from 'prop-types';
import PostSlider from '../posts/post-slider';

function FeaturedPost({ posts }) {
    return (
        <div className="post-area bg-azure pt-[55px] pb-[55px] md:pt-[160px] md:pb-[155px]">
            <div className="container">
                <div className="post-wrap mb-[60px] flex items-center justify-between">
                    <h2 className="text-[32px] lm:text-[42px] lm:leading-[50px]">
                        Editorials
                    </h2>
                    <Link href="/posts">
                        <a className="text-[16px] uppercase leading-[24px] text-secondary lm:text-[18px]">
                            All articles
                        </a>
                    </Link>
                </div>
                <PostSlider posts={posts} />
            </div>
        </div>
    );
}

FeaturedPost.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default FeaturedPost;
