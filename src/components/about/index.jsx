import React from 'react';
import '../../styles/about.css';
import ReactGA from 'react-ga';
import '../../styles/button.css';
 
const About = props => {
    //Google Analytics
    ReactGA.initialize('UA-123746366-1');
    ReactGA.ga('send', 'pageview', '/about');

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
							<div>{props.props.about.bio.p3}</div>
						</td>
					</tr>
					<tr className="contact-btn">
						<td>
							<div className="container">
								<a 
									className="btn btn-2 launch" 
									onClick={() => props.jumpToSlide()}
								>
								Contact
								</a>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
			<br />
		</div>
	);
};

export default About;