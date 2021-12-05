import React from 'react';
import PropTypes from 'prop-types';
import './AltitudeBar.css';

class AltitudeBar extends React.Component {
    // Meter - The container with the number values
    // Bar - The black rectangle which indicates the value
    constructor(props) {
        super(props);
        this.state = {};
    }
    // Style for moving the bar in the meter by altitude value
    barStyle = {
        position: 'absolute',
        backgroundColor: 'black',
        width: '150%',
        height: '3%',
        left: '-25%',
        // Get precentage to move up the meter while accounting for bar height
        bottom: ((this.props.alt / 30) - 1.5) + '%',
    }

    render() {
        return (
            <div className="Meter-Container">
                <div className="Meter">
                    <div className="Spacer-Top">3000</div>
                    <div className="Spacer-Middle">2000</div>
                    <div className="Spacer-Middle">1000</div>
                    <div className="Spacer-Bottom">0</div>
                    <div style={this.barStyle}></div>
                </div>
            </div>
        );
    }
}

AltitudeBar.propTypes = {
    alt: PropTypes.number,
};

export default AltitudeBar;
