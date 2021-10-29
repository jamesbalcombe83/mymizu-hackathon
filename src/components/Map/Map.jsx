
import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow} from "react-google-maps"
const axios = require('axios');
    
const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
  };

function Map(props) {
    
    function MapComponent() {

        const [selectedTap, setSelectedTap] = useState(null);
        const [markers, setMarkers ] = useState([]);

        useEffect(() => {
            if (props.clickedTap) {
                // const tap = props.markers.filter((tap) => {
                //     console.log(tap);
                //     return tap.tap_id === props.clickedTap.tap_id
                // });
            }
        }, [props.clickedTap])

        //to stop redrawing of the map each time - hopefully
/*         const onSetMarker = useCallback(async () => {
            for (let i=0; i< props.allTaps.length; i++){
                let tmpUrl = "/taps/"+props.allTaps[i]["tap_id"];
                let res =  await axios.get(tmpUrl, { headers: {Authorization: `Bearer ${process.env.REACT_APP_MYMIZU_API_KEY}` } } )
                setMarkers(markers => [...markers, ...res.data])
            }
        }, []); */

        const panTo = useCallback(({lat, lng}) => {
            mapRef.current.panTo({lat, lng});
            mapRef.current.setZoom(14);
        }, []);
        
        const mapRef = useRef();
        const onMapLoad = useCallback((map) => {
            mapRef.current = map;
            console.log(map)
        }, [])

        useEffect( () => { 
            const getalltaps = async () => {
                for (let i=0; i< props.allTaps.length; i++){
                    let tmpUrl = "/taps/"+props.allTaps[i]["tap_id"];
                    let res =  await axios.get(tmpUrl, { headers: {Authorization: `Bearer ${process.env.REACT_APP_MYMIZU_API_KEY}` } } )
                    let refill = await axios.get('/tapRefills', {params : {id:props.allTaps[i]["tap_id"]} } );
                    const total = {total : refill.data.reduce((total, refill) => total + refill.amount,0)}
                    const count = {count : refill.data.length};
                    const tapData = {...res.data[0], ...count, ...total}; 
                    setMarkers(markers => [...markers, tapData]);
                }
            }
            getalltaps()//.then(()  => props.setAllTaps(markers));
        }, [])
      
        
        return (
          <>
          <GoogleMap 
          id="map"
          zoom={props.zoom}
          center={props.center}
          onLoad={onMapLoad}
          defaultOptions={defaultMapOptions}
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
              <InfoWindow className="loc-window"
                  position={{
                      lat: selectedTap.latitude, 
                      lng: selectedTap.longitude
                  }}
                  options={{maxWidth:300}}
                  onCloseClick={() => {
                      setSelectedTap(null);
                  }}
              >
                  <div className="loc-window">
                      <h4>{selectedTap.name}</h4>
                      <p>{selectedTap.address}</p>
                      <p className="emph">Total refills: {selectedTap.count}</p>
                      <p className="emph">Total water served: {selectedTap.total/1000} litres</p>
                      <img className="location-photo" src={selectedTap.photo_url} alt="" />
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