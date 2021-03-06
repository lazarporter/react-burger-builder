import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../HOC/withClass'
import Aux from '../HOC/Auxiliary'


class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: 'adslfh', name: 'Chava', age: 2},
      {id: 'wewrv', name: 'Hannah', age: 24},
      {id: 'opkml', name: 'Lazer', age: 26}
    ],
    showPersons : false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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
    
    this.setState( (prevState, props) => {
      return {
        persons: personsTemp,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }
 
  togglePersonsHandler = () =>{

    this.setState({showPersons: !this.state.showPersons})
  }

  render() {
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
      />
    }
    
    

    return (
        <Aux classes={classes.App}> 
          <button onClick={ () =>{this.setState({showCockpit:!this.state.showCockpit})} }>Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength={this.state.persons.length}
            click={this.togglePersonsHandler}
            /> : null}
            {persons}
          
        </Aux>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'), 'Hi, I\'m a React App!!')
  }
}

export default withClass(App, classes.App);
