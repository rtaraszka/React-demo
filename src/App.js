import React, { Component } from 'react';
import './App.css';
import Project from './Project/Project';

class App extends Component {

  state = {
    projects: [
      { projectName: 'First project' },
      { projectName: 'Second project' },
    ]
};

handleState  = () => {
  this.setState({  
    projects: [
      { projectName: 'Second project' },
      { projectName: 'First project' },
    ]

  })
};

  render() {
    return (
      <div className="App">
        <h1>My react app demo project</h1>
        <Project projectName={this.state.projects[0].projectName} />
        <Project projectName={this.state.projects[1].projectName} />
        <button onClick={this.handleState}>Click me</button>
      </div>
    );
  }
}

export default App;
