import React, { useState } from "react";
import "./App.css";
import Break from "./Components/Break";
import Session from "./Components/Session";
import TimeLeft from "./Components/TimeLeft";


var conteur;
function App() {
  // initialisation de la durée de la pause à l'aide de react useState
  let [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(1500);
  // ajout bouton plus et moins avec des gestionnaires d'événements de clic
  const decrementSessionLengthByOneMinute = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;

    if (newSessionLengthInSeconds < 0) {
      setSessionLengthInSeconds(0);
    } else {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };

  const incrementSessionLengthByOneMinute = () =>
    setSessionLengthInSeconds(sessionLengthInSeconds + 60);
  const refresh = () => {
    setSessionLengthInSeconds(1500);
    setBreakLengthInSeconds(300);
  };

  // const myTimer = () => {

  //   setSessionLengthInSeconds(sessionLengthInSeconds - 1)

  // }

  // initialisation de la durée de la pause à l'aide de react state (et useState)
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
  // ajout bouton plus et moins avec des gestionnaires d'événements de clic
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };
  const incrementBreakLengthByOneMinute = () =>
    setBreakLengthInSeconds(breakLengthInSeconds + 60);

  // let [seconde, setSeconde] = useState(59);
  //  notre timer

  const timer = () => {
    conteur = setInterval(() => {
      setSessionLengthInSeconds(sessionLengthInSeconds -= 1);
    }, 1000);
  };

  const pause = () =>{
    clearInterval(conteur)
  }
  // // timer

  //   const [seconds, setSecondes] = useState(25);
  //   const [minutes, setMinutes] = useState(0);
  //   const [displayMessage, setDisplayMessage] = useState(false);
  //   useEffect(() => {
  //       let timer = setInterval(() => {
  //           clearInterval(timer);

  //           if (seconds === 0) {
  //               if (minutes !== 0) {
  //                   setSecondes(59);
  //                   setMinutes(minutes - 1);

  //               } else {
  //                   let minutes = displayMessage ? 24 : 4;
  //                   let seconds = 59;

  //                   setSecondes(seconds);
  //                   setMinutes(minutes);
  //                   setDisplayMessage(!displayMessage);
  //               }

  //           } else {

  //               setSecondes(seconds - 1);
  //           }
  //       }, 1000);

  //   }, [seconds]);

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      {/* import de notre composant break avec l'accesoire props */}
      <div className="break-session">
        <div className="break">
          <Break
            breakLengthInSeconds={breakLengthInSeconds}
            incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
            decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
          />
        </div>
        {/* importation du composant TimeLeft */}

        <div className="session">
          {/* import de notre composant session avec l'accesoire props */}
          <Session
            sessionLengthInSeconds={sessionLengthInSeconds}
            incrementSessionLengthByOneMinute={
              incrementSessionLengthByOneMinute
            }
            decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
          />
        </div>
      </div>
      <div className="timer">
        <TimeLeft
          sessionLengthInSeconds={sessionLengthInSeconds}
          refresh={refresh}
          timer={timer}
          pause = {pause}
          // sessionLengthInSeconds={sessionLengthInSeconds}
        />

        {/* // seconds = {seconds} 
      // minutes = {minutes}
      // displayMessage = {displayMessage} /> */}
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
