import classes from './AddNote.module.css';
import DatePicker from "react-datepicker";
import Button from './Button';
import {useDispatch} from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";
import {useState} from 'react'
import { noteActions } from '../store/note';
import { uIActions } from '../store/UI';
const AddNote = () => {
    const[title,setTitle] = useState('');
    const[date,setDate] = useState(new Date());
    const[description,setDescription] = useState('');
    const dispatch = useDispatch();
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log(event);
        setDate(event);
    }
    const addNoteHandler = (e) => {
        e.preventDefault();
        var id = "id" + Math.random().toString(16).slice(2);
        const completeDate = {
            date:date.getDate(),
            month:date.getMonth(),
            year:date.getFullYear()
        }
        const note = {
            key:id,
            title,
            date:completeDate,
            description
        }
        dispatch(noteActions.addNote(note));
        
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const hideAddNoteHandler = (e) => {
        e.preventDefault();
        dispatch(uIActions.setVisibiliy(false));
        
    }
    return(
        <div>
            <div className={classes.input}>
                <input type="text" value={title} onChange={titleChangeHandler} placeholder="enter title...."></input>
            </div>
            <div className={classes.input}>
                
            
            <DatePicker selected={date} onChange={dateChangeHandler}
            />
            </div>
            <div className={classes.input}>
                <input type="text" value={description} onChange={descriptionChangeHandler} placeholder="enter Description..."></input>
            </div>
            <div className={classes.footer}>
                <Button onSubmit={addNoteHandler} >Submit</Button>
                <Button onSubmit={hideAddNoteHandler}>Cancel</Button>
            </div>
            
        </div>
    )
}
export default AddNote;