import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'adslfh', name: 'Chava', age: 2},
      {id: 'wewrv', name: 'Hannah', age: 24},
      {id: 'opkml', name: 'Lazer', age: 26}
    ]
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
    let btnClass= ''

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person, index) =>{
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key ={person.id}
                changed={(event)=> {this.nameChangedHandler(event, person.id)}}/>
            )
          })}
      </div>
      )
      btnClass = classes.red
    }
    
    const assignedClasses = []
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <=1 ){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}> 
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a React App!!')
  }
}

export default App;
