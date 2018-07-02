import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';
import '../../styles/projectTemplate.css';

const ProjectTemp = props => {
	const name = props.project.name;
	const description = props.project.description;
	const image = props.project.image;
	const technology = props.project.technology;
	const application = props.project.links.application;
	const github = props.project.links.github;

	return(
		<div id="projectTempContainer">
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
			<img className="imgSize" name='name' src={image} alt='altText' />
			{/*<h3>Technology</h3>*/}
			<Technology technology={technology} />
			<Links 
				application={application}
				github={github}
			/>
		</div>
	);
};

export default ProjectTemp;