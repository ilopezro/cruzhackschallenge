import React, {Component} from 'react'
import './index.css'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      hackerInfo: []
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

  fetchHackerInfo(){
    fetch('/checkedInHackers', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>
      this.setState({
        hackerInfo: data
      })
      )
  }


  componentDidMount(){
    this.fetchUser();
    this.fetchHackerInfo(); 
  }
  
  render() {
    return (
    <div>
      <div className="indexHeader">
        <h1>Hackers</h1>
      </div>
      <div className = "hackerRow">
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
        {this.state.hackerInfo.map((item) => 
          <h1>Hackers checked in: {item.checkedInCount}</h1>
          )}
      </div>
      
      </div>
    </div>
    );
  }
}

export default Index; 