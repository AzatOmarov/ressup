import React, { useState } from 'react';
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
import Questionaire from './component/questionaire/Questionaire';
import './assets/App.scss';
import projects from './staticData/projects';

const hist = createBrowserHistory();

export default function App() {
  const [isQuestionarePage, setIsQuestionarePage] = useState(false);
  return (
    <Router history={hist}>
      {/* <div className="wrapper"> */}
      <Navigation
        history={hist}
        isQuestionarePage={isQuestionarePage}
        setIsQuestionarePage={setIsQuestionarePage}
      >
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
              return (
                <Story
                  index={storyId}
                />
              );
            }}
          />
          <Route path="/join" component={Join} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/questionaire" component={Questionaire} />
          <Route component={NotFound} />
        </Switch>
        
      </Navigation>

      {/* </div> */}
    </Router>
  );
}

App.propTypes = {
  location: objectOf(object).isRequired,
};
