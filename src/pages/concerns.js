import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export class Concerns extends Component {

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
                        />
                </div>
                    </div>
                    <div className="sliderRow">
                    <div className="sliderLabel">Utilities</div>
                    <div style={sliderContainer}>
                        <Slider handleStyle={{
                            border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
                        }}
                            trackStyle={{ backgroundColor: "#7BF1D4" }}
                        />
                    </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Maintenance</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
                            }}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Guests</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
                            }}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Length of tenancy</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
                            }}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                            />
                        </div>
                    </div>
                    <div className="sliderRow">
                        <div className="sliderLabel">Subletting / Airbnb</div>
                        <div style={sliderContainer}>
                            <Slider handleStyle={{
                                border: "1px solid #9EF5E0", height: "16px", width: "16px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
                            }}
                                trackStyle={{ backgroundColor: "#7BF1D4" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Concerns
