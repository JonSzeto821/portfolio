import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';
import '../../styles/projectTemplate.css';
import ImageSlider from '../imageSlider';
import ReactGA from 'react-ga';


const ProjectTemp = props => {
	const image = props.project.screenshot || [];
	const [name, description, icon] = [props.project.name, props.project.description, props.icons]
	const extraContent = props.project.additionalContent || '';
	const [technology, application, github] = [props.project.technology, props.project.links.application, props.project.links.github];
	
	let screenshots = image.map((arrayItem, i) => {
		const [name, filePath, altText] = [arrayItem.name, arrayItem.image, arrayItem.altText];

		return(
			<div key={i} className="inline-block">
				<img className="screenshot-img" name={name} src={filePath} alt={altText} />
			</div>
		);
	});

	// Google Analytics
	// ReactGA.initialize('UA-122935699-1');
 //    ReactGA.ga('send', 'pageview', '/project');

	return(
		<div id="projectTempContainer">
			<table>
				<tbody>
					<tr>
						<td className="title">
							<h2>{name}</h2> 
							<img 
								className={["iconSize", "hide-mobile"].join(' ')} // remove invert
								name='name' 
								src={icon.image} 
								alt={icon.altText} 
							/>
						</td>
					</tr>
					<tr>
						<td className="description">
							{description}
						</td>
					</tr>
				</tbody>
			</table>
			<div id="screenshot-carousel">
				<ImageSlider screenshots={screenshots} />
			</div>
			<table>
				<tbody>
					<tr>
						<td className="extraContent">
							{extraContent}
						</td>
					</tr>
					<tr className="bottom-table">
						<td className="buttons">
							<Links 
								application={application}
								github={github}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<Technology technology={technology} />
						</td>
					</tr>
				</tbody>
			</table>		
		</div>
	);
};

export default ProjectTemp;