import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../components/header';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBRow, MDBCol , MDBInput} from 'mdbreact';
import apis from '../api';

class LoginPage extends Component {
    initialState = {
        email:'',
        password:'',
        errors:{},
        redirect:null
    }
    state = this.initialState;

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit =  (e) => {
        const {email,password,redirect} = this.state;
        // let history = useHistory();
        e.preventDefault();
        const formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);
        formData.append('action','login')

         apis.login(formData).then(res => {
            console.log(res);
            window.alert('Successful');
            this.setState({
                email:'',
                password:'',
                errors:{},
                redirect: '/home'
            });

        },error=> {
            console.log(error)
        })
    }
    render() { 
        const {email, password, errors} = this.state;
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        
        return ( 
            <React.Fragment>
                
                <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white ">
                    <MDBCard style={{ width: "28rem" }} className="d-flex justify-content-center">
                <MDBCardBody>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                <MDBInput value={email} name="email" onChange={this.handleChange} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />

                                <MDBInput value={password} name="password" onChange={this.handleChange} label="Type your password" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                <MDBBtn onClick={this.handleSubmit} >Login</MDBBtn>
                                </div>
                            </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCardBody>
            </MDBCard>
            </MDBMask>
          </MDBView> 

            </React.Fragment>
         );
    }
}
 
export default LoginPage;