import React, { Component } from 'react';
import classes from './App.css';
import  Persons  from '../components/Persons/Persons';
import  Cockpit  from '../components/Cockpit/Cockpit';

class App extends Component {

 state = {
   persons:[
     {id:"1", name:"Vinod Kumar"},
     {id:"2", name:"Vjay Kumar"},
     {id:"3", name:"Tiger"},
     {id:"4", name:"Lion"}
   ],
   otherState:'Something else',
   showPersons:false
 }

nameChangedHandler = (event, id) => {
 const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
 })

 const person = {
   ...this.state.persons[personIndex]
 };

 person.name = event.target.value;
 const persons = [...this.state.persons];
 persons[personIndex] = person;
 this.setState({persons:persons});
}

togglePersonsHandler = (event) => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}

deletePersonHandler = (personIndex) => {
   //const persons = this.state.persons.splice();
   console.log("deleting ->"+personIndex);
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons:persons});
}

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
         appTitle={this.props.title}
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler} />

        { persons }
      </div>
    );
  }
}
export default App;
