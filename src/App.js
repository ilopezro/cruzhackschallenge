import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Announcements from './components/Annoucements/Announcements'
import Index from './components/Index/index'
import CheckIn from './components/CheckIn/CheckIn'
import Register from './components/Register/Register'
import './styles.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer(){
    fetch('/');
  }

  componentDidMount(){
    this.connectToServer()
  }

  render() {
    return (
      <Router>
        <div className = "App">
          <div className = "header">
          <ul className="topBar">
              <Link to = "/" className="home"> Home </Link>
              <Link to = "/Announcements" className = "announcements"> Announcements</Link>
              <Link to = "/CheckIn" className = "checkIn"> Check-In </Link>
              <Link to = "/Register" className = "register"> Register </Link>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/Announcements" component={Announcements} />
              <Route path="/CheckIn" component={CheckIn} />
              <Route path="/Register" component={Register} />
            </Switch>
          </div>
          <div className = "footer">
            <footer>Hello from footer</footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
