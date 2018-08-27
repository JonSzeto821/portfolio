import React from 'react';
import '../../styles/button.css';

const ProjectLinks = props => {
	const [hrefApp, hrefGitHub] = [props.application, props.github];
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
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProjectLinks;