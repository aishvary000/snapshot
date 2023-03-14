import classes from './EditNote.module.css';
import { Navigate, useLocation,useNavigate } from "react-router-dom";
import { useState,useEffect} from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import { noteActions } from '../store/note';

export default function EditNote()
{
    
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const date = location.state.note.date;
    const dateObj = new Date();
    dateObj.setDate(date.date);
    dateObj.setMonth(date.month);
    dateObj.setFullYear(date.year);
    const[editTitle,setEditTitleText] =  useState(location.state.note.title);
    const[editDate,setEditDate] = useState(dateObj);
    const[editDescription,setEditDescription] = useState(location.state.note.description);
    const editDateChangeHandler = (event) => {
        setEditDate(event);
    }
    const editTitleChangeHandler = (event) => {
        setEditTitleText(event.target.value);
    }
    const editDescriptionChangeHandler = (event) => {
        setEditDescription(event.target.value);
    }
    const formSubmitHandler = (e) => {
        // props.editNote(editDate,editTitle,notes);
        e.preventDefault();
        dispatch(noteActions.updateNote({
            key:location.state.note.key,
            title:editTitle,
            date:{
                date:editDate.getDate(),
                month:editDate.getMonth(),
                year:editDate.getFullYear()
            },
            description:editDescription
        }));
        // setEditDate(new Date());
        // setEditDescription('');
        // setEditTitleText('');
        navigate('/');
       

    }
    
    // console.log(title+":"+date);
    return(
        <>
            <div className={classes['edit-note-form']}>
                <form onSubmit={formSubmitHandler}>
                    <div className={classes['edit-note-form--title']}>
                        <p className={classes['edit-note-form__paragraph']}>Title</p>
                        <input className={classes['edit-note-form__input']} type="text" defaultValue={editTitle}  onChange={editTitleChangeHandler}/>

                    </div>
                    <div className={classes['edit-note-form--title']}>
                        <p className={classes['edit-note-form__paragraph']}>Description</p>
                        <input className={classes['edit-note-form__input']} type="text" defaultValue={editDescription}  onChange={editDescriptionChangeHandler}/>

                    </div>
                    <div className={classes['edit-note-form--title']}>
                    <p className={classes['edit-note-form__paragraph']}>Date</p>
                    <DatePicker selected={editDate} className={classes['edit-note-form__input']} value={editDate} onChange={editDateChangeHandler} />
                    </div>
                    <button className={classes.btn} type="submit">Make Changes</button>
                    
            
                </form>

            </div>

        </>
    )

}