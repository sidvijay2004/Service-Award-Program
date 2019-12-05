import React, { Component } from 'react';
import StudentService from '../service/StudentService';


class ListStudents extends Component {

      constructor(props) {
          super(props)
          this.state = {
            students: [],
            message: null
          }
          this.deleteStudentClicked = this.deleteStudentClicked.bind(this)
          this.updateStudentClicked = this.updateStudentClicked.bind(this)
          this.addStudentClicked = this.addStudentClicked.bind(this)
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
      deleteStudentClicked(id) {
        this.setState({ message: `Delete of student ${id} starting` })

          StudentService.deleteStudent(id)
          .then(
              response => {
                  this.setState({ message: `Delete of student ${id} Successful` })
                  this.refreshStudents()
              }
          )

      }

      addStudentClicked() {
        this.props.history.push(`/students/-1`)
    }

    updateStudentClicked(id) {
      console.log('update ' + id)
      this.props.history.push(`/students/${id}`)
      }

    render() {
        return (
            <div className="container">
                <h3>Student List</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="container">
                <table border = "3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Student Number</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th>Delete</th>
                        <th>Update</th>
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
                                    <td>{student.studentNum}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.grade}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.studentId)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateStudentClicked(student.studentId)}>Update</button></td>

                                </tr>

                        )
                    }
                </tbody>

                  </table>

                <div className="row">
                      <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
                </div>

                </div>
            </div>
        )
    }
}


export default ListStudents
