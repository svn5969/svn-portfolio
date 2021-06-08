import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectData from './ProjectData/ProjectData';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState(ProjectData)
    console.log(projects);
    console.log(setProjects);

    // const handleFilterCategory = (CategoryName) => {
    //     const new_array = ProjectData.filter(project => project.category.includes(CategoryName))
    //     setProjects(new_array);
    // }
    return (
        <div className="project-container" id="projects" style={{paddingTop: "80px"}}>
          <div class="section-heading-1">
							
							<h1 data-aos="fade-right" data-aos-delay="200">Projects</h1>
						</div>
            <div className="container ">
                {/* <div className="projectCard-navbar text-uppercase  text-center my-3">
                    <div className="btn text-white font-weight-bold" onClick={() => setProjects(ProjectData)}>All</div>
                    <div className="btn text-white  font-weight-bold" onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
                    <div className="btn text-white  font-weight-bold" onClick={() => handleFilterCategory('node')}>Node</div>
                    <div className="btn text-white  font-weight-bold" onClick={() => handleFilterCategory('html')}>Html</div>
                    <div className="btn text-white  font-weight-bold" onClick={() => handleFilterCategory('react')}>React</div>
                </div> */}
                <div className="row">
                    {
                        projects.map(projects => <ProjectCard key={projects.name} projects={projects}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;