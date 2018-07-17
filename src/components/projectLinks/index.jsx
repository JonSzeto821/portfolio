import React from 'react';
import Button from '../../components/button';
// import {Link} from 'react-router-dom'
// import GHIcon from '../../styles/assets/GH_Icon.svg';
import '../../styles/button.css';

const ProjectLinks = props => {
	let hrefApp = props.application;
	let hrefGitHub = props.github;

	return(
		<div>
			<table className="borderStyle">
				<tbody>
					<tr>
						<td>
							<a href={hrefApp} rel="noopener noreferrer" target="_blank"><Button className="launch" name={'Launch'} /></a>
						</td>
						<td>
							<a href={hrefGitHub} rel="noopener noreferrer" target="_blank"><Button className="github" name={'GitHub'} /></a>
							</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProjectLinks;