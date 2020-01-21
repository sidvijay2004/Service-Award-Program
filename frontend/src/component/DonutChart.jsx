import React, { Component } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';


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

        return (

            <React.Fragment>

                <div>
                    <Doughnut
                        data={chartData}
                        options={{
                            title: {
                                display: true,
                                text: this.props.title,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>


            </React.Fragment>
        )
    }
}


export default DonutChart
