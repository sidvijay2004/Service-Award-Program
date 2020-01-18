import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStudents from './ListStudents';
import LoginService from '../service/LoginService';
import UserProfile from '../UserProfile';
import Header from "../Header";


class StudentLogin extends Component {
      constructor(props) {
            super(props)

            this.state = {
                username: '',
                password: '',
                isInvalidLogin: false

            }
            this.onSubmit = this.onSubmit.bind(this)
            this.validate = this.validate.bind(this)
      }
        componentDidMount() {

          }
        validate(values) {
          let errors = {}
          console.log("Inside Validate condition");
          if ((values.username == "")) {
            errors.username = 'Please enter username'
          }
          if ((values.password == "")) {
            errors.password = 'Please enter password'
          }
          return errors
        }

  onSubmit(values) {
    let errors = {}

    console.log("Inside onSubmit Funtion");
          let username = values.username;
          let password = values.password;

          LoginService.isValidStudentLogin(username, password)
            .then((response) => {
              console.log('response:' + response)
              console.log('response.data.id:' + response.data.studentId)

              UserProfile.setName(response.data.firstName + " " + response.data.lastName);
              UserProfile.setLoginType('student');
              UserProfile.setStudentId(response.data.studentId);


              console.log('userprofile.getName' + UserProfile.getName())
              console.log('userprofile.getLoginType' + UserProfile.getLoginType())
              console.log('userprofile.getStudentId' + UserProfile.getStudentId())

            //  console.log('userprofile.isLoggedIn' + UserProfile.isLoggedIn())
              this.props.history.push(`/ListStudentLogs`)


          }).catch(() => {
                this.setState({ isInvalidLogin: true })

                errors.password = 'Please enter the correct username and/or password'
                return errors
            })

}

  render() {
    let { username, password } = this.state
    return (
      <React.Fragment>
      <Header />
      <hr />
      
      <div>
          <h3>Login Info</h3>

          <div className="container">
              <Formik
                  initialValues={{username, password}}
                  onSubmit={this.onSubmit}
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate={this.validate}
                  enableReinitialize={true}

              >
                  {
                      (props) => (
                          <Form>
                              <ErrorMessage name="username" component="div"
                                     className="alert alert-warning" />
                              <ErrorMessage name="password" component="div"
                                      className="alert alert-warning" />
                              {this.state.isInvalidLogin && <div className="alert alert-warning">Invalid Login</div>}

                              <fieldset className="form-group">
                                  <label>Username:</label>
                                  <Field className="form-control" type="text" name="username" />
                              </fieldset>
                              <fieldset className="form-group">
                                  <label>Password: </label>
                                  <Field className="form-control" type="password" name="password"   />
                              </fieldset>

                              <button className="btn btn-success" type="Submit">Submit</button>
                          </Form>
                      )
                  }
              </Formik>

          </div>
      </div>
      </React.Fragment>
      // </div>
    )

  }
}

export default StudentLogin
