import React, { Component } from 'react';
import StudentService from '../service/StudentService';


class ListStudents extends Component {

      constructor(props) {
          super(props)
          this.state = {
            students: [],
            message: null
          }
          this.refreshStudents = this.refreshStudents.bind(this)
      }

      componentDidMount() {
          this.refreshStudents();
      }

      refreshStudents() {
          StudentService.getAllStudents()
              .then(
                  response => {
                      console.log(response);
                      this.setState({ students: response.data})
                  }
              )
      }
    render() {
        return (
            <div className="container">
                <h3>Student List</h3>
                <div className="container">
                <table border = "3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.students.map(
                            student =>
                                <tr key={student.studentId}>
                                    <td>{student.studentId}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.grade}</td>
                                </tr>
                        )
                    }
                </tbody>

                  </table>
                </div>
            </div>
        )
    }
}


export default ListStudents
