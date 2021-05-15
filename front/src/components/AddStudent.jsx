import React from 'react';

export class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            studentExists : false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        var payload = {firstname: event.target.firstname.value, lastname: event.target.lastname.value};
        console.log(payload);
        xhr.open('POST', 'http://localhost:3500/add-student');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.send(JSON.stringify(payload));
        xhr.onreadystatechange = () => {
            console.log(xhr.responseText);
            if(xhr.responseText === 'STUDENT EXISTS'){
                this.setState({studentExists:true});
            }else{
                this.setState({studentExists:false});
            }
        };
        document.getElementById('addStudentForm').reset();
    }

    render(){
        return (<div id="addStudentDiv">
            <h2>Add Student</h2>

            <form id="addStudentForm" onSubmit={this.handleSubmit}>
                <label for="firstname">First Name:</label>
                <input className="form-control" type="text" name="firstname" id="firstnameInput" required/>
                <label for="lastname">Last Name:</label>
                <input className="form-control" type="text" name="lastname" id="lastnameInput"  required/>
                <div className="g-recaptcha" data-sitekey="my-key-here"></div>
            <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {this.state.studentExists ? <h3 id="studentExistsMessage">Student already exists</h3> : ''}
           
        </div>);
    }
}