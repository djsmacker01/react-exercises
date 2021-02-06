import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
 

class App extends Component{
  state = {
      persons: [
        { name: 'success', age: 28 },
        { name: 'debby', age: 25 },
        { name: 'Deji', age: 26 },
     ],
     otherState:'some othe value',
     showPersons: false
    }
    // switchNameHandle = (newName) => {
    // // console.log('An event were made')

    // this.setState({
    //   persons: [ 
    //     { name: newName, age: 23 },
    //     { name: 'smacker', age: 29 },
    //     { name: 'niyi', age: 29 },
      
    //   ]
    // });
    // }

  deletePersonHandler = () => {
    const persons = this.state.persons
    persons.splice( -1)
    this.setState({persons:persons})
  }
  
  nameChangeHandler = (event) => {
      
    this.setState({
      persons: [
        { name: 'deji', age: 22 },
        { name: event.target.value, age: 34 },
        { name: 'niyi', age: 29 },
      
      ]
    });
  } 
    togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }

  
  render() {
    const style = {
      backgroundColor: 'tomato',
      font: 'inherit',
      padding: '8px',
      border: 'none',
      cursor: 'pointer',
      color: 'white'
    };  
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
               click={()=>this.deletePersonHandler(index)}
              name={person.name}
              afe={ person.age}/>
          }) }
      
        </div>
      )
    }
      //  former statelss component
      //  <div>
      //       <Person
      //     name={this.state.persons[0].name}
      //     age={this.state.persons[0].age}
      //     click={()=>this.switchNameHandle('lekan')}/>
      //   <Person
      //     name={this.state.persons[1].name}
      //     age={this.state.persons[1].age}
      //     change={this.nameChangeHandler}>My Hobiess: Coding </Person>
      //   <Person
      //     name={this.state.persons[2].name}
      //     age={this.state.persons[2].age} />git
      //     </div>
    
    
  return (
      <div className = "App" >
              <header className="App-header">
                <h2>Welcome to react class</h2>
              </header>
              <p className="App-intro">
        <button
          style={style}
          onClick={this.togglePersonHandler}>ToggleName</button>
          {person}
         </p>
         </div>
    )
  }
}

export default App;



  
// functional or presentational or stateless component
// const App = props => {
//   // sotre the setState in variable, then desture 
//  const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'success', age: 28 },
//       { name: 'debby', age: 25 },
//       { name: 'Deji', age: 26 },

//     ],
//     // otherState: 'some other value'
//  });
//   const [otherState, setOtherState] = useState('some other state')

//   console.log(personState,otherState)

//   const switchNameHandle = () => {
//     // console.log('An event were made')

//     setPersonState({
//       persons: [
//         { name: 'Ayo', age: 18 },
//         { name: 'smacker', age: 29 },
//         { name: 'niyi', age: 29 },

//       ]
//     });
//   }
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h2>Welcome to react class</h2>
//         </header>
//         <p className="App-intro">
//           <button onClick={switchNameHandle}>SwitchName</button>
//           <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//           <Person name={personState.persons[1].name} age={personState.persons[1].age} >My Hobiess: Coding </Person>
//           <Person name={personState.persons[2].name} age={personState.persons[2].age} />

//         </p>
//       </div>
//     );

// }
    