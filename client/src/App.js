import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/details" component={Details}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
