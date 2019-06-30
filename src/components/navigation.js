import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ChevronRight } from 'react-feather'

let moneySvg = require("../assets/navigation/money.svg"),
    dayToDaySvg = require("../assets/navigation/day2day.svg"),
    timelineSvg = require("../assets/navigation/timeline.svg"),
    unitSvg = require("../assets/navigation/unit.svg"),
    partiesSvg = require("../assets/navigation/parties.svg"),
    additionalTermsSvg = require("../assets/navigation/additional terms.svg")

class NavigationItem extends Component {
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)
        this.state = {
            active: false
        }
    }
    toggleClass() {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }
    render() {
        let divStyle = {
            hidden: {
                visibility: "hidden",
                height: 0,
                opacity: 0
            },
            visible: {
                visibility: "visible",
                height: "auto",
                opacity: 1
            }
        }
        return (
            <li
                className={this.state.active ? 'active' : null}
                onClick={this.toggleClass}
            >
            <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} side={25}/> 
            <img src={this.props.imageSrc} className={this.props.imageClass} alt={this.props.imageAlt} />
            <span>{this.props.name}</span>
            <div style={this.state.active ? divStyle.visible : divStyle.hidden}>
                {this.props.detail}
            </div>
            </li>
        )
    }
}

export class navigation extends Component {
    render() {
        const { location } = this.props
        const hiddenNav = location.pathname === "/" ? "hidden" : ""
        return (
            <nav className={hiddenNav}>
            <div className="navDiv">
                <h2>Table of Contents</h2>
                <ul>
                    <NavigationItem imageSrc={moneySvg} imageClass="Money" imageAlt="Money" name="Money"/>
                    <NavigationItem imageSrc={dayToDaySvg} imageClass="dayToDay" imageAlt="Day to Day" name="Day to Day"/>
                    <NavigationItem imageSrc={timelineSvg} imageClass="Timeline" alt="Timeline" name="Timeline"/>
                    <NavigationItem imageSrc={unitSvg} imageClass="Unit" imageAlt="Unit" name="Unit"/>
                    <NavigationItem imageSrc={partiesSvg} imageClass="Parties" imageAlt="Parties" name="Parties"/>
                    <NavigationItem imageSrc={additionalTermsSvg} imageclass="AdditionalTerms" imageAlt="Additional Terms" name="Additional Terms"/>
                </ul>
            </div>
            </nav>
        )
    }
}

export default withRouter(navigation)
