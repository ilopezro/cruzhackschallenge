import React, {Component} from 'react'
import './styles.css'

class CheckIn extends Component {
    render() {
      return (
        <div className = "message">
          <h1>Welcome to Check-In</h1>
          <h4>Enter name of student and student ID number to register user</h4>
          <form className = "checkInForm" action = "/checkUserIn" method = "POST">
            First Name:
            <input placeholder="First Name" name = "firstName"/>
            <br/>
            Last Name:
            <input placeholder="Last Name" name = "lastName"/>
            <br/>
            Student ID:
            <input placeholder="Student ID #" name = "studentID"/>
            <br/>
            <button className = "button">Check-In</button>
          </form>
        </div>
      );
    }
  }

export default CheckIn; 