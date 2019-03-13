import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Announcements from './components/Annoucements/Announcements'
import Index from './components/index'
import CheckIn from './components/CheckIn/CheckIn'
import Register from './components/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "header">
          <ul className="topBar">
            <Link to = "/" className="home"> Home </Link>
            <Link to = "/Announcements"> Announcements</Link>
            <Link to = "/CheckIn"> Check-In </Link>
            <Link to = "/Register"> Register </Link>
          </ul>
          <div className="content">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/Announcements" component={Announcements} />
            <Route path="/CheckIn" component={CheckIn} />
            <Route path="/Register" component={Register} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
