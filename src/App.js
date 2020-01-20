import React, { Component } from 'react';
import './App.css';
import Project from './Project/Project';

class App extends Component {

  state = {
    projects: [
      { projectName: 'First project', companyName: 'UXPin' },
      { projectName: 'Second project', companyName: 'Vehiculum' },
      { projectName: 'Third project', companyName: 'ING' },
    ]
};

handleState  = (newName) => {
  this.setState({  
    projects: [
      { projectName: newName },
      { projectName: 'First project' },
      { projectName: 'Third project' },
    ]

  })
};

nameChangeHandler = (event) => {
  this.setState({  
    projects: [
      { projectName: event.target.value , companyName: 'UXPin' },
      { projectName: 'Second project', companyName: 'Vehiculum' },
      { projectName: 'Third project', companyName: 'ING' },
    ]

  })
};

  render() {
    return (
      <div className="App">
        <h1>My react app demo project</h1>
        <Project 
          projectName={this.state.projects[0].projectName} 
          companyName={this.state.projects[0].companyName}
          changed={this.nameChangeHandler}/>
        <Project 
          projectName={this.state.projects[1].projectName} 
          companyName={this.state.projects[1].companyName} />
        <Project 
          projectName={this.state.projects[2].projectName} 
          companyName={this.state.projects[2].companyName} />
        <button onClick={this.handleState.bind(this, 'UXPin!!!')}>Click me</button>
      </div>
    );
  }
}

export default App;
