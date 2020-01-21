import React, { Component } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import StudentLogService from '../service/StudentLogService';
import ReportService from '../service/ReportService';
import UserProfile from '../UserProfile';
import Header from "../Header";
import SidebarMenu from '../SidebarMenu';
import DonutChart from './DonutChart';

class ListStudentLogs extends Component {

    constructor(props) {

        console.log("Inside List StudentLogs Construct");

        super(props)
        this.state = {
            studentId: UserProfile.getStudentId(),
            studentLogs: [],
            totHours: 0,
            message: null,
            datalabel: [],
            datavalue: [],
            data: null,
            chartData: null

        }

        this.deleteStudentLogClicked = this.deleteStudentLogClicked.bind(this)
        this.updateStudentLogClicked = this.updateStudentLogClicked.bind(this)
        this.addStudentLogClicked = this.addStudentLogClicked.bind(this)
        this.refreshStudentLogs = this.refreshStudentLogs.bind(this)
        this.gotoListStudents = this.gotoListStudents.bind(this)
        this.dataChart = this.dataChart.bind(this)

    }

    componentDidMount() {
        this.refreshStudentLogs();
        this.dataChart()

    }

    dataChart() {
        ReportService.getChartData("stdctg", this.state.studentId)
            .then(response => {
                this.setState({ 
                    datalabel:  response.data.map(function(e) {
                        return e.labelData
                    }),
                    datavalue: response.data.map(function(e) {
                        return e.valueData
                    })
                })
            })  

    }


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
        let { datalabel, datavalue, chartData } = this.state
        console.log("this.state.label" + this.state.datalabel)
        console.log("this.state.datavalue" + this.state.datavalue)
        // this.dataChart()
        return (

            <React.Fragment>
                <p align="center"> <Header /> </p>
                <hr />
                <SidebarMenu />

                <DonutChart title = "Category Chart" datalabel = {this.state.datalabel} datavalue = {this.state.datavalue}/>

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