import React, { Component } from 'react';
class ListStudents extends Component {

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                <table border = "3">
                  <tr>
                    <th>Student Name</th>
                    <th>Student id </th>
                    <th>Age </th>
                  </tr>
                  <tr>
                  <td>Sid</td>
                  <td>34539</td>
                  <td>15</td>
                  </tr>
                  <tr>
                  <td>Jack</td>
                  <td>13322</td>
                  <td>12</td>
                  </tr>

                  </table>
                </div>
            </div>
        )
    }
}

export default ListStudents
