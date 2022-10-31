import { useState } from "react";

function Time() {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    function getTime() {
        setCurrentTime(new Date().toLocaleTimeString());
    }

    setInterval(getTime, 1000);

    return <div className="time">{currentTime}</div>;

}

export default Time;