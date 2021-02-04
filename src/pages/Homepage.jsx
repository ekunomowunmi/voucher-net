import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBView } from 'mdbreact';
import Header from "../components/header";

class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        {/* <Header/> */}
        <MDBView className="mt-5 pt-2">
        Welcome to Voucher Net

        </MDBView>
      </React.Fragment>
     );
  }
}
 
export default HomePage;