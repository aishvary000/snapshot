import classes from './NotesList.module.css';
import Card from './Card';
import { useSelector } from 'react-redux';
const NotesList = () => {
    
    // const removeNote = (id) => {
    //     props.removeNote(id);
    // }
    // const editNote = (id) => {
    //     props.editNote(id);
    // }
    // //setting notes to display,whether filtered note or common note
    // let notesToDisplay = props.notes;
    // if(props.filteredNotes)
    // {
    //     notesToDisplay = props.filteredNotes;
    // }
    const notes = useSelector(state => state.note.notes);
    const filteredNotes = useSelector(state => state.note.filteredNotes);
    const notesToDisplay = filteredNotes || notes;
    return(
        <div className={classes.card}>
        {
            notesToDisplay.map(item => <Card note={item} key={item.key}/>)
        }
        </div>
    );

}
export default NotesList;