import React, { Component } from 'react';
import ReportService from '../service/ReportService';

class ServiceAward extends Component {

  constructor(props) {

      super(props)

      this.state = {
        studentReports: [],
        studentId: this.props.match.params.studentId,
        name: '',
        message: null
      }
      this.refreshStudentReport = this.refreshStudentReport.bind(this)
  }

  componentDidMount() {
      this.refreshStudentReport();
  }


  refreshStudentReport() {
    console.log("Iside refresh stud");
      ReportService.getStudentTotalHours()
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
                    <th>Total Hours</th>
                    <th>Award</th>


                </tr>
            </thead>
            <tbody>
                {
                    this.state.studentReports.map(
                        student =>
                            <tr key={student.studentId}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.totalHours}</td>
                                <td>{student.awardLevel}</td>

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


export default ServiceAward
