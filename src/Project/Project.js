import React from 'react';
import ReactDOM from 'react-dom';
import './Project.css';

const Project = (props) => {
    return (
        <div className="Project">
            <h2 onClick={props.click}>{props.projectName}</h2>
            <h3>{props.companyName}</h3>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Project