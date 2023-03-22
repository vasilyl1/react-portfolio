import React from 'react';

function Project({ project, index }) {
  return (
      <div className={project.class} key={`k${index}`}>
        <a href = {project.deployment}>Deployed: {project.name}</a><br></br><br></br><br></br><br></br>
        <a className='h3' href = {project.repo}>GitHub: {project.description}</a>
        <h2>Technologies: {project.tech}</h2>
      </div>
  );
}

export default Project;
