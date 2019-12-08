import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import * as serviceWorker from './serviceWorker';
import ListStudents from './component/ListStudents';
import StudentComponent from './component/StudentComponent';
import Login from './component/Login';

const routing = (

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
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
