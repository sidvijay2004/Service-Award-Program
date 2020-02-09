import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import StudentLogin from './StudentLogin';
// import AdvisorLogin from './AdvisorLogin';
import UserProfile from '../UserProfile';
import Header from "../Header";

/**
 * Renders this component before the user logs in
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

class StartPage extends Component {

      constructor(props) {
            super(props)

            this.adLogin = this.adLogin.bind(this)
            this.studLogin = this.studLogin.bind(this)
      }

      componentDidMount() {
        }

        adLogin() {
          this.props.history.push('/AdvisorLogin')

        }

        studLogin() {
          this.props.history.push('/StudentLogin')

        }

  render() {
    

    return (
      //<div>
      <React.Fragment>
        <p align="center">
          <Header />
        </p>
        <hr />
     
        <div>
          <div className="container">
              <Formik>
                  {
                      (props) => (
                          <Form>
                              <p align="center"> 

                              <button className="btn btn-success" onClick={() => this.studLogin()}>Student Login</button>
                              &nbsp;&nbsp;
                              <button className="btn btn-success" onClick={() => this.adLogin()}>Advisor Login</button>

                              </p>
                              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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

export default StartPage
