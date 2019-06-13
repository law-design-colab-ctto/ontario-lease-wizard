import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Importing our content pages.
import Home from '../pages/home.js'
import loginProfile from '../pages/login_start.js'

// Importing our sidebars (they change with the route, as the pages do.)
import sidebarHome from '../sidebars/home.js'


export class Content extends Component {
    render() {
        return (
            <div className="content">
            <div className="contentRoute">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={loginProfile}/>
            </div>
            <div className="sidebar">
                <h2>Learn More</h2>
                <Route exact path="/" component={sidebarHome} />
            </div>    
            </div>
        )
    }
}

export default Content
