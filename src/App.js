import React, { Component } from 'react';
import './App.css';
import Project from './Project/Project';

class App extends Component {

  state = {
    projects: [
      { id: 1, projectName: 'First project', companyName: 'UXPin' },
      { id: 2, projectName: 'Second project', companyName: 'Vehiculum' },
      { id: 3, projectName: 'Third project', companyName: 'ING' },
    ],
    showProjects: false,
}

deleteProjectHandler = (projectIndex) => {
const projects = [...this.state.projects];
projects.splice(projectIndex, 1);
this.setState({projects: projects});
}


nameChangeHandler = ( event, id ) => {
  const projectIndex = this.state.projects.findIndex( p => {
    return p.id === id;
  });

  const project = {
    ...this.state.projects[projectIndex]
  };

 project.projectName = event.target.value;

 const projects = [...this.state.projects];
 projects[projectIndex] = project;

  this.setState({projects: projects })
}

toggleProjectsHandler = () => {
  const doesShow = this.state.showProjects
  this.setState({showProjects: !doesShow})
  console.log(this.state.showProjects)

}

  render() {

    let projects = null

    if (this.state.showProjects === true) {
      projects = (
        <div>
          {this.state.projects.map((projects,index) => {
            return <Project 
              projectName={projects.projectName}
              companyName={projects.companyName}
              click={() => this.deleteProjectHandler(index)}
              changed={(event) => this.nameChangeHandler(event, projects.id)}
              key={projects.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is a demo project!</h1>
        {projects}
        <button onClick={this.toggleProjectsHandler}>Click me</button>
      </div>
    );
  }
}

export default App;
