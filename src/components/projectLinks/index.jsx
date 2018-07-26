import React from 'react';
// import Button from '../../components/button';
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
						<div className="container">
							<a className="btn btn-2 launch" href={hrefApp} rel="noopener noreferrer" target="_blank">Launch</a>
						</div>
						</td>
						<td>
						<div className="container">
							<a className="btn btn-2 github" href={hrefGitHub} rel="noopener noreferrer" target="_blank">GitHub</a>
						</div>
							{/*<a href={hrefGitHub} rel="noopener noreferrer" target="_blank"><Button className="github" name={'GitHub'} /></a>*/}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProjectLinks;