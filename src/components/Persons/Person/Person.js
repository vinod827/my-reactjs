import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
    <p onClick={props.click}>Im {props.name}</p>
    <p>{props.children}</p>
    <p>name is {props.name}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
