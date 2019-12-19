import React, { Fragment } from 'react';
import Footer from '../container/footer/Footer';
import Navigation from '../container/Navigation';

class LandingPage extends React.Component {
  render() {
    console.info(this.props.children);
    return (
      <>
        <Navigation />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default LandingPage;
