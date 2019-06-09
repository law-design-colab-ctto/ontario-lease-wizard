import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'

export class navigation extends Component {
    render() {
        return (
            <nav>
            <div>
                <h2>Table of Contents</h2>
                <ul>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Money</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Day to Day</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Timeline</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Unit</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Parties</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Additional Terms</span></li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default navigation
