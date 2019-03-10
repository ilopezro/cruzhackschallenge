import React, {Component} from 'react'
import '../css/style.css'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  fetchUser(){
    fetch(`/hackers`, {
      method: 'GET', 
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => 
      this.setState({
        users: data
      })
      )
  }

  componentDidMount(){
    this.fetchUser()
  }
  
  render() {
    return (
    <div>
      <div className="indexHeader">
        <h2>Hackers</h2>
      </div>
      <div className="hackerDiv">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Student ID</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item) =>
              <tr key = {item.unique_id}>
              <td>{item.first_name}</td>
              <td>{item.last_name} </td>
              <td>{item.student_id}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
      <div className="hackerInfo">
      This is hacker info
      </div>
    </div>
    );
  }
}

export default Index; 