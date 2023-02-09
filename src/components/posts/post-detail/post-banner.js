import PropTypes from 'prop-types';
import Image from 'next/image';

function PostBanner({ title, image, date }) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="post-banner relative">
            <div className="image relative h-[550px] w-full before:absolute before:z-[1] before:h-full before:w-full before:bg-black before:opacity-40 lg:h-[980px]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="container">
                <div className="content absolute top-1/2 z-[1] -translate-y-1/2 transform">
                    <div className="inner-content relative z-[1]">
                        <div className="relative block pt-[35px] text-[18px] uppercase leading-[29px] text-white before:absolute before:top-0 before:left-0 before:h-[4px] before:w-[80px] before:rounded-[2px] before:bg-primary">
                            {formattedDate}
                            <span className="ml-[5px] block">by Admin</span>
                        </div>
                        <h2 className="max-w-[770px] text-[30px] text-white lm:text-[50px] lg:text-[80px] lg:leading-[90px]">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

PostBanner.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default PostBanner;
