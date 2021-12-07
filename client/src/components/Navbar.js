import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

export default class Navbar extends React.Component {
    static propTypes = {
        visual: PropTypes.bool,
        click: PropTypes.func,
    };

    render() {
        // Disable and color the button for the current visual mode
        return (
            <div className="Button-Container">         
                {
                    this.props.visual ?
                    <>
                        <button disabled={true}>Visual</button>
                        <button onClick={this.props.click}>Text</button>
                    </> :
                    <>
                        <button onClick={this.props.click}>Visual</button>
                        <button disabled={true}>Text</button>
                    </>
                }
            </div>
        );    
    }
}