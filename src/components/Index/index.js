import React, {Component} from 'react'
import './index.css'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      checkedInHackers: [], 
      totalHackers: []
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

  fetchCheckedIn(){
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
        checkedInHackers: data
      })
      )
  }

  fetchTotal(){
    fetch('/totalHackers', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>
        this.setState({
          totalHackers: data
      })
    )
  }


  componentDidMount(){
    this.fetchUser();
    this.fetchCheckedIn(); 
    this.fetchTotal(); 
  }
  
  render() {
    return (
    <div>
      <div className="indexRow">
        <h1 className = "hackerHeader">Hackers</h1>
        <h1 className = "dataHeader">Data</h1>
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
        {this.state.checkedInHackers.map((item) => 
          <h1 key = {item}>Hackers checked in: {item.checkedInCount}</h1>
          )}
        {this.state.totalHackers.map((item) => 
          <h1 key = {item}>Total Hackers: {item.totalHackers}</h1>
          )}
      </div>
      
      </div>
    </div>
    );
  }
}

export default Index; 