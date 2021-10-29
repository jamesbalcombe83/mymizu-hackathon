import React from 'react';

//expecting refill data from all taps
const UserStats = (props) => {
//calculate water issued
//bottles saved
//money saved
    return (
        <div className="user-stats">
            <p>You have helped save: $bottles</p>
            <p>Your taps have served $x liters</p>
            <p>Your customers have saved ¥$x</p>
        </div>
    )
 
}

export default UserStats;
