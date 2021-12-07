// Main container for the web application
import React from 'react';
import TextView from './TextView';
import Navbar from './Navbar';
import AltitudeBar from './AltitudeBar';
import Compass from './Compass';
import HorizonAngle from './HorizonAngle';
import './DialApp.css';

export default class DialApp extends React.Component {
    state = {
        // Values from the server to pass down to the components
        dials: {
            // Altitude (between 0 - 3000)
            alt: 0,
            // Rotation (between 0 - 360)
            his: 0,
            // Horizon Angle (between -100 - 100)
            adi: 0,
        },
        // Boolean for switching between visual and text mode (true - visual mode)
        visual: true,
    };

    changeVisualState(event) {
        // Method for the navbar to change the visual state
        this.setState({visual: !this.state.visual})
    }

    getDialData() {
        // Get JSON of dial values from the server and parse into the dials state
        fetch(window.location.href + 'api/data', {method: 'GET'}).then((response) => response.json()).then((data) => {
            this.setState({dials: Object.assign({}, data)});
        }).catch(error => {
            console.log(error.message);
        })
    }
    
    componentDidMount() {
        // Get initial data
        this.getDialData();
        // Set tick rate to 1 second
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        // Update dial values every tick
        this.getDialData();
    }

    componentWillUnmount() {
        // Clear tick rate when unmounted
        clearInterval(this.interval);
    }

    render() {
        // Switch rendering between visual and text mode
        return (
            <div className="Box">
                <Navbar visual={this.state.visual} click={this.changeVisualState.bind(this)} />
                {
                    // Render the visual components if in visual mode, text mode otherwise
                    this.state.visual ? 
                    <>
                    <AltitudeBar alt={this.state.dials.alt}/>
                    <Compass his={this.state.dials.his}/>
                    <HorizonAngle adi={this.state.dials.adi}/>
                    </> : <TextView dials={this.state.dials} />
                }
            </div>
        );
    }
}