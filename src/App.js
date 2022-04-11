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
  const onDelete=(id)=>{
     setAdditem((oldData)=>oldData.filter((currdata,index)=>{
       return index!==id;
     }))
  }
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
         deleteItem={onDelete}
         />
         );
    })}
    </>
  );
}

export default App;
