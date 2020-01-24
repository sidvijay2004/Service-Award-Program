import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentLogin from './StudentLogin';
import Login from './Login';
import UserProfile from '../UserProfile';

class StartPage extends Component {

      constructor(props) {
            super(props)

            this.adLogin = this.adLogin.bind(this)
            this.studLogin = this.studLogin.bind(this)
      }

      componentDidMount() {
        }

        adLogin() {
          this.props.history.push('/Login')

        }

        studLogin() {
          this.props.history.push('/StudentLogin')

        }

  render() {
    return (
      //<div>
      <div>
          <h3>Select Type of Login:</h3>

          <div className="container">
              <Formik>
                  {
                      (props) => (
                          <Form>
                              <button className="btn btn-success" onClick={() => this.studLogin()}>Student Login</button>
                              <button className="btn btn-success" onClick={() => this.adLogin()}>Admin Login</button>
                          </Form>
                      )
                  }
              </Formik>

          </div>
      </div>

      // </div>
    )

  }
}

export default StartPage
