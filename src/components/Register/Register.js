import React, {Component} from 'react'
import './register.css'

class Register extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

    render() {
      return (
        <form className = "registerUserForm" action = "/signUpUser" method = "POST">
        <h1>Welcome to Registration Page. </h1>
        <h4>Please fill out form and submit. Give an answer to every starred box. </h4> 
          <input className = "firstNameInput" placeholder="First Name" name = "firstName" required/>
          <input className = "lastNameInput" placeholder="Last Name" name = "lastName" required/>
          <br/>
          <input className = "phoneNumberInput" placeholder="Phone Number" name = "phoneNumber"/>
          <input className = "emailInput"placeholder="Email" name = "email" required/>
          <br/>
          <input className = "majorInput" placeholder="Major" name = "studentMajor" required />
          <input className = "idInput" placeholder="Student ID" name = "studentID" required/>
          <br/>
          <input className = "ageInput" placeholder = "age" name = "studentAge" required/>
          <br/>
          <br/>
          <label>
            Do you have any dietary restrictions? *
            <select className = "dietInput" name = "dietSelect"> 
              <option value="null"> </option>
              <option name = "dietYes" value="yes">Yes</option>
              <option name = "dietNo" value="no">No</option>
            </select>
          </label>
          <br/>
        If yes, please tell us below. 
        <br/>
        <textarea className = "dietTxt" name = "dietDescription"></textarea>
        <br/>
        <br/>
          <label>
          Do you have any physical disabilities that we should know of? *
            <select className = "physInput" name = "physSelect">
              <option value="null"> </option>
              <option name = "physYes" value="yes">Yes</option>
              <option name = "physNo" value="no">No</option>
            </select>
        </label>
        <br/>
        If yes, please tell us below. 
        <br/>
        <textarea className = "physTxt" name = "physDescription"></textarea>
          <br/>
          <button className = "button">Create</button>
        </form>
      );
    }
  }

export default Register; 