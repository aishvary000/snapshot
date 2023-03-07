import {useState} from 'react'
import classes from './searchBar.module.css'
const SearchBar = () => {

    const[searchBarText,setSearchBarText] = useState('');
    const inputChangeHandler = (event) =>{
        setSearchBarText(event.target.value);
    }
    return(
        <>
            <div className={classes.searchBar}>
            <input onChange={inputChangeHandler} type="text" placeholder="type to search..." value={searchBarText}>
                
            </input>
            </div>
        </>
    );

}
export default SearchBar;