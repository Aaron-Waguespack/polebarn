import React from 'react';
import Project from './Project.js'

function ProjectList(props) {

    return(
        <div  class="row align-items-center content" className="projectListBox">
            <div className="projectList" class="column">
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