import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'

export class ListItem extends Component {
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
            <ChevronRight className={"chevronRight " + (this.state.active ? 'active' : null)} size={25} />
            <span>{this.props.text}</span>
                <div style={this.state.active ? divStyle.visible : divStyle.hidden}>{this.props.detail}</div>
            </li>
        )
    }
}

export default ListItem
