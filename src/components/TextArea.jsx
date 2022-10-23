import React from "react";
import Button from "./Button";

function TextArea() {
    return (
        <div className="text-area">
        <textarea cols={100} rows={20} placeholder="Type or paste your text here..." ></textarea>
        <Button buttonText="Sentence case" />
            <Button buttonText="lower case" />
            <Button buttonText="UPPER CASE" />
            <Button buttonText="Capitalized Case" />
        </div>
    );
}

export default TextArea;