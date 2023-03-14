import classes from './HomePage.module.css';
import SearchBar from './searchBar';
import NotesList from './NotesList';
import AddNote from './AddNote';
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import EditNote from './EditNotes';
import {useSelector,useDispatch} from "react-redux"
import AddTaskButton from './AddTaskButton';
export default function HomePage(){


    const addNoteVisibility = useSelector(state => state.ui.addDialogBox);

    // const[notes, setNotes] = useState(()=>{
    //   return JSON.parse(localStorage.getItem('notes')) || [];
    // });
    // console.log("home page",notes);
    // const[showEditDialog,setShowEditDialog] = useState(false);
    // const[editNote,setEditNote] = useState({});
    // const[showAddNoteDialog,setShowAddNoteDialog] = useState(false);
    // const[filteredNotes,setFilteredNotes] = useState(null);
    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('notes'));
    //   if (items) {
    //    setNotes(items);
    //   }
    // }, []);
    // useEffect(()=>{
    //   localStorage.setItem('notes', JSON.stringify(notes));
    // },[notes])

   
    // const navigate = useNavigate();
    // const searchBarFilter = (text) => {
    //   console.log(text);
    //   setTimeout(()=>{
    //     const tmpNote = notes.filter(note => {
    //       return note.title.includes(text);
    //     });
    //     setFilteredNotes(tmpNote);
    //   },1000);
      
    // }
    // const notesChangeHandler = (note) => {
     
    //   setNotes([...notes, note]);
    //   setShowAddNoteDialog(false);
    // }
    // const removeNoteHandler = (id) => {
    //   //console.log("Removing id :"+ id);
    //   const newNotes = notes.filter(note => note.key != id);
    //   setNotes(newNotes);
      
    // }
    // const saveEditNoteHandler = (editedNote) => {
    //   console.log(editedNote);
    //     notes.forEach((item,index) => {
          
    //       if(item.key === editedNote.key)
    //       {
           
    //         notes[index] = editedNote;
            
    //       }
    //     });
    //     // console.log(notes);
    //     localStorage.setItem('notes', JSON.stringify(notes));
    //     setShowEditDialog(false);
    // }
    // const showEditBoxHandler = (note) => {
    //   setEditNote(note);
    //   setShowEditDialog(!showEditDialog);
    // }
    // const addTaskButtonHandler = () => {
    //   setShowAddNoteDialog(!showAddNoteDialog);
    // }
    // const resetNotes = () => {
    //   setFilteredNotes(null);
      
    // }
    // const setAddNoteVisibility = (value) => {
    //   setShowAddNoteDialog(value);
    // }
    return(
    <div className={classes.container}>
      {!addNoteVisibility && <AddTaskButton>Add Task</AddTaskButton>}
      {addNoteVisibility && <AddNote/>}
      <SearchBar/>
      <NotesList />
      
      </div>
    );
}