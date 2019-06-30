import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'react-feather'

export class Footer extends Component {
    render() {
        // It will only show our buttons if it's the right route for them to appear.
        const { location } = this.props;
        const previousHidden = (location) => {
            switch(location.pathname) {
                case "/concerns": return false;
                default: return true
            }
        }
        const nextHidden = (location) => {
            switch(location.pathname) {
                case "/concerns": return false;
                default: return true
            }
        }
        const previousLink = (location) => {
            switch(location.pathname) {
                case "/concerns": return "/disclaimer";
                default: return "/";
            }
        }
        const nextLink = (location) => {
            switch(location.pathname) {
                case "/concerns": return "/rent";
                default: return "/";
            }
        }
        return (
            <footer>
                <Link to={previousLink(location)}><button id="previous" className={previousHidden(location) ? "hidden" : null}><ChevronLeft size={24} className="chevronLeft" />Previous</button></Link>
                <Link to={nextLink(location)}><button id="next" className={nextHidden(location) ? "hidden" : null}>Next <ChevronRight size={24} className="chevronRight"/></button></Link>              
            </footer>
        )
    }
}

export default withRouter(Footer)
