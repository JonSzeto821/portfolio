import React from 'react';
import GHIcon from '../../styles/assets/GH_Icon.svg';
import LIIcon from '../../styles/assets/LI_Icon.svg';
import EmailIcon from '../../styles/assets/Email_Icon.svg';
import LocationIcon from '../../styles/assets/location_icon.svg';
import PhoneIcon from '../../styles/assets/phone_icon.svg';
import '../../styles/contact.css';
import '../../styles/projectTemplate.css';

const Contact = props => {
	const email = props.links.contact.email;
	const linkedin = props.links.linkedin;
	const github = props.links.github;
	const location = props.location;
	const phone = props.phone;
	const icon = props.icons;

	return(
		<div id="contactContainer">
			<div id="contact-head">
				<h2>Contact</h2>
				<img 
					className={["iconSize", "hide-mobile", "contact-icon"].join(' ')} // remove invert
					name='name' 
					src={icon.image} 
					alt={icon.altText} 
				/>
			</div>
			<div id="contactContent">
				{/*<ul className="contact-description">
									<li>Please feel free to contact!</li>
								</ul>*/}
				<ul className="social-media">
			        <li>
						<a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
						<a href={github} target="_blank" className="link">GitHub</a>
			        </li>
			        <li>
						<a href={linkedin} target="_blank"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></a>
						<a href={linkedin} target="_blank" className="link">LinkedIn</a>
					</li>
					<li>
						<a href={email} className="link"><img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" /></a>
						<a href={email} className="link">Email</a>
					</li>
				</ul>
				<ul className="location-phone">
				    <li>
						<img className="logoSize" id="LocationIcon" src={LocationIcon} alt="Location Icon" />
						<div className="inline-mobile">{location}</div>
					</li>
					<li>
				   		<img className="logoSize" id="LocationIcon" src={PhoneIcon} alt="Location Icon" />
				    	<div className="inline-mobile">{phone}</div>
				    </li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;