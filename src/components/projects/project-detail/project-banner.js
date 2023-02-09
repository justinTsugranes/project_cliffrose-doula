import PropTypes from 'prop-types';
import Image from 'next/image';

function ProjectBanner({ title, excerpt, image }) {
    return (
        <div className="project-banner relative">
            <div className="image relative h-[550px] w-full before:absolute before:z-[1] before:h-full before:w-full before:bg-black before:opacity-40 lg:h-[980px]">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                />
            </div>
            <div className="container">
                <div className="content absolute top-1/2 z-[1] -translate-y-1/2 transform">
                    <div className="inner-content relative z-[1]">
                        <span className="mb-[30px] block text-[18px] uppercase leading-[29px] text-white md:max-w-[225px]">
                            {excerpt}
                        </span>
                        <h2 className="text-[36px] text-white lm:text-[45px] md:max-w-[770px] md:text-[80px] md:leading-[90px]">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectBanner.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProjectBanner;
