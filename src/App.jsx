import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/home/Home';
import About from './container/about/About';
import Stories from './container/stories/Stories';
import LandingPage from './layouts/LandingPage';
import Footer from './container/footer/Footer';
import './assets/App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <LandingPage />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/stories" component={Stories} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
