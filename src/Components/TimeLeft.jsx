import React from 'react'
import {useState} from 'react'

function TimeLeft ({sessionLengthInSeconds}){
    const [timeLeft] = useState()

    return <p id="time-left">{timeLeft}</p>
}

export default TimeLeft