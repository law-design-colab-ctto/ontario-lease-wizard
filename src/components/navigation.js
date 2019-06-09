import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'

let moneySvg = require("../assets/navigation/money.svg"),
    dayToDaySvg = require("../assets/navigation/day2day.svg"),
    timelineSvg = require("../assets/navigation/timeline.svg"),
    unitSvg = require("../assets/navigation/unit.svg"),
    partiesSvg = require("../assets/navigation/parties.svg"),
    additionalTermsSvg = require("../assets/navigation/additional terms.svg")

export class navigation extends Component {
    render() {
        return (
            <nav>
            <div>
                <h2>Table of Contents</h2>
                <ul>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={moneySvg} className="Money" alt="Money" /> <span>Money</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={dayToDaySvg} className="dayToDay" alt="Day to Day" /> <span>Day to Day</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={timelineSvg} className="Timeline" alt="Timeline" /> <span>Timeline</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={unitSvg} className="Unit" alt="Unit" /> <span>Unit</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={partiesSvg} className="Parties" alt="Parties" /> <span>Parties</span></li>
                    <li><ChevronRight className="chevronRight" size={25} /> <img src={additionalTermsSvg} className="AdditionalTerms" alt="Additional Terms" /> <span>Additional Terms</span></li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default navigation
