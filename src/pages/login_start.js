import React, { Component } from 'react'

export class loginProfile extends Component {
    render() {
        return (
            <div>
                <div className="loginLeft">
                    <h3>Create Profile</h3>
                    <p>If you would like to save your information for next time, please create a profile here.</p>
                    <button>Sign Up</button>
                    <h3 className="signIn">Sign In</h3>
                    <input type="email" placeholder="Email address"/>
                    <input type="password" placeholder="Password"/>
                    <small>Must be at least 8 characters</small>
                    <button className="signIn">Sign In</button>
                </div>
                <div className="loginRight">
                    <h3>Proceed as Guest</h3>
                    <p>You can also proceed as a guest and have the option to save your information by creating a profile. </p>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}

export default loginProfile
