import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Link} from 'react-router-dom'

import './App.css';
import * as serviceWorker from './serviceWorker';
import ListStudents from './component/ListStudents';
import ListStudentLogs from './component/ListStudentLogs';
import StudentComponent from './component/StudentComponent';
import AdvisorComponent from './component/AdvisorComponent';
import StudentLogComponent from './component/StudentLogComponent';
import AdvisorLogin from './component/AdvisorLogin';
import StartPage from './component/StartPage';
import StudentLogin from './component/StudentLogin';
import StudentReport from './component/StudentReport';
import ServiceAward from './component/ServiceAward';
import AccessDenied from "./component/AccessDenied";
import HelpPage from "./component/HelpPage";
import Contact from "./component/Contact";
import Header from "./Header";
import ReportTemplate from "./component/ReportTemplate";

//const BACKEND_HOST = 'http://localhost:8080'


const routing = (

<Router>
<>
  <p align="center">  <h1>Service Award Program</h1> </p>

  <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/AdvisorLogin" exact component={AdvisorLogin} />
      <Route path="/StudentLogin" exact component={StudentLogin} />
      <Route path="/ListStudents" exact component={ListStudents} />
      <Route path="/ListStudentLogs" exact component={ListStudentLogs} />
      <Route path="/Students" component={StudentComponent} />
      <Route path="/advisor" component={AdvisorComponent} />
      <Route path="/studentLogs" component={StudentLogComponent} />
      <Route path="/StudentReport" component={StudentReport} />
      <Route path="/getStudentTotalHours" component={ServiceAward} />
      <Route path="/ReportTemplate" component={ReportTemplate} />
      <Route path="/AccessDenied" component={AccessDenied} />
      <Route path="/help" component={HelpPage} />
      <Route path="/Contact" component={Contact} />

  </Switch>

  <p align="center">  <h7>  © 2020, Future Business Leaders of America - Sid Vijay, Inc. or its affiliates. All rights reserved.
    </h7> </p>

  </>

  </Router>


)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
