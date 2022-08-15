import React, { useState } from 'react';
import './App.css';
import Break from './Components/Break';
import Session from './Components/Session';
import TimeLeft from './Components/TimeLeft';

function App() {

     // initialisation de la durée de la pause à l'aide de react state (et useState)
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(1500);
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
      const refresh = () => {
        setSessionLengthInSeconds(1500)
        setBreakLengthInSeconds(300)

      }

 // initialisation de la durée de la pause à l'aide de react state (et useState)
 const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
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
  
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
       {/* import de notre composant break avec l'accesoire props */}
       <div className='break-session'>
        <div className="break">
      <Break 
      breakLengthInSeconds = {breakLengthInSeconds}
      incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}
      decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
      />
      </div>
      {/* importation du composant TimeLeft */}
     

      <div className="session">
      {/* import de notre composant session avec l'accesoire props */}
      <Session 
        sessionLengthInSeconds = {sessionLengthInSeconds}
        incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}
      
      />
      </div>
    </div>
    <div className='timer'> 
     
      <TimeLeft 
      sessionLengthInSeconds={sessionLengthInSeconds} 
      refresh = {refresh} />
     </div>
     <audio id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
    </div>
  )
}

export default App;
