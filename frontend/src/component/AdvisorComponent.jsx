import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AdvisorService from '../service/AdvisorService';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';
import UserProfile from '../UserProfile';

/**
 * Renders this component after user has logged in as an advisor and want to see or edit their credentials
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

class AdvisorComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: UserProfile.getAdvisorId(),
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
    this.gotoListStudents = this.gotoListStudents.bind(this)
  }

  componentDidMount() {

    // Security Check
    if (!UserProfile.isLoggedIn() || UserProfile.isStudent()) {
      this.props.history.push(`/AccessDenied`)
    }

    if (this.state.id == -1) {
      return
    }

    AdvisorService.getAdvisor(this.state.id)
      .then(response => this.setState({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        phoneNumber: response.data.phoneNumber,
        email: response.data.email,
        password: response.data.password

      }))

  }

  validate(values) {
    let errors = {}

    console.log("Inside Validate condition");

    if ((values.firstName == "")) {

      errors.firstName = 'Please enter first name'
    }
    if ((values.lastName == "")) {

      errors.lastName = 'Please enter last name'
    }
    if ((values.phoneNumber == "")) {

      errors.phoneNumber = 'Please enter phone number'
    }
    if ((values.email == "")) {

      errors.email = 'Please enter email'
    }
    if ((values.password == "")) {

      errors.password = 'Please enter a password'
    }

    return errors
  }

  handleChange(evt) {
    console.log("2 Checking evt.target.name:" + evt.target.name);

    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({ [evt.target.name]: evt.target.value });
  }


  gotoListStudents() {
      this.props.history.push(`/ListStudents`)
  }

  onSubmit(values) {

    let advisor = {
      id: this.state.id,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password

    }

      AdvisorService.updateAdvisor(this.state.id, advisor)
        .then(() => this.props.history.push('/ListStudents'))

  }


  render() {
    let { firstName, lastName, phoneNumber, email, password, id } = this.state

    return (
      <React.Fragment>
        <p align="center">
          <Header />
        </p>
        <hr />

        <SidebarMenu />

        <div>

          <p align="center">  <h3>Advisor Profile</h3> </p>


          <div className="container">
            <Formik
              initialValues={{ firstName, lastName, phoneNumber, email, password, id }}
              onSubmit={this.onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
              validate={this.validate}
              enableReinitialize={true}

            >
              {
                (props) => (
                  <Form>
                    <ErrorMessage name="firstName" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="lastName" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="phoneNumber" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="email" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="password" component="div"
                      className="alert alert-warning" />

                    <fieldset className="form-group">
                      <Field className="form-control" type="text" name="id" hidden />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>First Name: </label>
                      <Field className="form-control" type="text" name="firstName" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Last Name: </label>
                      <Field className="form-control" type="text" name="lastName" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Phone Number: </label>
                      <Field className="form-control" type="text" name="phoneNumber" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Email: </label>
                      <Field className="form-control" type="email" name="email" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Password: </label>
                      <Field className="form-control" type="text" name="password" onChange={this.handleChange} />
                    </fieldset>
                    <button className="btn btn-success" type="submit">Save</button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={this.gotoListStudents}>Cancel</button>

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

export default AdvisorComponent
