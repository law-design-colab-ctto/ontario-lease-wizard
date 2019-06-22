import React, { Component } from 'react'

export class Disclaimer extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <div className="disclaimer">
                <h3>You’re almost ready to get started! Please read our terms of use below. </h3>
                <p>Legal Disclaimer: this tool does not provide legal advice and does not guarantee compliance with the Residential Tenancies Act, 2006.</p>
                <p>The information you enter in this wizard will be strictly protected. Please read our Privacy Policy. </p>
                <p>By clicking “I agree”, you agree with the terms of our Privacy Policy and agree not to hold us liable for any dipsutes arising from the lease you create or review using this tool.</p>
                <p><input type="checkbox" checked={this.state.checked} onChange={() => { this.setState({ checked: !this.state.checked }); }} /> I agree</p>
                <button disabled={!this.state.checked}>Next</button>
            </div>
        )
    }
}

export default Disclaimer
