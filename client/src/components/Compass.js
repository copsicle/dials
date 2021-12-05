import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Compass extends Component {
    static propTypes = {
        his: PropTypes.number
    }

    render() {
        return (
            <div>
                <div>
                    <div>0</div>
                    <div>90</div>
                    <div>180</div>
                    <div>270</div>
                </div>
                <div>A</div>
            </div>
        )
    }
}

export default Compass
