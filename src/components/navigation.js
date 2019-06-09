import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'

export class navigation extends Component {
    render() {
        return (
            <nav>
            <div>
                <h2>Table of Contents</h2>
                <ul>
                <li>Money</li>
                <li>Day to Day</li>
                <li>Timeline</li>
                <li>Unit</li>
                <li>Parties</li>
                <li>Additional Terms</li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default navigation
