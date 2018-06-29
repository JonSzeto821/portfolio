import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';

const ProjectTemp = props => {
	// console.log('propTemp', props.project.name)
	const projectTempContainer = {
		border: '3px solid purple',
		margin: '5px 10px',
		padding: '0 10px 10px 10px'
	};

	return(
		<div style={projectTempContainer}>
			<table>
				<tbody>
					<tr>
						<td>
							{props.project.name}
						</td>
					</tr>
					<tr>
						<td>
							{props.project.description}
						</td>
					</tr>
				</tbody>
			</table>
				<p>Image: {props.project.image}</p>
				<h3>Technology</h3>
				<Technology 
					technology={props.project.technology}
					props={props}
				/>
				<Links 
					application={props.project.links.application}
					github={props.project.links.github}
				/>
		</div>
	);
};

export default ProjectTemp;