import React, { Component } from 'react'
import Home from '../pages/home.js'
import { Route } from 'react-router-dom'

export class Content extends Component {
    render() {
        return (
            <div className="content">
            <div className="contentRoute">
                <Route exact path="/" component={Home} />
            </div>
            <div className="sidebar">
                
            </div>    
            </div>
        )
    }
}

export default Content
