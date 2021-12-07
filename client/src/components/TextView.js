import React from 'react';
import PropTypes from 'prop-types';
import './TextView.css';

export default class TextView extends React.Component {
    static propTypes = {
        dials: PropTypes.object,
    };

    render() {
        return (
            <div className="Text-Container">
                <span>Altitude: {this.props.dials.alt}</span>
                <span>HIS: {this.props.dials.his}</span>
                <span>ADI: {this.props.dials.adi}</span>
            </div>
        );
    }
}