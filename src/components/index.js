import React, {Component} from 'react'

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
        users: data, 
      })
      )
  }

  componentDidMount(){
    this.fetchUser(); 
  }

  render() {
    return (
    <div>
      <div>
        <h2>Hackers</h2>
      </div>
      <div>
      {this.state.users.map((item) =>
        <h4 key = {item.unique_id}>{item.first_name} {item.last_name}</h4>)
        }
      </div>
    </div>
    );
  }
}

export default Index; 