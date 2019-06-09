import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'

export class sidebarHome extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Who's this for?</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Can I trust it?</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Why standard terms?</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Is my personal information safe?</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <span>Why should I use it?</span></li>
                </ul>
            </div>
        )
    }
}

export default sidebarHome
