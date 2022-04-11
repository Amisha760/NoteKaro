import React from "react";
import logo from "./images/sticky-notes.png"
function header() {
  return (
    <div className="header" >
    <img src={logo} alt="logo" width="70" height="50" />
    <p className="heading">NoteKaro</p>
    </div>
  );
}

export default header;
