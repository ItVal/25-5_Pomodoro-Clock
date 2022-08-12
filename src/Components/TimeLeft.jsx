
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react'
import {useState} from 'react'

// branchement du plugin moment duration pour le format mm:ss
momentDurationFormatSetup(moment);

function TimeLeft ({sessionLengthInSeconds}){
    const [timeLeft] = useState(sessionLengthInSeconds)

    return <p id="time-left">{timeLeft}</p>
}

export default TimeLeft