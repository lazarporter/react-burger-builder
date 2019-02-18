import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: 'adslfh', name: 'Chava', age: 2},
      {id: 'wewrv', name: 'Hannah', age: 24},
      {id: 'opkml', name: 'Lazer', age: 26}
    ],
    showPersons : false
  }

 deletePersonHandler = (personIndex) =>{
   const personsTemp = [...this.state.persons]
   personsTemp.splice(personIndex,1)

   this.setState({
     persons: personsTemp
   })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( prsn => {
      return prsn.id === id;
    })
    
    const personTemp = {...this.state.persons[personIndex]}
    personTemp.name = event.target.value
    const personsTemp = [...this.state.persons]
    personsTemp[personIndex] = personTemp
    this.setState({
      persons: personsTemp
    })
  }
 
  togglePersonsHandler = () =>{

    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
      />
    }
    
    

    return (
        <div className={classes.App}> 
          <Cockpit
            title={this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonsHandler}
            />
            {persons}
          
        </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a React App!!')
  }
}

export default App;
