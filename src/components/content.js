import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Importing our content pages.
import Home from '../pages/home.js'
import loginProfile from '../pages/login_start.js'
import Disclaimer from '../pages/disclaimer.js'
import Concerns from '../pages/concerns.js'

// Importing our sidebars (they change with the route, as the pages do.)
import sidebarHome from '../sidebars/home.js'

// The Router below changes the page content depending on the current route path. Each page is going to have some way -- whether in the footer or on the page, or even through components/navigation.js -- to push a new path, thus changing the content.

// If a component needs to manipulate App-level state (and that will be often) then you need to throw the Route a render and make an inline function to inject the passing of props and prop functions. See /concerns below.
export class Content extends Component {
    render() {
        return (
            <div className="content">
            <div className="contentRoute">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={loginProfile}/>
                <Route exact path="/disclaimer" component={Disclaimer}/>
                <Route exact path="/concerns" render={() => <Concerns state={this.props.state} handler={this.props.handler} />}/>
            </div>
            <div className="sidebar">
                <h2>Learn More</h2>
                <Route exact path={["/", "/login", "/disclaimer", "/concerns"]} component={sidebarHome} />
            </div>    
            </div>
        )
    }
}

export default Content
