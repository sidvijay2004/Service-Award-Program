import React, { Component } from 'react';
import ListStudents from './ListStudents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StudentComponent from './StudentComponent';
import Login from './Login';



class AdminHomePage extends Component {
  render() {
    return (
      //<div>
      <Router>
      <>
         <h1>Admin Home Page</h1>

        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Login" exact component={Login} />
            <Route path="/ListStudents" exact component={ListStudents} />
            <Route path="/Students/:id" component={StudentComponent} />
        </Switch>

        </>

        </Router>

      // </div>
    )

  }
}

export default AdminHomePage
