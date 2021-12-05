import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.visual){
            // If in visual mode highlight and disable the visual button
            return (
                <div className="Button-Pad">
                    <div className="Button-Space">
                        <button disabled={true}>Visual</button>
                    </div>
                    <div>
                        <button onClick={this.props.click}>Text</button>
                    </div>
                </div>
            );
        }
        else {
            // Otherwise highlight and disable the text button
            return (
                <div className="Button-Pad">
                    <div className="Button-Space">
                        <button onClick={this.props.click}>Visual</button>
                    </div>
                    <div>
                        <button disabled={true}>Text</button>
                    </div>
                </div>
            );
        }    
    }
}

Navbar.propTypes = {
    visual: PropTypes.bool,
    click: PropTypes.func,
};

export default Navbar;
