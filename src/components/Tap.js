import React from 'react';
//import Map from './Map/Map'

const Tap = (props) => { 

    return (
        <>
        <div className="taps">
            Your taps
            {props.allTaps.map( (tap, index) => 
                //add the onclick function to change the map to zoom and open the window
                <li key={index} onClick={ () => {
                    props.setClickedTap(tap);
                    console.log(tap)
                } }> {tap["tap_id"]}</li>
            )}
        </div> 

       </>

    )
}

export default Tap;

