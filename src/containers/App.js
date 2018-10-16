import React, { Component } from 'react';
import classes from './App.css';
import  Persons  from '../components/Persons/Persons';

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

    let buttonClass = '';

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        
        <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler} />

        </div>
      );

      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
      <h1>  hi, im reactjs app.. </h1>
      <p className={assignedClasses.join(' ')}> this is really working</p>
      <button
      onClick={this.togglePersonsHandler}
      className={buttonClass}>
      Toggle Persons
      </button>

      { persons }
      </div>
    );
  }
}
export default App;
