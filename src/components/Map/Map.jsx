import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react'
 
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [{
        lat: 37.778519,
        lng:-122.405640
    },
    {
        lat: 37.759703,
        lng:-122.405640
    },
    {
        lat: 37.779703,
        lng:-122.405640
    },
    {
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
            <Marker key={location.lat} className="location"
              position={{lat: location.lat, lng: location.lng}}
            />
    );
        
        
     return (
    <Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
    
    {locations}
    </Map>
  );
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDgDX_tsHCMJftXId0BTEbLHYfravcT3Zk")
})(MapContainer)


