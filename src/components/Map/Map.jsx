import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react'

const apiKey = process.env.REACT_APP_API_KEY;

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {}, 
      selectedPlace: {},
      tap: [
        {
            "id": 196743,
            "name": "タコリッコ Taco Rico 愛宕グリーンヒルズ店",
            "longitude": 139.7487909,
            "latitude": 35.6622084,
            "address": "港区愛宕2-5-1愛宕グリーンヒルズMORIタワー1F",
            "comment": "Hours: 11:00am-8:00pm\n\n",
            "category_id": 4,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/106",
            "copyright": null,
            "photos": [
                {
                    "id": 106,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_196743_5fa14ba03ddb7.jpg"
                }
            ]
        }
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

    const locations = this.state.tap.map(location =>
            <Marker onClick={this.onMarkerClick} key={location.lat} className="location" 
              position={{lat: location.latitude, lng: location.longitude}}
              name={location.name}
              address={location.address}
              comment={location.comment}
              photo_url={location.photo_url}
            />
    );
    
    return (
    <Map google={this.props.google} 
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={12}
    initialCenter={{
        lat: this.state.tap[0].latitude,
        lng: this.state.tap[0].longitude
      }}>
    {locations}
    
    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>{this.state.selectedPlace.address}</p>
              <p>{this.state.selectedPlace.comment}</p>
              <img src={this.state.selectedPlace.photo_url} alt="" width="160" height="160"/>
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

