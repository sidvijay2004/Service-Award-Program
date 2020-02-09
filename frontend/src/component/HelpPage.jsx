  import React, { Component } from 'react';
  import Header from "../Header";
  
  /**
 * Renders this component when user tries to access the help page
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

  class HelpPage extends Component {

        constructor(props) {
              super(props)

        }

        componentDidMount() {
          }


    render() {
      return (
        <React.Fragment>
        <p align="center">
          <Header />
        </p>
        <hr />
        <div>
            <h2> Help Page </h2>

            <p>Welcome to the Service Award Program that helps keep track of community service hours earned.
              To access a page, click on the appropriate button and to go back, click on the home page listed above. </p>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      
        </div>

        </React.Fragment>

      )

    }
  }

  export default HelpPage
