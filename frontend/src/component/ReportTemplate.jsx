import React, { Component } from 'react';
import { useTable, useFilters, userGlobaalFilter } from 'react-table';
import StudentService from '../service/StudentService';
import ReportService from '../service/ReportService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from "../Header";
import UserProfile from '../UserProfile';
import SidebarMenu from '../SidebarMenu';
import DonutChart from './DonutChart';
import queryString from 'query-string'

// const ReactTable = window.ReactTable.default;


class ReportTemplate extends Component {

  constructor(props) {
    super(props)
    const values = queryString.parse(this.props.location.search)
    console.log("zzz" + values.rptType)

    let title = ''
    if (values.rptType == "gradeCount") {
      title = "Grade Count"
    }
    else if (values.rptType == "gradeHours") {
      title = "Grade Hours "
    }
    else if (values.rptType == "ageCount") {
      title = "Age Count "
    }
    else if (values.rptType == "ageHours") {
      title = "Age Hours "
    }



    this.state = {
      rptType: values.rptType,
      rptTitle: title

    }
    this.dataChart = this.dataChart.bind(this)

  }

  componentDidMount() {
    this.dataChart()
  }

  dataChart() {
    ReportService.getChartData(this.state.rptType, 0)
      .then(response => {
        this.setState({
          datalabel: response.data.map(function (e) {
            return e.labelData
          }),
          datavalue: response.data.map(function (e) {
            return e.valueData
          })
        })
      })

  }


  render() {
    return (
      <React.Fragment>
        <p align="center"> <Header /> </p>
        <hr />

        <SidebarMenu />

        <DonutChart title={this.state.rptTitle + " Report"} datalabel={this.state.datalabel} datavalue={this.state.datavalue} />

      </React.Fragment>

    )
  }
}


export default ReportTemplate
