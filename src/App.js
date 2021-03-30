import React, { Component } from 'react'
import { CardList } from '../src/components/card-list/card-list'
import { SearchBox } from '../src/components/search-box/search-box'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }


    this.handleChange = this.handleChange.bind(this)

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(erro => {
        console.log(erro)
      })
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="app">
        <h1>Monster Cards</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList
          monsters={filteredMonsters}>
        </CardList>

      </div>
    )
  }
}


export default App