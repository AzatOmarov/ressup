import 'whatwg-fetch';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import About from './container/about/About';
import Contacts from './component/contacts/Contacts';
import Home from './container/home/Home';
import Join from './component/join/Join';
import NotFound from './component/notFound/NotFound';
import Navigation from './container/Navigation';
import Project from './container/projects/Project';
import ProjectsPage from './container/projects-page/Projects';
import StoriesPage from './container/stories/StoriesPage';
import Story from './component/story/Story';
import Footer from './container/footer/Footer';
import './assets/App.scss';

const hist = createBrowserHistory();

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router history={hist}>
        <div className="wrapper">
          <Navigation history={hist}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/procs/:id" component={Project} />
              <Route path="/story-list" component={StoriesPage} />
              <Route path="/stories/:id" component={Story} />
              <Route path="/join" component={Join} />
              <Route path="/contacts" component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          </Navigation>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
