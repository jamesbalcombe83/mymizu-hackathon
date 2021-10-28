import React from 'react';

const Tap = (props) => { 

    return (
        <div className="taps">
            Your taps
            {props.allTaps.map( (tap) => 
                <li onClick={ () => {console.log("hi")} }> {tap["tap_id"]}</li>
            )}
        </div> 
    )
}

export default Tap;

