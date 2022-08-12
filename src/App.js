import React, { useState } from 'react';
import './App.css';
import Break from './Components/Break';
import Session from './Components/Session';

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

       {/* import de notre composant break avec l'accesoire props */}
      <Break 
      setBreakLengthInSeconds = {setBreakLengthInSeconds}
      incrementBreakLengthByOneMinute = {incrementBreakLengthByOneMinute}
      decrementBreakLengthByOneMinute = {decrementBreakLengthByOneMinute}
      />

      {/* import de notre composant session avec l'accesoire props */}
      <Session 
        setSessionLengthInSeconds = {setSessionLengthInSeconds}
        incrementSessionLengthByOneMinute = {incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute = {decrementSessionLengthByOneMinute}
      
      />
    </div>
  );
}

export default App;
