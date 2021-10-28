import React from 'react';

const Tap = (props) => { 
    console.log(props.taps)

    return (
        <div className="taps">
            Your taps
            {props.taps.map( (tap) => 
                <li onClick={ () => {console.log("hi")} }> {tap["tap_id"]}</li>
            )}
        </div> 
    )
}

export default Tap;

