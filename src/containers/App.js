import React, { Component } from 'react';
import classes from './App.css';
import  Persons  from '../components/Persons/Persons';
import  Cockpit  from '../components/Cockpit/Cockpit';

class App extends Component {

constructor(props){
  super(props);
  console.log('app.js inside constructor', props);
  this.state = {
    persons:[
      {id:"1", name:"Vinod Kumar"},
      {id:"2", name:"Vjay Kumar"},
      {id:"3", name:"Tiger"},
      {id:"4", name:"Lion"}
    ],
    otherState:'Something else',
    showPersons:false
  }
}

componentWillMount(){
  console.log('app.js componentWillMount');
}

componentDidMount(){
  console.log('app.js, component did mount');
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
    console.log('app.js, render()');
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
