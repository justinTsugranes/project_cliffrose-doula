import PropTypes from 'prop-types';
import Link from 'next/link';

function ProjectPageNavigation(props) {
    const { prevProject, nextProject } = props;
    return (
        <div className="page-navigation">
            <div className="image-layer relative">
                <div className="relative z-[1] grid grid-cols-2 text-[18px] font-semibold uppercase leading-6 tracking-[10px]">
                    <Link href={`/projects/${prevProject.slug}`}>
                        <a
                            className={`prev relative z-[1] mr-[30px] flex justify-center bg-cover bg-center bg-no-repeat py-[50px] before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:bg-black before:opacity-60 ${
                                !prevProject?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/projects/${`${prevProject?.slug}/${prevProject?.image}`}')`,
                            }}
                        >
                            Prev
                        </a>
                    </Link>
                    <Link href={`/projects/${nextProject?.slug}`}>
                        <a
                            className={`next relative z-[1] flex justify-center bg-cover bg-center bg-no-repeat py-[50px] text-right before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:bg-black before:opacity-60 ${
                                !nextProject?.slug
                                    ? 'text-dark pointer-events-none opacity-40'
                                    : 'text-white'
                            }`}
                            style={{
                                backgroundImage: `url('/images/projects/${`${nextProject?.slug}/${nextProject?.image}`}')`,
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

ProjectPageNavigation.propTypes = {
    prevProject: PropTypes.instanceOf(Object).isRequired,
    nextProject: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectPageNavigation;
