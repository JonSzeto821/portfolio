import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';
import '../../styles/projectTemplate.css';


const ProjectTemp = props => {
	const [name, description, icon] = [props.project.name, props.project.description, props.icons]
	const [technology, application, github] = [props.project.technology, props.project.links.application, props.project.links.github];
	
	return(
		<div id="projectTempContainer">
			<table className="left">
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
					<tr>
						<td>
							<img 
								className="iconSize" 
								name='name' 
								src={icon.image} 
								alt={icon.altText} 
							/>
						</td>
					</tr>
					<tr>
						<td>
							<h3>Technology</h3>
						</td>
					</tr>
					<tr>
						<td>
							<Technology technology={technology} />
						</td>
					</tr>
					<tr>
						<td>
							<Links 
								application={application}
								github={github}
							/>
						</td>
					</tr>
				</tbody>
			</table>		
		</div>
	);
};

export default ProjectTemp;