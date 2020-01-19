import React, { Component } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import StudentLogService from '../service/StudentLogService';
import ReportService from '../service/ReportService';
import UserProfile from '../UserProfile';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';

  
class ListStudentLogs extends Component {
    
    constructor(props) {

        console.log("Inside List StudentLogs Construct");

        super(props)
        this.state = {
            //studentId: this.props.match.params.id,
            studentId: UserProfile.getStudentId(),
            studentLogs: [],
            totHours: 0,
            message: null,
            chartData: null

        }
        console.log("1/18 studentId: " + this.state.studentId)

        this.deleteStudentLogClicked = this.deleteStudentLogClicked.bind(this)
        this.updateStudentLogClicked = this.updateStudentLogClicked.bind(this)
        this.addStudentLogClicked = this.addStudentLogClicked.bind(this)
        this.refreshStudentLogs = this.refreshStudentLogs.bind(this)
        this.gotoListStudents = this.gotoListStudents.bind(this)
        this.dataChart = this.dataChart.bind(this)

    }

    componentDidMount() {
        this.refreshStudentLogs();
    }

    dataChart(){
        this.state.chartData = {
            labels: ['January', 'February', 'March',
                     'April' ],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                data: [65, 59, 80, 81]
              }
            ]
          }    }

    refreshStudentLogs() {
        console.log("Iside refresh stud");
        console.log("this.state.studentId= " + this.state.studentId);
        
        StudentLogService.getAllStudentLogsByStudentId(this.state.studentId)
            .then(
                response => {
                    console.log(response);
                    this.setState({ studentLogs: response.data })

                }
            )
            this.dataChart() 
    }
    deleteStudentLogClicked(id) {
        this.setState({ message: `Delete of studentLog ${id} starting` })

        StudentLogService.deleteStudentLog(id)
            .then(
                response => {
                    this.setState({ message: `Delete is Successful!!!` })
                    console.log("Before REfresh ");
                    this.refreshStudentLogs();
                    console.log("Iside delete");
                }
            )

    }

    addStudentLogClicked() {
        console.log("this.state.studentId= " + this.state.studentId);
        UserProfile.setStudentLogId(-1)
        this.props.history.push(`/studentLogs`)
    }


    updateStudentLogClicked(id) {
        console.log('update ' + id)
        console.log("this.state.studentId= " + this.state.studentId);
        UserProfile.setStudentLogId(id)

        this.props.history.push(`/studentLogs`)
    }

    gotoListStudents() {
        this.props.history.push(`/ListStudents`)
    }

    render() {
        return (

            <React.Fragment>
                <p align="center"> <Header /> </p>
                <hr />
                <SidebarMenu/>

                <div>
                <Doughnut
                data={this.state.chartData}
                options={{
                    title:{
                    display:true,
                    text:'Hours by Category',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
      </div>

                <div className="container">
                    <h3>{UserProfile.getName()}'s Activity List</h3>
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                    <div className="container">
                        <table border="3">
                            <thead>
                                <tr>    
                                    <th>Activity Date</th>
                                    <th>Description</th>
                                    <th>Logged Hours</th>
                                    <th>Category of Service</th>
                                    <th></th>
                                    <th></th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.studentLogs.map(
                                        studentLog =>
                                            <tr key={studentLog.id}>
                                                <td>{studentLog.activityDate}</td>
                                                <td>{studentLog.description}</td>
                                                <td>{studentLog.loggedHours}</td>
                                                <td>{studentLog.category}</td>
                                                <td><button className="btn btn-warning" onClick={() => this.deleteStudentLogClicked(studentLog.id)}>Delete</button></td>
                                                <td><button className="btn btn-success" onClick={() => this.updateStudentLogClicked(studentLog.id)}>Update</button></td>
                                                <td hidden>{this.state.totHours += studentLog.loggedHours}</td>
                                            </tr>

                                    )
                                }
                            </tbody>

                        </table>
                            
                            <div>

                                <b>Total Hours = {this.state.totHours} </b>

                            </div>
                
                        <div className="row">
                            <button className="btn btn-success" onClick={this.addStudentLogClicked}>Add</button>

                        </div>


                    </div>

                </div>

            </React.Fragment>
        )
    }
}


export default ListStudentLogs
