import React from 'react';
import Technology from '../technology';
import Links from '../projectLinks';
import '../../styles/projectTemplate.css';
// import Slider from "react-slick";
import ImageSlider from '../imageSlider';


const ProjectTemp = props => {
	// console.log(props);
	const image = props.project.screenshot || [];
	const [name, description, icon] = [props.project.name, props.project.description, props.icons]
	// console.log(props.project.additionalContent);
	// const extraContent = props.project.additionalContent || '';
	// console.log(extraContent);
	const [technology, application, github] = [props.project.technology, props.project.links.application, props.project.links.github];
	
	let screenshots = image.map((arrayItem, i) => {
		const [name, filePath, altText] = [arrayItem.name, arrayItem.image, arrayItem.altText];
		// console.log(name, filePath, altText);

		return(
			<div key={i} className="inline-block">
				<img className="screenshot-img" name={name} src={filePath} alt={altText} />
			</div>
		);
	});


	return(
		<div id="projectTempContainer">

			<table>
				<thead>
					<tr>
						<td className="hide-mobile">
							{/*<img 
								className={["iconSize"].join(' ')} // remove invert
								name='name' 
								src={icon.image} 
								alt={icon.altText} 
							/>*/}
						</td>
					</tr>
				</thead>
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
{/*					<tr>
						<td className="extraContent">
							{extraContent}
						</td>
					</tr>*/}
{/*					<tr>
						<td className="hide-desktop">
							<img 
								className={["iconSize"].join(' ')} // remove invert
								name='name' 
								src={icon.image} 
								alt={icon.altText} 
							/>
						</td>
					</tr>*/}
					</tbody>
					</table>
					<div id="screenshot-carousel">
						<ImageSlider screenshots={screenshots} />
					</div>
					<table>
					<tbody>
					<tr className="bottom-table">
						<td className="buttons">
							<Links 
								application={application}
								github={github}
							/>
						</td>
					</tr>
{/*					<tr>
						<td>
							<h3>Technology</h3>
						</td>
					</tr>*/}
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