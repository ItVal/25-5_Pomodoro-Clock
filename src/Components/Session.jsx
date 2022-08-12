import moment from "moment";
import React, { useState } from "react";



const Session = () => {
    // initialisation de la durée de la pause à l'aide de react state (et useState)
    const [
        sessionLengthInSeconds,
        setSessionLengthInSeconds
    ] = useState(1500);
// ajout bouton plus et moins avec des gestionnaires d'événements de clic
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLengthInSeconds =
        sessionLengthInSeconds - 60;
        if (
            newSessionLengthInSeconds < 0
        ) {
            setSessionLengthInSeconds(0);
        } else {
            setSessionLengthInSeconds(
                newSessionLengthInSeconds
            );
        }
    };
    const incrementSessionLengthByOneMinute = () =>
        setSessionLengthInSeconds(
            sessionLengthInSeconds + 60
        );
        // conversion secondes en minutes à l'aide de moment.js
    const sessionLengthInMinutes = moment.duration(sessionLengthInSeconds, "s").minutes(); 
return (
    <div>
        <p id="session-label">Session</p>
        <p id="session-length">{sessionLengthInMinutes}</p>
        <button id="session-increment" onClick={incrementSessionLengthByOneMinute}>+</button>
        <button id="session-decrement" onClick={decrementSessionLengthByOneMinute}>-</button>
    </div>
);
};

export default Session;