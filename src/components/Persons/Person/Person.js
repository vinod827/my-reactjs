import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {


  constructor(props){
    super(props);
    console.log('person.js inside constructor', props);

  }

  componentWillMount(){
    console.log('person.js componentWillMount');
  }

  componentDidMount(){
    console.log('person.js, component did mount');
  }


  render(){
    console.log('person.js render()');
    return (
      <div className={classes.Person}>
      <p onClick={this.props.click}>Im {this.props.name}</p>
      <p>{this.props.children}</p>
      <p>name is {this.props.name}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;
