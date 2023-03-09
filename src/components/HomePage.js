import classes from './HomePage.module.css';
import SearchBar from './searchBar';
import NotesList from './NotesList';
import AddNote from './AddNote';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const NOTES = [];
export default function HomePage(){
    const[notes,setNotes] = useState(NOTES);
    const navigate = useNavigate();

    const notesChangeHandler = (note) => {
     
      setNotes([...notes, note]);
    }
    const removeNoteHandler = (id) => {
      //console.log("Removing id :"+ id);
      const newNotes = notes.filter(note => note.key != id);
      setNotes(newNotes);
      
    }
    const editNoteHandler = (id) => {
      //get notes and pass it in handler
      const note = notes.filter(note => note.key === id);
      console.log("OK");
      navigate(`/edit/${id}`, {state: {note}});

      // <Navigate to = {`/edit/${id}`} state={{note}} replace={true}/>
    }
    return(
    <div className={classes.container}>
      <AddNote addNote={notesChangeHandler}/>
      <SearchBar/>
      <NotesList notes={notes} removeNote={removeNoteHandler} editNote={editNoteHandler}/>
      </div>
    );
}