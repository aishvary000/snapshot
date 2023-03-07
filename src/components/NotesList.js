import classes from './NotesList.module.css';
import Card from './Card';
const NotesList = (props) => {
    
    const removeNote = (id) => {
        props.removeNote(id);
    }
    const editNote = (id) => {
        props.editNote(id);
    }
    return(
        <div className={classes.card}>
        {
            props.notes.map(item => <Card note={item} key={item.key} removeItem={removeNote} editNote={editNote}/>)
        }
        </div>
    );

}
export default NotesList;