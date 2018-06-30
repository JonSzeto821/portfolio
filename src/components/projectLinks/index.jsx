import React from 'react';
import Button from '../../components/button';
// import {Link} from 'react-router-dom'

const ProjectLinks = props => {
	// console.log(props);
	let hrefApp = props.application;
	let hrefGitHub = props.github;
	let hrefTest = 'https://google.com/';
	// console.log(hrefApp, props.application);
	// console.log(hrefGitHub, props.github);
	// console.log(hrefTest, 'https://google.com/');
	const borderStyle = {
		// border: '1px solid black',
		margin: 'auto'
	};

	return(
		<div>
			<table style={borderStyle}>
				<tbody>
					<tr>
						<td>
							Application: {`${props.application}`}
							<a href={hrefTest} rel="noopener noreferrer" target="_blank"><Button name={'Google'} /></a>
							<a href={hrefApp} rel="noopener noreferrer" target="_blank"><Button name={'Application'} /></a>
						</td>
					</tr>
					<tr>
						<td>
							<a href={hrefGitHub} rel="noopener noreferrer" target="_blank"><Button name={'GitHub'} /></a>
							</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProjectLinks;