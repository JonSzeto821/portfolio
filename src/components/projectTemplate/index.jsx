import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';

const ProjectTemp = props => {
	console.log(props.project.name);
	let name = props.project.name;
	let description = props.project.description;
	let image = props.project.image;
	let technology = props.project.technology;
	let application = props.project.links.application;
	let github = props.project.links.github;

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
			<table>
				<tbody>
					<tr>
						<td>
							<h2>{name}</h2>
						</td>
					</tr>
					<tr>
						<td>
							{description}
						</td>
					</tr>
				</tbody>
			</table>
			<img style={imgSize} name='name' src={image} alt='altText' />
			<h3>Technology</h3>
			<Technology technology={technology} />
			<Links 
				application={application}
				github={github}
			/>
		</div>
	);
};

export default ProjectTemp;