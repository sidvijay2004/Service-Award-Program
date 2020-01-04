import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentLogService from '../service/StudentLogService';

class StudentLogComponent extends Component {

  constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            studentId: this.props.match.params.studentId,
            activityDate: '',
            description: '',
            loggedHours: ''

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
  }

  componentDidMount() {

        console.log(this.state.id)

        if (this.state.id == -1) {
            return
        }

        StudentLogService.getStudentLog(this.state.id)
            .then(response => this.setState({
              studentId: response.data.studentId,
              activityDate: response.data.activityDate,
              description: response.data.description,
              loggedHours: response.data.loggedHours,


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

      return errors
    }


    onSubmit(values) {

        let studentLog = {
            id: this.state.id,
            studentId: values.studentId,
            activityDate: values.activityDate,
            description: values.description,
            loggedHours: values.loggedHours,

        }

        if (this.state.id === -1) {
            console.log("id = -1");

            StudentLogService.createStudentLog(studentLog)
                .then(() => this.props.history.push(`/ListStudentLogs/${studentLog.studentId}`))
        } else {

          console.log("id: " + this.state.id);
          console.log("StudentLog id = " + studentLog.id);

            StudentLogService.updateStudentLog(this.state.id, studentLog)
                .then(() => this.props.history.push(`/ListStudentLogs/${studentLog.studentId}`))

        }

      console.log(values);



    }


      render() {
        let { id, studentId, activityDate, description, loggedHours} = this.state


    return (
        <div>
            <h3>StudentLog</h3>

            <div className="container">
                <Formik
                    initialValues={{id, studentId, activityDate, description, loggedHours}}
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

                                <fieldset className="form-group">

                                    <Field className="form-control" type="text" name="id" hidden />
                                </fieldset>
                                <fieldset className="form-group">
                                    <Field className="form-control" type="text" name="studentId"  hidden />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Activity Date: </label>
                                    <Field className="form-control" type="text" name="activityDate" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description: </label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Hours Logged: </label>
                                    <Field className="form-control" type="text" name="loggedHours" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
    }

}

export default StudentLogComponent
