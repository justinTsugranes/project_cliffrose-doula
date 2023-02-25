import PropTypes from 'prop-types';
import ProjectItem from './project-item';

function ProjectsGrid({ projects }) {
  <>
    {projects.map((project) => (
      <ProjectItem key={project.slug} project={project} />
    ))}
  </>;
}

ProjectsGrid.propTypes = {
  projects: PropTypes.instanceOf(Object).isRequired
};

export default ProjectsGrid;
