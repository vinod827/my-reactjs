import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{


  constructor(props){
    super(props);
    console.log('persons.js inside constructor', props);

  }

  componentWillMount(){
    console.log('perons.js componentWillMount');
  }

  componentDidMount(){
    console.log('persons.js, component did mount');
  }

  render(){
    console.log('persons.js render()');
    return this.props.persons.map((person, index) => {
        return <Person
        click={() => this.props.clicked({index})}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}/>
      });
  }
}

export default Persons;
