import React, { Component } from 'react';
import StudentService from '../service/StudentService';
import ReportService from '../service/ReportService';



class ListStudents extends Component {

      constructor(props) {

        console.log("Inside List Students Construct");

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
        console.log("Iside refresh stud");

          StudentService.getAllStudents()
              .then(
                  response => {
                      console.log(response);
                      this.setState({ students: response.data})

                  }
              )
      }

      studentReport(studentId) {
        this.props.history.push(`/StudentReport/${studentId}?period=m`)
      }
      deleteStudentClicked(id) {
        this.setState({ message: `Delete of student ${id} starting` })

          StudentService.deleteStudent(id)
          .then(
              response => {
                  this.setState({ message: `Delete of student ${id} Successful` })
                  console.log("Before REfresh ");
                  this.refreshStudents();
                  console.log("Iside delete");
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

    listHours(id) {
        this.props.history.push(`/ListStudentLogs/${id}`)
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Student Number</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.students.map(
                            student =>
                                <tr key={student.studentId}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.studentNum}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.grade}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.studentId)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateStudentClicked(student.studentId)}>Update</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.listHours(student.studentId)}>Hours</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.studentReport(student.studentId)}>Monthly Report</button></td>


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
