import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';

class SignupPage extends React.Component {
    render(){
        const { userSignupRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

// component receives required function from redux via connect (high order component)
// connect takes two params:
    // 1) mapStateToProps, this is the shortcut
    // 2) mapDispatchToProps, specify action creators wrapped in dispatch
// and returns object
export default connect(null, { userSignupRequest })(SignupPage);
