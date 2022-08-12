import React, {useState} from "react";



const Break = () => {
    const [
        breakLengthInSeconds,
        setBreakLengthInSeconds
    ] = useState(300);


    return (
    <div> 
        <p id="break-label">Break</p>
        <p id="break-length">{breakLengthInSeconds}</p>
    </div>
    );
};

export default Break;