import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from "next/legacy/image";
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';

function ProjectContent({ project }) {
    const imagePath = `/images/projects/${project.slug}/${project.image}`;

    return (
        <article>
            <ProjectBanner
                title={project.title}
                excerpt={project.excerpt}
                categoryName={project.categoryName}
                image={imagePath}
            />
            <div className="project-upper-box pt-[55px] md:pt-[150px]">
                <div className="container">
                    <div className="navigation pb-[50px]">
                        <Link
                            href="/projects"
                            className="flex items-center text-[14px] uppercase leading-6"
                            legacyBehavior>
                            <IoMdGrid className="mr-5 text-[20px]" />
                            Back to Projects
                        </Link>
                    </div>
                    <ul className="info grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                        <li>
                            <span className="mr-[5px] text-[#4D5660]">
                                Location:
                            </span>
                            {project?.location}
                        </li>
                        <li>
                            <span className="mr-[5px] text-[#4D5660]">
                                Client:
                            </span>
                            {project?.clientName}
                        </li>
                        <li>
                            <span className="mr-[5px] text-[#4D5660]">
                                Completed:
                            </span>
                            {project.completedDate}
                        </li>
                        <li>
                            <span className="mr-[5px] text-[#4D5660]">
                                Architect:
                            </span>
                            {project.architectName}
                        </li>
                        <li>
                            <span className="mr-[5px] text-[#4D5660]">
                                Area:
                            </span>
                            {project.squareUnits}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project-description pt-[40px] md:pt-[80px]">
                <div className="container">
                    <div className="content">
                        <h2 className="pb-10 text-[36px] leading-[58px]">
                            Description
                        </h2>
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.additionDesc,
                            }}
                        />
                    </div>
                    <div className="image pt-[50px] md:pt-[85px]">
                        <Image
                            src={`/images/projects/${project.slug}/${project.descriptionImg}`}
                            alt={project.alt}
                            width={1170}
                            height={610}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
