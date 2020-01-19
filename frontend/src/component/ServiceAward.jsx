import React, { Component } from 'react';
import ReportService from '../service/ReportService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';


class ServiceAward extends Component {

  constructor(props) {

      super(props)

      this.state = {
        studentReports: [],
        studentId: this.props.match.params.studentId,
        name: '',
        awardLevel: 'all',
        message: null
      }
      this.refreshStudentReport = this.refreshStudentReport.bind(this)
      this.handleAwardChange = this.handleAwardChange.bind(this)

  }

  componentDidMount() {
      this.refreshStudentReport(this.state.awardLevel);
  }

  handleAwardChange(event) {
    console.log("event.target.awardLevel = " + event.target.value)
    this.setState({awardLevel: event.target.value});
    this.refreshStudentReport(event.target.value);
  }

  refreshStudentReport(awardLevel) {
    console.log("Iside refresh stud this.state.awardLevel = " + awardLevel);
      ReportService.getStudentTotalHours(awardLevel)
          .then(
              response => {
                  console.log(response);
                  this.setState({ studentReports: response.data})

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
            <h3>Student Report</h3>
            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

            <Formik>

            <Form>
            <fieldset className="form-group">
                <label>Group Students by Award Category:

                  <select value={this.state.awardLevel} onChange={this.handleAwardChange}>
                    <option value="all">Everyone</option>
                    <option value="CSA Achievement">CSA Achievement</option>
                    <option value="CSA Service">CSA Service</option>
                    <option value="CSA Community">CSA Community</option>
                    <option value="none">No award</option>
                  </select>

                  </label>

            </fieldset>
            </Form>
            </Formik>

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
        </React.Fragment>
    )
}
}


export default ServiceAward
