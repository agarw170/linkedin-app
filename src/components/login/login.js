import React, { Component } from 'react'
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { Redirect } from 'react-router-dom';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            errorMessage: '',
            redirect: false
        };
    }
    
      handleSuccess = (data) => {
        this.setState({
          redirect: true,
          code: data.code,
          errorMessage: '',
        });
      }
    
      handleFailure = (error) => {
        this.setState({
          code: '',
          errorMessage: error.errorMessage,
        });
      }
    render() {
        const { code, errorMessage } = this.state;
        if (this.state.redirect) {
          return <Redirect exact from="/" push to={{
            pathname: "/mainpage",            
        }}/>;
        }
        return (
            <div>
            <LinkedIn
              clientId="77j7enuhta57yb"
              onFailure={this.handleFailure}
              onSuccess={this.handleSuccess}
              redirectUri="http://localhost:3000/linkedin"
              scope="r_emailaddress r_liteprofile"
              state="34232423"
              supportIE
              redirectPath="/linkedin"
            >
              Log in with Linked In
            {/* <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '90px' }} /> */}
            </LinkedIn>
          </div>
    
        );
    }
}