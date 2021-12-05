import React from 'react';
import PropTypes from 'prop-types';

class TextView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>

                Altitude: {this.props.dials.alt}
                
                HIS: {this.props.dials.his}
                
                ADI: {this.props.dials.adi}

            </>
        );
    }
}

TextView.propTypes = {
    dials: PropTypes.object,
};

export default TextView;
