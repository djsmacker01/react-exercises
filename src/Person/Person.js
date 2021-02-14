import React from 'react';
// import Radium from 'radium'
import './Person.css'
const person = (props) => {

  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '350px'
  //   }
  // }
  return (
    <div className="Person" >
    <p onClick={props.click}>I'm  {props.name} and i am  {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text"
        onChange={props.change}
        value={props.name} />
    </div>
  )
}

export default person;
