import React from 'react';

//expecting refill data from all taps
const UserStats = (props) => {
//calculate water issued
//bottles saved
//money saved
    return (
        <div className="user-stats">
            <p>You have helped save 23 bottles</p>
            <p>Your taps have served 22.69 liters</p>
            <p>Your customers have saved ¥3,450</p>
        </div>
    )
 
}

export default UserStats;
