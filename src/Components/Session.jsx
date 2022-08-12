import moment from "moment";
import React from "react";



const Session = ({
    // ici, on accepte le props
    sessionLengthInSeconds,
    incrementSessionLengthByOneMinute,
    decrementSessionLengthByOneMinute

}) => {

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