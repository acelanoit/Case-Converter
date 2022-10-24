import React, { useState } from "react";
import Button from "./Button";

function TextArea() {

    const [text, setText] = useState("");
    let newText;

    function handleChange(e) {
        const newText = e.target.value;
        setText(newText);
    }

    function handleClick(e) {
        switch (e.target.name) {
            case ("Sentence case"):
                newText = text.toLowerCase();
                setText(newText.charAt(0).toUpperCase() + newText.slice(1));
                break;
            case ("lower case"):
                setText(text.toLowerCase());
                break;
            case ("UPPER CASE"):
                setText(text.toUpperCase());
                break;
            case ("Capitalized Case"):
                newText = text.toLowerCase();
                const words = newText.split(" ");

                // Capitalize the 1st letter of each word inside the words array
                words.forEach((word, index) => {
                    words[index] = (word[0].toUpperCase() + word.slice(1));
                });

                // Return the array as a string
                setText(words.join(" "));
                break;
            default:
                console.log("The button does not exist.");
        }
    }

    return (
        <div className="text-area">
            <textarea cols={100} rows={20} placeholder="Type or paste your text here..." value={text} onChange={handleChange} ></textarea>
            <Button buttonText="Sentence case" onClick={handleClick} />
            <Button buttonText="lower case" onClick={handleClick} />
            <Button buttonText="UPPER CASE" onClick={handleClick} />
            <Button buttonText="Capitalized Case" onClick={handleClick} />
        </div>
    );
}

export default TextArea;