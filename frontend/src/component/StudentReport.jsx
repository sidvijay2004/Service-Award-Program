import React, { Component } from 'react';
import ReportService from '../service/ReportService';


class StudentReport extends Component {

  constructor(props) {

      super(props)
      this.state = {
        studentReports: [],
        studentId: this.props.match.params.studentId,
        name: '',
        message: null
      }
      this.refreshStudents = this.refreshStudents.bind(this)


  }

  componentDidMount() {
      this.refreshStudents();
  }

  refreshStudents() {
    console.log("Iside refresh stud");


      ReportService.getStudentMonthlyReport(this.state.studentId)
          .then(
              response => {
                  console.log(response);
                  this.setState({ studentReports: response.data})

              }
          )
  }

  getWeeklyReport(studentId) {

    ReportService.getStudentWeeklyReport(this.state.studentId)
        .then(
            response => {
                console.log(response);
                this.setState({ studentReports: response.data})

            }
        )
      }

render() {
    return (
        <div className="container">
            <h3>Student Report</h3>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

            <div className="container">
            <table border = "3">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Period of Activity</th>
                    <th>Total Hours</th>

                </tr>
            </thead>
            <tbody>
                {
                    this.state.studentReports.map(
                        student =>
                            <tr key={student.studentId}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.period}</td>
                                <td>{student.totalHours}</td>

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


export default StudentReport
