import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export class Concerns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            concernText: ""
        }
        this.updateConcernInput = this.updateConcernInput.bind(this);
        this.sendAdditionalConcern = this.sendAdditionalConcern.bind(this);
    }
    // Changes the pre-existing state value (integer) for how much they're concerned.
    sliderChange = (name, value) => {
        let tempState = this.props.state
        tempState.concerns[name] = value
        this.props.handler(tempState)
    }
    // If they have an additional concern, we keep a component-scoped state to store what they're typing.
    updateConcernInput(event) {
        this.setState({ concernText: event.target.value })
    }
    // This pushes the additional concern as a string to an array called "additional" in the parent state.
    sendAdditionalConcern = (e) => {
        e.preventDefault()
        let concernTextValue = this.state.concernText
        let tempState = this.props.state
        tempState.concerns["additional"].push(concernTextValue)
        this.setState({concernText: ""})
        this.props.handler(tempState)
    }

    render() {
        const sliderContainer = {
            width: "60%",
            height: "39px",
            margin: 0,
            display: "table-cell"
        }
        return (
            <div>
            <h1>What are your top concerns as a landlord?</h1>
                <p>Move the sliders below to tell us about what issues are most important to you.</p>
                <p>We’ll use this information to highlight parts of the lease that can help address your concerns.</p>
                <div className="sliderTable">
                <span className="sliderLabelLeft">Not Concerned</span>
                <span className="sliderLabelRight">Very Concerned</span>
                <div className="sliderRow">
                <div className="sliderLabel">Rent</div>
                    <div style={sliderContainer}>
                        <Slider handleStyle={{
                        border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}} 
                        trackStyle={{ backgroundColor: "#7BF1D4"}}
                        value={this.props.state.concerns.rent}
                        onChange={(value) => this.sliderChange("rent", value)}
                        />
                </div>
                    </div>
                    <div className="sliderRow">
                    <div className="sliderLabel">Utilities</div>
                    <div style={sliderContainer}>
                        <Slider handleStyle={{
                            border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                            trackStyle={{ backgroundColor: "#7BF1D4" }}
                            value={this.props.state.concerns.utilities}
                            onChange={(value) => this.sliderChange("utilities", value)}
                        />
                    </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Maintenance</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                                value={this.props.state.concerns.maintenance}
                                onChange={(value) => this.sliderChange("maintenance", value)}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Guests</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                                value={this.props.state.concerns.guests}
                                onChange={(value) => this.sliderChange("guests", value)}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Length of tenancy</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                                value={this.props.state.concerns.lengthOfTenancy}
                                onChange={(value) => this.sliderChange("lengthOfTenancy", value)}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Subletting / Airbnb</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                                value={this.props.state.concerns.subletting}
                                onChange={(value) => this.sliderChange("subletting", value)}
                            />
                        </div>
                    </div>
                </div>
                <p>Other? Please specify so we can add this to our inventory.</p>
                <form>
                    <input value={this.state.concernText} onChange={this.updateConcernInput} type="text" placeholder="Type here..."/>
                    <input type="submit" onClick={this.sendAdditionalConcern}/>
                </form>
            </div>
        )
    }
}

export default Concerns
