import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Compass.css';

export class Compass extends Component {
    static propTypes = {
        his: PropTypes.number,
    }

    compassStyle = {
        color: "black",
        backgroundColor: "#aaaaaa",
        width: "25vw", height: "25vw",
        borderRadius: "50%",
        border: "solid white",
        borderWidth: "0.25vw",
        textAlign: "center",
        fontSize: "2.5vw",
        margin: "0 auto",
        position: "relative",
        transform: `rotate(-${this.props.his}deg)`,
    }
    

    render() {
        return (
            <div className="Compass-Container">
                <div style={this.compassStyle}>
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

export default Compass;
