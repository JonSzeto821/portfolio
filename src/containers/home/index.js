import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from '../../components/carousel';

const Home = props => (
  <div>
    <Carousel props={props} />
  </div>
);

const mapStateToProps = state => ({
  about: state.content.about,
  project: state.content.project,
  carousel: state.content.carousel,
  icons: state.content.icons
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
