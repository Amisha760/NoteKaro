import React, { useState } from "react";
import Header from "./header";
import CreateNote from "./CreateNote"
import Note from "./Note";
import './App.css';
function App() {  
  const[additem,setAdditem]=useState([]);
  const addNote=(note)=>{
    setAdditem((prev)=>{
       return [...prev,note];
    });
    // alert("from app.js")
    // console.log(note);
  };
  return (
 <>
     <Header/>
     <CreateNote passNote={addNote}/>
    {additem.map((val,index)=>{
         return( <Note
         key={index}
         id={index}
         title={val.title}
         content={val.content}
         />
         );
    })}
    </>
  );
}

export default App;
