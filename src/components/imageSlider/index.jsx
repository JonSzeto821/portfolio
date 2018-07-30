import React, { Component } from "react";
import Slider from "react-slick";
import '../../styles/screenshotSlider.css';

export default class ImageSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000
      // vertical: true,
      // verticalSwiping:true,
    };
    return (
      <div className="screenshot-slider">
        <Slider {...settings}>
          {this.props.screenshots}
        </Slider>
      </div>
    );
  }
}

