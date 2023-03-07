import classes from './Card.module.css';
import deleteIcon from '../Assets/remove.png';
import editIcon from '../Assets/edit.png';
const Card = (props) => {
    const removeItemHandler = () => {
        //console.log("removing item : "+props.note.key);
        props.removeItem(props.note.key);
    }
    const editItemHandler = () => {
            props.editNote(props.note.key);
    }
    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <p>{props.note.title}</p>
                <img src={editIcon} onClick={editItemHandler}></img>
            </div>
            
            <div className={classes.footer}>
                <p>Testing</p>
                <img src={deleteIcon} onClick={removeItemHandler}></img>



            </div>
           
        </div>

    );
}
export default Card;