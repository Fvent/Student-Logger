import React from 'react';

export class ViewStudents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentInfo: []
        }
        this.getStudents = this.getStudents.bind(this);
    }

    // async componentDidMount() {
    //     this.getForumInfo();
    // }

    // async getForumInfo(){ 
    //     const url = 'http://localhost:1515/viewcomments';
    //     const response = await fetch(url);
    //     const data = await response.json();
      
    //       this.setState({loading: false, foruminfo: data})
    //       console.log(this.state.foruminfo);
    // }
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
            {/* {this.state.studentInfo.map((item) =>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item"><h6>First name:{item.firstname}</h6><h6>Last name:{item.lastname}</h6></li>
            </ul>)} */}
            
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