import React from 'react';

const About = props => {
	// console.log(props.props.about);
	return(
		<div>
			<h1>About Component</h1>
			<table>
				<tbody>
					<tr>
						<td>
							Name: {props.props.about.name}
						</td>
					</tr>
					<tr>
						<td>
							Image: {props.props.about.image}
						</td>
					</tr>
					<tr>
						<td>
							Bio: {props.props.about.bio}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;