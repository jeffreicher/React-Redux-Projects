import React, { Component } from 'react';
import '../assets/css/styles.css';

const google = window.google;

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            },
            innerHeight: 500
        });
    };

    render() {
        return <div ref="map" className="maps"/>        
    };
};

export default GoogleMap;