import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/home/Home';
import About from './container/about/About';
import Stories from './container/stories/Stories';
import Navigation from './container/Navigation';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
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
