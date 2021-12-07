import React from 'react';
import PropTypes from 'prop-types';
import './AltitudeBar.css';

export default class AltitudeBar extends React.Component {
    // Meter - The container with the number values
    // Bar - The black rectangle which indicates the value
    static propTypes = {
        alt: PropTypes.number,
    };

    render() {
        return (
            <div className="Meter-Container">
                <div className="Meter">
                    <div className="Spacer-Top">3000</div>
                    <div className="Spacer-Middle">2000</div>
                    <div className="Spacer-Middle">1000</div>
                    <div className="Spacer-Bottom">0</div>
                    <div className="Bar" style={{
                        // Style for moving the bar in the meter by altitude value
                        bottom: ((this.props.alt / 30) - 1.5) + '%',
                    }}></div>
                </div>
            </div>
        );
    }
}