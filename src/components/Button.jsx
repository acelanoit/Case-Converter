import React from "react";

function Button(props) {

    return (
        <button className="btn btn-outline-secondary convert-button" onClick={props.onClick} name={props.buttonText} >{props.buttonText}</button>
    );
}

export default Button;