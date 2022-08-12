import React, { useState } from "react";



const Break = () => {
    const [
        breakLengthInSeconds,
        setBreakLengthInSeconds
    ] = useState(300);

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
    <div>
        <p id="break-label">Break</p>
        <p id="break-length">{breakLengthInSeconds}</p>
        <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>+</button>
        <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>-</button>
    </div>
);
};

export default Break;