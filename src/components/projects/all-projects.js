import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectsGrid from './projects-grid';

function AllProjects({ projects: initialProject }) {
    const [projects, setProjects] = useState(initialProject);
    const [currentFilter, setCurrentFilter] = useState('all');

    const onFilterHandler = (e) => {
        e.preventDefault();
        const { target } = e;
        const filterValue = target.dataset.filter;
        setCurrentFilter(filterValue);
        const filteredProjects = initialProject.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all'
            ? setProjects(initialProject)
            : setProjects(filteredProjects);
    };
    return (
        <>
            <div className="container">
                <div className="filter-tab flex flex-wrap pb-[55px] uppercase text-[#30373E] max-lg:pt-[55px] md:pb-155 xl:justify-end">
                    <button
                        className={`${
                            currentFilter === 'all' ? 'active' : ''
                        } ml-10`}
                        type="button"
                        onClick={onFilterHandler}
                        data-filter="all"
                    >
                        All
                    </button>
                    <button
                        className={`${
                            currentFilter === 'residential' ? 'active' : ''
                        } ml-10`}
                        type="button"
                        onClick={onFilterHandler}
                        data-filter="residenital"
                    >
                        Residenital
                    </button>
                    <button
                        className={`${
                            currentFilter === 'commercial' ? 'active' : ''
                        } ml-10`}
                        type="button"
                        onClick={onFilterHandler}
                        data-filter="commercial"
                    >
                        Commercial
                    </button>
                    <button
                        className={`${
                            currentFilter === 'suitanable-space' ? 'active' : ''
                        } fixed-xs:mt-[10px] sm:ml-10`}
                        type="button"
                        onClick={onFilterHandler}
                        data-filter="suitanable-space"
                    >
                        Suitantable Space
                    </button>
                </div>
            </div>
            <div className="grid gap-[5px] fixed-md:grid-cols-2 fixed-lg:grid-cols-3 xl:grid-cols-4">
                <ProjectsGrid projects={projects} />
            </div>
        </>
    );
}

AllProjects.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default AllProjects;
