import PropTypes from 'prop-types';
import Link from 'next/link';
import ProjectSlider from '../projects/projects-slider';

function LatestProject({ projects }) {
    return (
        <div className="project-area pt-[60px] md:pt-160">
            <div className="container">
                <div className="project-wrap mb-[60px] flex items-center justify-between max-sm:flex-col">
                    <h2 className="text-[32px] max-sm:mb-[15px] lm:text-[42px] lm:leading-[50px]">
                        Latest Projects
                    </h2>
                    <Link href="/projects">
                        <a className="text-[18px] uppercase leading-[24px] text-secondary">
                            All Projects
                        </a>
                    </Link>
                </div>
            </div>
            <ProjectSlider projects={projects} />
        </div>
    );
}

LatestProject.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default LatestProject;
