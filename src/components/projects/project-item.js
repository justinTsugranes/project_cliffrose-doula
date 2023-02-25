import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function ProjectItem({ project }) {
  const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
  const linkPath = `/projects/${project?.slug}`;

  return (
    <div className={`project-item gallery-item group ${project?.category}`}>
      <Link href={linkPath} legacyBehavior>
        <div className="project-img relative before:absolute before:z-[1] before:h-full before:w-full before:bg-black before:opacity-20">
          <Image
            src={imagePath}
            alt={project?.title}
            width={472}
            height={665}
            className="responsive-img object-cover"
            quality={60}
            priority
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className="project-content">
          <span className="project-category">{project?.excerpt}</span>
          <h2 className="project-title">{project?.title}</h2>
        </div>
      </Link>
    </div>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired
};

export default ProjectItem;
