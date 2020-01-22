import React, { Component } from 'react';
import ReportService from '../service/ReportService';
import queryString from 'query-string'
import Header from "../Header";
import UserProfile from '../UserProfile';
import SidebarMenu from '../SidebarMenu';

class StudentReport extends Component {

  constructor(props) {

    super(props)

    const values = queryString.parse(this.props.location.search)
    console.log("zzz" + values.period)
    this.state = {
      studentReports: [],
      studentId: UserProfile.getStudentId(),
      name: '',
      period: "m",
      totHours: 0,
      message: null
    }
    this.refreshStudentReport = this.refreshStudentReport.bind(this)
    this.handleCheckWeekly = this.handleCheckWeekly.bind(this)
    this.handleCheckMonthly = this.handleCheckMonthly.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.refreshStudentReport();
  }

  refreshStudentReport() {
    console.log("Iside refresh stud");
    if (this.state.period == "w") {
      ReportService.getStudentWeeklyReport(this.state.studentId)
        .then(
          response => {
            console.log(response);
            this.setState({ studentReports: response.data })

          }
        )
    }
    else {
      ReportService.getStudentMonthlyReport(this.state.studentId)
        .then(
          response => {
            console.log(response);
            this.setState({ studentReports: response.data })

          }
        )
    }
  }

  handleCheckWeekly() {
    console.log("Inside handleCheckWeekly");

    this.setState({ period: "w" })

    ReportService.getStudentWeeklyReport(this.state.studentId)
      .then(
        response => {
          console.log(response);
          this.setState({ studentReports: response.data })

        }
      )
  }

  handleCheckMonthly() {
    console.log("Inside handleCheckMonthly");

    this.setState({ period: "m" })
    ReportService.getStudentMonthlyReport(this.state.studentId)
      .then(
        response => {
          console.log(response);
          this.setState({ studentReports: response.data })

        }
      )
  }

  render() {
    return (
      <React.Fragment>
        <p align="center">
        <Header />
        </p>
        <hr />

        <SidebarMenu/>

        <div className="container">
          <h3>{UserProfile.getName()}'s Report</h3>
          {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
          <div hidden>
          {this.state.totHours =  0}
          </div>

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
            <table border="3">
              <thead>
                <tr>
                  <th>Period of Activity</th>
                  <th>Total Hours</th>

                </tr>
              </thead>
              <tbody>
                {
                  this.state.studentReports.map(
                    student =>
                      <tr key={student.studentId}>
                        <td>{student.period}</td>
                        <td>{student.totalHours}</td>
                        <td hidden>{this.state.totHours += student.totalHours}</td>
                      </tr>



                  )
                }
              </tbody>

            </table>

            <div>

              <b>Total Hours = {this.state.totHours} </b>

            </div>



          </div>
        </div>
      </React.Fragment>

    )
  }
}


export default StudentReport
