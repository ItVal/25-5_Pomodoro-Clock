import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

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
            <p id="session-label">Session Length</p>
            <div className='btn-style-session'> 
            <i id="session-decrement" onClick={incrementSessionLengthByOneMinute}><BsFillArrowUpSquareFill /></i>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <i id="session-increment" onClick={decrementSessionLengthByOneMinute}><BsFillArrowDownSquareFill /></i>
            </div> 
        </div>
    );
};

export default Session;