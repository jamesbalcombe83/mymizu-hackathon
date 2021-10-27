import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow} from "react-google-maps"


const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const taps =  [
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
  },
  {
    "id": 199475,
    "name": "Shiba Park",
    "longitude": 139.7505301,
    "latitude": 35.6577419,
    "address": "日本、〒105-0011 東京都港区芝公園",
    "comment": "Water Fountain located inside the park\n\n",
    "category_id": 0,
    "coordinate": null,
    "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3216",
    "copyright": null,
    "photos": [
        {
            "id": 3216,
            "approved": true,
            "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199475_5fa14aaa413cd.jpg"
        }
    ]
},
]

// let state = {
//       showingInfoWindow: false,
//       activeMarker: {}, 
//       selectedPlace: {},
// }

// const onLoad = infoWindow => {
//   console.log('infoWindow: ', infoWindow)
// }

// const onMarkerClick = (props, marker, e) =>

// state = {
//   selectedPlace: props,
//   activeMarker: marker,
//   showingInfoWindow: true
// };




// const locations = taps.map(location => 

//    <Marker onClick={onMarkerClick} position={{ lat: location.latitude, lng: location.longitude }}
//    name={location.name}> 
  
//    </Marker>)
 

// console.log(locations)



// const Map2 = withScriptjs(withGoogleMap((props) =>


//   <GoogleMap
  
//     defaultZoom={12}
//     defaultCenter={{ lat: taps[0].latitude, lng: taps[0].longitude }}
//   >
//     <InfoWindow
//       onLoad={onLoad}
//       position={{ lat: taps[0].latitude, lng: taps[0].longitude }}
//     >
//       <div>
//         <h1>Hello</h1>
//       </div>
//     </InfoWindow>
//     {/* {<Marker position={{ lat: taps[0].latitude, lng: taps[0].longitude }} />} */}
//     {locations}
//   </GoogleMap>
// ))

// export default Map2;


// const locations = taps.map(location => 

//    <Marker position={{ lat: location.latitude, lng: location.longitude }}
//    name={location.name}> 
  
//    </Marker>)

function MapComponent() {
  const [selectedTap, setSelectedTap] = useState(null);
  
  return (
    <GoogleMap 
    defaultZoom={12}
    defaultCenter={{ lat: taps[0].latitude, lng: taps[0].longitude }}
>
    {taps.map(tap => (
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
            </div>
        </InfoWindow>
    )}
</GoogleMap>
)
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map2() {
  return (
  <WrappedMap
  googleMapURL={url}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `100%` }} />}
  mapElement={<div style={{ height: `100%` }} />}
            />
  )
}


export default Map2;

