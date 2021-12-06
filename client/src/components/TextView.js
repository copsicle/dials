import React from 'react';
import PropTypes from 'prop-types';

class TextView extends React.Component {
    static propTypes = {
        dials: PropTypes.object,
    };

    render() {
        return (
            <div>
                <div>Altitude: {this.props.dials.alt}</div>
                <div>HIS: {this.props.dials.his}</div>
                <div>ADI: {this.props.dials.adi}</div>
            </div>
        );
    }
}

export default TextView;
