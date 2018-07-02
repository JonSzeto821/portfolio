import React, { Component } from "react";
import Slider from "react-slick";
import About from '../../components/about';
import {default as Project1} from '../../components/projectTemplate';
import {default as Project2} from '../../components/projectTemplate';
import {default as Project3} from '../../components/projectTemplate';
// import {default as Project4} from '../../components/projectTemplate';
import Contact from '../../components/contact';
import '../../styles/carousel.css'
import aboutIcon from '../../styles/assets/about_icon.svg';
import musicIcon from '../../styles/assets/music_icon.svg';
import soccerIcon from '../../styles/assets/soccer_icon.svg';
import nutritionIcon from '../../styles/assets/nutrition_icon.svg';
import quizIcon from '../../styles/assets/quiz_icon.svg';
import contactIcon from '../../styles/assets/contact_icon.svg';


export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    // console.log(this.props.props.project);
    // console.log(this.props.props.project[1]);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div id="carousel-container">
        <div className="col-container">
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            // dots={true}
            arrows={false}
            mobileFirst={true}
            zIndex={1}
            className="carouselTop content-col"
          >
            <div className="yellow content-container">
              <About props={this.props.props} />
            </div>
            <div className="orange content-container">
              <Project1 project={this.props.props.project[0]} />
            </div>
            <div className="blue content-container">
              <Project2 project={this.props.props.project[1]} />
            </div>
            <div className="yellow content-container">
              <Project3 project={this.props.props.project[2]} />
            </div>
            <div className="orange content-container">
              <h3>Project 4</h3>
              {/*<Project4 />*/}
            </div>
            <div className="blue content-container">
              <h3>Contact</h3>
              <Contact />
            </div>
          </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          // centerMode={true}
          vertical={true}
          verticalSwiping={true}
          zIndex={2}
          className="carouselBottom nav-col"
          id='carouselBottomHeight'
          >
          <div className="yellow">
            <h3 className="hide">About Me</h3>
            <img className="picSize" id="aboutIcon" src={aboutIcon} alt="About Icon" />
          </div>
          <div className="orange">
            <h3 className="hide">Discover Artist</h3>
            <img className="picSize" id="musicIcon" src={musicIcon} alt="Music Icon" />
          </div>
          <div className="blue">
            <h3 className="hide">Soccer Tactics</h3>
            <img className="picSize" id="soccerIcon" src={soccerIcon} alt="Soccer Icon" />
          </div>
          <div className="yellow">
            <h3 className="hide">Nutrition Search</h3>
            <img className="picSize" id="nutritionIcon" src={nutritionIcon} alt="Nutrition Icon" />
          </div>
          <div className="orange">
            <h3 className="hide">Quiz App</h3>
            <img className="picSize" id="quizIcon" src={quizIcon} alt="Quiz Icon" />
          </div>
          <div className="blue">
            <h3 className="hide">Contact</h3>
            <img className="picSize" id="contactIcon" src={contactIcon} alt="Contact Icon" />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}