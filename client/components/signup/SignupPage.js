import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import {userSignupRequest, isUserExists} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends React.Component {
    render(){
        const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm
                        userSignupRequest={userSignupRequest}
                        addFlashMessage={addFlashMessage}
                        isUserExists={isUserExists}
                    />
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
}

// component receives required function from redux via connect (high order component)
// connect takes two params:
    // 1) mapStateToProps, this is the shortcut
    // 2) mapDispatchToProps, specify action creators wrapped in dispatch
// and returns object
export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
