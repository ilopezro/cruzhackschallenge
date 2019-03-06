import React, {Component} from 'react'

class Register extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

    render() {
      return (
        <form action = "/signUpUser" method = "POST">
        <h1>Welcome to Registration Page. </h1>
        <h4>Please fill out form and submit. Give an answer to every starred box. </h4>
          <input placeholder="First Name" name = "firstName" required/>
          <input placeholder="Last Name" name = "lastName" required/>
          <br/>
          <input placeholder="Phone Number" name = "phoneNumber"/>
          <input placeholder="Email" name = "email" required/>
          <br/>
          <input placeholder="Major" name = "studentMajor" required />
          <input placeholder="Student ID" name = "studentID" required/>
          <br/>
          <input placeholder = "age" name = "studentAge" required/>
          <br/>
          <br/>
          <label>
            Do you have any dietary restrictions? *
            <select name = "dietSelect"> 
              <option value="null"> </option>
              <option name = "dietYes" value="yes">Yes</option>
              <option name = "dietNo" value="no">No</option>
            </select>
          </label>
          <br/>
        If yes, please tell us below. 
        <br/>
        <textarea name = "dietDescription"></textarea>
        <br/>
        <br/>
          <label>
          Do you have any physical disabilities that we should know of? *
            <select name = "physSelect">
              <option value="null"> </option>
              <option name = "physYes" value="yes">Yes</option>
              <option name = "physNo" value="no">No</option>
            </select>
        </label>
        <br/>
        If yes, please tell us below. 
        <br/>
        <textarea name = "physDescription"></textarea>
          <br/>
          <button>Create</button>
        </form>
      );
    }
  }

export default Register; 