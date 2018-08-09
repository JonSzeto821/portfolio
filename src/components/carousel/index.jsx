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
import ReactGA from 'react-ga';

// import swipeIcon from '../../styles/assets/swipe_icon.svg';
import swipeIcon2 from '../../styles/assets/swipe2_icon.svg';
// import arrowkeysIcon from '../../styles/assets/arrowkeys_icon.svg';


export default class Carousel extends Component {

  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      pageNumber: 0
    };
  } 

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  afterChangeHandler = currentSlide => {
    // console.log('currentSlide', this.props.props.project[this.state.pageNumber].name);
    // console.log(currentSlide);
    
          this.setState({
            pageNumber: currentSlide++
          })
          // let projectNum = this.state.pageNumber;
          // if(projectNum <= 3){
          //   let GAProjectTitle = this.props.props.project[projectNum];

          //   console.log(projectNum, GAProjectTitle.name);

          //   projectNum++;
          //   return GAProjectTitle.name;
          // }else{
          //   console.log(projectNum, 'nothing to see here');
          // };
  };

  render() {
    const carousel1 = {
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider),
      arrows: false,
      mobileFirst: true,
      afterChange: this.afterChangeHandler
    }

    const carousel2 = {
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
      slidesToShow: 4,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: false,
      vertical: true,
      responsive: [{
          breakpoint: 700,
          settings: {
            slidesToShow: 1
          }
        }]
    }
    // let pageNumber = this.state.pageNumber;
    // // console.log(pageNumber);
    // let projectIndex = this.props.props.project[pageNumber];
    // let projectName = this.props.props.project[this.state.pageNumber].name;
    // // console.log('projectIndex', projectIndex);
    // // console.log('projectName', projectName);

    // Google Analytics
    // ReactGA.initialize('UA-122935699-1');
    // ReactGA.ga('set', 'page', '/');
    // ReactGA.ga('send', 'pageview');

    // ReactGA.modalview('/carousel');
    // ReactGA.ga('send', 'pageview', '/carousel');
    // ReactGA.ga('send', 'pageview', this.props.props.project[this.state.pageNumber].name);

    // ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <div id="carousel-container">
          <div id="overlay"> 
            <div id="page-interaction">
              <h2>Navigation: Swipe Left/Right</h2>
              <img className="swipe" name='swipe' src={swipeIcon2} alt='swipeIcon' />
            </div>
          </div>
          <div id="pageNumber">{this.state.pageNumber + 1}|6</div>
          <Slider
            {...carousel1}
            className="carouselTop content-col"
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
            {...carousel2}
            id='carouselBottomHeight'
            className="carouselBottom nav-col"
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