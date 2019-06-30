import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

// Importing our content pages.
import Home from '../pages/home.js'
import loginProfile from '../pages/login_start.js'
import Disclaimer from '../pages/disclaimer.js'
import Concerns from '../pages/concerns.js'

// Importing our sidebars (they change with the route, as the pages do.)
import sidebarHome from '../sidebars/home.js'


export class Content extends Component {
    render() {
        return (
            <div className="content">
            <div className="contentRoute">
                    <AnimatedSwitch
                        atEnter={{ opacity: 0, offset: 100 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1, offset: 0 }}
                        className="switch-wrapper"
                        mapStyles={(styles) => ({
                            transform: `translateX(${styles.offset}%)`,
                            opacity: `${styles.opacity}`
                        })}
                    >
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={loginProfile}/>
                <Route exact path="/disclaimer" component={Disclaimer}/>
                <Route exact path="/concerns" render={() => <Concerns state={this.props.state} handler={this.props.handler} />}/>
                </AnimatedSwitch>
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
