import 'whatwg-fetch';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/home/Home';
import About from './container/about/About';
import StoriesPage from './container/stories/StoriesPage';
import Story from './component/story/Story';
import NotFound from './component/notFound/NotFound';
import Navigation from './container/Navigation';

import Footer from './container/footer/Footer';
import './assets/App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navigation>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/story-list" component={StoriesPage} />
              <Route path="/stories/:id" component={Story} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Navigation>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
