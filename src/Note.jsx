import React from "react";
import logo from "./images/trash-bin.png";
function Note(props){
    return (
        <>
        <div className="Note">
           <div className="note_title">{props.title}</div>
       
           <p className="note_content">{props.content}</p>
      <button className="deletebtn"><img src={logo} alt="logo" height="25px" width="25px" color="white"></img></button>
        </div>
        </>
    );
}
export default Note;