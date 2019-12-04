import React from 'react';
import './App.css';
import CardList from './Components/CardList';
import axios from 'axios';

class App extends React.Component {
  
  state = {
    users: [],
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/taylorbcool`)
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data]
        });
        axios.get(response.data.followers_url)
          .then(response => {
            response.data.forEach( user => {
              axios.get(`https://api.github.com/users/${user.login}`)
                .then( response => {
                  this.setState( {
                    users: [...this.state.users, response.data]
                  })
                })
            })
          })
      })
  }

  render() {
    return (
      <div className="App">
        <CardList users={this.state.users}/>
      </div>
    );
  }
}

export default App;