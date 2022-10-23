import React from "react";

function Button(props) {
    return (
        <button className="btn btn-outline-secondary convert-button">{props.buttonText}</button>
    );
}

export default Button;