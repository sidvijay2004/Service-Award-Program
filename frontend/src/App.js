import React, {Component} from 'react';
import './App.css';
import Login from './component/Login';
import AdminHomePage from './component/AdminHomePage';


class App extends Component {
  render () {
    return (
      <div className="container">
        <AdminHomePage/>

        </div>
    );
  }
}


export default App;
