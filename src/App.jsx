import React from 'react';
import { objectOf, object } from 'prop-types';
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
import projects from './staticData/projects';

const hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <div className="wrapper">
        <Navigation history={hist}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/projects"
              render={() => (<ProjectsPage projects={projects} />)}
            />
            <Route
              exact
              path="/projects/:id"
              render={(props) => {
                let projectId = props.location.pathname.replace('/projects/', '');
                projectId = parseInt(projectId, 10);
                return (
                  <Project
                    index={projectId}
                  />
                );
              }}
            />

            <Route
              exact
              path="/stories"
              render={() => (<StoriesPage />)}
            />
            <Route
              exact
              path="/stories/:id"
              render={(props) => {
                let storyId = props.location.pathname.replace('/stories/', '');
                storyId = parseInt(storyId, 10);
                console.info(storyId);
                return (
                  <Story
                    index={storyId}
                  />
                );
              }}
            />
            {/* <Route path="/stories/:id" component={Story} /> */}
            <Route path="/join" component={Join} />
            <Route path="/contacts" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </Navigation>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

App.propTypes = {
  location: objectOf(object).isRequired,
};
