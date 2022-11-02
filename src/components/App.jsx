import React from "react";
import Navbar from "./Navbar";

const ClockNumbersColor = React.createContext("grey");
const ClockBgColor = React.createContext("brown");
const ClockNumbersDecoration = React.createContext("underline");

export { ClockNumbersColor, ClockBgColor, ClockNumbersDecoration };

function App() {

    return (
        <div>
            <ClockNumbersColor.Provider value="blue"> {/* There is a Provider with a value, the value of ClockNumbersColor will be "blue" */}
                <ClockBgColor.Provider> {/* There is a Provider, but no value, the value of ClockNumbersColor will be undefined */}
                    {/* <ClockNumbersDecoration.Provider> There is no Provider, the value of ClockNumbersDecoration will be the default one, "underline" */}
                    <Navbar />
                    {/* </ClockNumbersDecoration.Provider> */}
                </ClockBgColor.Provider>
            </ClockNumbersColor.Provider>
        </div>
    );
}

export default App;