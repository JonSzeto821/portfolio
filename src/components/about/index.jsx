import React from 'react';
import swipeIcon from '../../styles/assets/swipe_icon.svg';
import arrowkeysIcon from '../../styles/assets/arrowkeys_icon.svg';
import '../../styles/about.css';

const About = props => {
	return(
		<div id="aboutContainer">
			<table>
				<thead>
					<tr>
						<td>
							<h1>{props.props.about.name}</h1>
						</td>
					</tr>
				</thead>
				<tbody >
					<tr>
						<td>
							<img className="center imgSize" name='name' src={props.props.about.image} alt='altText' />
						</td>
					</tr>
					<tr className="bio">
						<td>
							<div>{props.props.about.bio.p1}</div><br />
							<div>{props.props.about.bio.p2}</div>
						</td>
					</tr>
					<tr>
						<td id="page-interaction">
							<img className="swipe" name='swipe' src={swipeIcon} alt='swipeIcon' />
							or
							<img className="swipe" name='arrowkeys' src={arrowkeysIcon} alt='arrowkeysIcon' />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;