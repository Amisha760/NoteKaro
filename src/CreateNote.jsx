import React, { useState } from "react";
// import Note from "./Note";

function CreateNote(props){
    const [note,setNote]= useState({
    title:"",
    content:"",
    });
    const InputNote=(event)=>{
  const{name,value}=event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
             [name]:value
        }
        });
        // console.log(note);
    }
    const addNote=(event)=>{
    // alert("i m clickeed broo");
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    })
    event.preventDefault();
    }

    return(
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title"  name="title" value={note.title}  onChange={InputNote}  autoComplete="off"></input>
                <textarea rows="10" cols="50" placeholder="Write a Note...."  name="content" value={note.content} onChange={InputNote}></textarea>
                <button className="btn" onClick={addNote}>+</button>
            </form>
             

        </div>
    );
}
export default CreateNote;