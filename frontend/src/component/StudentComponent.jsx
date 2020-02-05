import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StudentService from '../service/StudentService';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';
import UserProfile from '../UserProfile';


class StudentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: UserProfile.getStudentId(),
      firstName: '',
      lastName: '',
      studentNum: '',
      email: '',
      age: '',
      grade: '9'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGradeChange = this.handleGradeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
    this.gotoListStudents = this.gotoListStudents.bind(this)
  }

  componentDidMount() {

    // Security Check
    if (!UserProfile.isLoggedIn()) {
      this.props.history.push(`/AccessDenied`)
    }

    if (this.state.id == -1) {
      return
    }

    StudentService.getStudent(this.state.id)
      .then(response => this.setState({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        studentNum: response.data.studentNum,
        email: response.data.email,
        age: response.data.age,
        grade: response.data.grade,
        password: response.data.password

      }))
    console.log("this state Last Name:" + this.state.lastName);

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
    if ((values.studentNum == "")) {

      errors.studentNum = 'Please enter student number'
    }
    if ((values.email == "")) {

      errors.email = 'Please enter email'
    }
    if ((values.age == "")) {
      console.log("Inside age loop:" + values.age);

      errors.age = 'Please enter age'
    }

    console.log("Checking age:" + values.age);

    if ((values.age * 1 == values.age) && ((values.age < 12) || (values.age > 22))) {
      console.log("2 Checking age:" + values.age);

      errors.age = 'Enter an age between 12 and 22'
    }

    return errors
  }

  handleChange(evt) {
    console.log("2 Checking evt.target.name:" + evt.target.name);

    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleGradeChange(event) {
    console.log("Before Last Name:" + this.state.lastName);
    this.setState({ grade: event.target.value });
    console.log("event.target.value" + event.target.value);
  }


  gotoListStudents() {
    if(UserProfile.isStudent()){
      this.props.history.push(`/ListStudentLogs`)
    }
    else if(UserProfile.isAdvisor()){
      this.props.history.push(`/ListStudents`)
    }
  }

  onSubmit(values) {

    let student = {
      id: this.state.id,
      firstName: values.firstName,
      lastName: values.lastName,
      studentNum: values.studentNum,
      email: values.email,
      age: values.age,
      grade: values.grade,
      password: values.password


    }

    if (this.state.id === -1) {
      console.log("id = -1");

      StudentService.createStudent(student)
        .then(() => this.props.history.push('/ListStudents'))
    } else if(UserProfile.isAdvisor())
     {

      console.log("id: " + this.state.id);
      console.log("Student id = " + student.id);

      StudentService.updateStudent(this.state.id, student)
        .then(() => this.props.history.push('/ListStudents'))
    }
    else{
      StudentService.updateStudent(this.state.id, student)
        .then(() => this.props.history.push('/ListStudentLogs'))

    }

    console.log(values);



  }


  render() {
    let { firstName, lastName, studentNum, email, age, grade, password, id } = this.state

    console.log("render state Last Name:" + this.state.lastName);
    const isAdvisor = UserProfile.isAdvisor();

    return (
      <React.Fragment>
        <p align="center">
          <Header />
        </p>
        <hr />

        <SidebarMenu />

        <div>

          <p align="center">  <h3>Student</h3> </p>

          {isAdvisor ?(
          <p align="right">
          <h6>

          <a href={"mailto:" + this.state.email + "?cc=" + UserProfile.getEmail() + "&subject=FBLA Service Award Login Info&body=" + 
          "Username: " + this.state.email + 
          " or " + this.state.studentNum + 
          "%0D%0A Password: " + this.state.password + 
          "%0D%0A" + "%0D%0A" + 'http://' + window.location.hostname + ':3000'}
          
          >Email to Student</a>

          </h6>
          </p>

          ):(
            <div>
            &nbsp;
            </div>
          )
        }

          <div className="container">
            <Formik
              initialValues={{ firstName, lastName, studentNum, email, age, grade, password, id }}
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
                    <ErrorMessage name="studentNum" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="email" component="div"
                      className="alert alert-warning" />
                    <ErrorMessage name="age" component="div"
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
                      <label>Student Number: </label>
                      <Field className="form-control" type="text" name="studentNum" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Email: </label>
                      <Field className="form-control" type="email" name="email" onChange={this.handleChange} />
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Age: </label>
                      <Field className="form-control" type="text" name="age" onChange={this.handleChange} />
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

export default StudentComponent
