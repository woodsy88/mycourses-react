import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Default from './components/Default';
import Navbar from './components/Navbar';
import Details from "./components/Details";
import CoursesPage from "./pages/CoursesPage";
import Course from "./components/Course";
import SingleCourse from './pages/SingleCourse';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/courses/:slug" component={SingleCourse} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
