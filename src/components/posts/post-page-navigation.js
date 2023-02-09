import PropTypes from 'prop-types';
import Link from 'next/link';

function PostPageNavigation(props) {
    const { prevPost, nextPost } = props;
    return (
        <div className="page-navigation pt-[60px]">
            <div className="image-layer relative">
                <div className="relative z-[1] grid grid-cols-2 text-[18px] font-semibold uppercase leading-6 tracking-[10px]">
                    <Link href={`/posts/${prevPost.slug}`}>
                        <a
                            className={`prev relative z-[1] mr-[30px] flex justify-center bg-cover bg-center bg-no-repeat py-[50px] before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:bg-black before:opacity-60 ${
                                !prevPost?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/posts/${`${prevPost?.slug}/${prevPost?.image}`}')`,
                            }}
                        >
                            Prev
                        </a>
                    </Link>
                    <Link href={`/posts/${nextPost?.slug}`}>
                        <a
                            className={`next relative z-[1] flex justify-center bg-cover bg-center bg-no-repeat py-[50px] text-right before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:bg-black before:opacity-60 ${
                                !nextPost?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/posts/${`${nextPost?.slug}/${nextPost?.image}`}')`,
                            }}
                        >
                            Next
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

PostPageNavigation.propTypes = {
    prevPost: PropTypes.instanceOf(Object).isRequired,
    nextPost: PropTypes.instanceOf(Object).isRequired,
};

export default PostPageNavigation;
