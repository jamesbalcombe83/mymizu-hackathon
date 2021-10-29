import React from 'react';

//expecting refill data from all taps
const UserStats = (props) => {

    if (props.markers) {
        const totalWater = props.markers.reduce((total, tap) => tap.total, 0);
        const totalBottles = props.markers.reduce((total, tap) => tap.refills, 0);
        const saved = totalBottles * 150;
    }
    
//calculate water issued
//bottles saved
//money saved
    return (
        <div className="user-stats">
            <p>You have helped save: {totalBottles}</p>
            <p>Your taps have served {totalWater} liters</p>
            <p>Your customers have saved ¥{saved}</p>
        </div>
    )
 
}

export default UserStats;
