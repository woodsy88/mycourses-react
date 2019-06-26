import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Details from "./components/Details";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
