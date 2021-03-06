import React, { Component } from 'react';
import { Pie, Doughnut, Bar} from 'react-chartjs-2';
// import 'chartjs-plugin-datalabels';

/**
 * Renders this component when displaying charts
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

class DonutChart extends Component {

    constructor(props) {

        super(props)

    }

    render() {

        console.log("zzz datalabel="+ this.props.datalabel);
        console.log("zzz datavalue="+ this.props.datavalue);

            let chartData = {
            labels: this.props.datalabel,
            datasets: [
                {
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
                    data: this.props.datavalue
                }
            ]
        }
        let bartData = {
            labels: this.props.datalabel,
            datasets: [
                {
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',
                        '#00A6B4',
                        '#6800B4'
                    ],
                    borderWidth: 2,
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#003350',
                        '#35014F'
                    ],
                    data: this.props.datavalue
                }
            ]
        }
        return (

            <React.Fragment>


                <div>
                    <Doughnut
                        data={chartData}
                        options={{
                            // plugins: {
                            //     datalabels: {
                            //        display: true,
                            //        color: 'white',
                            //        labels: {
                            //            title: {
                            //                font: {
                            //                    size: 30,
                            //                    weight: 'bold'
                            //                }
                            //            }
                            //        }
                            //     }
                            //  },
                            responsive: true,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                text: this.props.title,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'top'
                            }
                        }}
                    />
                </div>
<h2>BarChart:</h2>
                { <div className="col-md-5">
                    <Bar 
                        data={bartData}
                        width={100}
                        height={400}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: this.props.title,
                                fontSize: 20
                            },
                            legend: {
                                display: false,
                                position: 'top'
                            }
                        }}
                    />
                </div> }
            </React.Fragment>
        )
    }
}


export default DonutChart
