import React, { Component } from 'react'
import { CardList } from '../src/components/card-list/card-list'
import { Input } from '@material-ui/core';
import './App.css'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="app">
        <Input onChange={(e) => this.setState({ searchField: e.target.value })}
          className="input-text" variant="filled" type="search" color="primary" label="Monsters..." placeholder="monters..."></Input>
        <CardList monsters={filteredMonsters}></CardList>

      </div>
    )
  }
}


export default App