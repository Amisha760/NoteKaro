import React from "react";

function CreateNote(){
    return(
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title" autoComplete="off"></input>
                <textarea rows="10" cols="50" placeholder="Write a Note...."></textarea>
                <button>+</button>
            </form>
             

        </div>
    );
}
export default CreateNote;