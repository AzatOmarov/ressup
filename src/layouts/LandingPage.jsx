import React from 'react';
import Footer from '../container/footer/Footer';
import Navigation from '../container/Navigation';
import Main from './main/Main';

// eslint-disable-next-line react/prefer-stateless-function
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Main />
        <Footer />
      </>
    );
  }
}
export default LandingPage;
