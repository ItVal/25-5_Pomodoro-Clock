import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

import moment from "moment";
import React from "react";



const Break = ({
    breakLengthInSeconds,
    incrementBreakLengthByOneMinute,
    decrementBreakLengthByOneMinute

}) => {
    


    // conversion secondes en minutes à l'aide de moment.js
   const breakLengthInMinutes = moment.duration(breakLengthInSeconds, "s").minutes(); 
return (
    <div>
        <p id="break-label">Break Length</p>
        <div className='btn-style-break'> 
        <i id="break-decrement" onClick={decrementBreakLengthByOneMinute}><BsFillArrowDownSquareFill /></i>
        <p id="break-length">{breakLengthInMinutes}</p>
        <i id="break-increment" onClick={incrementBreakLengthByOneMinute}><BsFillArrowUpSquareFill /></i>
        </div>
    </div>
);
};

export default Break;