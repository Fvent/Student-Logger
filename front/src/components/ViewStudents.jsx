import React from 'react';

export class ViewStudents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentInfo: []
        }
        this.getStudents = this.getStudents.bind(this);
    }

    async componentDidMount(){
        this.getStudents();
    }

    async getStudents() {
        const url = 'http://localhost:3500/students';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({studentInfo: data});
    }
    render(){
        return (<div id="viewStudentsDiv">
            <h2>List of students</h2>
            
                <table className="table table-striped">
                    <thead>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </thead>
                    <tbody>
                    {
                        this.state.studentInfo.map((item) => 
                        <tr>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                        </tr>)
                    }
                    </tbody>
                    
                </table>
            
        </div>);
    }
}