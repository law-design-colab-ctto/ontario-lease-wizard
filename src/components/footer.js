import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Footer extends Component {
    render() {
        // It will only show our buttons if it's the right route for them to appear.
        const { location } = this.props;
        const previousHidden = (location) => {
            switch(location.pathname) {
                default: 
                    return true
            }
        }
        const nextHidden = (location) => {
            switch(location.pathname) {
                case '/concerns': 
                    return false;
                default: 
                    return true
            }
        }
        return (
            <footer>
                <button id="previous" className={previousHidden(location) ? "hidden" : null}>Previous</button>  
                <button id="next" className={nextHidden(location) ? "hidden" : null}>Next</button>              
            </footer>
        )
    }
}

export default withRouter(Footer)
