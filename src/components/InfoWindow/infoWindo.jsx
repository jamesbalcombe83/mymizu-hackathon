import React from "react";
import { Component } from 'react'

class InfoWindow extends React.Component {
    componentDidUpdate(prevProps, prevState) {
      if (this.props.map !== prevProps.map) {
        this.renderInfoWindow();
      }
    }
    renderInfoWindow() {
      let {map, google, mapCenter} = this.props;
  
      const iw = this.infowindow = new google.maps.InfoWindow({
        content: ''
      });
    }
  }

