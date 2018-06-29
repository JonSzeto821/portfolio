import React from 'react';
import {default as Project1} from '../../components/projectTemplate';
import {default as Project2} from '../../components/projectTemplate';
import {default as Project3} from '../../components/projectTemplate';

const ProjectsContainer = props => {
	// console.log(props);
	return(
		<div>
			<h1>Project Container</h1>
			<Project1 project={props.project.project1} />
			<Project2 project={props.project.project2} />
			<Project3 project={props.project.project3} />
		</div>
		);
};

export default ProjectsContainer;