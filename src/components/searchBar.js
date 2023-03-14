import {useState} from 'react';
import classes from './searchBar.module.css';
import { noteActions } from '../store/note';
import {useDispatch, useSelector} from 'react-redux'
const SearchBar = () => {

    const[searchBarText,setSearchBarText] = useState('');
    const dispatch = useDispatch();
    const notes = useSelector(state => state.note.notes);
    const inputChangeHandler = (event) =>{
        setSearchBarText(event.target.value);
        const tmpNote = notes.filter(note => {
            return note.title.includes(searchBarText);
          });
          dispatch(noteActions.setFilteredNotes(tmpNote));
        
        
        
    }
    const resetNotes = () => {
        dispatch(noteActions.setFilteredNotes(null));

    }
    return(
        <>
            <div className={classes.searchBar}>
            <input onChange={inputChangeHandler} type="text" placeholder="type to search..." value={searchBarText} onBlur={resetNotes}>
                
            </input>
            </div>
        </>
    );

}
export default SearchBar;