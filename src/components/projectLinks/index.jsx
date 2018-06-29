import React from 'react';
import Button from '../../components/button';

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
							<Button name={'Demo'} />
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