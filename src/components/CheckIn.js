import React, {Component} from 'react'

class CheckIn extends Component {
    render() {
      return (
        <div>
          Welcome to Check-In
          <br/>
          Enter name of student and student ID number to register user
          <form action = "/checkUserIn" method = "POST">
            <input placeholder="First Name" name = "firstName"/>
            <input placeholder="Last Name" name = "lastName"/>
            <input placeholder="Student ID #" name = "studentID"/>
            <br/>
            <button variant="outline-primary">Check-In</button>
          </form>
        </div>
      );
    }
  }

export default CheckIn; 