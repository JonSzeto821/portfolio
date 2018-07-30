import React, { Component } from "react";
import Slider from "react-slick";
import About from '../../components/about';
import {default as Project1} from '../../components/projectTemplate';
import {default as Project2} from '../../components/projectTemplate';
import {default as Project3} from '../../components/projectTemplate';
import {default as Project4} from '../../components/projectTemplate';
import Contact from '../../components/contact';
import '../../styles/carousel.css'
import aboutIcon from '../../styles/assets/about_icon.svg';
import musicIcon from '../../styles/assets/headphone_icon.svg';
import soccerIcon from '../../styles/assets/soccer_icon.svg';
import nutritionIcon from '../../styles/assets/nutrition_icon.svg';
import quizIcon from '../../styles/assets/quiz_icon.svg';
import contactIcon from '../../styles/assets/contact_icon.svg';


export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      pageNumber: 0
    };
  } 

  componentDidMount() {
    // console.log('carousel', this.props); 
    // console.log(this.props.props.icons[4]);
    // console.log('ABOUT:', this.props.props.about.location, this.props.props.about.phone);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  afterChangeHandler = currentSlide => {
    // console.log(currentSlide);
    // this.props.updateInitialSlide(currentSlide);
    this.setState({
      pageNumber: currentSlide++
    })
  } 

  render() {
    return (
      <div id="carousel-container">
          <div id="pageNumber">{this.state.pageNumber + 1}|6</div>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            arrows={false}
            mobileFirst={true}
            className="carouselTop content-col"
            afterChange={this.afterChangeHandler}
          >
            <div className="content-container">
              <About props={this.props.props} />
            </div>
            <div className="content-container">
              <Project1 
                project={this.props.props.project[0]} 
                icons={this.props.props.icons[0]} 
              />
            </div>
            <div className="content-container">
              <Project2 
                project={this.props.props.project[1]} 
                icons={this.props.props.icons[1]} 
              />
            </div>
            <div className="content-container">
              <Project3 
                project={this.props.props.project[2]} 
                icons={this.props.props.icons[2]} 
              />
            </div>
            <div className="content-container">
              <Project4 
                project={this.props.props.project[3]} 
                icons={this.props.props.icons[3]} 
              />
            </div>
            <div className="content-container">
              <Contact 
                links={this.props.props.about.links}  
                location={this.props.props.about.location}
                phone={this.props.props.about.phone}
                icons={this.props.props.icons[4]}
              />
            </div>
          </Slider>
          
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            vertical={true}
            
            // verticalSwiping={true}
            responsive={[
              {
                breakpoint: 701,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
            className="carouselBottom nav-col"
            id='carouselBottomHeight'
          >
            <div className="green">
              <h3 className="hide">ABOUT ME</h3>
              <img className="picSize" id="aboutIcon" src={aboutIcon} alt="About Icon" />
            </div>
            <div className="red">
              <h3 className="hide">DISCOVER ARTIST</h3>
              <img className="picSize" id="musicIcon" src={musicIcon} alt="Music Icon" />
            </div>
            <div className="blue">
              <h3 className="hide">SOCCER TACTICS</h3>
              <img className="picSize" id="soccerIcon" src={soccerIcon} alt="Soccer Icon" />
            </div>
            <div className="orange">
              <h3 className="hide">NUTRITION SEARCH</h3>
              <img className="picSize" id="nutritionIcon" src={nutritionIcon} alt="Nutrition Icon" />
            </div>
            <div className="purple">
              <h3 className="hide">QUIZ APP</h3>
              <img className="picSize" id="quizIcon" src={quizIcon} alt="Quiz Icon" />
            </div>
            <div className="yellow">
              <h3 className="hide">CONTACT</h3>
              <img className="picSize" id="contactIcon" src={contactIcon} alt="Contact Icon" />
            </div>
          </Slider>
      </div>
    );
  }
}