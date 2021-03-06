import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentLogService from '../service/StudentLogService';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';
import UserProfile from '../UserProfile';

/**
 * Renders this component when user want to access or edit their service hour credentials
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

class StudentLogComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: UserProfile.getStudentLogId(),
      studentId: UserProfile.getStudentId(),
      activityDate: '',
      description: '',
      loggedHours: '',
      category: ''
    }
    console.log("id: " + this.state.id)
    console.log("studentId: " + this.state.studentId)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
    this.handleCtgChange = this.handleCtgChange.bind(this)
  }

  componentDidMount() {

    // Security Check
    if (!UserProfile.isLoggedIn()) {
      this.props.history.push(`/AccessDenied`)
    }
    if (this.state.id == -1) {
      return
    }

    StudentLogService.getStudentLog(this.state.id)
      .then(response => this.setState({
        studentId: response.data.studentId,
        activityDate: response.data.activityDate,
        description: response.data.description,
        loggedHours: response.data.loggedHours,
        category: response.data.category
      }))

  }

  validate(values) {
    let errors = {}

    console.log("Inside Validate condition");

    if ((values.studentId == "")) {

      errors.studentId = 'Please enter the student ID'
    }
    if ((values.activityDate == "")) {

      errors.activityDate = 'Please enter the date of the activity'
    }
    if ((values.description == "")) {

      errors.description = 'Please enter the description of the activity'
    }
    if ((values.loggedHours == "")) {

      errors.loggedHours = 'Please enter the time of service preformed'
    }
    if ((values.category == "")) {

      errors.category = 'Please enter the category type of service preformed'
    }

    return errors
  }


  onSubmit(values) {

    let studentLog = {
      id: this.state.id,
      studentId: values.studentId,
      activityDate: values.activityDate,
      description: values.description,
      loggedHours: values.loggedHours,
      category: values.category
    }

    if (this.state.id === -1) {
      console.log("id = -1");

      StudentLogService.createStudentLog(studentLog)
        .then(() => this.props.history.push(`/ListStudentLogs`))
    } else {

      console.log("id: " + this.state.id);
      console.log("StudentLog id = " + studentLog.id);

      StudentLogService.updateStudentLog(this.state.id, studentLog)
        .then(() => this.props.history.push(`/ListStudentLogs`))
    }

    console.log(values);
  }


  handleCtgChange(event) {
    this.setState({ category: event.target.value });
  }


  render() {
    let { id, studentId, activityDate, description, loggedHours, category } = this.state

    return (
      <React.Fragment>

        <p align="center">
          <Header />
        </p>
        <hr />

        <SidebarMenu />

        <div>
          <h3>StudentLog</h3>

          <div className="container">
            <Formik
              initialValues={{ id, studentId, activityDate, description, loggedHours, category }}
              onSubmit={this.onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validate={this.validate}
              enableReinitialize={true}

            >
              {
                (props) => (
                  <Form>
                    <ErrorMessage name="studentId" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="activityDate" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="description" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="loggedHours" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="category" component="div"
                      className="alert alert-warning" />

                    <fieldset className="form-group">

                      <Field className="form-control" type="text" name="id" hidden />
                    </fieldset>
                    <fieldset className="form-group">
                      <Field className="form-control" type="text" name="studentId" hidden />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Activity Date: </label>
                      <Field className="form-control" type="date" name="activityDate" />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Description: </label>
                      <Field className="form-control" type="text" name="description" />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Hours Logged: </label>
                      <Field className="form-control" type="text" name="loggedHours" />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Category of Service:  &nbsp; &nbsp;


                    <select value={this.state.category} onChange={this.handleCtgChange}>
                          <option value="Education">Education</option>
                          <option value="Environment">Environment</option>
                          <option value="Humanity">Humanity</option>
                          <option value="Religion">Religion</option>

                        </select>

                      </label>

                      <br />
                      <label>Please enter if your category is not in the list: </label>
                      <Field className="form-control" type="text" name="category" />
                    </fieldset>

                    <button className="btn btn-success" type="submit">Save</button>

                  </Form>
                )
              }
            </Formik>

          </div>
        </div>
      </React.Fragment>

    )
  }

}

export default StudentLogComponent
