import classes from './AddNote.module.css';
import DatePicker from "react-datepicker";
import Button from './Button';
import "react-datepicker/dist/react-datepicker.css";
import {useState} from 'react'
const AddNote = (props) => {
    const[title,setTitle] = useState('');
    const[date,setDate] = useState(new Date());
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log(event);
        setDate(event);
    }
    const addNoteHandler = () => {
        var id = "id" + Math.random().toString(16).slice(2);
        const note = {
            key:id,
            title,
            date
        }
        props.addNote(note);
    }
    return(
        <div>
            <div className={classes.input}>
                <input type="text" value={title} onChange={titleChangeHandler} placeholder="enter title...."></input>
            </div>
            
            <DatePicker selected={date} onChange={dateChangeHandler}
            />
            <Button onSubmit={addNoteHandler}>Submit</Button>
        </div>
    )
}
export default AddNote;