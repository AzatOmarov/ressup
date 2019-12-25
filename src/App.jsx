import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/home/Home';
import About from './container/about/About';
import Stories from './container/stories/Stories';
import LandingPage from './layouts/LandingPage';
import './assets/App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <LandingPage />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/stories" component={Stories} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
