import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectsContainer from '../projects';
import AboutContainer from '../about';

const Home = props => (
  <div>
    <AboutContainer about={props.about} />
    <ProjectsContainer project={props.project} />
  </div>
);

const mapStateToProps = state => ({
  about: state.counter.about,
  project: state.counter.project
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
