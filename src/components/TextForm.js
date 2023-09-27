import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Enter Text Here");


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <>
    <div className="container my-3">
    <h1>Use Here Text util</h1>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear All Text</button>
    </div>

    <div className="container">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} Words And {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes To Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
