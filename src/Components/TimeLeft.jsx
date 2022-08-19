import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";
// import Countdown from 'react-countdown';
// import { useState } from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";
import {FiPauseCircle} from "react-icons/fi"
import { BiRefresh } from "react-icons/bi";

momentDurationFormatSetup(moment);

const TimeLeft = ({
  sessionLengthInSeconds,
  refresh,
  timer,
  pause
//   seconde,
  // displayMessage,
  // minutes,
  // seconds
}) => {
  const formattedTimeLeft = moment
    .duration(sessionLengthInSeconds, "s")
    .format("mm:ss");

  return (
    <div>
      <h2 id="timer-label">Session</h2>
      <p id="time-left">{formattedTimeLeft}</p>
      <i id="start" onClick={timer}><AiOutlinePlayCircle /></i>
      <i id="stop" onClick={pause}><FiPauseCircle /> </i>
      <i id="reset" onClick={refresh}>
        <BiRefresh />
      </i>
     
      
      {/* 
    // timer
  // const [seconds, setSecondes] = useState(25);
  // const [minutes, setMinutes] = useState(0);
  // const [displayMessage, setDisplayMessage] = useState(false);

  // let timer
  // useEffect(() => {
  //     let timer = setInterval(() => {
  //         clearInterval(timer);

  //         if (seconds === 0) {
  //             if (minutes !== 0) {
  //                 setSecondes(59);
  //                 setMinutes(minutes - 1);

  //             } else {
  //                 let minutes = displayMessage ? 24 : 4;
  //                 let seconds = 59;

  //                 setSecondes(seconds);
  //                 setMinutes(minutes);
  //                 setDisplayMessage(!displayMessage);
  //             }

  //         } else {

  //             setSecondes(seconds - 1);
  //         }
  //     }, 1000);

  // }, [seconds]);

  // const timerMinites = minutes < 10 ? `0${minutes}` : minutes;
  // const timerSecondes = seconds < 10 ? `0${seconds}` : seconds;

  // const restart = () => {
  //     setSecondes(10)
  //     setMinutes(10)
  // }
  // const stop = () => {
  //     clearInterval(timer)
  // }


  // ============== */}

      {/*
// //   const [timeLeft] = useState(sessionLengthInSeconds)
//  const timerMinites = minutes < 10 ? `0${minutes}` : minutes;
//  const timerSecondes = seconds < 10 ? `0${seconds}` : seconds;

  =============timer ===============================
            <div className="contenaire">
                {displayMessage && <div>Break time !</div>}
            </div>

            <div>
                {timerMinites}:{timerSecondes}
            </div>

            
============== */}
    </div>
  );
};

export default TimeLeft;
