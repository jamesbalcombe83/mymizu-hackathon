import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react'

const apiKey = process.env.REACT_APP_API_KEY;

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {}, 
      selectedPlace: {},
      locations: [{
        name: "park",
        description: "can barbecue",
        lat: 37.778519,
        lng:-122.405640
    },
    {
        name: "shop",
        description: "cheap vegetables available",
        lat: 37.759703,
        lng:-122.405640
    },
    {   name: "apartments",
        description: "nice and cozy",
        lat: 37.779703,
        lng:-122.405640
    },
    {   
        name: "restaurant",
        description: "good food",
        lat: 37.789703,
        lng:-122.405640
    },
   ]
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
      
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
    
    render() {

    const locations = this.state.locations.map(location =>
            <Marker onClick={this.onMarkerClick} key={location.lat} className="location" 
              position={{lat: location.lat, lng: location.lng}}
              name={location.name}
              description={location.description}
            />
    );
    
    return (
    <Map google={this.props.google} 
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>

    {locations}
    
    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>{this.state.selectedPlace.description}</p>
            </div>
        </InfoWindow>
    </Map>
  );
    }
  }

export default GoogleApiWrapper({
  apiKey
})(MapContainer)

//API

