import React from 'react';
import Button from '../../components/button';
// import {Link} from 'react-router-dom'

const ProjectLinks = props => {
	let hrefApp = props.application;
	let hrefGitHub = props.github;
	const borderStyle = {
		margin: 'auto',
		border: 'none'
	};

	return(
		<div>
			<table style={borderStyle}>
				<tbody>
					<tr>
						<td>
							<a href={hrefApp} rel="noopener noreferrer" target="_blank"><Button name={'Application'} /></a>
						</td>
					{/*</tr>
						<tr>*/}
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