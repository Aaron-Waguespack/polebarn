import React from 'react';
import Project from './Project.js'

function ProjectList(props) {

    return(
        <div>
            <div className="projectList">
                {props.projects.map((project, i)=>(
                    <Project
                        key={i}
                        project={project}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;