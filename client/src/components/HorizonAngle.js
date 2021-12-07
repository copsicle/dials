import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizonAngle.css';

export default class HorizonAngle extends Component {
    static propTypes = {
        adi: PropTypes.number,
    }

    render() {
        return (
            <div className="Horizon-Container">
                <div className="Horizon" style={{
                    //
                    backgroundImage: `linear-gradient(blue ${this.props.adi <= 0 ? 0 : this.props.adi}%, #00ff00 ${this.props.adi >= 0 ? 100 : this.props.adi + 100}%)`,
                }}>

                </div>
            </div>
        )
    }
}
