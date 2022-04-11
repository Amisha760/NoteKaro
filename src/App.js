import React from "react";
import Header from "./header";
import CreateNote from "./CreateNote"
import Note from "./Note";
import './App.css';
function App() {
  return (
    <div className="App">
     <Header/>
     <CreateNote/>
     <Note/>
    </div>
  );
}

export default App;
