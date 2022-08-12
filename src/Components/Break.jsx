import moment from "moment";
import React, { useState } from "react";



const Break = () => {
    // initialisation de la durée de la pause à l'aide de react state (et useState)
    const [
        breakLengthInSeconds,
        setBreakLengthInSeconds
    ] = useState(300);
// ajout bouton plus et moins avec des gestionnaires d'événements de clic
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLengthInSeconds =
            breakLengthInSeconds - 60;
        if (
            newBreakLengthInSeconds < 0
        ) {
            setBreakLengthInSeconds(0);
        } else {
            setBreakLengthInSeconds(
                newBreakLengthInSeconds
            );
        }
    };
    const incrementBreakLengthByOneMinute = () =>
        setBreakLengthInSeconds(
            breakLengthInSeconds + 60
        );
        // conversion secondes en minutes à l'aide de moment.js
    const breakLengthInMinutes = moment.duration(breakLengthInSeconds, "s").minutes(); 
return (
    <div>
        <p id="break-label">Break</p>
        <p id="break-length">{breakLengthInMinutes}</p>
        <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
    </div>
);
};

export default Break;