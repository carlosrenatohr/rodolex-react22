import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor'); 
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchField }
    });
  }

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        
          <SearchBox 
            className="search-box"
            placeholder="Search Monsters"
            onChangeHandler={onSearchChange}
          />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState(
          () => {
            return {monsters: users}
          },
          () => {
            console.log(this.state);
          }
        )
        
      })
  }
}

export default App;