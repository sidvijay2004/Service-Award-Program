import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentService from '../service/StudentService';

class StudentComponent extends Component {

  constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            grade: ''
        }
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
  }

  componentDidMount() {

        console.log(this.state.id)

        if (this.state.id == -1) {
            return
        }

        StudentService.getStudent(this.state.id)
            .then(response => this.setState({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
              age: response.data.age,
              grade: response.data.grade

            }))
    }

    validate(values) {
      let errors = {}

      if (values.firstName == "") {

        errors.firstName = 'Please enter a first name'
      }

      console.log("Checking age:" + values.age);
      if ((values.age < 13) || (values.age > 19)) {
        console.log("2 Checking age:" + values.age);

        errors.age = 'Enter an age for a teenager'
      }

      return errors
    }

    handleGradeChange(event) {
      console.log("Before Last Name:" + this.state.lastName);
      this.setState({grade: event.target.value});
      console.log("After Last Name:" + this.state.lastName);

    }

    onSubmit(values) {

        let student = {
            id: this.state.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            age: values.age,
            grade: values.grade

        }

        if (this.state.id === -1) {
            console.log("id = -1");

            StudentService.createStudent(student)
                .then(() => this.props.history.push('/ListStudents'))
        } else {

          console.log("id: " + this.state.id);
          console.log("Student id = " + student.id);

            StudentService.updateStudent(this.state.id, student)
                .then(() => this.props.history.push('/ListStudents'))
        }

      console.log(values);



    }


      render() {
        let { firstName, lastName, email, age, grade, id } = this.state


    return (
        <div>
            <h3>Student</h3>

            <div className="container">
                <Formik
                    initialValues={{firstName, lastName, email, age, grade, id}}
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
                                <ErrorMessage name="age" component="div"
                                       className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>First Name: </label>
                                    <Field className="form-control" type="text" name="firstName"   />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Last Name: </label>
                                    <Field className="form-control" type="text" name="lastName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Email: </label>
                                    <Field className="form-control" type="text" name="email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Age: </label>
                                    <Field className="form-control" type="text" name="age" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Grade:

                                      <select value={this.state.grade} onChange={this.handleGradeChange}>
                                        <option value="9">9th Grade</option>
                                        <option value="10">10th Grade</option>
                                        <option value="11">11th Grade</option>
                                        <option value="12">12th Grade</option>
                                      </select>

                                      </label>

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

export default StudentComponent
