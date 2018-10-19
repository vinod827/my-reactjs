import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  const assignedClasses = [];
  let buttonClass = '';
  if(props.showPersons){
    buttonClass = classes.Red;
  }

  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }


  return (
    <div className={classes.Cockpit}>
      <h1>  { props.appTitle } </h1>
      <p className={assignedClasses.join(' ')}> this is really working</p>
      <button
        onClick={props.clicked} className={buttonClass}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
