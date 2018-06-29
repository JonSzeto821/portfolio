import React from 'react';
import Button from '../../components/button';
// import {Link} from 'react-router-dom'

const ProjectLinks = props => {
	// console.log(props.application, props.github);
	const borderStyle = {
		border: '1px solid black'
	};

	return(
		<div>
			<table style={borderStyle}>
				<tbody>
					<tr>
						<td>
							Application: {props.application}
		
							<a href="https://github.com/JonSzeto821" rel="noopener noreferrer" target="_blank"><Button name={'Demo'} /></a>
						</td>
					</tr>
					<tr>
						<td>Github: {props.github}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProjectLinks;