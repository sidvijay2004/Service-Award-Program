  import React, { Component } from 'react';
  import UserProfile from '../UserProfile';
  import Header from "../Header";

  /**
 * Renders this component when the user looks for contact information
 *
 * author  Siddharth Vijayasankar
 * version 1.0
 */

  class Contact extends Component {

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
            <h2> Contact </h2>

            <p> 
              Email: advisor@fbla.com 
    
            <br/>

              Phone Number: 123-456-7890
            </p>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 
        </div>

        </React.Fragment>
      )

    }
  }

  export default Contact
