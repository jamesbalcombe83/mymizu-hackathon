
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow} from "react-google-maps"
const axios = require('axios');
    


const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;


function Map(props) {

    function MapComponent() {

        const [selectedTap, setSelectedTap] = useState(null);

        const [markers, setMarkers ] = useState([]);

        const allTapDeatils = [];

        useEffect( () => { 
            const getalltaps = async () => {
            
                for (let i=0; i< props.allTaps.length; i++){
                    let tmpurl = "/taps/"+props.allTaps[i]["tap_id"];
                    let res =  await axios.get(tmpurl, { headers: {Authorization: `Bearer ${process.env.REACT_APP_MYMIZU_API_KEY}` } } )
            
                    setMarkers(markers => [...markers, ...res.data])
                }
                
            }
            getalltaps();
        }, [])
      
        
        return (
          <>
          <GoogleMap 
          defaultZoom={12}
          defaultCenter={{ lat: 35.6622084, lng: 139.7487909 }}
      >
          {markers.map(tap => (
              <Marker 
                  key={tap.id} 
                  position={{
                      lat: tap.latitude, 
                      lng: tap.longitude
                  }}
                  onClick ={() => { 
                      setSelectedTap(tap);
                  }}
              />
          ))}
      
          {selectedTap && (
              <InfoWindow
                  position={{
                      lat: selectedTap.latitude, 
                      lng: selectedTap.longitude
                  }}
                  onCloseClick={() => {
                      setSelectedTap(null);
                  }}
              >
                  <div>
                      <h4>{selectedTap.name}</h4>
                      <p>{selectedTap.address}</p>
                      <img src={selectedTap.photo_url} alt=""  width="140" height="140"/>
                      <p>{selectedTap.comment}</p>
                  </div>
              </InfoWindow>
          )}
      </GoogleMap>
      </>
      )
      
      }

  const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

  return (
  <WrappedMap
  googleMapURL={url}
  loadingElement={<div style={{ minheight: `200px`, height:`100%`}} />}
  containerElement={<div style={{ minheight: `200px`, height:"100%"}} />}
  mapElement={<div style={{ minheight: `200px`, height:"100%"}}/>}
    />
  )
}

export default Map;