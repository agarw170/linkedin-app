import React, { Component } from 'react'
import { LinkedIn } from 'react-linkedin-login-oauth2';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            errorMessage: '',
        };
    }
    
      handleSuccess = (data) => {
        this.setState({
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
        return (
            <div>
            <LinkedIn
              clientId="81lx5we2omq9xh"
              onFailure={this.handleFailure}
              onSuccess={this.handleSuccess}
              redirectUri="http://localhost:3000/linkedin"
            >
                LinkedIn
              {/* <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} /> */}
            </LinkedIn>
            {!code && <div>No code</div>}
            {code && <div>Code: {code}</div>}
            {errorMessage && <div>{errorMessage}</div>}
          </div>
    
        );
    }
}