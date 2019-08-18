import React, { Component } from 'react'
// calSvg goes inside the date picker input
let calSvg = require("../../assets/component/cal.svg");
export class Rent extends Component {
    // TODO
    // Date-picker modal
    state = {
        fullDateStatus: false
    }
    render() {
        let yesButton = <div><input type="radio" name="fixed" id="yes" value="yes" onClick={() => this.setState({fullDateStatus: !this.state.fullDateStatus})}/> <label htmlFor="yes">Yes</label></div>;
        let noButton = <div><input type="radio" name="fixed" id="no" value="no" defaultChecked onClick={() => this.setState({ fullDateStatus: !this.state.fullDateStatus })} /> <label htmlFor="no">No</label></div>;
        let singlePicker = null;
        let doublePicker = null;
        return (
            <div id="rent">
            <div id="left">
                <h3>Will there be a fixed-term?</h3>
                <form id="rent">
                {yesButton}{noButton}
                </form>
                </div>
                <div id="right">
                {this.state.fullDateStatus ? doublePicker : singlePicker}
                </div>
            </div>
        )
    }
}

export default Rent
