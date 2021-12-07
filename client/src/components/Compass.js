import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Compass.css';

export default class Compass extends Component {
    static propTypes = {
        his: PropTypes.number,
    }

    render() {
        return (
            <div className="Compass-Container">
                <div className="Compass" style={{
                    // Rotate the compass itself by HIS value
                    transform: `rotate(-${this.props.his}deg)`,
                }}>
                    <span>0</span>
                    <span>90</span>
                    <span>180</span>
                    <span>270</span>
                </div>
                <div className="Pointer"></div>
            </div>
        );
    }
}