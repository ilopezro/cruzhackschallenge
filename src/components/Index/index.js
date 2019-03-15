import React, {Component} from 'react'
import './index.css'

class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      checkedInHackers: [], 
      totalHackers: [], 
      totalDietRest: [], 
      totalPhysRest: []
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

  fetchTotalDiet(){
    fetch('/totalDietRest', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>
        this.setState({
          totalDietRest: data
      })
    )
  }

  fetchTotalPhys(){
    fetch('/totalHandicap', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data =>
        this.setState({
          totalPhysRest: data
      })
    )
  }

  componentDidMount(){
    this.fetchUser();
    this.fetchCheckedIn(); 
    this.fetchTotal();
    this.fetchTotalDiet() 
    this.fetchTotalPhys()
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
          {this.state.totalDietRest.map((item) => 
          <h1 key = {item}>Diet Restrictions: {item.totalDiet}</h1>
          )}
          {this.state.totalPhysRest.map((item) => 
          <h1 key = {item}>Physical Restrictions: {item.handicap}</h1>
          )}
      </div>
      
      </div>
    </div>
    );
  }
}

export default Index; 