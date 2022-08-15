import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
// import { useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';

momentDurationFormatSetup(moment);

const TimeLeft = ({ 
    sessionLengthInSeconds,
    refresh
}) => {
//   const [timeLeft] = useState(sessionLengthInSeconds)

  const formattedTimeLeft = moment.duration(sessionLengthInSeconds, 's').format('mm:ss');

  return (
    <div>
    <h2 id="timer-label">Session</h2>
    <p id="time-left">{formattedTimeLeft}</p>
    <i id="start_stop" onClick=""><AiOutlinePlayCircle /></i>
   
    <i id="reset" onClick={refresh}><BiRefresh /></i>
    
    </div>)
};


export default TimeLeft