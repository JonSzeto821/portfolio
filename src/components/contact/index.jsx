import React from 'react';
import GHIcon from '../../styles/assets/GH_Icon.svg';
import LIIcon from '../../styles/assets/LI_Icon.svg';
import EmailIcon from '../../styles/assets/Email_Icon.svg';
import '../../styles/contact.css';
import '../../styles/projectTemplate.css';

const Contact = props => {

	const email = props.links.contact.email;
	const linkedin = props.links.linkedin;
	const github = props.links.github;

	return(
		<div id="contactContainer">
			
			<table>
				<thead>
					<tr>
						<td colSpan="2"><h2>Contacts</h2></td>
					</tr>
				</thead>
				<tbody>
					<tr className="borderStyle">
						<td><a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a></td>
						<td><a href={github} target="_blank" className="link">GitHub</a></td>
					</tr>
					<tr className="borderStyle">
						<td><a href={linkedin} target="_blank"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></a></td> 
						<td><a href={linkedin} target="_blank" className="link">LinkedIn</a></td>
					</tr>
					<tr className="borderStyle">
						<td><img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" /></td>
						<td><a href={email} className="link">Email</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Contact;