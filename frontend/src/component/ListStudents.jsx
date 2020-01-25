  import React, { Component } from 'react';
  import { useTable, useFilters, userGlobaalFilter } from 'react-table';
  import StudentService from '../service/StudentService';
  import ReportService from '../service/ReportService';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import Header from "../Header";
  import AccessDenied from "./AccessDenied";
  import UserProfile from '../UserProfile';
  import SidebarMenu from '../SidebarMenu';
  import DonutChart from './DonutChart';



  // const ReactTable = window.ReactTable.default;


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
      this.handleSearchChange = this.handleSearchChange.bind(this)
      this.studAwardClicked = this.studAwardClicked.bind(this)
      this.studentReport = this.studentReport.bind(this)

    }

    componentDidMount() {
      // Security Check
        if(!UserProfile.isLoggedIn() || !UserProfile.isAdmin()){
          this.props.history.push(`/AccessDenied`)
        }
    
          this.refreshStudents();
  }

    refreshStudents() {
      console.log("Iside refresh stud");

      StudentService.getAllStudents()
        .then(
          response => {
            console.log(response);
            this.setState({ students: response.data })

          }
        )
    }

    studentReport(studentId, studentName) {
      UserProfile.setStudentId(studentId)
      UserProfile.setName(studentName)
      this.props.history.push(`/StudentReport?period=m`)
    }
    deleteStudentClicked(id) {
      this.setState({ message: `Delete of student ${id} starting` })

      StudentService.deleteStudent(id)
        .then(
          response => {
            this.setState({ message: `Delete is Successful` })
            console.log("Before REfresh ");
            this.refreshStudents();
            console.log("Iside delete");
          }
        )

    }

    addStudentClicked() {
      UserProfile.setStudentId(-1)
      this.props.history.push(`/students`)
    }

    studAwardClicked() {
      this.props.history.push(`/getStudentTotalHours`)
    }

    updateStudentClicked(id) {
      console.log('update ' + id)
      UserProfile.setStudentId(id)
      this.props.history.push(`/students`)
    }

    listHours(id, studentName) {
      UserProfile.setStudentId(id)
      UserProfile.setName(studentName)
      this.props.history.push(`/ListStudentLogs`)
    }

    handleSearchChange(event) {
      console.log("Inside handleSearchChange:event.target.value=" + event.target.value);

      StudentService.searchStudents(event.target.value)
        .then(
          response => {
            console.log(response);
            this.setState({ students: response.data })

          }
        )

    }

    render() {
      return (
        <React.Fragment>
          <p align="center"> <Header /> </p>
          <hr />

          <SidebarMenu />

          <div className="container">
            <p align="center">
              <h3>Student List</h3>
            </p>


            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
            <form onSubmit={this.handleSubmit}>
              <label>
                Search:
                    <input type="text" value={this.state.value} onChange={this.handleSearchChange} />
              </label>
            </form>


            <div className="container">

              <table border="3">
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
                          <td><button className="btn btn-success" onClick={() => this.listHours(student.studentId, student.firstName)}>Hours</button></td>
                          <td><button className="btn btn-success" onClick={() => this.studentReport(student.studentId, student.firstName)}>Monthly Report</button></td>


                        </tr>

                    )
                  }
                </tbody>

              </table>


              <div>

              </div>


              <div className="row">
                <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
              </div>
              <div className="row">
                <button className="btn btn-success" onClick={this.studAwardClicked}>Student Award Report</button>
              </div>

            </div>
          </div>

        </React.Fragment>

      )
    }
  }


  export default ListStudents
