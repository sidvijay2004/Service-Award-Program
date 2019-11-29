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
  }

  componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
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
      render() {
        let { firstName, lastName, email, age, grade, id } = this.state

        return (
            <div>
                <h3>Students</h3>
                <div>{id}</div>
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{email}</div>
                <div>{age}</div>
                <div>{grade}</div>
            </div>
        )
    }

}

export default StudentComponent
