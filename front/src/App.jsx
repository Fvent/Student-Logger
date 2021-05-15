import React from 'react';
import { AddStudent } from './components/AddStudent';
import { ViewStudents } from './components/ViewStudents';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// import { Navbar, Nav } from 'react-bootstrap';


export class App extends React.Component {
    render(){
        return (<div id="app">
            <h1>Student logger</h1>
            {/* <AddStudent />
            <ViewStudents /> */}
            
            <Router>
            <Nav>
                <Link to="add-student">Add Student</Link>
                <Link to="view-students">View Students</Link>
            </Nav>
                <Switch>
                    <Route path='/' exact render={(props) => <AddStudent {...props} />} />
                    <Route path='/add-student' render={(props) => <AddStudent {...props} />} />
                    <Route path='/view-students' render={(props) => <ViewStudents {...props} />} />
                </Switch>
                    
            </Router>
            
        </div>)
    }
}