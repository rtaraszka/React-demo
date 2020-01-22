import React, { Component } from 'react';
import './App.css';
import Project from './Project/Project';

class App extends Component {

  state = {
    projects: [
      { projectName: 'First project', companyName: 'UXPin' },
      { projectName: 'Second project', companyName: 'Vehiculum' },
      { projectName: 'Third project', companyName: 'ING' },
    ],
    showProjects: false,
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

toggleProjectsHandler = () => {
  const doesShow = this.state.showProjects
  this.setState({showProjects: !doesShow})
  console.log(this.state.showProjects)

};

  render() {

    let persons = null

    if (this.state.showProjects === true) {
      persons = (
        <div>
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
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is a demo project!</h1>
        {persons}
        <button onClick={this.toggleProjectsHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
