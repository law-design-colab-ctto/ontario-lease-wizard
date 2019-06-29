import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class loginProfile extends Component {
    render() {
        return (
            <div>
            {/* TODO: Sign-in buttons are disabled until back-end is installed. */}
                <div className="loginLeft">
                    <h3>Create Profile</h3>
                    <p>If you would like to save your information for next time, please create a profile here.</p>
                    <button disabled={true}>Sign Up</button>
                    <h3 className="signIn">Sign In</h3>
                    <input type="email" placeholder="Email address"/>
                    <input type="password" placeholder="Password"/>
                    <button disabled={true} className="signIn">Sign In</button>
                </div>
                <div className="loginRight">
                    <h3>Proceed as Guest</h3>
                    <p>You can also proceed as a guest and have the option to save your information by creating a profile. </p>
                    <Link to="/disclaimer" className="button"><button>Next</button></Link>
                </div>
            </div>
        )
    }
}

export default loginProfile
