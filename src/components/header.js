import React, { Component } from 'react'
import { Home, User, Settings } from 'react-feather'

export class Header extends Component {
    render() {
        return (
            <header>
            <div className="homeHeader">
                <Home className="home" size={40} color="white" strokeWidth="1" /> 
                <h1>Ontario Lease Wizard</h1>
            </div>
            <div className="sub-nav">
                    <li className="user"><User className="user" size={30} strokeWidth="1" color="white" /><span className="user">Profile</span></li>
                    <li className="settings"><Settings className="settings" size={30} strokeWidth="1" color="white" /><span className="settings">Settings</span></li>
            </div>
            </header>
        )
    }
}

export default Header
