import React, { useState } from "react";
import { ClockBgColor, ClockNumbersColor, ClockNumbersDecoration } from "./App";

function Time() {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const bgColor = React.useContext(ClockBgColor);
    const numbersColor = React.useContext(ClockNumbersColor);
    const numbersDecoration = React.useContext(ClockNumbersDecoration);

    function getTime() {
        setCurrentTime(new Date().toLocaleTimeString());
    }

    setInterval(getTime, 1000);

    return <div className="time" style={{ color: numbersColor, backgroundColor: bgColor, textDecoration: numbersDecoration }}>{currentTime}</div>;

}

export default Time;