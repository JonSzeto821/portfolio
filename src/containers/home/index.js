import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import ProjectsContainer from '../projects';
// import AboutContainer from '../about';
// import ContactContainer from '../contact';
import Carousel from '../../components/carousel';


const Home = props => (
  <div>
{/*    <AboutContainer about={props.about} />*/}
{/*    <ProjectsContainer project={props.project} />*/}
    <Carousel props={props} />
{/*    <ContactContainer contact={props.about} />*/}

  </div>
);

const mapStateToProps = state => ({
  about: state.counter.about,
  project: state.counter.project,
  carousel: state.counter.carousel
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
