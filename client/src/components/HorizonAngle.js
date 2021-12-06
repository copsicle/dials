import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizonAngle.css';

export default class HorizonAngle extends Component {
    static propTypes = {
        adi: PropTypes.number,
    }

    horizonStyle = {
        backgroundImage: `linear-gradient(blue ${this.props.adi <= 0 ? 0 : this.props.adi}%, #00ff00 ${this.props.adi >= 0 ? 100 : 100 + this.props.adi}%)`,
        width: "25vw", height: "25vw",
        borderRadius: "50%",
        border: "solid white",
        borderWidth: "0.25vw",
        margin: "0 auto",
        position: "relative",
    }

    render() {
        return (
            <div className="Horizon-Container">
                <div style={this.horizonStyle}>

                </div>
            </div>
        )
    }
}
