import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';

const ProjectTemp = props => {
	// console.log('ProjectProps123', props);
	// console.log('name:', props.name);
	// console.log('image:', props.image);
	// console.log('description:', props.description);
	// console.log('application:', props.application);
	// console.log('github:', props.github);
	const projectTempContainer = {
		border: '3px solid purple',
		margin: '5px 10px',
		padding: '0 10px 10px 10px',
		backgroundColor: '#F2F2F2'
	};

	const imgSize = {
		width: '200px',
		height: '200px'
	};

	return(
		<div style={projectTempContainer}>
		<h2>Project component rendering!</h2>
{/*			<table>
							<tbody>
								<tr>
									<td>
										{props.name}
									</td>
								</tr>
								<tr>
									<td>
										{props.description}
									</td>
								</tr>
							</tbody>
						</table>
							<img style={imgSize} name='name' src={props.image} alt='altText' />
							<h3>Technology</h3>
							<Technology 
								technology={props.project.technology}
								props={props}
							/>
							<Links 
								props={props}
								application={props.application}
								github={props.github}
							/>*/}
		</div>
	);
};

export default ProjectTemp;