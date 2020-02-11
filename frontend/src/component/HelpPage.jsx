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
            
            <p> 1. How to log hours as a student?
                - Login in with your credentials that you recieved through email. Then click on the add button at 
                the bottom of the home page and complete the fields. 
            </p>

            <p> 2. How to change your password as a student?
                - Login in with your credentials that you recieved through email. Then click on the modify profile button at 
                the bottom of the home page and change your password there. 
            </p>

            <p> 3. What to do if the category for your volunteer event is not listed?
                - If the category is not listed in the dropdown, type the category underneath in the textbox and it will save.
            </p>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      
        </div>

        </React.Fragment>

      )

    }
  }

  export default HelpPage
