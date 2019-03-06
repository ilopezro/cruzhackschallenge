import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Announcements from './components/Announcements'
import Index from './components/index'
import CheckIn from './components/CheckIn'
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <Link to = "/"> Home </Link>
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
