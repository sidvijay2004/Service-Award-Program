  import React, { Component } from 'react';
  
  

  class AccessDenied extends Component {

        constructor(props) {
              super(props)

        }

        componentDidMount() {
          }


    render() {
      return (
        //<div>
        <div>
            <h2> Sorry, Access Denied (You Must Login) </h2>

            <a className="menu-item" href="/">
          Click Here to go to login page         
            </a>

      
        </div>

        // </div>
      )

    }
  }

  export default AccessDenied
