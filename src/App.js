
import './App.css';
import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    //create another state that is filteredMonsters, which will hold all initally
    //but it will change itself. 
    this.state = {
      //this is the initial state of the monsters
     monsters: [],
     filteredMonsters: []
    };

  }

  // fetching the data with lifecycle methods

  //first time it is added onto the page. happens once. y
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => this.setState(()=> {
        return {monsters: users, filteredMonsters: users}
      }))
  }

  //new function for search change

  onSearchChange = (event)=> {
    //console.log(event) // type event
    // target . value is what gives the value 
    const searchValue = event.target.value.toLocaleLowerCase();
    //filter the monsters with the ORIGINAL list of monsters that DO NOT change.
    //put the CHANGED FILTERED list into FILTEREDMONSTERS 
    const filteredMonsters = this.state.monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    })
    this.setState(()=> {
      return { filteredMonsters : filteredMonsters }
    })
  }
  
  render(){
  return (
    <div className="App">
    <h1>Monster Search</h1>
    <SearchBox onChangeHandler = {this.onSearchChange} placeholder = 'search monsters' className = 'monsters-search-box'/>
    <CardList filteredMonsters= {this.state.filteredMonsters}/>
       
    </div>
  );
  }

}

export default App;
