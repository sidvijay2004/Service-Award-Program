import React, { Component } from 'react';
import ReportService from '../service/ReportService';
import queryString from 'query-string'



class StudentReport extends Component {

  constructor(props) {

      super(props)

      const values = queryString.parse(this.props.location.search)
      console.log(values.period)
      this.state = {
        studentReports: [],
        studentId: this.props.match.params.studentId,
        name: '',
        period: values.period,
        message: null
      }
      this.refreshStudentReport = this.refreshStudentReport.bind(this)
      this.handleCheckWeekly = this.handleCheckWeekly.bind(this)
      this.handleCheckMonthly = this.handleCheckMonthly.bind(this)
  }

  componentDidMount() {
      this.refreshStudentReport();
  }

  handleCheckWeekly() {
    console.log("Inside handleCheckWeekly");

   //this.props.history.push(`/StudentReport/${this.state.studentId}?period=w`)
   this.setState({ period: "w"})


  ReportService.getStudentWeeklyReport(this.state.studentId)
      .then(
          response => {
              console.log(response);
              this.setState({ studentReports: response.data})

          }
      )
  }

  handleCheckMonthly() {
    console.log("Inside handleCheckMonthly");

    //this.props.history.push(`/StudentReport/${this.state.studentId}?period=m`)
    this.setState({ period: "m"})

    ReportService.getStudentMonthlyReport(this.state.studentId)
        .then(
            response => {
                console.log(response);
                this.setState({ studentReports: response.data})

            }
        )
  }

  refreshStudentReport() {
    console.log("Iside refresh stud");

    if(this.state.period == "w"){
      ReportService.getStudentWeeklyReport(this.state.studentId)
          .then(
              response => {
                  console.log(response);
                  this.setState({ studentReports: response.data})

              }
          )
    }
    else{
      ReportService.getStudentMonthlyReport(this.state.studentId)
          .then(
              response => {
                  console.log(response);
                  this.setState({ studentReports: response.data})

              }
          )
      }
  }



render() {
    return (
        <div className="container">
            <h3>Student Report</h3>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

            <div>
              <li>
                <label>
                  <input
                    type="radio"
                      value="m"
                      checked={this.state.period === "m"}
                      onClick={this.handleCheckMonthly}
                    />
                    Monthly
                  </label>
              </li>

          <li>
              <label>
                <input
                  type="radio"
                    value="w"
                    checked={this.state.period === "w"}
                    onClick={this.handleCheckWeekly}
                  />
                  Weekly
                  </label>
            </li>


            </div>

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
