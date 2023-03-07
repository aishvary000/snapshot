import classes from './HomePage.module.css';
import SearchBar from './searchBar';
import NotesList from './NotesList';
import AddNote from './AddNote';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
      
      navigate(`/edit/${id}`);
    }
    return(
    <div className={classes.container}>
      <AddNote addNote={notesChangeHandler}/>
      <SearchBar/>
      <NotesList notes={notes} removeNote={removeNoteHandler} editNote={editNoteHandler}/>
      </div>
    );
}