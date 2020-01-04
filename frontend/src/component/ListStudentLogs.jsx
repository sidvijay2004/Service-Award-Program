import React, { Component } from 'react';
import StudentLogService from '../service/StudentLogService';


class ListStudentLogs extends Component {

      constructor(props) {

        console.log("Inside List StudentLogs Construct");

          super(props)
          this.state = {
            studentId: this.props.match.params.id,
            studentLogs: [],
            message: null
          }
          this.deleteStudentLogClicked = this.deleteStudentLogClicked.bind(this)
          this.updateStudentLogClicked = this.updateStudentLogClicked.bind(this)
          this.addStudentLogClicked = this.addStudentLogClicked.bind(this)
          this.refreshStudentLogs = this.refreshStudentLogs.bind(this)


      }

      componentDidMount() {
          this.refreshStudentLogs();
      }

      refreshStudentLogs() {
        console.log("Iside refresh stud");
        console.log("this.state.studentId= " + this.state.studentId);


          StudentLogService.getAllStudentLogsByStudentId(this.state.studentId)
              .then(
                  response => {
                      console.log(response);
                      this.setState({ studentLogs: response.data})

                  }
              )
      }
      deleteStudentLogClicked(id) {
        this.setState({ message: `Delete of studentLog ${id} starting` })

          StudentLogService.deleteStudentLog(id)
          .then(
              response => {
                  this.setState({ message: `Delete of studentLog ${id} Successful` })
                  console.log("Before REfresh ");
                  this.refreshStudentLogs();
                  console.log("Iside delete");
              }
          )

      }

      addStudentLogClicked() {
        console.log("this.state.studentId= " + this.state.studentId);

        this.props.history.push(`/studentLogs/-1/${this.state.studentId}`)
    }

    updateStudentLogClicked(id) {
      console.log('update ' + id)
      console.log("this.state.studentId= " + this.state.studentId);

      this.props.history.push(`/studentLogs/${id}/${this.state.studentId}`)
      }

    render() {
        return (
            <div className="container">
                <h3>StudentLog List</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="container">
                <table border = "3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Student Id</th>
                        <th>Activity Date</th>
                        <th>Description</th>
                        <th>Logged Hours</th>
                        <th></th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.studentLogs.map(
                            studentLog =>
                                <tr key={studentLog.id}>
                                    <td>{studentLog.id}</td>
                                    <td>{studentLog.studentId}</td>
                                    <td>{studentLog.activityDate}</td>
                                    <td>{studentLog.description}</td>
                                    <td>{studentLog.loggedHours}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteStudentLogClicked(studentLog.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => this.updateStudentLogClicked(studentLog.id)}>Update</button></td>

                                </tr>

                        )
                    }
                </tbody>

                  </table>

                <div className="row">
                      <button className="btn btn-success" onClick={this.addStudentLogClicked}>Add</button>
                </div>

                </div>
            </div>
        )
    }
}


export default ListStudentLogs
