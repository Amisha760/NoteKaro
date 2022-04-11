import React from "react";
import logo from "./images/trash-bin.png";
function Note(){
    return (
        <>
        <div className="Note">
           <h4>title</h4>
       
           <p1>content hereeeeeeee</p1>
      <button className="deletebtn"><img src={logo} alt="logo" height="25px" width="25px" color="white"></img></button>
        </div>
        </>
    );
}
export default Note;