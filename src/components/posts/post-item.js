import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from "next/image";

function PostItem({ posts }) {
    const formattedDate = new Date(posts?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${posts?.slug}/${posts?.image}`;
    const linkPath = `/posts/${posts?.slug}`;

    return (
        <div className="post-item">
            <Link href={linkPath} legacyBehavior>
                <div className="post-img block">
                    <Image
                        src={imagePath}
                        alt={posts?.title}
                        width={374}
                        height={303}
                        className="responsive-img"
                        quality={60}
                        priority
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div className="post-content">
                    <h2 className="mt-6 text-[24px] leading-[34px] transition duration-300 hover:text-[#cbaf71] hover:underline">
                        {posts?.title}
                    </h2>
                    <div className="mt-2 block text-[14px] leading-6 text-[#222]">
                        {formattedDate} by
                        <span className="ml-[5px] font-medium text-black">
                            Admin
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

PostItem.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default PostItem;
